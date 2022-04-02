var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('password_repeat').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Les mots de passe sont identiques';
      mdp=true;
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Les mots de passe sont différents';
      mdp=false;
    }
  }




let span = document.getElementById("frame");
let bouton = document.getElementById('but');

bouton.addEventListener('click',function (){
  span.classList.add('hide');
});