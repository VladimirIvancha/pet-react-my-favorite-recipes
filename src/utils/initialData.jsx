import kanifurutsu from '../assets/images/salad-kani-furutsu.PNG'
import starymunchen from '../assets/images/salad-stary-Munchen.PNG'
import klinkovysyr from '../assets/images/klinkovy-syr.PNG'
import saladizforeli01 from '../assets/images/salad-iz-foreli-s-imbirno-medovoi-zapravkoi.PNG'

const homeSideBarInitialData = [
  {
    id: "home_sidebar_title-001",
    title: "Все рецепты",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_encyclopedia",
  },
  {
    id: "home_sidebar_title-002",
    title: "Рецепты",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_recepty",
  },
  {
    id: "home_sidebar_title-003",
    title: "Все о еде",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_vse-o-ede",
  },
  {
    id: "home_sidebar_title-004",
    title: "ЗОЖ",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_zozh",
  },
  {
    id: "home_sidebar_title-005",
    title: "Готовим детям",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_gotovim-detyam",
  },
  {
    id: "home_sidebar_title-006",
    title: "Мужская кухня",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_muzhskaya-kuhnya",
  },
  {
    id: "home_sidebar_title-007",
    title: "Заготовки",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_zagotovki",
  },
  {
    id: "home_sidebar_title-008",
    title: "Энциклопедия",
    titleClassName: "categoryHeader_title categoryHeader_title_t-wrap",
    className: "categoryHeader_wrapper categoryHeader_wrapper_encyclopedia",
  },
]

const navBarStickyTopItemsInitialData = [
  {
    id: "main",
    link: "/",
    title: "Главная",
  },
  {
    id: "about",
    link: "/about",
    title: "О нас",
  },
  {
    id: "dashboard",
    link: "/products",
    title: "Продукция",
  },
  {
    id: "services",
    link: "/services",
    title: "Услуги",
  },
  {
    id: "contacts",
    link: "/contacts",
    title: "Контакты",
  },
]

const imgClass1 = "col-12 col-lg-7 col-xl-8 p-0 pe-lg-2 order-lg-0";
const imgClass2 = "col-12 col-lg-7 col-xl-8 p-0 ps-lg-2 order-lg-1";

