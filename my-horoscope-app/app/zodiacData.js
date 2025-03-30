import {Typography} from "@mui/material";

export const ZodiacSigns = [
  "Овен",
  "Телець",
  "Близнюки",
  "Рак",
  "Лев",
  "Діва",
  "Терези",
  "Скорпіон",
  "Стрілець",
  "Козеріг",
  "Водолій",
  "Риби",
];

export const ZodiacImages = {
  Овен: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13968.jpg?t=st=1743249977~exp=1743253577~hmac=9b251f0f26ab530fbcfab8ce044846e84f24d179e64d6241c55f28ccc3f409c5&w=740",
  Телець: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13965.jpg?t=st=1743249967~exp=1743253567~hmac=ebd759c23e56580edeb22310db30575fec76e067d0b99ac3eec7cc1531aa913a&w=740",
  Близнюки: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13972.jpg?t=st=1743249903~exp=1743253503~hmac=8a33e948340805b408b9ef5638a4013c3cb7ae34cda1077a7e58d7fa4888728c&w=740",
  Рак: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13971.jpg?t=st=1743250039~exp=1743253639~hmac=6823e81c7d4a8c7bbd4159ed7af2862065354ceaf0152ef2a2a686106ea1c0f7&w=740",
  Лев: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13964.jpg?t=st=1743250025~exp=1743253625~hmac=09bded05292141e20a96fb0b5f81f93e13686f877d42fc0e310db5e0a8b8319c&w=740",
  Діва: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13967.jpg?t=st=1743249959~exp=1743253559~hmac=851de767e02e0dffddefe14f19eb8741ad785536716d833e52926f2e99ef5d4e&w=740",
  Терези: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13970.jpg?t=st=1743250033~exp=1743253633~hmac=1cac48c987008ac018ad1bd27d2203850e2f35ec9ab19e20cc40a7583b5b538c&w=740",
  Скорпіон: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13966.jpg?t=st=1743249970~exp=1743253570~hmac=b544c57a8a5971474cdab76616dd719152b8f3420a7360746b3be223e0f26aae&w=740",
  Стрілець: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13961.jpg?t=st=1743249943~exp=1743253543~hmac=90d219f16c14cdc83231eb0838af3fb0a7f917918f4f83caa9849bdf44096686&w=740",
  Козеріг: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13963.jpg?t=st=1743250027~exp=1743253627~hmac=b9ae44b10ac7f8c2c0c83047e956ce6b4ecdb10576c7222fd284bbcc09c2aefc&w=740",
  Водолій: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13969.jpg?t=st=1743249964~exp=1743253564~hmac=1e69fe017ddb753f59989b37087f8e497d8e2b9708f93e63684713db62153b16&w=740",
  Риби: "https://img.freepik.com/free-vector/hand-drawn-zodiac-characters-background_52683-13962.jpg?t=st=1743250031~exp=1743253631~hmac=1dcbf704d8a80bd4ede471a60f7e6aa6ebbe28702f71a0974e69358969aca50b&w=740",
};

export const HealthIcon = "https://as1.ftcdn.net/v2/jpg/12/28/02/80/1000_F_1228028011_MC6zlK8LtRGUTwbMumFiTc4FRQWeXEVh.webp";
export const RelationshipIcon = "https://as2.ftcdn.net/v2/jpg/13/21/82/63/1000_F_1321826313_sfWGOgZBRT4UYp8QQCyDL082dyhJ20L3.webp";
export const CareerIcon = "https://as1.ftcdn.net/v2/jpg/10/49/43/12/1000_F_1049431246_oqHAyLJZ1kHIb3WyCFba5zwS8blDLVOd.webp";

export const getDailyForecast = (date) => {
  const days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  const monthsGenitive = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = monthsGenitive[monthIndex];

  return (
    <Typography variant="subtitle1">
      {`${dayName}`} <br />
      {`${day} ${month}`}
    </Typography>
  );
};

