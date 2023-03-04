/*alert('Goodbye Innopolis!');*/

let loginButton = document.querySelector('.login-button');

let loginPopup = document.querySelector('.login-popup');
//*console.log(loginButton);
//*console.log(loginPopup)

loginButton.addEventListener('click', showPopup)

function showPopup(el){

  loginPopup.classList.toggle('show-popup');

}