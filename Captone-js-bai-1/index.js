var btnMenu = document.querySelector('.btn-menu');
btnMenu.onclick = function () {
    //dom tới thẻ nav-bar
    var navBar = document.querySelector('.nav-bar');
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
}