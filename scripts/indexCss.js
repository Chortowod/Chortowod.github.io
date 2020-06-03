// var checkBox = document.getElementById('switcherT');

// checkBox.addEventListener('change', function () {
//     if(this.checked) {
//         document.getElementsByTagName('img')[0].src = "./img/header-w.jpg";
//         document.getElementsByTagName('img')[1].src = "./img/footer-w.jpg";
//         document.body.style.backgroundColor = "#ffffff";
//         document.body.style.color = "#464447";
//         document.getElementsByTagName('header')[0].style.backgroundColor = "#ffffff";
//         document.getElementsByTagName('a').style.color = "#ffffff";
//     } else {
//         document.getElementsByTagName('img')[0].src = "./img/header.jpg";
//         document.getElementsByTagName('img')[1].src = "./img/footer.jpg";
//     }
// });


$('#switcherT').on('change', function () {
    if (this.checked) {
        $('#styles-dark').prop('disabled', true);
        $('#styles-white').prop('disabled', false);
    }
    else {
        $('#styles-dark').prop('disabled', false);
        $('#styles-white').prop('disabled', true);
    }
});