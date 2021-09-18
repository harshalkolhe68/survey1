

$(function () {

  $(document).on({
    mouseover: function (event) {
      $(this).find('.far').addClass('star-over');
      $(this).prevAll().find('.far').addClass('star-over');
    },
    mouseleave: function (event) {
      $(this).find('.far').removeClass('star-over');
      $(this).prevAll().find('.far').removeClass('star-over');
    }
  }, '.rate');


  $(document).on('click', '.rate', function () {
    if (!$(this).find('.star').hasClass('rate-active')) {
      $(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
      $(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
      $(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
    } else {
      console.log('has');
    }
  });

});

function checkvalue(val) {
  if (val == "others") {
    document.getElementById('color').style.display = 'block';
  }
  else {
      document.getElementById('color').style.display = 'none';
  }
}
function checkvalue1(val) {
  if (val == "others1") {
    document.getElementById('color1').style.display = 'block';
  }
  else {
    document.getElementById('color1').style.display = 'none';
  }
}
function checkvalue2(val) {
  if (val == "others2") {
    document.getElementById('color2').style.display = 'block';
  }
  else {
    document.getElementById('color2').style.display = 'none';
  }
}
function checkvalue3(val) {
  if (val == "others3") {
    document.getElementById('color3').style.display = 'block';
  }
  else {
    document.getElementById('color3').style.display = 'none';
  }
}
function checkvalue4(val) {
  if (val == "others4") {
    document.getElementById('color4').style.display = 'block';
  }
  else {
    document.getElementById('color4').style.display = 'none';
  }
}
function checkvalue5(val) {
  if (val == "others5") {
    document.getElementById('color5').style.display = 'block';
  }
  else {
    document.getElementById('color5').style.display = 'none';
  }
}
function checkvalue6(val) {
  if (val == "others6") {
    document.getElementById('color6').style.display = 'block';
  }
  else {
    document.getElementById('color6').style.display = 'none';
  }
}
function checkvalue7(val) {
  if (val == "others7") {
    document.getElementById('color7').style.display = 'block';
  }
  else {
    document.getElementById('color7').style.display = 'none';
  }
}
function checkvalue8(val) {
  if (val == "others8") {
    document.getElementById('color8').style.display = 'block';
  }
  else {
    document.getElementById('color8').style.display = 'none';
  }
}
function checkvalue9(val) {
  if (val == "others9") {
    document.getElementById('color9').style.display = 'block';
  }
  else {
    document.getElementById('color9').style.display = 'none';
  }
}
function checkvalue10(val) {
  if (val == "others10") {
    document.getElementById('color10').style.display = 'block';
  }
  else {
    document.getElementById('color10').style.display = 'none';
  }
}
function checkvalue11(val) {
  if (val == "others11") {
    document.getElementById('color11').style.display = 'block';
  }
  else {
    document.getElementById('color11').style.display = 'none';
  }
}
function checkvalue12() {
  if (document.getElementById('mycheck').checked) {
    document.getElementById('color12').style.display = 'block';
  }
  else {
    document.getElementById('color12').style.display = 'none';
  }
}