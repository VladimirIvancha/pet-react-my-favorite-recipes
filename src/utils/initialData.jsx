import kanifurutsu from '../assets/images/salad-kani-furutsu.webp'
import starymunchen from '../assets/images/salad-stary-Munchen.webp'
import klinkovysyr from '../assets/images/appetizer-klinkovy-syr.webp'
import saladizforeli01 from '../assets/images/salad-iz-foreli-s-imbirno-medovoi-zapravkoi.webp'
import saladizyazyka01 from '../assets/images/salad-iz-yazyka.webp'
import pastrykeskmamin from '../assets/images/pastry-kesk-mamin.webp'
import mainkolbaskiizkuritsyvbekone from '../assets/images/main-kolbaski-iz-kuritsy-v-bekone.webp'
import befstroganoviztelyatiny from '../assets/images/befstroganov-iz-telyatiny_result.webp'
import azupotatarskiresult from '../assets/images/azu-po-tatarski_result.webp'
import mantysbaraninoyitykvoy from '../assets/images/manty-s-baraninoy-i-tykvoy_result.webp'
import varenikisvishney from '../assets/images/vareniki-s-vishney_result.webp'

const homeSideBarInitialData = [
  {
    id: "home_sidebar_title-001",
    title: "Все рецепты",
    type: "all",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_shop",
  },
  {
    id: "home_sidebar_title-002",
    title: "Закуски",
    type: "appetizer",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_vse-o-ede",
  },
  {
    id: "home_sidebar_title-003",
    title: "Салаты",
    type: "salad",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_encyclopedia",
  },
  {
    id: "home_sidebar_title-004",
    title: "Основные блюда",
    type: "main",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_muzhskaya-kuhnya",
  },
  {
    id: "home_sidebar_title-004",
    title: "Первые блюда",
    type: "first",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_recepty",
  },
  {
    id: "home_sidebar_title-005",
    title: "Десерты",
    type: "dessert",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_gotovim-detyam",
  },
  {
    id: "home_sidebar_title-004",
    title: "Напитки",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_zagotovki",
  },
  {
    id: "home_sidebar_title-004",
    title: "На пару",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_zozh",
  },
  {
    id: "home_sidebar_title-006",
    title: "Мужская кухня",
    titleClassName: "categoryHeader_title",
    className: "categoryHeader_wrapper categoryHeader_wrapper_muzhskaya-kuhnya",
  },
  {
    id: "home_sidebar_title-007",
    title: "Закатки и соленья",
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
    steam: false,
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
        id: "ing-002",
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
    steam: false,
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
    steam: false,
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
    steam: true,
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
  {
    id: "item-005",
    type: "salad",
    title: "Салат из Языка с Орехами и Зеленой Фасолью",
    img: saladizyazyka01,
    imgClass: imgClass1,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "1 телячий язык весом 1-1,2 кг",
      },
      {
        id: "ing-002",
        text: "200 г зеленой стручковой фасоли",
      },
      {
        id: "ing-003",
        text: "2 зубчика чеснока",
      },
      {
        id: "ing-004",
        text: "50 г очищенных кедровых орехов",
      },
      {
        id: "ing-005",
        text: "4-5 веточек кинзы",
      },
      {
        id: "ing-006",
        text: "3-4 ст. л. домашнего майонеза",
      },
      {
        id: "ing-007",
        text: "морская соль, свежемолотый черный перец",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [

    ],
    process: [
      {
        id: "proc-001",
        text: "Начинайте готовить за 3 ч до подачи.",
      },
      {
        id: "proc-002",
        text: "Тщательно вымойте язык щеткой, срежьте лишнюю соединительную ткань, поместите язык в пароварку. Готовьте до мягкости 1,5-2 ч, затем обдайте язык ледяной водой и очистите от кожи, сняв ее чулком. Остудите язык.",
      },
      {
        id: "proc-003",
        text: "У фасоли удалите кончики. Если стручки слишком длинные, нарежьте их небольшими кусочками Поместите фасоль на верхний уровень пароварки за 15 мин до готовности языка.",
      },
      {
        id: "proc-004",
        text: "Остывший язык нарежьте соломкой. Чеснок мелко порубите Отделите листочки кинзы от стеблей.",
      },
      {
        id: "proc-005",
        text: "Соедините ломтики языка, фасоль чеснок и кинзу, приправьте солью и перцем по вкусу, заправьте майонезом.",
      },
      {
        id: "proc-006",
        text: "Готовый салат посыпьте кедровыми орехами и украсьте листиками кинзы.",
      }
    ],
  },
  {
    id: "item-006",
    type: "dessert",
    title: "Кекс Мамин с Изюмом",
    img: pastrykeskmamin,
    imgClass: imgClass2,
    steam: false,
    ingredients: [
      {
        id: "ing-001",
        text: "1/2 стакана изюма",
      },
      {
        id: "ing-002",
        text: "3 яйца",
      },
      {
        id: "ing-003",
        text: "1 стакан сахара",
      },
      {
        id: "ing-004",
        text: "1 стакан муки",
      },
      {
        id: "ing-005",
        text: "50г сливочного масла",
      },
      {
        id: "ing-006",
        text: "1/2 ч.л. разрыхлителя",
      },
      {
        id: "ing-007",
        text: "1/2 ч.л. ванильного сахара",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [
      {
        id: "ing-001",
        text: "2 ст.л. крахмала без горки, если нужен рассыпчатый кекс",
      },
    ],
    process: [
      {
        id: "proc-001",
        text: "Изюм запарить - залить кипятком.",
      },
      {
        id: "proc-002",
        text: "Взбить миксером 3 яйца с 1 стаканом сахара.",
      },
      {
        id: "proc-003",
        text: "Добавить во взбитые яйца 50г растопленного сливочного масла.",
      },
      {
        id: "proc-004",
        text: "Смешать стакан просеянной муки с разрыхлителем, ванильным сахаром и добавить в общую смесь. Перемешать ложкой снизу вверх.",
      },
      {
        id: "proc-005",
        text: "Изюм обвалять в муке и добавить в тесто, хорошо перемешав.",
      },
      {
        id: "proc-006",
        text: "Хорошо смазать форму сливочным маслом.",
      },
      {
        id: "proc-007",
        text: "Вылить в форму тесто и поставить в холодную духовку.",
      },
      {
        id: "proc-008",
        text: "Выпекать при температуре 180-200 град С в течении 40-55 мин в зависимости от типа формы. Не заглядывать первые 30 мин!!! Готовность проверять деревянными шпажками.",
      },
      {
        id: "proc-009",
        text: "По готовности достать из духовки, дать постоять 10 мин, после чего перевернуть и посыпать сверху сахарной пудрой, либо полить помадкой.",
      }
    ],
  },
  {
    id: "item-007",
    type: "main",
    title: "Колбаски в Беконе",
    img: mainkolbaskiizkuritsyvbekone,
    imgClass: imgClass1,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "500 г мякоти баранины",
      },
      {
        id: "ing-002",
        text: "200 г куриного филе",
      },
      {
        id: "ing-003",
        text: "50 г курдючного жира, по желанию",
      },
      {
        id: "ing-004",
        text: "100-150 г тонких полосок нежирного бекона",
      },
      {
        id: "ing-005",
        text: "1 средняя белая луковица",
      },
      {
        id: "ing-006",
        text: "2 зубчика чеснока",
      },
      {
        id: "ing-007",
        text: "1 ч.л. молотой паприки",
      },
      {
        id: "ing-008",
        text: "1 ч.л. сухого орегано",
      },
      {
        id: "ing-009",
        text: "соль, свежемолотый черный перец, крошеный лед",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [
      
    ],
    process: [
      {
        id: "proc-001",
        text: "Баранину, куриное филе и курдючный жир порубите в фарш как можно мельче тесаком или тяжелым ножом (или пропустите через мясорубку со средней решеткой).",
      },
      {
        id: "proc-002",
        text: "Измельчите лук и чеснок. Смешайте с фаршем, приправьте паприкой, орегано, солью и перцем по вкусу. Вымешивайте фарш руками 15 мин. Всыпьте небольшую горсть крошеного льда и вымешивайте еще 5 мин.",
      },
      {
        id: "proc-003",
        text: "Смачивая руки в горячей воде, слепите из фарша продолговатые колбаски. Разрежьте полоски бекона вдоль пополам, каждой полоской неплотной спиралью (должно быть видно мясо) оберните колбаски.",
      },
      {
        id: "proc-004",
        text: "Уложите колбаски в пароварку, готовьте примерно 25 мин. Сок, вытекающий из проколотой колбаски, должен быть совершенно прозрачным.",
      },
    ],
  },
  {
    id: "item-008",
    type: "main",
    title: "Бефстроганов из Телятины",
    img: befstroganoviztelyatiny,
    imgClass: imgClass2,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "500 г телячьей вырезки",
      },
      {
        id: "ing-002",
        text: "2 средние луковицы",
      },
      {
        id: "ing-003",
        text: "10-12 средних шампиньонов",
      },
      {
        id: "ing-004",
        text: "200 г сметаны средней жирности",
      },
      {
        id: "ing-005",
        text: "50 г сливочного масла",
      },
      {
        id: "ing-006",
        text: "1 ст. л. муки",
      },
      {
        id: "ing-007",
        text: "соль, свежемолотый белый перец",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [
      
    ],
    process: [
      {
        id: "proc-001",
        text: "Обсушите мясо бумажными полотенцами. Сначала нарежьте поперек волокон на ломтики толщиной 1 см и отбейте с двух сторон, затем нарежьте на полоски толщиной 5 мм.",
      },
      {
        id: "proc-002",
        text: "Очистите лук и нарехьте тонкими кольцами. У шампиньонов удалите ножки, шлягки нарежьте пластинками.",
      },
      {
        id: "proc-003",
        text: "Разогрейте в глубокой сковородке сливочное масло и положите лук и полоски мяса. Обжарьте на большом огне, постоянно помешивая 3-4 мин. Добавьте муку, перемешайте и прогрейте 1 мин.",
      },
      {
        id: "proc-004",
        text: "Переложите мясо в любую цельную емкость, пригодную для пароварки, добавьте нарезанные грибы и добавьте сметану. Посолите и приправьте перцем. Готовьте 25 мин. при интенсивном кипении.",
      },
      {
        id: "proc-005",
        text: "Дополнительно! Вместо шампиньонов вы можете, конечно, взять благородные грибы: лисички или белые. Причем белые годятся и сушеные - просто замочите их заранее, за пару часов, в теплой воде, а затем выньте из настоя и нарежьте. Настой можно влить в пароварку и готовить бефстроганов на нем.",
      },
    ],
  },
  {
    id: "item-009",
    type: "main",
    title: "Азу по-Татарски",
    img: azupotatarskiresult,
    imgClass: imgClass2,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "500 г мякоти говядины (вырезки или мякоти с задней ноги)",
      },
      {
        id: "ing-002",
        text: "5-6 средних картофелин",
      },
      {
        id: "ing-003",
        text: "2 средних крепких соленых огурца",
      },
      {
        id: "ing-004",
        text: "1 большая луковица",
      },
      {
        id: "ing-005",
        text: "1 зубчик чеснока",
      },
      {
        id: "ing-006",
        text: "2 ст. л. томатного пюре",
      },
      {
        id: "ing-007",
        text: "6 ст. л. топленого масла",
      },
      {
        id: "ing-008",
        text: "морская соль, свежемолотый черный перец",
      },
    ],
    subtitle: "",
    ingredientsAdditional: [
      
    ],
    process: [
      {
        id: "proc-001",
        text: "Обсушите мясо бумажными полотенцами и нарежьте полосками шириной 1 см, длиной 5 см. Измельчите лук и чеснок. Нарежьте соломкой соленые огурцы (если у orypцов толстая кожица, ее можно очистить). Измельчите чеснок.",
      },
      {
        id: "proc-002",
        text: "Разогрейте в глубокой сковородке 1 ст л. топленого масла и на среднем огне потушите до прозрачности лук, 5 мин. Выложите лук в емкость пароварки. Положите в сковороду еще 2 ст. л. масла, поставьте на максималытый огонь. Положите мясо и быстро обжарьте, часто помешивая.",
      },
      {
        id: "proc-003",
        text: "Поместите обжаренное мясо в любую цельную емкосгь, пригодную для пароварки, добавьте измельченный чеснок, oгурцы и томатное пюре, влейте 250 мл горячей воды, посолите и приправьте черным перцем. Готовьте 20 мин.",
      },
      {
        id: "proc-004",
        text: "Очистите картофель, нарежьте соломкой и обсушите. Обжарьте на оставшемся разогретом масле до золотистой корочки. Переложите картофель в пароварку к мясу, аккуратно перемешайте и готовьте еще 25 мин.",
      },
      {
        id: "proc-005",
        text: "Дополнительно! Вы можете не обжаривать мясо перед приготовлением в пароварке, а просто увеличить время приготовления примерно на 20 мин. Возможно, при этом блюдо потеряет часть своей внешней привлекательности, но будет более полезным.",
      },
    ],
  },
  {
    id: "item-010",
    type: "main",
    title: "Манты с Бараниной и Тыквой",
    img: mantysbaraninoyitykvoy,
    imgClass: imgClass2,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "400 г мякоти баранины",
      },
      {
        id: "ing-002",
        text: "150 г курдючного жира",
      },
      {
        id: "ing-003",
        text: "250 г тыквы",
      },
      {
        id: "ing-004",
        text: "2 большие белые луковицы",
      },
      {
        id: "ing-005",
        text: "соль, свежемолотый черный перец, сливочное масло для смазывания, катык/сметана, масло и зелень для подачи",
      },
    ],
    subtitle: "Для теста",
    ingredientsAdditional: [
      {
        id: "ing-001",
        text: "500 г муки",
      },
      {
        id: "ing-002",
        text: "200 мл бутилированной воды",
      },
      {
        id: "ing-003",
        text: "соль",
      },
    ],
    process: [
      {
        id: "proc-001",
        text: "Из просеянной муки, соли и теплой вода замесите мягкое упругое тесто, заверните в пленку и оставьте в тепле на 20 мин.",
      },
      {
        id: "proc-002",
        text: "Мясо лук, курдючный жир и тыкву мелко порубите, приправьте перцем, посолите по вкусу, добавьте 2 ст л. холодной воды и тщательно перемешайте.",
      },
      {
        id: "proc-003",
        text: "Раскатайте тесто в тонкий пласт на присыпанной мукой поверхности и вырежьте кружки диаметром 8-9 см (или нарежьте тесто такими же квадратами).",
      },
      {
        id: "proc-004",
        text: "Разложите на кружки из теста начинку. Если в миске с фаршем скопился выделившийся сок, слейте его - он мешает лепке.",
      },
      {
        id: "proc-005",
        text: "Соедините 4 края теста (или 4 угла, если куски квадратные) над фаршем и защипните получившиеся 4 вертикальных боковых отверстия.",
      },
      {
        id: "proc-006",
        text: "Затем попарно соедините нижние уголки и защипните. Готовые манты сразу же закройте чуть влажным полотенцем.",
      },
      {
        id: "proc-007",
        text: "Обильно смажьте решетку пароварки маслом, выложите манты. Готовьте на пару при сильном кипении 40-45 мин. К горячим мантам можно подать катык или сметану, сливочное масло и зелень.",
      },
    ],
  },
  {
    id: "item-011",
    type: "main",
    title: "Вареники с Вишней",
    img: varenikisvishney,
    imgClass: imgClass2,
    steam: true,
    ingredients: [
      {
        id: "ing-001",
        text: "300 г свежей вишни или замороженной без косточек",
      },
      {
        id: "ing-002",
        text: "100 г сахара",
      },
      {
        id: "ing-003",
        text: "2 ст. л. картофельного или кукурузного крахмала",
      },
      {
        id: "ing-004",
        text: "100 г густой сметаны",
      },
      {
        id: "ing-005",
        text: "сливочное масло для смазывания",
      },
    ],
    subtitle: "Для теста",
    ingredientsAdditional: [
      {
        id: "ing-001",
        text: "400 г муки",
      },
      {
        id: "ing-002",
        text: "1 яйцо",
      },
      {
        id: "ing-003",
        text: "щепотка соли",
      },
    ],
    process: [
      {
        id: "proc-001",
        text: "Из свежей вишни удалите косточки и засыпьте ягоды сахаром. Замороженную вишню засыпьте сахаром сразу, не размораживая. Оставьте вишню с сахаром при комнатной температуре на 20-40 мин. Слейте образовавшийся сок в отдельную посуду. Добавьте к ягодам крахмал и перемешайте.",
      },
      {
        id: "proc-002",
        text: "Для теста просейте муку, влейте 150 мл теплой воды и слегка взбейте яйца. Добавьте соль и замесите эластичнее тесто. Заверните тесто в пленку и оставьте на 20 мин.",
      },
      {
        id: "proc-003",
        text: "Расстоявшееся тесто раскатайте в тонкий пласт и вырежьте формочкой кружки диаметром 5-6 см.",
      },
      {
        id: "proc-004",
        text: "На середину каждого кружка положите вишневую начинку и плотно защипните края. При желании можете закрепить край косичкой, делая мелкие закрученные защипы внахлест.",
      },
      {
        id: "proc-005",
        text: "Уложите вареники в смазанную маслом пароварку и готовьте при интенсивном кипении 20-25 мин.",
      },
      {
        id: "proc-006",
        text: "Вишневый сек перемешайте со сметаной и полейте им готовые вареники.",
      },
    ],
  },
]

export {
  homeSideBarInitialData,
  RecipeItemsInitialData,
  navBarStickyTopItemsInitialData,
}