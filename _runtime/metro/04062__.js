// _runtime/metro/04062__.js
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
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7),
};
obj3 = {
  values: { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\u00F8r Kristus", "etter Kristus"] },
  defaultWidth: "wide",
};
obj4 = {
  values: {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
  },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
};
obj5 = {
  values: {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
    wide: [
      "januar",
      "februar",
      "mars",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "desember",
    ],
  },
  defaultWidth: "wide",
};
obj6 = {
  values: {
    narrow: ["S", "M", "T", "O", "T", "F", "L"],
    short: ["s\u00F8", "ma", "ti", "on", "to", "fr", "l\u00F8"],
    abbreviated: ["s\u00F8n", "man", "tir", "ons", "tor", "fre", "l\u00F8r"],
    wide: ["s\u00F8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00F8rdag"],
  },
  defaultWidth: "wide",
};
obj7 = {
  values: {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "midnatt",
      noon: "middag",
      morning: "p\u00E5 morg.",
      afternoon: "p\u00E5 etterm.",
      evening: "p\u00E5 kvelden",
      night: "p\u00E5 natten",
    },
    abbreviated: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnatt",
      noon: "middag",
      morning: "p\u00E5 morg.",
      afternoon: "p\u00E5 etterm.",
      evening: "p\u00E5 kvelden",
      night: "p\u00E5 natten",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnatt",
      noon: "middag",
      morning: "p\u00E5 morgenen",
      afternoon: "p\u00E5 ettermiddagen",
      evening: "p\u00E5 kvelden",
      night: "p\u00E5 natten",
    },
  },
  defaultWidth: "wide",
};

export default date;
