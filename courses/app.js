const menu_btn = document.querySelector(".menu_btn"),
  ham_bx_inn = document.querySelector(".ham_bx_inn"),
  menu_section = document.querySelector(".menu_section"),
  menu_inn = document.querySelector(".menu_inn"),
  menu_open = document.querySelectorAll(".menu li"),
  nav = document.querySelector(".nav"),
  btn_dropdown_main = document.querySelectorAll(".btn_dropdown_main"),
  btn_dropdown = document.querySelectorAll(".btn_dropdown"),
  dropdowns = document.querySelectorAll(".dropdown");

menu_btn.addEventListener("click", menu_Click);
menu_inn.addEventListener("click", menu_Close);

menu_open.forEach((m) => {
  m.addEventListener("click", () => {
    menu_Close();
  });
});

ham_bx_inn.style.setProperty("--after_top", "-8px");
ham_bx_inn.style.setProperty("--after_width", "20px");

function menu_Click() {
  ham_bx_inn.classList.toggle("on");
  switch (ham_bx_inn.classList[1]) {
    case "on":
      set_on();
      break;
    case undefined:
      set_off();
      break;
  }
}

function menu_Close() {
  set_off();
}

function set_on() {
  ham_bx_inn.style.setProperty("--transform_first", "rotate(225deg)");
  ham_bx_inn.style.setProperty(
    "--transform",
    "rotate(90deg)"
  ); /* initial 270 */
  ham_bx_inn.style.setProperty("--opacity_menu", "0");
  ham_bx_inn.style.setProperty("--after_width", "30px");
  ham_bx_inn.style.setProperty("--after_top", "0");
  menu_section.classList.add("menu_active");
  menu_inn.style.display = "block";
}

function set_off() {
  ham_bx_inn.style.setProperty("--transform_first", "rotate(0deg)");
  ham_bx_inn.style.setProperty("--transform", "rotate(0deg)");
  ham_bx_inn.style.setProperty("--opacity_menu", "1");
  ham_bx_inn.style.setProperty("--after_width", "20px");
  ham_bx_inn.style.setProperty("--after_top", "-8px");
  menu_section.classList.remove("menu_active");
  menu_inn.style.display = "none";
}

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const menu = dropdown.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        localStorage.setItem("lan", option.dataset.lan);

        select.classList.remove("select-clicked");
        menu.classList.remove("menu-open");

        options.forEach((option) => {
          option.classList.remove("active");
        });
        whatLan(option);
      });
    });
  });
});

const right_section = document.querySelector(".right_section");

const height = right_section.offsetTop + right_section.offsetHeight - 200;
let width = window.screen.width;
window.addEventListener("resize", function (event) {
  width = document.body.clientWidth;
});

btn_dropdown_main.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let text_ul = e.target.parentElement.children[1];
    let parent_text = e.target.children[0];
    let dropdown_icon = e.target.children[1];
    text_ul.classList.toggle("show");
    dropdown_icon.classList.toggle("rotate");
    parent_text.classList.toggle("color");
  });
});

btn_dropdown.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let text_ul = e.target.parentElement.children[1];
    let parent_text = e.target.children[0];
    let dropdown_icon = e.target.children[1];
    text_ul.classList.toggle("show");
    dropdown_icon.classList.toggle("rotate");
    parent_text.classList.toggle("color");
  });
});

window.addEventListener("scroll", function () {
  if (width > 1200) {
    if (window.scrollY > height) {
      right_section.classList.add("g");
      right_section.children[0].style.display = "none";
    } else {
      right_section.classList.remove("g");
      right_section.children[0].style.display = "block";
    }
  }
});
