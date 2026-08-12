// _runtime/03538_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

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
  era: obj.default({ values: { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\u00F8r Kristus", "etter Kristus"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\u00F8", "ma", "ti", "on", "to", "fr", "l\u00F8"], abbreviated: ["s\u00F8n", "man", "tir", "ons", "tor", "fre", "l\u00F8r"], wide: ["s\u00F8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00F8rdag"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 etterm.", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 etterm.", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morgenen", afternoon: "p\u00E5 ettermiddagen", evening: "p\u00E5 kvelden", night: "p\u00E5 natten" } }, defaultWidth: "wide" })
};

export default obj;
export default exports.default;