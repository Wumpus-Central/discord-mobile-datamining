// === Module 3662: ? ===

// Module 3662
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
obj = { values: { narrow: ["p\u0159. n. l.", "n. l."], abbreviated: ["p\u0159. n. l.", "n. l."], wide: ["p\u0159ed na\u0161\u00EDm letopo\u010Dtem", "na\u0161eho letopo\u010Dtu"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["1. \u010Dtvrtlet\u00ED", "2. \u010Dtvrtlet\u00ED", "3. \u010Dtvrtlet\u00ED", "4. \u010Dtvrtlet\u00ED"], wide: ["1. \u010Dtvrtlet\u00ED", "2. \u010Dtvrtlet\u00ED", "3. \u010Dtvrtlet\u00ED", "4. \u010Dtvrtlet\u00ED"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["L", "\u00DA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"], abbreviated: ["led", "\u00FAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\u00E1\u0159", "\u0159\u00EDj", "lis", "pro"], wide: ["leden", "\u00FAnor", "b\u0159ezen", "duben", "kv\u011Bten", "\u010Derven", "\u010Dervenec", "srpen", "z\u00E1\u0159\u00ED", "\u0159\u00EDjen", "listopad", "prosinec"] }, defaultWidth: "wide", formattingValues: { narrow: ["L", "\u00DA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"], abbreviated: ["led", "\u00FAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\u00E1\u0159", "\u0159\u00EDj", "lis", "pro"], wide: ["ledna", "\u00FAnora", "b\u0159ezna", "dubna", "kv\u011Btna", "\u010Dervna", "\u010Dervence", "srpna", "z\u00E1\u0159\u00ED", "\u0159\u00EDjna", "listopadu", "prosince"] }, defaultFormattingWidth: "wide" });
date.day = obj.default({ values: { narrow: ["ne", "po", "\u00FAt", "st", "\u010Dt", "p\u00E1", "so"], short: ["ne", "po", "\u00FAt", "st", "\u010Dt", "p\u00E1", "so"], abbreviated: ["ned", "pon", "\u00FAte", "st\u0159", "\u010Dtv", "p\u00E1t", "sob"], wide: ["ned\u011Ble", "pond\u011Bl\u00ED", "\u00FAter\u00FD", "st\u0159eda", "\u010Dtvrtek", "p\u00E1tek", "sobota"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, abbreviated: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, wide: { am: "dopoledne", pm: "odpoledne", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, abbreviated: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, wide: { am: "dopoledne", pm: "odpoledne", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\u00E1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;