const RecipeItemsInitialData = [
  {
    id: "item-001",
    type: "salad",
    title: "Салат 'Кани Фуруцу'",
    img: kanifurutsu,
    imgClass: imgClass1,
    ingredients: [
      {
        id: "ing-001",
        text: "100г креветок",
      },
      {
        id: "ing-002",
        text: "соль",
      },
      {
        id: "ing-003",
        text: "200г крабового мяса",
      },
      {
        id: "ing-004",
        text: "100г свежего или консервированного ананаса",
      },
      {
        id: "ing-005",
        text: "1 крупное яблоко",
      },
      {
        id: "ing-006",
        text: "1ч.л. лимонного сока",
      },
      {
        id: "ing-007",
        text: "100г листьев салата-латука",
      },
    ],
    subtitle: "Для соуса:",
    ingredientsAdditional: [
      {
        id: "ing-001",
        text: "2-3ст.л. соуса терияки",
      },
      {
        id: "ing-001",
        text: "1ст.л. майонеза",
      },
    ],
    process: [
      {
        id: "proc-001",
        text: "Креветки очистить от панцирей, удалить кишечную вену. Отварить в кипящей подсоленной воде в течение 2-3 минут. Откинуть на дуршлаг и остудить.",
      },
      {
        id: "proc-002",
        text: "Крабовое мясо и ананас крупно нарезать. Яблоко очистить от кожицы, удалить сердцевину, нарезать кубиками, сбрызнуть лимонным соком",
      },
      {
        id: "proc-003",
        text: "Листья салата помыть, обсушить, порвать руками на некрупные кусочки, выложить на порционные тарелки. Сверху разложить ананасы, креветки, крабовое  мясо и кусочки яблок.",
      },
      {
        id: "proc-004",
        text: "Смешать соус терики с майонезом, заправить полученной смесью готовый салат.",
      }
    ],
  },
  {
    id: "item-002",
    type: "salad",
    title: "Салат 'Старый Мюнхен'",
    img: starymunchen,
    imgClass: imgClass2,
    ingredients: [
      {
        id: "ing-001",
        text: "300г полукопченой колбасы",
      },
      {
        id: "ing-002",
        text: "3 средних маринованных огурчика",
      },
      {
        id: "ing-003",
        text: "2 средних красных луковицы",
      },
      {
        id: "ing-004",
        text: "200г твердого сыра",
      },
      {
        id: "ing-005",
        text: "1/2 пучка зеленого лука",
      },
      {
        id: "ing-006",
        text: "1/2 пучка петрушки",
      },
      {
        id: "ing-007",
        text: "1/2 пучка укропа",
      },
      {
        id: "ing-008",
        text: "1/2 стакана майонеза",
      },
      {
        id: "ing-009",
        text: "1/2 стакана сметаны",
      },
      {
        id: "ing-010",
        text: "1ст.л. яблочного уксуса",
      },
      {
        id: "ing-011",
        text: "1 ч.л. горчицы",
      },
      {
        id: "ing-012",
        text: "соль",
      },
      {
        id: "ing-013",
        text: "молотый острый красный перец",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [

    ],
    process: [
      {
        id: "proc-001",
        text: "Колбасу и огурчики нарезать тонкой соломкой. Лук почистить, нарезать тонкими полукольцами. Сыр нарезать кубиками.",
      },
      {
        id: "proc-002",
        text: "Зелёный лук, петрушку и укроп вымыть, стряхнуть воду, мелко нарубить.",
      },
      {
        id: "proc-003",
        text: "Соединить в салатнике колбасу, огурчики, лук и сыр, добавить нарубленную зелень, аккуратно перемешать.",
      },
      {
        id: "proc-004",
        text: "Приготовить заправку: смешать майонез, сметану, уксус, горчицу, добавить соль и перец по вкусу, тщательно взбить.",
      },
      {
        id: "proc-005",
        text: "Залить салат соусом, перемешать и подавать к столу.",
      }
    ],
  },
  {
    id: "item-003",
    type: "appetizer",
    title: "Закуска 'Клинковый Сыр'",
    img: klinkovysyr,
    imgClass: imgClass1,
    ingredients: [
      {
        id: "ing-001",
        text: "5л цельного кислого молока",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [

    ],
    process: [
      {
        id: "proc-001",
        text: "Молоко влить в огнеупорную ёмкость оставить на 12-14 часов при комнатной температуре для образования плотного сгустка.",
      },
      {
        id: "proc-002",
        text: "Поставить посуду с молоком в духовку, разогретую до 100°С, и запекать до уплотнения сгустка, затем выложить в небольшой полотняный мешок или плотную марлю и подвесить.",
      },
      {
        id: "proc-003",
        text: "После того как сыворотка стечёт, мешок плотно завязать и положить между двумя разделочными досками.",
      },
      {
        id: "proc-004",
        text: "На верхнюю доску поставить груз массой 5-7 кг и выдержать сыр под гнётом в течение суток.",
      },
      {
        id: "proc-005",
        text: "Спрессованный сыр вынуть из мешка, нарезать ломтиками и подавать к столу.",
      }
    ],
  },
  {
    id: "item-004",
    type: "salad",
    title: "Салат из Морской Форели с Имбирно-грейпфрутовой Заправкой",
    img: saladizforeli01,
    imgClass: imgClass2,
    ingredients: [
      {
        id: "ing-001",
        text: "400г филе морской форели без кожи",
      },
      {
        id: "ing-002",
        text: "1 крупный розовый грейпфрут",
      },
      {
        id: "ing-003",
        text: "1 крупное очень спелое авокадо",
      },
      {
        id: "ing-004",
        text: "горсть пророщенной золотистой фасоли",
      },
      {
        id: "ing-005",
        text: "2 горсти зеленого салата-микс",
      },
      {
        id: "ing-006",
        text: "2 маленьких лайма",
      },
      {
        id: "ing-007",
        text: "2 см свежего корня имбиря",
      },
      {
        id: "ing-008",
        text: "1 ст.л. жидкого меда",
      },
      {
        id: "ing-009",
        text: "1 ч.л. семян зиры",
      },
      {
        id: "ing-010",
        text: "3 ст.л. масла виноградных косточек соль, свежемолотый черный перец",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [

    ],
    process: [
      {
        id: "proc-001",
        text: "Обжарьте семена зиры на сухой сковородке, потряхивая, 2 мин. Затем растолките в ступке вместе с сопью и перцем.",
      },
      {
        id: "proc-002",
        text: "Натрите получившейся смесью филе форели со всех сторон. Положите филе в пароварку и готовьте 6-8 мин. За это время 1 раз переверните. В центре рыба должна остаться не вполне готовой.",
      },
      {
        id: "proc-003",
        text: "Авокадо очистите от кожуры и косточки, нарежьте кубиками. Полейте соком половины лайма.",
      },
      {
        id: "proc-004",
        text: "С грейпфрута острым ножом срежьте кожуру с белым слоем так. чтобы была видна мякотъ. Вырежьте филе по долькам между пленками. Сохраняйте весь выделяющийся при разделке грейпфрута сок, а потом отожмите сок из оставшихся пленок с мякотью.",
      },
      {
        id: "proc-005",
        text: "Натрите на терке имбирь, снимите с 1 лайма мелкой теркой цедру, выжмите сок из этого лайма и оставшейся половины. Смешайте сок грейпфрута, лаймов, цедру, имбирь, мед и масло виноградных косточек. Приправьте солью и перцем.",
      },
      {
        id: "proc-006",
        text: "Смешайте зеленый салат-микс, пророщенную фасоль, филе грейпфрута и авокадо, разложите по тарелкам. Готовую форель очень острым ножом нарежьте ломтиками, выложите поверх салата, полейте заправкой и подавайте",
      }
    ],
  },
]

export {
  homeSideBarInitialData,
  RecipeItemsInitialData,
  navBarStickyTopItemsInitialData,
}