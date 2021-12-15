const button = document.getElementById('myButton');
const logo = document.getElementById('headerLogo');
const modal = document.getElementById('myModal');
const close = document.getElementById('myClose');

button.onclick = function() {        // onclick при нажатии что-то происходит
    modal.style.display = 'block';
}

close.onclick = function() {     // onmouseenter когда наводишь мышью на елемент что-то происходит
    modal.style.display = 'none';
}

/*logo.onmouseenter = function() {     // onmouseenter когда наводишь мышью на елемент что-то происходит
    logo.style.fontSize = '60px';
}*/

/*logo.onmouseleave = function() {     // onmouseleave когда убираешь мышь с елемента то что-то происходит
    logo.style.fontSize = '';
}*/


