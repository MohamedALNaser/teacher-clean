let home = document.querySelector(".page .home");

let homeH1 = document.querySelector(".home h1");
let homep = document.querySelector(".home p");

let h1Text = [" شركة تيتشر كلين", " تيتشر كلين", " شركة تيتشر كلين"];
let pText = [
  " لجميع خدمات التنظيف بالرياض نقدم خدمات تنظيف للمنازل والفلل والمكيفات ومكافحة الحشرات ونقل العفش",
  "لماذا نحن الأفضل ؟ نحن الأفضل لأننا نقدم أفضل خدمة وبأقل الأسعار وخدمة متواصلة طوال اليوم ",
  "خدمة تفتخر بها",
];
let images = ["1.webp", "2.jpeg", "3.webp"];
let bubble = document.querySelectorAll(" .transiant span");
// change the background image of the home section every 5 seconds
let i = 2;
setInterval(() => {
  console.log(i - 1);
  home.style.backgroundImage = `url('./img/img ${images[i - 1]}')`;
  homeH1.textContent = h1Text[i - 1];
  homep.textContent = pText[i - 1];
  bubble[i - 1].classList.add("active");
  bubble.forEach((item, index) => {
    if (index != i - 1) {
      item.classList.remove("active");
    }
  });

  i++;
  if (i > 3) {
    i = 1;
  }
}, 10000);
