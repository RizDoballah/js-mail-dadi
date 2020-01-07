alert('ciao!');
var listaEmail = ['ghizounette@hotmail.com', 'ghyzou10@hotmail.com', 'ghyzounette10@gmail.com'];
var emailUtente = prompt('inserisci la tua mail');
console.log(emailUtente);
var presente = false;
for (var i = 0; i<listaEmail.length; i++) {
  var email = listaEmail[i];
  if (emailUtente==email) {
    presente = true;
  }
}
if (presente==true) {
  console.log('email presente');
}
else {
  console.log('email non presente');
}
