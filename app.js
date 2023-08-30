const menu_btn = document.querySelector(".menu_btn"),
  ham_bx_inn = document.querySelector(".ham_bx_inn"),
  menu_section = document.querySelector(".menu_section"),
  menu_inn = document.querySelector(".menu_inn"),
  menu_open = document.querySelectorAll(".menu li"),
  nav = document.querySelector(".nav"),
  btn_dropdown_main = document.querySelectorAll(".btn_dropdown_main"),
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

$(".testmonial_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed: 5000,
  items: 3,
  loop: true,
  nav: true,
  navText: [``, ``],
  margin: 30,
  dots: true,
  responsive: {
    320: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

btn_dropdown_main.forEach((w) => {
  w.addEventListener("click", (e) => {
    let text_ul = e.target.parentElement.children[1];
    let dropdown_icon = e.target.children[1];
    text_ul.classList.toggle("show");
    dropdown_icon.classList.toggle("rotate");
  });
});

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

const arm = {
  navigation: {
    about: "Մեր մասին",
    courses: "Դասընթացներ",
    contact: "Կապ",
    register: "Գրանցվել",
  },
  main: {
    about: "Մեր մասին",
    we: 'Նոր <span style="color: #f4c900">գիտելիքներ</span><br /> Նոր <span style="color: #f4c900">հմտություններ</span><br />Նոր <span style="color: #f4c900">փորձ</span><br /> Երբեք շուտ չէ...',
    we_p: "Բիզնես դպրոց երեխաների և երիտասարդների համար",
    register: "Գրանցվել",
    learn_more: "Իմանալ ավելին",
  },
  out: {
    learner: "Կարծիքներ մեր<br> մասին",
    early: "Երբեք շուտ չէ․․․",
    students:
      "<span style='font-weight: 700'>1000-ից</span> ավել ուրախ ուսանողներ",
    join: "Գրանցվել բաց դասին",
    buttom: {
      title: [
        "Անհատականացված ուսուցում",
        "Պրոֆեսինալ թիմ",
        "Մասնագիտական վերապատրաստում",
      ],
      nkar: [
        "Յուրաքանչյուր ուսանող ստանում է անհատական մոտեցում",
        "Հավաստագրված մասնագետների կողմից ստեղծված դասընթացներ և փորձ",
        "KY ակադեմիայի միջոցով մասնագետները կարող են իրենց գիտելիքների բացերը և բավարարել կրթական կարիքները",
      ],
    },
  },
  advantages: {
    heading:
      "<h2>Ինչ <span class='never'>արդյունք</span> ենք<br> ապահովում</h2>",
    advantages_img: "<img id='its' src='./images/1-POu_2EIdF-transformed.png'>",
    title: [
      "Գիտելիքներ որոնք չեն տրամադրվում դպրոցում",
      "ՄՈՏԻՎԱՑՎԱԾ ՄԻՋԱՎԱՅՐ",
      "ՄԱՍՆԱԳԻՏԱԿԱՆ ԿՈՂՄՆՈՐՈՇՈՒՄ",
      "ԱՅՑԵԼՈՒԹՅՈՒՆ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐ",
      "ՀԱՆԴԻՊՈՒՄ ՀՅՈՒՐԻ ՀԵՏ",
    ],
    paragraph: [
      "հետաքրքիր բովանդակայուն և արդիական քեյսեր",
      "մուտք դեպի ուսանողական և շրջանավարտական համայնք",
      "օգնություն ճիշտ մասնագիտության ընտրության հարցում",
      "ոլորտի առաջատարների և առաջատար ընկերությունների մասին պատկերացում",
      "անհատական շփում ոլորտում կայացած մասնագետների և ձեռներեցների հետ",
    ],
  },
  courses: {
    heading: "Մեր Դասընթացները",
    paragraph: "2 և ավելի ուսանող գրանցելու դեպքում գործում է զեղչ",
    pop: ["ԱՄԵՆԱՀԱՅՏՆԻն", "ՌՈՒՍԵՐԵՆՈՎ (ՆՈՐ)"],
    title: [
      "Սեփական բիզնեսը 0-ից",
      "Հետաքրքրաշարժ իրավունք",
      "Փափուկ հմտություններ",
      "Ուրախ ֆինանսներ",
      "Մարքեթինգ",
      "Կոնֆլիկտների հաղթահարում",
      "Բլոգավարության արվեստը",
    ],
    sub_title: [
      "Իմացեք քայլ առ քայլ գործընթաց, որը կարող եք օգտագործել սկսելու ձեր սեփական բիզնեսը 0-ից",
      "Իմացե'ք` ինչպես գտնել և հասկանալ օրենքը, ճանաչե'ք Ձեր իրավունքները, որ լինեք պաշտպանված",
      "Բարելավեք ձեր փափուկ հմտությունները (հիանալի հաղորդակցություն, առաջնորդություն, վաճառքի կարողություններ և այլն)",
      "Ֆինանսների ձեր ամբողջական ուղեցույցը: Ավելի շատ խնայեք, ավելի խելացի ներդնեք, կրճատեք վարկերը, ավելի վաղ թոշակի անցեք",
      "Բացահայտեք մարքեթինգի գործնական ասպեկտները՝ այսօրվա մրցակցային բիզնեսի լանդշաֆտում գերազանցելու համար",
      "Հակամարտությունները ավելի լավ կառավարելու, բանակցելու, ազդելու և խնդիրները լուծելու արդյունավետ մեթոդներ",
      "Ստեղծեք խոստումնալից, աճող բլոգ և հասկացեք, թե ինչպես կարող եք այն դրամայնացնել",
    ],
    monthly: [
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>32.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 դրամ",
      "<span style='font-size: 24px; font-weight: 700'>39.</span>000 դրամ",
    ],
    tutor_name: [
      "Արման Մինասյան",
      "Սամվել Ջաբաղյան",
      "Գարեգին Խաչատրյան",
      "Գրիշա Հովսեփյան",
      "Աննա Պարսյան",
      "Եկատերինա Հակոբյան",
    ],
    learn_more: "Իմացեք ավելին",
  },
  ceo: {
    heading: "Ինչպե՞ս սկսվեց ամեն ինչ",
    paragraph:
      "Ամեն ինչ սկսվեց 2016 թվականի իմ այցելությամբ Մեծ Բալթյան երկրներ։ Փորձի փոխանակման ծրագրով մեկնեցի Լատվիա, Լիտվիա և Էստոնիա՝ տեղի երիտասարդությանը ներկայացնելու Հայաստանը՝ այդ թվում մեր մշակույթը, սովորությունները և կյանքը։ Վեց ամիսների ընթացքում շփվելով երիտասարդների հետ և ծանոթանալով յուրաքանչյուր երկրի կրթական համակարգերին հասկացա, որ մեծ ուշադրություն է դարձվում ոչ ֆորմալ կրթությանը՝ հատկապես երեխաների և երիտասարդների մոտ ֆինանսական գրագիտության մակարդակի բարձրացմանը։ Այնուհետև այցելեցի նաև Ֆինլադիա և ուսումնասիրեցի ֆիների կրթական մոտեցումները։ Նրանք կիրառում էին խաղաֆիկացված կրթական մեթոդներ ցանկացած տարիքի ուսանողների հետ աշխատելիս, ինչը տալիս էր շատ բարձր արդյունքներ։ Եվ հենց այնտեղ գաղափար առաջացավ արդեն Հայաստանում բացել դպրոց, որը մեր երեխաներին և երիտասարդներին կտա հնարավորություն ձեռք բերել այնպիսի գիտելիքներ և հմտություններ, որոնք, ցավոք, չեն տրամադրվում թե՛ հանրակրթական դպրոցներում, թե՛ ոչ ֆորմալ ուսումնական հաստատություններում։ Վերադառնալով Հայաստան հավաքագրեցի միջազգային բիզնես դպրոցների ուսումնական ծրագրերը, ուսումնասիրեցի հայկական ֆինանսական բոլոր հարթակները, խորհրդակցեցի հոգեբանների և ոլորտում կայացած մասնագետների հետ և մեկ տարի անց, 2019թ-ին, ստեղծվեց առաջին ուսումնական ծրագիրը։ KIDPRENEURS–ի առաջին ընդունելության ժամանակ  ունեցանք ընդհամենը երկու գրանցվող։ Հիասթափությունը բավականին մեծ էր, նույնիսկ մտածում էի, որ սխալ որոշում եմ կայացրել և Հայաստանում չգնահատվեց նախաձեռնությունս։ Սակայն սկսածը պետք էր ավարտին հասցնել, և դասընթացը սկսեցինք ընդհամենը երկու ուսանողով։ Ծրագրի ավարտին արդեն շատերն էին լսել մեր մասին, և, երբ մտածում էի դադարի մասին, ստացա բազում զանգեր մեր դասընթացին միանալու համար։ Եվ այդպես շարունակվեց մեր գործունեությունը մինչ օրս։ Մենք արդեն ունենք ավելի քան 150 շրջանավարտ, ավելի քան 100 առկա ուսանող, ավելի քան 50 հաջողված բիզնես նախագիծ և ավելի քան 50 գործընկեր ամբողջ Հայաստանում։ Դպրոցի հիմնադրման պահին ես և՛ դասընթացավար էի, և՛ ֆինանսիստ, և՛ շուկայագետ, և վաճառքի մասնագետ, և՛ հավաքարար, և՛․․․ իսկ այժմ մենք մի մեծ թիմ ենք, մի մեծ ընտանիք, որն ունի միևնույն տեսլականը՝ տրամադրել մեր երեխաներին և ուսանողներին 21-րդ դարում հաջողության հասնելու հնարավոր բոլոր գիտելիքները և հմտությունները։ Երբեք շուտ չէ",
    btn: "Շարունակել կարդալ",
  },
  team: {
    heading: "Մեր դասավանդողները",
    paragraph:
      "Ամենակարևոր երևույթը դպրոցում, ամենաուսուցողական առարկան, ամենակենդանի օրինակը աշակերտի համար հենց ինքը ուսուցիչն է",
    btn: "Միանալ KY-ի թիմին",
    team_members: [
      "Լիլիթ Վաթոյան",
      "Արման Մինասյան",
      "Սամվել Ջաբաղյան",
      "Գարեգին Խաչատրյան",
      "Գրիշա Հովսեփյան",
      "Աննա Պարսյան",
    ],
    team_whatdo: [
      "Բիզնես",
      "Ֆինանսներ",
      "Իրավագիտություն",
      "Փափուկ հմտություններ",
      "Մարքեթինգ",
      "Մենեջմենթ",
    ],
  },
  footer: {
    nav: ["Մեր մասին", "Դասընթացներ", "Կապ"],
    right: "© 2023, © «KY academy» |, Բոլոր իրավունքները պահպանված են",
    developed:
      "Կայքի ձևավորումը՝ <span style='font-weight: bold;'>@armandev10</span>",
  },
};
const eng = {
  navigation: {
    about: "About us",
    courses: "Courses",
    contact: "Contact",
    register: "Register",
  },
  main: {
    about: "About us",
    we: 'New <span style = "color: #f4c900">knowledge </span> <br /> New <span style = "color: #f4c900"> skills </span> <br /> New <span style = "color: #f4c900"> experinces </span><br /> Its never too early...',
    we_p: "Business school for children and youth",
    register: "Register Now",
    learn_more: "Learn More",
  },
  out: {
    learner: "Thought on<br> us",
    early: "Its never too early",
    students: "<span style='font-weight: 700'>+ 1000k </span> Happy Students",
    join: "Join for free",
    buttom: {
      title: [
        "Personalized Learning",
        "Professional team",
        "Professional training",
      ],
      nkar: [
        "Each student receives an individual approach",
        "Courses and Experience Created by Certified Professionals",
        "Through KY Academy, professionals can fill their knowledge gaps and meet educational needs",
      ],
    },
  },
  advantages: {
    heading: "<h2>What <span class='never'>results</span> we<br> provide</h2>",
    advantages_img: "<img id='its' src='./images/2-BjJPZWP_L-transformed.png'>",
    title: [
      "KNOWLEDGE NOT PROVIDED AT SCHOOL",
      "MOTIVATED ENVIRONMENT",
      "PROFESSIONAL DIRECTION",
      "VISIT ORGANIZATIONS",
      "MEETING WITH GUESTS",
    ],
    paragraph: [
      "interesting informative and up-to-date case",
      "access to student and graduate life",
      "help in choosing the right profession",
      "insight into industry leaders and leading companies",
      "personal contact with established professionals and entrepreneurs",
    ],
  },
  courses: {
    heading: "Our Courses",
    paragraph: "If you register 2 or more students, there is a discount",
    pop: ["MOST POPULAR", "IN RUSSIAN(NEW)"],
    title: [
      "Your Business from 0",
      "Jurisprudence",
      "Soft Skills",
      "Happy Finances",
      "Marketing",
      "Overcoming Conflicts",
      "The Art of Blogging",
    ],
    sub_title: [
      "Learn a step-by-step process you can use to start your own business from 0",
      "Learn how to find and understand the law, know your rights and to be protected",
      "Improve your soft skills (great communicator, leadership, selling abilities, etc.)",
      "Your complete guide to finance. Save more, invest smarter, reduce loans, retire earlier",
      "Best Digital Marketing Strategies, SEO, Email Marketing, YouTube , Social Media Marketing",
      "Effective techniques to better manage conflicts, negotiate, influence and solve problems",
      "Create a promising, growing blog and understand how you can monetize it",
    ],
    monthly: [
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>32.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 amd",
      "<span style='font-size: 24px; font-weight: 700'>39.</span>000 amd",
    ],
    tutor_name: [
      "Arman Minasyan",
      "Samvel Jabaxyan",
      "Garegin Xachatryan",
      "Grisha Hovsepyan",
      "Anna Parsyan",
      "Ekaterina Hakobyan",
    ],
    learn_more: "Learn More",
  },
  ceo: {
    heading: "How did it all start?",
    paragraph:
      "It all started with my visit to the Greater Baltic States in 2016. I went to Latvia, Lithuania and Estonia on an experience exchange program to introduce Armenia, including our culture, customs and life, to the local youth. During six months interacting with young people and learning about the educational systems of each country, I realized that a lot of attention is paid to non-formal education, especially to raising the level of financial literacy among children and young people. Then I also visited Finland and studied the educational approaches of the Finns. They used gamified educational methods when working with students of any age, which gave very high results. And it was there that the idea arose to open a school in Armenia that would give our children and young people the opportunity to acquire such knowledge and skills, which, unfortunately, are not provided either in public schools or in non-formal educational institutions. Returning to Armenia, I collected the curricula of international business schools, studied all Armenian financial platforms, consulted with psychologists and experts in the field, and a year later, in 2019, the first curriculum was created. At the first reception of KIDPRENEURS, we had only two registrants. The disappointment was quite big, I even thought that I made a wrong decision and my initiative was not appreciated in Armenia. However, what was started had to be finished, and we started the course with only two students. By the end of the program, many people had already heard about us, and when I was thinking about taking a break, I received many calls to join our course. And so our activities continued until today. We already have more than 150 graduates, more than 100 current students, more than 50 successful business projects and more than 50 partners throughout Armenia. At the time of the establishment of the school, I was both a trainer, and a financier, and a marketer, and a sales specialist, and a cleaner, and... and now we are one big team, one big family with the same vision to provide our children and students with all the knowledge and skills possible to succeed in the 21st century. It's never too early",
    btn: "Continue Reading",
  },
  team: {
    heading: "Our Mentors",
    paragraph:
      "The most important phenomenon in school, the most educational subject, the most vivid example for the student he is the teacher",
    btn: "We're hiring!",
    team_members: [
      "Lilit Vatoyan",
      "Arman Minasyan",
      "Samvel Jabaxyan",
      "Garegin Xachatryan",
      "Grisha Hovsepyan",
      "Anna Parsyan",
    ],
    team_whatdo: [
      "Business",
      "Finances",
      "Jurisprudence",
      "Soft Skills",
      "Marketing",
      "Management",
    ],
  },
  footer: {
    nav: ["About us", "Courses", "Contact"],
    right: "© 2023, © «KY academy» , All rights reserved",
    developed:
      "developed by՝ <span style='font-weight: bold;'>@armandev10</span>",
  },
};
const rus = {
  navigation: {
    about: "О нас",
    courses: "Курсы",
    contact: "Контакты",
    register: "Регистрация",
  },
  main: {
    about: "О нас",
    we: 'Новые <span style = "color: #f4c900">знания </span> <br /> Новые <span style = "color: #f4c900"> навыки </span> <br /> Новые <span style = "color: #f4c900"> опыт </span><br /> Никогда не рано...',
    we_p: "Бизнес-школа для детей и молодежи",
    register: "Зарегистрироваться",
    learn_more: "Подробнее",
  },
  out: {
    learner: "Отзывы о<br> нас",
    early: "Никогда не рано",
    students:
      "<span style='font-weight: 700'>+ 1000 тыс. </span> счастливых студентов",
    join: "Присоединиться бесплатно",
    buttom: {
      title: [
        "Индивидуальное обучение",
        "Профессиональная команда",
        "Профессиональная подготовка",
      ],
      nkar: [
        "Каждый ученик получает индивидуальный подход",
        "Курсы и опыт, созданные сертифицированными профессионалами",
        "Благодаря KY Academy профессионалы могут заполнить пробелы в своих знаниях и удовлетворить образовательные потребности",
      ],
    },
  },
  advantages: {
    heading:
      "<h2>Какой <span class='never'>результат</span> мы<br>обеспечиваем</h2>",
    advantages_img: "<img id='its' src='./images/3-beKv5ys77-transformed.png'>",
    title: [
      "ЗНАНИЯ В ШКОЛЕ НЕ ПРЕДОСТАВЛЯЮТСЯ",
      "МОТИВИРОВАННАЯ СРЕДА",
      "ПРОФЕССИОНАЛЬНОЕ НАПРАВЛЕНИЕ",
      "ПОСЕТИТЬ ОРГАНИЗАЦИИ",
      "ВСТРЕЧА С ГОСТЯМИ",
    ],
    paragraph: [
      "интересный познавательный и актуальный случай",
      "доступ к студенческой и аспирантской жизни",
      "помочь выбрать правильную профессию",
      "взгляд на лидеров и ведущих компании",
      "личный контакт с признанными профессионалами и предпринимателями",
    ],
  },
  courses: {
    heading: "Наши Курсы",
    paragraph: "При регистрации 2-х и более студентов действует скидка",
    pop: ["САМЫЙ ПОПУЛЯРНЫЙ", "НА РУССКОМ(НОВОЕ)"],
    title: [
      "Ваш бизнес с 0",
      "Юриспруденция",
      "Мягкие навыки",
      "Счастливые финансы",
      "Маркетинг",
      "Преодоление конфликтов",
      "Искусство ведения блога",
    ],
    sub_title: [
      "Изучите пошаговый процесс, который вы можете использовать, чтобы начать свой собственный бизнес с нуля",
      "Научитесь находить и понимать закон, знать свои права и защищаться",
      "Улучшите свои мягкие навыки (отличный коммуникатор, лидерство, способности продавать и т. д.)",
      "Ваше полное руководство по финансам. Экономьте больше, инвестируйте разумнее, сокращайте кредиты, выходите на пенсию раньше",
      "Лучшие стратегии цифрового маркетинга, SEO, электронный маркетинг, YouTube, маркетинг в социальных сетях",
      "Эффективные техники для лучшего управления конфликтами, ведения переговоров, влияния и решения проблем",
      "Создайте перспективный, растущий блог и поймите, как вы можете его монетизировать",
    ],
    monthly: [
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>32.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>35.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>30.</span>000 драм",
      "<span style='font-size: 24px; font-weight: 700'>39.</span>000 драм",
    ],
    tutor_name: [
      "Арман Минасян",
      "Самвел Джабакян",
      "Гарегин Хачатрян",
      "Гриша Овсепян",
      "Анна Парсян",
      "Екатерина Акопян",
    ],
    learn_more: "Узнать больше",
  },
  ceo: {
    heading: "С чего все началось?",
    paragraph:
      "Все началось с моего визита в страны Большой Балтии в 2016 году. Я ездил в Латвию, Литву и Эстонию по программе обмена, чтобы познакомить местную молодежь с Арменией, в том числе с нашей культурой, обычаями и бытом. В течение полугода, общаясь с молодежью и знакомясь с образовательными системами каждой страны, я понял, что большое внимание уделяется неформальному образованию, особенно повышению уровня финансовой грамотности детей и молодежи. Потом я также посетил Финляндию и изучил образовательные подходы финнов. Они использовали игровые методы обучения при работе со школьниками любого возраста, что дало очень высокие результаты. И именно там возникла идея открыть в Армении школу, которая дала бы нашим детям и молодежи возможность приобрести такие знания и навыки, которые, к сожалению, не предоставляются ни в государственных школах, ни в неформальных образовательных учреждениях. Вернувшись в Армению, я собрала учебные программы международных бизнес-школ, изучила все армянские финансовые площадки, проконсультировалась с психологами и экспертами в этой области, и уже через год, в 2019 году, была создана первая учебная программа. На первом приеме KIDPRENEURS у нас было всего два регистранта. Разочарование было довольно большим, я даже подумал, что принял неверное решение и мою инициативу не оценили в Армении. Однако то, что было начато, нужно было закончить, и мы начали курс всего с двумя студентами. К концу программы о нас уже слышало много людей, и когда я подумывал о том, чтобы сделать перерыв, мне поступило много звонков присоединиться к нашему курсу. И так наша деятельность продолжалась до сегодняшнего дня.У нас уже более 150 выпускников, более 100 нынешних студентов, более 50 успешных бизнес-проектов и более 50 партнеров по всей Армении. На момент основания школы я была и тренером, и финансистом, и маркетологом, и продавцом, и уборщицей, и... и теперь мы одна большая команда, одна большая семья с одинаковым видением, чтобы дать нашим детям и ученикам все знания и навыки, необходимые для достижения успеха в 21 веке. Никогда не бывает слишком рано",
    btn: "Продолжить чтение",
  },
  team: {
    heading: "Наши Инструктуры",
    paragraph:
      "Самое главное явление в школе, самый воспитательный предмет, самый яркий примердля ученика он учитель",
    btn: "Присоединяйтесь к команде KY!",
    team_members: [
      "Лилит Ватоян",
      "Арман Минасян",
      "Самвел Джабакян",
      "Гарегин Хачатрян",
      "Гриша Овсепян",
      "Анна Парсян",
    ],
    team_whatdo: [
      "Бизнес",
      "Финансы",
      "Юриспруденция",
      "Мягкие навыки",
      "Маркетинг",
      "Управление",
    ],
  },
  footer: {
    nav: ["О на", "Курсы", "Контакты"],
    right: "© 2023, © 'KY academy' , All rights reserved",
    developed:
      "developed by՝ <span style='font-weight: bold;'>@armandev10</span>",
  },
};

function whatLan() {
  const selected = document.querySelectorAll(".selected"),
    menu = document.querySelectorAll(".menu"),
    pages = document.getElementById("pages"),
    select_img = document.querySelectorAll(".select_img"),
    nav_btn = document.querySelector(".nav > a > button"),
    lists = document.getElementById("lists"),
    lists_btn = document.querySelector("#lists button"),
    main = document.querySelector(".main .left"),
    out = document.querySelector("#out .left"),
    out_bottom = document.querySelectorAll("#out .bottom li"),
    advantages_title = document.querySelector("#advantages h2"),
    advantages_heading = document.querySelectorAll("#advantages li h3"),
    advantages_paragraph = document.querySelectorAll("#advantages li p"),
    advantages_img = document.querySelector("#advantages #its"),
    testi = document.querySelectorAll(".testi"),
    courses_top = document.querySelector("#courses #top_cor"),
    courses_li = document.querySelectorAll("#courses ul li"),
    tutor = document.querySelectorAll("#courses ul li .tutor p"),
    pr = document.querySelectorAll("#courses ul li .pr"),
    pop = document.querySelectorAll("#pop"),
    ceo = document.getElementById("ceo"),
    team = document.getElementById("team"),
    team_heading = document.querySelectorAll("#team .mentor div:nth-child(2)"),
    foot_nav = document.querySelectorAll("#foot_nav li"),
    footer = document.querySelector("footer > div");

  if (localStorage.getItem("lan") === "am") {
    armenianLan(
      selected,
      menu,
      pages,
      select_img,
      nav_btn,
      lists,
      lists_btn,
      main,
      out,
      out_bottom,
      advantages_title,
      advantages_heading,
      advantages_paragraph,
      testi,
      courses_top,
      courses_li,
      tutor,
      pr,
      pop,
      ceo,
      team,
      team_heading,
      foot_nav,
      footer
    );
  } else if (localStorage.getItem("lan") === "en") {
    englishLan(
      selected,
      menu,
      pages,
      select_img,
      nav_btn,
      lists,
      lists_btn,
      main,
      out,
      out_bottom,
      advantages_title,
      advantages_heading,
      advantages_paragraph,
      testi,
      courses_top,
      courses_li,
      tutor,
      pr,
      pop,
      ceo,
      team,
      team_heading,
      foot_nav,
      footer
    );
  } else if (localStorage.getItem("lan") === "ru") {
    russianLan(
      selected,
      menu,
      pages,
      select_img,
      nav_btn,
      lists,
      lists_btn,
      main,
      out,
      out_bottom,
      advantages_title,
      advantages_heading,
      advantages_paragraph,
      testi,
      courses_top,
      courses_li,
      tutor,
      pr,
      pop,
      ceo,
      team,
      team_heading,
      foot_nav,
      footer
    );
  } else {
    armenianLan(
      selected,
      menu,
      pages,
      select_img,
      nav_btn,
      lists,
      lists_btn,
      main,
      out,
      out_bottom,
      advantages_title,
      advantages_heading,
      advantages_paragraph,
      testi,
      courses_top,
      courses_li,
      tutor,
      pr,
      pop,
      ceo,
      team,
      team_heading,
      foot_nav,
      footer
    );
  }
}

whatLan();

function armenianLan(
  selected,
  menu,
  pages,
  select_img,
  nav_btn,
  lists,
  lists_btn,
  main,
  out,
  out_bottom,
  advantages_title,
  advantages_heading,
  advantages_paragraph,
  testi,
  courses_top,
  courses_li,
  tutor,
  pr,
  pop,
  ceo,
  team,
  team_heading,
  foot_nav,
  footer
) {
  selected[0].innerText = "Հայ";
  selected[1].innerText = "Հայ";
  select_img.forEach((select_im) => {
    select_im.src = "./images/flags/arm.png";
  });

  menu[0].childNodes[1].classList.add("active");
  menu[1].childNodes[1].classList.add("active");

  // navigation
  pages.childNodes[1].innerText = arm.navigation.about;
  pages.childNodes[3].innerText = arm.navigation.courses;
  pages.childNodes[5].innerText = arm.navigation.contact;
  nav_btn.innerText = arm.navigation.register;
  lists.childNodes[1].innerText = arm.navigation.about;
  lists.childNodes[3].innerText = arm.navigation.courses;
  lists.childNodes[5].innerText = arm.navigation.contact;
  lists_btn.innerText = arm.navigation.register;

  //main
  main.childNodes[1].innerText = arm.main.about;
  main.childNodes[3].innerHTML = arm.main.we;
  main.childNodes[5].innerText = arm.main.we_p;
  main.childNodes[7].childNodes[1].childNodes[1].innerText = arm.main.register;
  main.childNodes[7].childNodes[3].childNodes[1].innerText =
    arm.main.learn_more;

  //out
  out.childNodes[1].innerHTML = arm.out.learner;
  out.childNodes[3].innerText = arm.out.early;
  out.childNodes[5].childNodes[3].innerHTML = arm.out.students;
  out.childNodes[7].childNodes[1].innerText = arm.out.join;
  testi.forEach((te) => {
    te.classList.add("hide");
    if (te.classList.contains("second_testi")) {
      te.classList.remove("hide");
    }
  });
  out_bottom[0].childNodes[3].innerText = arm.out.buttom.title[0];
  out_bottom[1].childNodes[3].innerText = arm.out.buttom.title[1];
  out_bottom[2].childNodes[3].innerText = arm.out.buttom.title[2];
  out_bottom[0].childNodes[5].innerText = arm.out.buttom.nkar[0];
  out_bottom[1].childNodes[5].innerText = arm.out.buttom.nkar[1];
  out_bottom[2].childNodes[5].innerText = arm.out.buttom.nkar[2];

  //advatages
  advantages_title.outerHTML = arm.advantages.heading;
  advantages_heading[0].innerText = arm.advantages.title[0];
  advantages_heading[1].innerText = arm.advantages.title[1];
  advantages_heading[2].innerText = arm.advantages.title[2];
  advantages_heading[3].innerText = arm.advantages.title[3];
  advantages_heading[4].innerText = arm.advantages.title[4];
  advantages_paragraph[0].innerText = arm.advantages.paragraph[0];
  advantages_paragraph[1].innerText = arm.advantages.paragraph[1];
  advantages_paragraph[2].innerText = arm.advantages.paragraph[2];
  advantages_paragraph[3].innerText = arm.advantages.paragraph[3];
  advantages_paragraph[4].innerText = arm.advantages.paragraph[4];

  //courses
  courses_top.childNodes[1].innerText = arm.courses.heading;
  courses_top.childNodes[1].classList.add("arm_f");
  courses_top.childNodes[3].innerText = arm.courses.paragraph;
  pop[0].innerText = arm.courses.pop[0];
  pop[1].innerText = arm.courses.pop[1];
  courses_li[0].childNodes[3].innerText = arm.courses.title[0];
  courses_li[1].childNodes[3].innerText = arm.courses.title[1];
  courses_li[2].childNodes[3].innerText = arm.courses.title[2];
  courses_li[3].childNodes[3].innerText = arm.courses.title[3];
  courses_li[4].childNodes[3].innerText = arm.courses.title[4];
  courses_li[5].childNodes[3].innerText = arm.courses.title[5];
  courses_li[6].childNodes[3].innerText = arm.courses.title[6];
  courses_li[0].childNodes[5].innerText = arm.courses.sub_title[0];
  courses_li[1].childNodes[5].innerText = arm.courses.sub_title[1];
  courses_li[2].childNodes[5].innerText = arm.courses.sub_title[2];
  courses_li[3].childNodes[5].innerText = arm.courses.sub_title[3];
  courses_li[4].childNodes[5].innerText = arm.courses.sub_title[4];
  courses_li[5].childNodes[5].innerText = arm.courses.sub_title[5];
  courses_li[6].childNodes[5].innerText = arm.courses.sub_title[6];
  tutor[0].innerText = arm.courses.tutor_name[0];
  tutor[1].innerText = arm.courses.tutor_name[1];
  tutor[2].innerText = arm.courses.tutor_name[2];
  tutor[3].innerText = arm.courses.tutor_name[0];
  tutor[4].innerText = arm.courses.tutor_name[3];
  tutor[5].innerText = arm.courses.tutor_name[4];
  tutor[6].innerText = arm.courses.tutor_name[5];
  pr[0].childNodes[1].innerHTML = arm.courses.monthly[0];
  pr[1].childNodes[1].innerHTML = arm.courses.monthly[1];
  pr[2].childNodes[1].innerHTML = arm.courses.monthly[2];
  pr[3].childNodes[1].innerHTML = arm.courses.monthly[3];
  pr[4].childNodes[1].innerHTML = arm.courses.monthly[4];
  pr[5].childNodes[1].innerHTML = arm.courses.monthly[5];
  pr[6].childNodes[1].innerHTML = arm.courses.monthly[6];
  pr[0].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[1].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[2].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[3].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[4].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[5].childNodes[3].innerHTML = arm.courses.learn_more;
  pr[6].childNodes[3].innerHTML = arm.courses.learn_more;

  //ceo
  ceo.childNodes[1].childNodes[1].innerText = arm.ceo.heading;
  ceo.childNodes[1].childNodes[3].innerText = arm.ceo.paragraph;
  ceo.childNodes[1].childNodes[5].innerText = arm.ceo.btn;

  //team
  team.childNodes[1].childNodes[1].innerText = arm.team.heading;
  team.childNodes[1].childNodes[1].classList.add("arm_f");
  team.childNodes[1].childNodes[3].innerText = arm.team.paragraph;
  team.childNodes[1].childNodes[5].innerText = arm.team.btn;
  team_heading[0].childNodes[1].innerText = arm.team.team_members[0];
  team_heading[1].childNodes[1].innerText = arm.team.team_members[1];
  team_heading[2].childNodes[1].innerText = arm.team.team_members[2];
  team_heading[3].childNodes[1].innerText = arm.team.team_members[3];
  team_heading[4].childNodes[1].innerText = arm.team.team_members[4];
  team_heading[5].childNodes[1].innerText = arm.team.team_members[5];
  team_heading[0].childNodes[3].innerText = arm.team.team_whatdo[0];
  team_heading[1].childNodes[3].innerText = arm.team.team_whatdo[1];
  team_heading[2].childNodes[3].innerText = arm.team.team_whatdo[2];
  team_heading[3].childNodes[3].innerText = arm.team.team_whatdo[3];
  team_heading[4].childNodes[3].innerText = arm.team.team_whatdo[4];
  team_heading[5].childNodes[3].innerText = arm.team.team_whatdo[5];

  //footer
  foot_nav[0].innerText = arm.footer.nav[0];
  foot_nav[1].innerText = arm.footer.nav[1];
  foot_nav[2].innerText = arm.footer.nav[2];
  footer.childNodes[3].childNodes[1].innerText = arm.footer.right;
  footer.childNodes[3].childNodes[3].innerHTML = arm.footer.developed;
}
function englishLan(
  selected,
  menu,
  pages,
  select_img,
  nav_btn,
  lists,
  lists_btn,
  main,
  out,
  out_bottom,
  advantages_title,
  advantages_heading,
  advantages_paragraph,
  testi,
  courses_top,
  courses_li,
  tutor,
  pr,
  pop,
  ceo,
  team,
  team_heading,
  foot_nav,
  footer
) {
  selected[0].innerText = "Eng";
  selected[1].innerText = "Eng";
  select_img.forEach((select_im) => {
    select_im.src = "./images/flags/usa.png";
  });
  menu[0].childNodes[3].classList.add("active");
  menu[1].childNodes[3].classList.add("active");

  // navigation
  pages.childNodes[1].innerText = eng.navigation.about;
  pages.childNodes[3].innerText = eng.navigation.courses;
  pages.childNodes[5].innerText = eng.navigation.contact;
  nav_btn.innerText = eng.navigation.register;
  lists.childNodes[1].innerText = eng.navigation.about;
  lists.childNodes[3].innerText = eng.navigation.courses;
  lists.childNodes[5].innerText = eng.navigation.contact;
  lists_btn.innerText = eng.navigation.register;

  //main
  main.childNodes[1].innerText = eng.main.about;
  main.childNodes[3].innerHTML = eng.main.we;
  main.childNodes[5].innerText = eng.main.we_p;
  main.childNodes[7].childNodes[1].childNodes[1].innerText = eng.main.register;
  main.childNodes[7].childNodes[3].childNodes[1].innerText =
    eng.main.learn_more;

  //out
  out.childNodes[1].innerHTML = eng.out.learner;
  out.childNodes[3].innerText = eng.out.early;
  out.childNodes[5].childNodes[3].innerHTML = eng.out.students;
  out.childNodes[7].childNodes[1].innerText = eng.out.join;
  testi.forEach((te) => {
    te.classList.add("hide");
    if (te.classList.contains("first_testi")) {
      te.classList.remove("hide");
    }
  });
  out_bottom[0].childNodes[3].innerText = eng.out.buttom.title[0];
  out_bottom[1].childNodes[3].innerText = eng.out.buttom.title[1];
  out_bottom[2].childNodes[3].innerText = eng.out.buttom.title[2];
  out_bottom[0].childNodes[5].innerText = eng.out.buttom.nkar[0];
  out_bottom[1].childNodes[5].innerText = eng.out.buttom.nkar[1];
  out_bottom[2].childNodes[5].innerText = eng.out.buttom.nkar[2];

  //advatages
  advantages_title.outerHTML = eng.advantages.heading;
  advantages_heading[0].innerHTML = eng.advantages.title[0];
  advantages_heading[1].innerHTML = eng.advantages.title[1];
  advantages_heading[2].innerHTML = eng.advantages.title[2];
  advantages_heading[3].innerHTML = eng.advantages.title[3];
  advantages_heading[4].innerHTML = eng.advantages.title[4];
  advantages_paragraph[0].innerText = eng.advantages.paragraph[0];
  advantages_paragraph[1].innerText = eng.advantages.paragraph[1];
  advantages_paragraph[2].innerText = eng.advantages.paragraph[2];
  advantages_paragraph[3].innerText = eng.advantages.paragraph[3];
  advantages_paragraph[4].innerText = eng.advantages.paragraph[4];

  //courses
  courses_top.childNodes[1].innerText = eng.courses.heading;
  courses_top.childNodes[1].classList.remove("arm_f");
  courses_top.childNodes[3].innerText = eng.courses.paragraph;
  pop[0].innerText = eng.courses.pop[0];
  pop[1].innerText = eng.courses.pop[1];
  courses_li[0].childNodes[3].innerText = eng.courses.title[0];
  courses_li[1].childNodes[3].innerText = eng.courses.title[1];
  courses_li[2].childNodes[3].innerText = eng.courses.title[2];
  courses_li[3].childNodes[3].innerText = eng.courses.title[3];
  courses_li[4].childNodes[3].innerText = eng.courses.title[4];
  courses_li[5].childNodes[3].innerText = eng.courses.title[5];
  courses_li[6].childNodes[3].innerText = eng.courses.title[6];
  courses_li[0].childNodes[5].innerText = eng.courses.sub_title[0];
  courses_li[1].childNodes[5].innerText = eng.courses.sub_title[1];
  courses_li[2].childNodes[5].innerText = eng.courses.sub_title[2];
  courses_li[3].childNodes[5].innerText = eng.courses.sub_title[3];
  courses_li[4].childNodes[5].innerText = eng.courses.sub_title[4];
  courses_li[5].childNodes[5].innerText = eng.courses.sub_title[5];
  courses_li[6].childNodes[5].innerText = eng.courses.sub_title[6];
  tutor[0].innerText = eng.courses.tutor_name[0];
  tutor[1].innerText = eng.courses.tutor_name[1];
  tutor[2].innerText = eng.courses.tutor_name[2];
  tutor[3].innerText = eng.courses.tutor_name[0];
  tutor[4].innerText = eng.courses.tutor_name[3];
  tutor[5].innerText = eng.courses.tutor_name[4];
  tutor[6].innerText = eng.courses.tutor_name[5];
  pr[0].childNodes[1].innerHTML = eng.courses.monthly[0];
  pr[1].childNodes[1].innerHTML = eng.courses.monthly[1];
  pr[2].childNodes[1].innerHTML = eng.courses.monthly[2];
  pr[3].childNodes[1].innerHTML = eng.courses.monthly[3];
  pr[4].childNodes[1].innerHTML = eng.courses.monthly[4];
  pr[5].childNodes[1].innerHTML = eng.courses.monthly[5];
  pr[6].childNodes[1].innerHTML = eng.courses.monthly[6];
  pr[0].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[1].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[2].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[3].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[4].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[5].childNodes[3].innerHTML = eng.courses.learn_more;
  pr[6].childNodes[3].innerHTML = eng.courses.learn_more;

  //ceo
  ceo.childNodes[1].childNodes[1].innerText = eng.ceo.heading;
  ceo.childNodes[1].childNodes[3].innerText = eng.ceo.paragraph;
  ceo.childNodes[1].childNodes[5].innerText = eng.ceo.btn;

  //team
  team.childNodes[1].childNodes[1].innerText = eng.team.heading;
  team.childNodes[1].childNodes[3].innerText = eng.team.paragraph;
  team.childNodes[1].childNodes[5].innerText = eng.team.btn;
  team.childNodes[1].childNodes[1].classList.remove("arm_f");
  team_heading[0].childNodes[1].innerText = eng.team.team_members[0];
  team_heading[1].childNodes[1].innerText = eng.team.team_members[1];
  team_heading[2].childNodes[1].innerText = eng.team.team_members[2];
  team_heading[3].childNodes[1].innerText = eng.team.team_members[3];
  team_heading[4].childNodes[1].innerText = eng.team.team_members[4];
  team_heading[5].childNodes[1].innerText = eng.team.team_members[5];
  team_heading[0].childNodes[3].innerText = eng.team.team_whatdo[0];
  team_heading[1].childNodes[3].innerText = eng.team.team_whatdo[1];
  team_heading[2].childNodes[3].innerText = eng.team.team_whatdo[2];
  team_heading[3].childNodes[3].innerText = eng.team.team_whatdo[3];
  team_heading[4].childNodes[3].innerText = eng.team.team_whatdo[4];
  team_heading[5].childNodes[3].innerText = eng.team.team_whatdo[5];

  //footer
  foot_nav[0].innerText = eng.footer.nav[0];
  foot_nav[1].innerText = eng.footer.nav[1];
  foot_nav[2].innerText = eng.footer.nav[2];
  footer.childNodes[3].childNodes[1].innerText = eng.footer.right;
  footer.childNodes[3].childNodes[3].innerHTML = eng.footer.developed;
}
function russianLan(
  selected,
  menu,
  pages,
  select_img,
  nav_btn,
  lists,
  lists_btn,
  main,
  out,
  out_bottom,
  advantages_title,
  advantages_heading,
  advantages_paragraph,
  testi,
  courses_top,
  courses_li,
  tutor,
  pr,
  pop,
  ceo,
  team,
  team_heading,
  foot_nav,
  footer
) {
  selected[0].innerText = "Рус";
  selected[1].innerText = "Рус";
  select_img.forEach((select_im) => {
    select_im.src = "./images/flags/rus.png";
  });
  menu[0].childNodes[5].classList.add("active");
  menu[1].childNodes[5].classList.add("active");

  // navigation
  pages.childNodes[1].innerText = rus.navigation.about;
  pages.childNodes[3].innerText = rus.navigation.courses;
  pages.childNodes[5].innerText = rus.navigation.contact;
  nav_btn.innerText = rus.navigation.register;
  lists.childNodes[1].innerText = rus.navigation.about;
  lists.childNodes[3].innerText = rus.navigation.courses;
  lists.childNodes[5].innerText = rus.navigation.contact;
  lists_btn.innerText = rus.navigation.register;

  //main
  main.childNodes[1].innerText = rus.main.about;
  main.childNodes[3].innerHTML = rus.main.we;
  main.childNodes[5].innerText = rus.main.we_p;
  main.childNodes[7].childNodes[1].childNodes[1].innerText = rus.main.register;
  main.childNodes[7].childNodes[3].childNodes[1].innerText =
    rus.main.learn_more;

  //out
  out.childNodes[1].innerHTML = rus.out.learner;
  out.childNodes[3].innerText = rus.out.early;
  out.childNodes[5].childNodes[3].innerHTML = rus.out.students;
  out.childNodes[7].childNodes[1].innerText = rus.out.join;
  testi.forEach((te) => {
    te.classList.add("hide");
    if (te.classList.contains("third_testi")) {
      te.classList.remove("hide");
    }
  });
  out_bottom[0].childNodes[3].innerText = rus.out.buttom.title[0];
  out_bottom[1].childNodes[3].innerText = rus.out.buttom.title[1];
  out_bottom[2].childNodes[3].innerText = rus.out.buttom.title[2];
  out_bottom[0].childNodes[5].innerText = rus.out.buttom.nkar[0];
  out_bottom[1].childNodes[5].innerText = rus.out.buttom.nkar[1];
  out_bottom[2].childNodes[5].innerText = rus.out.buttom.nkar[2];

  //advatages
  advantages_title.outerHTML = rus.advantages.heading;
  advantages_heading[0].innerHTML = rus.advantages.title[0];
  advantages_heading[1].innerHTML = rus.advantages.title[1];
  advantages_heading[2].innerHTML = rus.advantages.title[2];
  advantages_heading[3].innerHTML = rus.advantages.title[3];
  advantages_heading[4].innerHTML = rus.advantages.title[4];
  advantages_paragraph[0].innerText = rus.advantages.paragraph[0];
  advantages_paragraph[1].innerText = rus.advantages.paragraph[1];
  advantages_paragraph[2].innerText = rus.advantages.paragraph[2];
  advantages_paragraph[3].innerText = rus.advantages.paragraph[3];
  advantages_paragraph[4].innerText = rus.advantages.paragraph[4];

  //courses
  courses_top.childNodes[1].innerText = rus.courses.heading;
  courses_top.childNodes[1].classList.remove("arm_f");
  courses_top.childNodes[3].innerText = rus.courses.paragraph;
  pop[0].innerText = rus.courses.pop[0];
  pop[1].innerText = rus.courses.pop[1];
  courses_li[0].childNodes[3].innerText = rus.courses.title[0];
  courses_li[1].childNodes[3].innerText = rus.courses.title[1];
  courses_li[2].childNodes[3].innerText = rus.courses.title[2];
  courses_li[3].childNodes[3].innerText = rus.courses.title[3];
  courses_li[4].childNodes[3].innerText = rus.courses.title[4];
  courses_li[5].childNodes[3].innerText = rus.courses.title[5];
  courses_li[6].childNodes[3].innerText = rus.courses.title[6];
  courses_li[0].childNodes[5].innerText = rus.courses.sub_title[0];
  courses_li[1].childNodes[5].innerText = rus.courses.sub_title[1];
  courses_li[2].childNodes[5].innerText = rus.courses.sub_title[2];
  courses_li[3].childNodes[5].innerText = rus.courses.sub_title[3];
  courses_li[4].childNodes[5].innerText = rus.courses.sub_title[4];
  courses_li[5].childNodes[5].innerText = rus.courses.sub_title[5];
  courses_li[6].childNodes[5].innerText = rus.courses.sub_title[6];
  tutor[0].innerText = rus.courses.tutor_name[0];
  tutor[1].innerText = rus.courses.tutor_name[1];
  tutor[2].innerText = rus.courses.tutor_name[2];
  tutor[3].innerText = rus.courses.tutor_name[0];
  tutor[4].innerText = rus.courses.tutor_name[3];
  tutor[5].innerText = rus.courses.tutor_name[4];
  tutor[6].innerText = rus.courses.tutor_name[5];
  pr[0].childNodes[1].innerHTML = rus.courses.monthly[0];
  pr[1].childNodes[1].innerHTML = rus.courses.monthly[1];
  pr[2].childNodes[1].innerHTML = rus.courses.monthly[2];
  pr[3].childNodes[1].innerHTML = rus.courses.monthly[3];
  pr[4].childNodes[1].innerHTML = rus.courses.monthly[4];
  pr[5].childNodes[1].innerHTML = rus.courses.monthly[5];
  pr[6].childNodes[1].innerHTML = rus.courses.monthly[6];
  pr[0].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[1].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[2].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[3].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[4].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[5].childNodes[3].innerHTML = rus.courses.learn_more;
  pr[6].childNodes[3].innerHTML = rus.courses.learn_more;

  //ceo
  ceo.childNodes[1].childNodes[1].innerText = rus.ceo.heading;
  ceo.childNodes[1].childNodes[3].innerText = rus.ceo.paragraph;
  ceo.childNodes[1].childNodes[5].innerText = rus.ceo.btn;

  //team
  team.childNodes[1].childNodes[1].innerText = rus.team.heading;
  team.childNodes[1].childNodes[3].innerText = rus.team.paragraph;
  team.childNodes[1].childNodes[5].innerText = rus.team.btn;
  team.childNodes[1].childNodes[1].classList.remove("arm_f");
  team_heading[0].childNodes[1].innerText = rus.team.team_members[0];
  team_heading[1].childNodes[1].innerText = rus.team.team_members[1];
  team_heading[2].childNodes[1].innerText = rus.team.team_members[2];
  team_heading[3].childNodes[1].innerText = rus.team.team_members[3];
  team_heading[4].childNodes[1].innerText = rus.team.team_members[4];
  team_heading[5].childNodes[1].innerText = rus.team.team_members[5];
  team_heading[0].childNodes[3].innerText = rus.team.team_whatdo[0];
  team_heading[1].childNodes[3].innerText = rus.team.team_whatdo[1];
  team_heading[2].childNodes[3].innerText = rus.team.team_whatdo[2];
  team_heading[3].childNodes[3].innerText = rus.team.team_whatdo[3];
  team_heading[4].childNodes[3].innerText = rus.team.team_whatdo[4];
  team_heading[5].childNodes[3].innerText = rus.team.team_whatdo[5];

  //footer
  foot_nav[0].innerText = rus.footer.nav[0];
  foot_nav[1].innerText = rus.footer.nav[1];
  foot_nav[2].innerText = rus.footer.nav[2];
  footer.childNodes[3].childNodes[1].innerText = rus.footer.right;
  footer.childNodes[3].childNodes[3].innerHTML = rus.footer.developed;
}
