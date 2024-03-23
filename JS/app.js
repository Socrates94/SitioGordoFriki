
bars = document.querySelector(".bars");
bars.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

window.onload = function(){
    // alert('Homla');
    $('#spin').fadeOut();
    $('body').removeClass('hidden');
}

alert('homla');

for (let i = 0; i < 10; i++) {
    console.log(i);
}