var bb855= document.getElementsByClassName('sidebar-nav')[0];
var html = "<li><a class='btn-menu'href='https://klikkomeng.cc/prediksi'><i class='fa fa-sort-numeric-asc'></i> Prediksi Togel</a></li>";
bb855.insertAdjacentHTML('beforeend',html);

var bb855= document.getElementsByClassName('sidebar-nav')[0];
var html = "<li><a class='btn-menu'href='https://klikkomeng.cc/rtp'><i class='fa fa-sort-numeric-asc'></i> Live RTP Slot</a></li>";
bb855.insertAdjacentHTML('beforeend',html);

window.onload = function() {
    const promoLink = document.querySelector('a[href="/promotion"]');

    if (promoLink) {
        const hotImage = document.createElement('img');
        hotImage.classList.add('hot-label');
        hotImage.src = 'https://image-muka-bopeng.b-cdn.net/komeng/hotwheels.png';
        hotImage.alt = 'HOT';

        promoLink.appendChild(hotImage);

        const style = document.createElement('style');
        style.innerHTML = `
            .hot-label {
width: 55px;
    height: auto;
    animation: blink 1s infinite;
    margin-left: 0px;
    position: absolute;
    margin-top: -5px;
            }

            @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
};

var bb855= document.getElementsByClassName('sidebar-nav')[0];
var html = "<li><a class='btn-menu'href='https://klikkomeng.cc/livechat'><i class='fa fa-sort-numeric-asc'></i> Keluhan Member</a></li>";
bb855.insertAdjacentHTML('beforeend',html);

var tombolside = '<a href="https://klikkomeng.cc/buktijp"><img class="btn-img" src="https://imagme.com/images/2025/02/21/photo_2025-02-21_01-32-29.jpeg" align="center"></a></div>';
bb855.insertAdjacentHTML('afterend',tombolside,);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    $(
      '<center><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="KOMENGTOTO" width="100%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi08Ux-8IE8YoLMS4JJNuPG9pO9W0CaEUOzQYfJnJQTY7NZXQypOoXK-yztgpczS_oMMJr7dpLy6IcL48O1flqsc4zJl3AzBxd5KtHkpEjLTafl7cSb0p9PHhahmYvZnOX0Ag44U_FUgBPitntZIXSE3D46cHTG5XUze-yVouE_T_Lg9By6ZYZnbfetgiI/s350/togel.webp" alt="KOMENGTOTO"></a></div><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="KOMENGTOTO" width="100%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd47mvPqpJuvmCNIrT9U-uoAQXg5GWd-ppYmPWNYeqNYzuXlJksmqkQIKLPE_oRCE4J-ZSQUGaVTgCzInC26XYAbkUH6p_MKWRt48NnMP9Xk0gze1Gcmn01VW0KIJFVsZ00tn5NPlVHpgqy4aKj42rREhkiuEUMawJdXcATq_u8vxjcQnUOFlULjOX0Tg/s350/casino.webp" alt="KOMENGTOTO"></a></div><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="KOMENGTOTO" width="100%" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicF9gru4CFBAr0vgYE3V-Wa6sn1wR5F0pTv4mAPqaENSZY1IJAVxkKLELoKF1wVKPxriBS0SqB5Iasf2gx1mfpZdhw0yCAdjkcRCs1wjxHRrGzPOOh03BPYjgtyDJveTRFnkHMIrcLgehwIbrDQkIMx9n_nH3_-9QsAxT7lRe5MRn3OYDQbWVmSXBCtrU/s350/slot.webp" alt="KOMENGTOTO"></a></div></center>'
    ).insertAfter("#slider");
  },

  false
);

  var colors = new Array(
    [255, 235, 0], [17, 18, 17], [255, 235, 0], [173, 128, 3], [255, 145, 0], [17, 18, 17]
  );

  var step = 0;
  var colorIndices = [0, 1, 2, 3];
  var gradientSpeed = 0.005;

  function updateGradient() {
    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('.pool-name').css({
      background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
      background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });
    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }

    $('.btn').css({
      background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
      background: "-moz-linear-gradient(right, " + color1 + " 0%, " + color2 + " 100%)"
    });
    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }

    const pages = ['m/tm_game', 'm/game'];
    pages.forEach(function(page) {
      if (window.location.href.includes(page)) {
        $('#kirimkan').css({
          background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
          background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });
        step += gradientSpeed;
        if (step >= 1) {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];
          colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        }
      }
    })
  }

  setInterval(updateGradient, 10);

    document.addEventListener("DOMContentLoaded", function () {
        const slideLeft = document.getElementById("slide-left1");
        const toggleLeft = document.getElementById("toggle-left1");

        function toggleSlide() {
            if (slideLeft.style.left === "0px") {
                slideLeft.style.left = "-180px";
            } else {
                slideLeft.style.left = "0px";
            }
        }

        toggleLeft.addEventListener("click", toggleSlide);
    });