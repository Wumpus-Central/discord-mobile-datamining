// === Module 3706: ? ===

// Module 3706
import module_2033 from "module_2033" /* 2033 */;

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
obj = { values: { narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Kr.", "po. Kr."], wide: ["Prije Krista", "Poslije Krista"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Danj", "velja\u010Da", "o\u017Eujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"] }, defaultWidth: "wide", formattingValues: { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Dnja", "velja\u010De", "o\u017Eujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"] }, defaultFormattingWidth: "wide" });
date.day = obj.default({ values: { narrow: ["N", "P", "U", "S", "\u010C", "P", "S"], short: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;