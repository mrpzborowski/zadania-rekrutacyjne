const info = document.querySelector('.information');
const contact = document.querySelector('.contact');
const logo = document.querySelector('.logo');
const navigation = document.querySelector('.navigation');
const text = document.querySelector('.text');
const txt = document.querySelector('.txt-rotate');
const exit = document.querySelector('.exit');
const newsletter = document.getElementById('newsletter');

//Sekcja header image
$(window).scroll(function() {
    var scrolPosition = $(this).scrollTop();
    $('header').css({
       'background-size' : 100 + scrolPosition + '%',
    })
    if($(window).width() < 960){
        $('header').css({
            'background-size' : 'auto',
         })
    }
    
  })
  


//Koniec sekcji header image

//Sekcja newsletter

info.addEventListener('click',function(){
contact.style.display = 'block';
function stop(){
    newsletter.style.display = 'block';
}
setTimeout(stop, 1000);
logo.style.display = 'none';
navigation.style.display = 'none';
text.style.display = 'none';
txt.style.display = 'none';
})



exit.addEventListener('click',function(){
contact.style.display = 'none';
newsletter.style.display = "none";
logo.style.display = 'block';
navigation.style.display = 'inline-block';
text.style.display = 'block';
txt.style.display = 'block';
})


$('.message:not(.message-end)').click(function (event) {
    $('.notify-form').addClass('active')
    $('.field input').focus()
})

$('.field input').keyup(function(event) {

    if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(event.target.value)) {
        $('.btn-send').addClass('active')				
    }
    else {
        $('.btn-send').removeClass('active')
    }
})

$('.btn-send').click(function (event) {
    $('.notify-form').removeClass('active')
    $('.message-end').addClass('active')

    setTimeout( function (event) {
        $('.message-end').removeClass('active')
        $('.btn-send').removeClass('active')
        $('.field input').val("")
    }, 2000)
})

//Koniec sekcji newsletter
 
//Sekcja wjeżdżający element
$(document).on('scroll',function(){
const windowHeight = $(window).height()
const scrollValue = $(this).scrollTop()
console.log(scrollValue)
const $txtOne = $('.muscle');
const $txtTwo = $('.weight');
const txtFromTop = $txtOne.offset().top
const txtTwoFromTop = $txtTwo.offset().top
const txtOneHeight = $txtOne.outerHeight()
const txtTwoHeight = $txtTwo.outerHeight()
const $card = $('.card-container');
const cardFromTop = $card.offset().top
const cardHeight = $card.outerHeight()
  
if(scrollValue > txtFromTop + txtOneHeight - windowHeight){
$txtOne.addClass('active');
}
if(scrollValue > txtTwoFromTop + txtTwoHeight - windowHeight){
$txtTwo.addClass('active');
}
if(scrollValue > cardFromTop + cardHeight - windowHeight){
$card.addClass('opactive');
}
})

//Koniec sekcji wjeżdżający element

//Sekcja typing
var TxtRotate = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 500) || 1000;
this.txt = '';
this.tick();
this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];
if (this.isDeleting) {
this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
this.txt = fullTxt.substring(0, this.txt.length + 1);
}
this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
var that = this;
var delta = 150 - Math.random() * 100;
if (this.isDeleting) { delta /= 2; }
if (!this.isDeleting && this.txt === fullTxt) {
delta = this.period;
this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
this.isDeleting = false;
this.loopNum++;
delta = 1000;
}
setTimeout(function() {
that.tick();
}, delta);
};
  
window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
var toRotate = elements[i].getAttribute('data-rotate');
var period = elements[i].getAttribute('data-period');
if (toRotate) {
new TxtRotate(elements[i], JSON.parse(toRotate), period);
}
}
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #F26921 }";
document.body.appendChild(css);
};
//Koniec sekcji typing



