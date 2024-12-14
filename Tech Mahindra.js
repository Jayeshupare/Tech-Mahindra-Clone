const btnScrolltotop = document.querySelector('#btnScrolltotop');

btnScrolltotop.addEventListener('click', function () {
    //window.scrollTo(0,0);

    window.scrollTo({
        top:0,
        bottom:0,
        behavior:'smooth',
    })
})