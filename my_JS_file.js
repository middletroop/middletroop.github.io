function printCurrentDate() {
    var currentDate = new Date();
    var localDate = currentDate.toLocaleString(); 
    var strToday = localDate.substring(0,40) ; 
    document.write("<blockquote><h2>Today is " + strToday + "</h2></blockquote>")
}

function randomImg1() {
      myImages1 = new Array();
      myImages1[0] = "http://i.imgur.com/MR0xNdD.gif";
      myImages1[1] = "http://i.imgur.com/5RG079u.gif";
      myImages1[2] = "http://i.imgur.com/KE90gLJ.gif";
      myImages1[3] = "http://i.imgur.com/bJ9ekFp.gif";
      myImages1[4] = "http://i.imgur.com/uMNAEeX.gif";
      myImages1[5] = "http://i.imgur.com/xuHsMyB.gif";
      myImages1[6] = "http://i.imgur.com/lwFrePA.gif";
      myImages1[7] = "http://i.imgur.com/knXC6OA.gif";
      myImages1[8] = "http://i.imgur.com/F0RLBzT.gif";
      myImages1[9] = "http://i.imgur.com/A2dZUUJ.gif";
      myImages1[10] = "http://i.imgur.com/a8ujvwf.gif";
      myImages1[11] = "http://i.imgur.com/cBvBZnT.gif";
      myImages1[12] = "http://i.imgur.com/N5uwdLx.gif";
      myImages1[13] = "http://i.imgur.com/5OYEnbC.gif";
      myImages1[14] = "http://i.imgur.com/04Z5qCa.gif";
      myImages1[15] = "http://i.imgur.com/rPBq3hn.gif";
      myImages1[16] = "http://i.imgur.com/FDN6a4I.gif";
      myImages1[17] = "http://i.imgur.com/c6DAu1e.gif";
      myImages1[18] = "http://i.imgur.com/q4VlHLp.gif";
      myImages1[19] = "http://i.imgur.com/i2O5rUx.gif";
      myImages1[20] = "http://i.imgur.com/Fks7NoL.gif";
      myImages1[21] = "http://i.imgur.com/htcT8Zf.gif";
      myImages1[22] = "http://i.imgur.com/KmEAXVz.gif";
      myImages1[23] = "http://i.imgur.com/5H1Cbf8.gif";
      myImages1[24] = "http://i.imgur.com/OMYGvO6.gif";
      myImages1[25] = "http://i.imgur.com/walCjG2.gif";
      myImages1[26] = "http://i.imgur.com/OeMTzrA.gif";
      myImages1[27] = "http://i.imgur.com/TRgXHzU.gif";
      myImages1[28] = "http://i.imgur.com/M6Wwr8q.gif";
      myImages1[29] = "http://i.imgur.com/gxdfJ9H.gif";
      myImages1[30] = "http://i.imgur.com/0MyPNFy.gif";
      myImages1[31] = "http://i.imgur.com/DOJGhID.gif";
      myImages1[32] = "http://i.imgur.com/pu9qWPI.gif";
      myImages1[33] = "http://i.imgur.com/kj5VSYF.gif";

      var rnd = Math.floor( Math.random() * myImages1.length ); //incorporated other solution
      document.getElementById("image").innerHTML = "<img src='" + myImages1[rnd] + "' alt='image'></img>";
    }

function count() {
     
    var startTime = document.getElementById('hms').innerHTML;
    var pieces = startTime.split(":");
    var time = new Date();    time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.write("")
    document.getElementById("hms").innerHTML=newtime;
    setTimeout(count, 1000);
}

$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".flip2").click(function(){
        $(".panel2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".flip3").click(function(){
        $(".panel3").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".flip4").click(function(){
        $(".panel4").slideToggle("slow");
    });
});

function revWords(str){
   words = str.split(" ");
   j = words.length - 1;
   backWords = new Array(); 
   for (i=0 ; i < words.length ; i++){
      backWords[j] = words[i];
      j--
   }         
   document.theForm.results.value = backWords.join(" ");
}

function tipCalculate (slider, bill){
  var tip = document.getElementById('tipamount');
  var slideval = document.getElementById('slideval');
  var bill = document.getElementById(bill).value;
  var prcnt = slider * .01;
  var totalBill = document.getElementById('totalBill');
  var preBill = document.getElementById('preBill');
  var tax = document.getElementById('tax');
  
  
  if (bill == null || bill == '') {
    tip.innerHTML = 'Please enter an amount';
    return false;
  }
  if(isNaN(bill)) {
    tip.innerHTML = 'Please enter a number';
    return false;
  }
  if(bill >= 0){
    tip.innerHTML = '$' + (bill * prcnt) .toFixed(2);
    slideval.innerHTML = slider + '%';
    totalBill.innerHTML = '$' + (+bill + +(bill*prcnt)) .toFixed(2);
    preBill.innerHTML = '$' + (+bill).toFixed(2);;
    tax.innerHTML = '$' + (bill * .08) .toFixed(2);
  }
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))


jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
