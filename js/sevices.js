let servicesName = [
  " منازل ",
  " خزانات ",
  " إبادة الحشرات",
  " مكيفات ",
  "السجاد ",
  " الأرضيات",
  "المسابح  ",
  " الحدائق ",
  "المكاتب  ",
];
let servicesInfo = [
  "تنظيف المنازل نظافة كاملة حيث يهتم فريقنا بأدق التفاصيل.",
  " تنظيف الخزان من الداخل ومن الخارج",
  "  فريق مدرب فى إبادة الحشرات من حيث استخدام المواد المناسبة",
  "تنظيف المكيف من الأتربة. ",
  "تنظيف السجاد والعمل على إزالة أى بقع أو اتربه من خلال إستخدام مواد التنظيف المناسبة ",
  "يوجد فريق متخصص فى تنظيف الأرضيات مع وجود خدمة التركيب أن تطلب الأمر",
  " تنظيف المسابح بشكل كلى",
  " تنظيف الحدائق مع نقل الأغراض الازمة.",
  " فريق متخصص فى تنظيف المكاتب .",
];

let servicesBox = document.querySelector(".page section .row.sevices .row");

for (let i = 0; i < servicesName.length; i++) {
  let serviseItem = document.createElement("div");
  serviseItem.classList.add(`col`, `item${i}`);
  let serviseItemIcon = document.createElement("div");
  serviseItemIcon.classList.add("iconBox");
  let serviseItemIconImg = document.createElement("img");
  serviseItemIconImg.classList.add("icon");
  serviseItemIconImg.src = `./img/servise ${i}.png`;
  let serviseItemName = document.createElement("h3");
  let serviseItemInfo = document.createElement("p");
  let NameText = document.createTextNode(servicesName[i]);
  let InfoText = document.createTextNode(servicesInfo[i]);
  serviseItemIcon.appendChild(serviseItemIconImg);
  serviseItemName.appendChild(NameText);
  serviseItemInfo.appendChild(InfoText);
  serviseItem.appendChild(serviseItemIcon);
  serviseItem.appendChild(serviseItemName);
  serviseItem.appendChild(serviseItemInfo);
  servicesBox.appendChild(serviseItem);
}
