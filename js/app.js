
var _this = this;
var header = document.getElementById('header');
var headerLink = document.getElementsByClassName('headerLink');
var chineName = document.getElementById('chineName');
var englishName = document.getElementById('englishName');
var toBottom = document.getElementById('toBottom');
var html = document.getElementById('html');
var htmlNum = 0;
var css = document.getElementById('css');
var cssNum = 0;
var js = document.getElementById('js');
var jsNum = 0;
var java = document.getElementById('java');
var javaNum = 0;
var python = document.getElementById('python');
var pythonNum = 0;
var net = document.getElementById('net');
var netNum = 0;
var back = document.getElementById('back');
var photoModal = document.getElementById('photoModal');
var modalPhoto = document.getElementById('modalPhoto');
var photo = document.getElementsByClassName('photo');
var closeModal = document.getElementById('closeModal');
var h_home = document.getElementById('h_home');
var h_about = document.getElementById('h_about');
var h_skills = document.getElementById('h_skills');
var h_edu = document.getElementById('h_edu');
var h_life = document.getElementById('h_life');
var about = document.getElementById('about');
var skills = document.getElementById('skills');
var education = document.getElementById('education');
var life = document.getElementById('life');
var toTop = document.getElementById('toTop');
var bar = document.getElementsByClassName('bar');
h_home.classList.add('focus');
window.addEventListener("scroll", function () {
  if (_this.scrollY > 0) {
    header.classList.add('active');
    for (var i = 0; i < headerLink.length; i++) {
      headerLink[i].classList.add('active');
    }
  } else {
    header.classList.remove('active');
    for (var _i = 0; _i < headerLink.length; _i++) {
      headerLink[_i].classList.remove('active');
    }
  }
  if (_this.scrollY >= 300) {
    toTop.classList.add('open');
  } else {
    toTop.classList.remove('open');
  }
  if (_this.scrollY >= 300) {
    about.classList.add('in');
  }
  if (_this.scrollY >= 1300) {
    skills.classList.add('in');
    for (var _i2 = 0; _i2 < bar.length; _i2++) {
      bar[_i2].style.display = "block";
    }
  }
  if (_this.scrollY >= 1900) {
    education.classList.add('in');
  }
  if (_this.scrollY >= 2600) {
    life.classList.add('in');
  }
  if (_this.scrollY >= 0 && _this.scrollY < 500) {
    clearBorderFn();
    h_home.classList.add('focus');
  }
  if (_this.scrollY >= 700 && _this.scrollY < 1300) {
    clearBorderFn();
    h_about.classList.add('focus');
  }
  if (_this.scrollY >= 1300 && _this.scrollY < 1900) {
    clearBorderFn();
    h_skills.classList.add('focus');
  }
  if (_this.scrollY >= 1900 && _this.scrollY < 2700) {
    clearBorderFn();
    h_edu.classList.add('focus');
  }
  if (_this.scrollY >= 2700) {
    clearBorderFn();
    h_life.classList.add('focus');
  }
});
function clearBorderFn() {
  h_home.classList.remove('focus');
  h_about.classList.remove('focus');
  h_skills.classList.remove('focus');
  h_edu.classList.remove('focus');
  h_life.classList.remove('focus');
}
h_home.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
h_about.addEventListener('click', function () {
  document.body.scrollTop = 700;
  document.documentElement.scrollTop = 700;
});
h_skills.addEventListener('click', function () {
  document.body.scrollTop = 1500;
  document.documentElement.scrollTop = 1500;
});
h_edu.addEventListener('click', function () {
  document.body.scrollTop = 2050;
  document.documentElement.scrollTop = 2050;
});
h_life.addEventListener('click', function () {
  document.body.scrollTop = 2900;
  document.documentElement.scrollTop = 2900;
});
toTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
var nameNum = 0;
setInterval(function () {
  nameNum++;
  if (nameNum % 2 == 0) {
    chineName.style.opacity = "1";
    englishName.style.opacity = "0";
  } else {
    chineName.style.opacity = "0";
    englishName.style.opacity = "1";
  }
}, 4000);
toBottom.addEventListener('click', function () {
  document.body.scrollTop = 700;
  document.documentElement.scrollTop = 700;
});
var htmlTimer = null;
htmlTimer = setInterval(function () {
  htmlNum++;
  html.innerHTML = htmlNum + "%";
  if (htmlNum == 80) {
    clearInterval(htmlTimer);
  }
}, 19);
var cssTimer = null;
cssTimer = setInterval(function () {
  cssNum++;
  css.innerHTML = cssNum + "%";
  if (cssNum == 70) {
    clearInterval(cssTimer);
  }
}, 21);
var jsTimer = null;
jsTimer = setInterval(function () {
  jsNum++;
  js.innerHTML = jsNum + "%";
  if (jsNum == 75) {
    clearInterval(jsTimer);
  }
}, 20);
var javaTimer = null;
javaTimer = setInterval(function () {
  javaNum++;
  java.innerHTML = javaNum + "%";
  if (javaNum == 20) {
    clearInterval(javaTimer);
  }
}, 75);
var pythonTimer = null;
pythonTimer = setInterval(function () {
  pythonNum++;
  python.innerHTML = pythonNum + "%";
  if (pythonNum == 30) {
    clearInterval(pythonTimer);
  }
}, 50);
var netTimer = null;
netTimer = setInterval(function () {
  netNum++;
  net.innerHTML = netNum + "%";
  if (netNum == 10) {
    clearInterval(netTimer);
  }
}, 150);
for (var i = 0; i < photo.length; i++) {
  photo[i].addEventListener('click', openModalFn);
}
function openModalFn() {
  photoModal.style.display = "flex";
  modalPhoto.src = this.getElementsByClassName('lifePhoto')[0].src;
}
closeModal.addEventListener('click', function () {
  photoModal.style.display = "none";
  modalPhoto.src = "";
});
back.addEventListener('click', function () {
  photoModal.style.display = "none";
  modalPhoto.src = "";
});