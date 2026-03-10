let audio = document.getElementById('audio')
let bgs = document.getElementById('BackGroundSund')
let button = document.getElementById('button')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let bst = document.getElementById('bsitting')
let sitting = document.getElementById('sitting')
let sname = document.getElementById('sitting-name')
let BC = document.getElementById('boxCheck')
let title = document.getElementById('title')
let name = document.getElementById('name')
let version = document.getElementById('version')
let slid = document.getElementById('slid')
let back = document.getElementById('back')
let exit = document.getElementById('exit')
let jump = document.getElementById('jump')
let Ninja = document.getElementById('ninja')
let MoveRight = document.getElementById('moveR')
let MoveLeft = document.getElementById('moveL')
let Trans = document.getElementById('translate')
let Shoot = document.getElementById('shoot')
let Story = document.getElementById('story')
let AboutUs = document.getElementById('About-Us')
let BookSound = document.getElementById('BookSound')

button.addEventListener('click', function () {
  document.body.style.backgroundImage = "url(bgp.gif)"
  document.body.style.transition = "1s ease-in-out"
  button.style.display = "none"
  button2.style.display = "none"
  button3.style.display = "none"
  button2.style.height = "0"
  button2.style.width = "0"
  title.style.display = "none"
  name.style.display = "none"
  version.style.display = "none"
  back.style.display = "block"
  jump.style.display = "block"
  Ninja.style.display = "block"
  MoveLeft.style.display = "block"
  MoveRight.style.display = "block"
  Shoot.style.display = "block"
  jump.style.animation = "MoveNinjaControl 0.5s linear forwards"
  back.style.animation = "MoveNinjaControl 0.5s linear forwards"
  MoveLeft.style.animation = "MoveNinjaControl 0.5s linear forwards"
  MoveRight.style.animation = "MoveNinjaControl 0.5s linear forwards"
  Shoot.style.animation = "MoveNinjaControl 0.5s linear forwards"
  Ninja.style.animation = "MoveNinjaControl 0.5s linear forwards"
  audio.play()
  audio.currentTime = 0
  c = 0
})

button2.addEventListener('click', function () {
  bst.style.display = "block"
  sname.style.display = "block"
  sitting.style.display = "block"
  audio.play()
  audio.currentTime = 0
})

button3.addEventListener('click', function () {
  audio.play();
  audio.currentTime = 0
  
})

BC.addEventListener('click', function () {
  if(BC.checked){
  bgs.play()
  }else{
  bgs.pause()
  bgs.currentTime = 0
  }
})

bst.addEventListener('click', function () {
  sname.style.display = "none"
  sitting.style.display = "none"
  audio.play()
  audio.currentTime = 0
})

exit.style.animation = "none"
let c = 0
back.addEventListener('click', function () {
  c = c + 1.5
  if(c <= 1.5){
      exit.style.animation = "exins 0.5s linear forwards "
      exit.style.display = "block"
  } else if (c <= 3){
      exit.style.animation = "exout 0.3s linear forwards"
      setTimeout(() =>{
      exit.style.display = "none"
      }, 400)
      c = 0
      audio.play()
      audio.currentTime = 0
  }
})

slid.value = bgs.volume * 100

slid.addEventListener('input', function () {
  bgs.volume = slid.value / 100
})

exit.addEventListener('click', function () {
  audio.play()
  audio.currentTime = 0
  button.style.display = "block"
  button.style.animation = "buttonMove 0.5s linear forwards"
  button2.style.height = "70px"
  button2.style.width = "150px"
  button2.style.display = "block"
  button2.style.animation = "buttonMove 1.1s linear forwards"
  button3.style.display = "block"
  button3.style.animation = "buttonMove 0.8s linear forwards"
  title.style.display = "block"
  name.style.display = "block"
  version.style.display = "block"
  back.style.display = "none"
  exit.style.display = "none"
  jump.style.display = "none"
  Ninja.style.display = "none"
  MoveLeft.style.display = "none"
  MoveRight.style.display = "none"
  Shoot.style.display = "none"
  document.body.style.backgroundImage = "url(bg.gif)"
  document.body.style.transition = "1s ease-in-out"
  setTimeout(() =>{
  },300)
})

