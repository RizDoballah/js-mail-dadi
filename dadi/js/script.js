alert('Benvenuti al gioco!');
var buttonLancio = document.getElementById('lancio');
buttonLancio.addEventListener('click',
function() {
  var dado1 = document.getElementById('dado1');
  var dado2 = document.getElementById('dado2');
  var status = document.getElementById('status');
  var num1 = Math.floor(Math.random() * 6) + 1;
  console.log(num1);
  var num2 = Math.floor(Math.random() * 6) + 1;
  console.log(num2);
  dado1.innerHTML = num1;
  dado2.innerHTML = num2;
  status.innerHTML = 'hai generato ' + num1 + ' , ' + num2 + '.';
  if (num1>num2) {
  status.innerHTML += 'HAI VINTO!';
  }
  else if (num1<num2) {
  status.innerHTML += ' HAI PERSO!';
  }
   else {
   status.innerHTML += ' PUOI RILANCIARE!';
  }
}
);
