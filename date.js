var d = new Date("2017-03-16 17:46:53.677"); 
console.log( d.toLocaleString() ); //DD-MM-YYYY HH:MM:SS

const formattedDate = d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');
  console.log(formattedDate); //DD-MON-YYYY 

  var hr=d.getHours();
  var min = d.getMinutes();
  min=min/60;
  var sec = d.getSeconds();
  sec=sec/(60*60);
  var hrs=hr+min+sec;
  console.log(hrs+"hrs");    //total hours

  
  var mins=hrs*60;  //minutes
  console.log(mins+"mins");

  var milliseconds = hrs*3600000; //miliseconds
  console.log(milliseconds+"ms");

  var utc=d.toUTCString(); //utc format
  console.log(utc);