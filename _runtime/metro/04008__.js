// _runtime/metro/04008__.js
import buildLocalizeFn from "../02124_buildLocalizeFn.js";

let obj;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
if (!buildLocalizeFn) {
  obj = { default: buildLocalizeFn };
  const obj2 = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
const date = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if (0 === NumberResult) {
      return "0";
    } else {
      let str = "\u00E8me";
      if (1 === NumberResult) {
        let str3 = "er";
        if (unit) {
          const items = ["year", "week", "hour", "minute", "second"];
          str3 = "er";
          if (items.includes(unit)) {
            str3 = "\u00E8re";
          }
        }
        str = str3;
      }
      return NumberResult + str;
    }
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7),
};
obj3 = {
  values: {
    narrow: ["av. J.-C", "ap. J.-C"],
    abbreviated: ["av. J.-C", "ap. J.-C"],
    wide: ["avant J\u00E9sus-Christ", "apr\u00E8s J\u00E9sus-Christ"],
  },
  defaultWidth: "wide",
};
obj4 = {
  values: {
    narrow: ["T1", "T2", "T3", "T4"],
    abbreviated: ["1er trim.", "2\u00E8me trim.", "3\u00E8me trim.", "4\u00E8me trim."],
    wide: ["1er trimestre", "2\u00E8me trimestre", "3\u00E8me trimestre", "4\u00E8me trimestre"],
  },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
};
obj5 = {
  values: {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "janv.",
      "f\u00E9vr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "ao\u00FBt",
      "sept.",
      "oct.",
      "nov.",
      "d\u00E9c.",
    ],
    wide: [
      "janvier",
      "f\u00E9vrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "ao\u00FBt",
      "septembre",
      "octobre",
      "novembre",
      "d\u00E9cembre",
    ],
  },
  defaultWidth: "wide",
};
obj6 = {
  values: {
    narrow: ["D", "L", "M", "M", "J", "V", "S"],
    short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
    abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  },
  defaultWidth: "wide",
};
obj7 = {
  values: {
    narrow: {
      am: "AM",
      pm: "PM",
      midnight: "minuit",
      noon: "midi",
      morning: "mat.",
      afternoon: "ap.m.",
      evening: "soir",
      night: "mat.",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "minuit",
      noon: "midi",
      morning: "matin",
      afternoon: "apr\u00E8s-midi",
      evening: "soir",
      night: "matin",
    },
    wide: {
      am: "AM",
      pm: "PM",
      midnight: "minuit",
      noon: "midi",
      morning: "du matin",
      afternoon: "de l\u2019apr\u00E8s-midi",
      evening: "du soir",
      night: "du matin",
    },
  },
  defaultWidth: "wide",
};

export default date;
