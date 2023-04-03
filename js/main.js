let bubble = document.querySelectorAll(".transiant span");

function changeHomeContent(imgNumber) {
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
  home.style.backgroundImage = `url('./img/img ${images[imgNumber - 1]}')`;
  homeH1.textContent = h1Text[imgNumber - 1];
  homep.textContent = pText[imgNumber - 1];
  bubble[imgNumber - 1].classList.add("active");
  bubble.forEach((item, index) => {
    if (index != imgNumber - 1) {
      item.classList.remove("active");
    }
  });
}
// change the background image of the home section every 5 seconds

let i = 2;

let changeTimer = setInterval(
  () => {
    changeHomeContent(i);
    i++;
    if (i > 3) {
      i = 1;
    }
  },
  10000,
  i
);

bubble.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // clearInterval(changeTimer);
    changeHomeContent(index + 1);
    i = index + 1;
    // changeTimer(i);
  });
});
