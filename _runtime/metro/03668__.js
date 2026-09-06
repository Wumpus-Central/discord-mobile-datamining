// _runtime/metro/03668__.js
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
obj = { values: { narrow: ["fvt", "vt"], abbreviated: ["f.v.t.", "v.t."], wide: ["f\u00F8r vesterlandsk tidsregning", "vesterlandsk tidsregning"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\u00F8", "ma", "ti", "on", "to", "fr", "l\u00F8"], abbreviated: ["s\u00F8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\u00F8r."], wide: ["s\u00F8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00F8rdag"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;