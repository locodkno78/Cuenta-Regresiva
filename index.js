//Seteamos el dia y la hora del evento 
var eventDate = new Date('2024-03-07T18:29:00').getTime();

//Actualizamos la cuenta regresiva cada segundo
var countdown = setInterval(function(){
  //Obtener la fecha y hora actuales
  var now = new Date().getTime();

  //Calcular el tiempo que queda hasta el evento.
  var timeRemainding = eventDate - now;

  //Calcular los dias, horas, minutos,  segundos
  var days = Math.floor(timeRemainding / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemainding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemainding % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemainding % (1000 * 60 * 60) / 1000));

  //Mostrar la cuenta regresiva
  document.getElementById('countdown').innerHTML ='Faltan: ' + days + ' Días ' + hours + ' Horas ' + minutes + ' Minutos ' + seconds + ' Segundos';

  //Si la fecha del evento se pasó, entonces limpio el  contador y le informo que el evento ya ocurrió
  if(timeRemainding < 0){
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'El evento ha ocurrido!!!!';
  }
}, 1000);