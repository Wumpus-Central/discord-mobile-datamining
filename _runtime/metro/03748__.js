// _runtime/metro/03748__.js
import 02033__ from "02033__.js";

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\u00F8r Kristus", "etter Kristus"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\u00F8", "ma", "ti", "on", "to", "fr", "l\u00F8"], abbreviated: ["s\u00F8n", "man", "tir", "ons", "tor", "fre", "l\u00F8r"], wide: ["s\u00F8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00F8rdag"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 etterm.", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 etterm.", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morgenen", afternoon: "p\u00E5 ettermiddagen", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" } }, defaultWidth: "wide" });

export default date;
export default exports.default;