export const getZodiacDescription = (sign, careerScore, relationshipScore, healthScore) => {

  const getHealthDescription = (healthScore) => {
    if (healthScore < 33) {
      return "Ваше здоров'я потребує уваги. Потрібно більше турбуватися про себе та звертатися до лікаря, якщо потрібно.";
    } else if (healthScore >= 33 && healthScore < 66) {
      return "Ваше здоров'я стабільне, але вам слід більше зосередитись на фізичній активності та правильному харчуванні.";
    } else {
      return "Ваше здоров'я на високому рівні! Ви відчуваєте енергію та бадьорість, продовжуйте вести здоровий спосіб життя.";
    }
  };

  const getRelationshipDescription = (relationshipScore) => {
    if (relationshipScore < 33) {
      return "Ваші відносини потребують покращення. Може бути корисно обговорити важливі питання з близькими.";
    } else if (relationshipScore >= 33 && relationshipScore < 66) {
      return "Відносини на середньому рівні. Потрібно більше відкритості та уваги до почуттів інших.";
    } else {
      return "Ваші відносини в гармонії! Є порозуміння та підтримка з боку партнерів і друзів.";
    }
  };

  const getCareerDescription = (careerScore) => {
    if (careerScore < 33) {
      return "У кар'єрі є труднощі. Можливо, час подумати про зміни або звернутися за допомогою до наставника.";
    } else if (careerScore >= 33 && careerScore < 66) {
      return "Кар'єра на хорошому рівні, але є місце для росту. Продовжуйте працювати над своїми навичками та розвивайтесь.";
    } else {
      return "Ваші кар'єрні досягнення вражають! Ви на вірному шляху, продовжуйте працювати, і успіх буде гарантований.";
    }
  };

  const descriptions = {
    Овен: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Не бійтеся проявити ініціативу в усіх аспектах свого життя. Залишайтеся відкритими до змін і нових можливостей.",
    },
    Телець: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваші зусилля поступово приносять плоди. Тримайте курс і стежте за своїм здоров'ям, щоб не виснажувати себе.",
    },
    Близнюки: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Справи в кар'єрі потребують більше уваги до деталей, а у відносинах важливо знайти баланс між емоціями та логікою.",
    },
    Рак: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Наголосіть на важливості емоційної рівноваги в особистих стосунках і не забувайте про себе в прагненні до кар'єрного зростання.",
    },
    Лев: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваші лідерські якості дозволять вам досягти нових висот у кар'єрі. Пам'ятайте про підтримку близьких у цей період.",
    },
    Діва: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Зберігайте фокус на деталях у всіх аспектах. Не забувайте піклуватися про себе, особливо в стосунках і на роботі.",
    },
    Терези: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Баланс є ключовим у цей період. Працюйте над своєю здатністю поєднувати особисте та професійне життя.",
    },
    Скорпіон: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваші рішучі дії можуть принести великі результати. Продовжуйте бути наполегливими та не бійтеся змін.",
    },
    Стрілець: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваша енергія безмежна, але пам'ятайте про баланс у стосунках. Працюйте над довгостроковими цілями.",
    },
    Козеріг: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваша дисципліна допоможе в кар'єрі, але не забувайте про важливість емоційної підтримки у стосунках.",
    },
    Водолій: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваш інноваційний підхід допоможе вам досягти успіху в кар'єрі, але важливо знаходити час для важливих стосунків.",
    },
    Риби: {
      health: getHealthDescription(healthScore),
      relationships: getRelationshipDescription(relationshipScore),
      career: getCareerDescription(careerScore),
      description: "Ваші інтуїтивні здібності допоможуть вам в особистих відносинах. Залишайтеся відкритими до нових можливостей у кар'єрі.",
    }
  };

  // Return a formatted description as a string
  return `${descriptions[sign]?.description}  <hr />
     ${descriptions[sign]?.health}
    <br />${descriptions[sign]?.relationships}
    <br /> ${descriptions[sign]?.career}`;
};
