// === Module 4050: ? ===

// Module 4050
import buildLocalizeFn from "buildLocalizeFn" /* 2124 */;

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
    return Number(arg0) + "e";
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7)
};
obj3 = { values: { narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"] }, defaultWidth: "wide" };
obj4 = {
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
};
obj5 = { values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] }, defaultWidth: "wide" };
obj6 = { values: { narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] }, defaultWidth: "wide" };
obj7 = { values: { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" } }, defaultWidth: "wide" };

export default date;