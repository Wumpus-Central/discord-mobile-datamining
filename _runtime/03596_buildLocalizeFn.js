// _runtime/03596_buildLocalizeFn.js
import buildLocalizeFn from "02004_buildLocalizeFn.js";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Kr.", "po. Kr."], wide: ["Prije Krista", "Poslije Krista"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Danj", "velja\u010Da", "o\u017Eujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"] }, defaultWidth: "wide", formattingValues: { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Dnja", "velja\u010De", "o\u017Eujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["N", "P", "U", "S", "\u010C", "P", "S"], short: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;