let jumpsound = document.getElementById('JumpSound')
jump.addEventListener('click', function () {
  jumpsound.play()
  jumpsound.currentTime = 0
  Ninja.style.bottom = "20%"
  Ninja.style.animation = "NinjaJump 0.3s linear forwards"
  setTimeout(() =>{
    Ninja.style.animation = "NinjaStop 1.8s steps(5) infinite"
    Ninja.style.bottom = "5%"
  },200)
})

let ninja = document.getElementById('ninja');
let moveLeftBtn = document.getElementById('moveL');
let moveRightBtn = document.getElementById('moveR');
let pos = 50; // موقع النينجا
let speed = 5; // سرعة الحركة
let interval = null;
let MoveSound = document.getElementById('MoveSound')
let dir = 1
// التحرك يسار
MoveRight.addEventListener('pointerdown', () => {
  dir = -1
  pos = Ninja.offsetLeft
  MoveSound.play()
  MoveSound.currentTime = 0
  Ninja.style.animation = "NinjaMove 0.5s linear infinite "
  Ninja.style.transform = "rotatey(-180deg)"
  clearInterval(interval);
  interval = setInterval(() => {
    if(pos > 0){  // الحد الايسر
      pos -= speed;
      Ninja.style.left = pos + "px";
    }
  }, 20);
});

MoveRight.addEventListener('pointerup', function () {
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "rotatey(-180deg)"
  MoveSound.pause()
  MoveSound.currentTime = 0
})

MoveRight.addEventListener('pointercancel',function () {
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "rotatey(-180deg)"
  MoveSound.pause()
  MoveSound.currentTime = 0
})

MoveRight.addEventListener('pointerleave',function () {
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "rotatey(-180deg)"
  MoveSound.pause()
  MoveSound.currentTime = 0
})

// التحرك يمين
MoveLeft.addEventListener('pointerdown', () => {
  dir = 1
  pos = Ninja.offsetLeft
  MoveSound.play()
  MoveSound.currentTime = 0
  Ninja.style.animation = "NinjaMove 0.5s linear infinite "
  clearInterval(interval)
  interval = setInterval(() => {
    if(pos < window.innerWidth - Ninja.offsetWidth){ // الحد الايمن
      pos += speed;
      Ninja.style.left = pos + "px";
    }
  }, 20);
  Ninja.style.transform = "none"
});

MoveLeft.addEventListener('pointerup',function () {
  dir = 1
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "none"
  MoveSound.pause()
  MoveSound.currentTime = 0
})

MoveLeft.addEventListener('pointercancel',function () {
  dir = 1
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "none"
  MoveSound.pause()
  MoveSound.currentTime = 0
})

MoveLeft.addEventListener('pointerleave',function () {
  dir = 1
  clearInterval(interval)
  Ninja.style.animation = "none"
  Ninja.style.transform = "none"
  MoveSound.pause()
  MoveSound.currentTime = 0
});
// مشكلة ‼️‼️
let intervalShoot = null;
let Starsound = document.getElementById('starsound');
Shoot.addEventListener('pointerdown', function () {
  Starsound.play();
  Starsound.currentTime = 0;
  clearInterval(intervalShoot);
  intervalShoot = setInterval(() => {
    Ninja.style.animation = "Shooter 0.3s linear infinite";
    // إنشاء نجمة جديدة لكل إطلاق
    let star = document.createElement('div');
    star.classList.add('star'); // أضف ستايل في CSS
    star.style.position = 'absolute';
    star.style.zIndex = '-4'
    star.style.height = '20px';
    star.style.width = '20px';
    star.style.backgroundImage = "url('shark-ninja.png')";
    star.style.bottom = Ninja.offsetTop + -630 + "px";
    star.style.backgroundSize = 'cover';
    //‼️‼️
    star.style.left = Ninja.offsetLeft + 60 + "px"
    //‼️‼️
    document.body.appendChild(star);
    let posS = Ninja.offsetLeft + 80;
    let movse = setInterval(() => {
      posS += 10 * dir;
      star.style.left = posS + "px";
      if (posS >= window.innerWidth) {
          clearInterval(movse);
         star.remove();
      }
    }, 20);
  }, 200); // كل 0.2 ثانية إطلاق نجمة
});

