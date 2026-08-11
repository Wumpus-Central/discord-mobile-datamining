// _runtime/03491_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "e";
  },
  era: obj.default({ values: { narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" } }, defaultWidth: "wide" })
};

export default obj;
export default exports.default;