Shoot.addEventListener('pointerup', function () {
  clearInterval(intervalShoot);
  Starsound.pause();
  Starsound.currentTime = 0;
  Ninja.style.animation = "none";
});

Shoot.addEventListener('pointercancel', function () {
  clearInterval(intervalShoot);
  Ninja.style.animation = "none";
  Starsound.pause();
  Starsound.currentTime = 0;
});

Shoot.addEventListener('pointerleave', function () {
  clearInterval(intervalShoot);
  Ninja.style.animation = "none";
  Starsound.pause();
  Starsound.currentTime = 0;
});
//نظام تصحيح اتجاه نجمه النينجا

let S = 0
Trans.addEventListener('click', function () {
  audio.play()
  audio.currentTime = 0
  S++
  if(S === 1){
  AboutUs.style.fontSize = "5px"
  AboutUs.style.transition = "none"
  title.style.right = "27%"
  title.style.width = "300px"
  title.innerText = "Jungle Ninja Game🥷"
  button.innerText = "Start"
  button2.innerText = "Sitting"
  exit.innerText = "Exit"
  sname.innerText = "Sitting"
  Story.innerText = "Story"
  Trans.innerText = "Trans"
  AboutUs.innerText = "AboutUs"
  button3.innerText = "Store"
  TextAboutUs.innerText = "My name is Ali Information Technology major I love facade design and now I Medium in facade manufacturing and this is one of my facades. A piece of advice for designers: always make the interface attractive first, and later add functions and control to it‼️"
  StoryText.innerText = "Game story: There was a ninja named Firas searching for a legendary sword in the jungle that was 1000 years old. On his way, he faced predators and a gang of ninjas who came to the same goal"
  CheckBoxText.innerText = "sound"
}else{
  title.innerText = "لعبة نينجا الادغال🥷"
  button.innerText = "ابدأ"
  button2.innerText = "الاعدادات"
  exit.innerText = "خروج"
  sname.innerText = "الاعدادات"
  Story.innerText = "القصه"
  Trans.innerText = "ترجمه"
  AboutUs.innerText = "عنا"
  AboutUs.style.transition = "0.2s ease-in-out"
  button3.innerText = "المتجر"
  TextAboutUs.innerText = " اسمي علي تخصص تقنية معلومات احب تصميم الواجهات وانا الان متوسط في صناعة الواجهات وهذه احد واجهاتي.  ونصيحة للمصممين دائما اجعل الواجهه جذابة اولا ولاحقا اضيف لها  الوظائف والتحكم‼️"
  StoryText.innerText = "قصة اللعبة: كان هناك نينجا اسمه فراس يبحث عن سيف اسطوري في الادغال عمره 1000 سنه وفي طريقه يواجه حيوانات مفترسه وعصابة نينجا اتوا لنفس الهدف"
  CheckBoxText.innerText = "صوت"
  S = 0
}
})
let NoteBook = document.getElementById('SNoteBook')
Story.addEventListener('click', function () {
    NoteBook.style.display = "block"
    BookSound.play()
    BookSound.currentTime = 0
})

let BackStory = document.getElementById('BackStory')

BackStory.addEventListener('click', function () {
   NoteBook.style.display = "none"
})

let UNoteBook = document.getElementById('UNoteBook')

AboutUs.addEventListener('click', function () {
    UNoteBook.style.display = "block"
    BookSound.play()
    BookSound.currentTime = 0
})

let UBack = document.getElementById('UBack')
UBack.addEventListener('click', function () {
  UNoteBook.style.display = "none"
})

let TextAboutUs = document.getElementById('textAboutUs')
let StoryText = document.getElementById('storytext')
let CheckBoxText = document.getElementById('boxCheckA')