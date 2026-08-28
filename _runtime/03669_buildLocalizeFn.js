// === Module 3669: buildLocalizeFn ===

// Module 3669 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn" /* 2005 */;

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    const NumberResult = Number(arg0);
    const result = NumberResult % 100;
    if (20 < result) {
      const result1 = result % 10;
      return NumberResult + ":a";
    }
    return NumberResult + ":e";
  },
  era: obj.default({ values: { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\u00F6re Kristus", "efter Kristus"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\u00F6", "m\u00E5", "ti", "on", "to", "fr", "l\u00F6"], abbreviated: ["s\u00F6n", "m\u00E5n", "tis", "ons", "tors", "fre", "l\u00F6r"], wide: ["s\u00F6ndag", "m\u00E5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\u00F6rdag"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "morg.", afternoon: "efterm.", evening: "kv\u00E4ll", night: "natt" }, abbreviated: { am: "f.m.", pm: "e.m.", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "efterm.", evening: "kv\u00E4ll", night: "natt" }, wide: { am: "f\u00F6rmiddag", pm: "eftermiddag", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "eftermiddag", evening: "kv\u00E4ll", night: "natt" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 efterm.", evening: "p\u00E5 kv\u00E4llen", night: "p\u00E5 natten" }, abbreviated: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morg.", afternoon: "p\u00E5 efterm.", evening: "p\u00E5 kv\u00E4llen", night: "p\u00E5 natten" }, wide: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\u00E5 morgonen", afternoon: "p\u00E5 eftermiddagen", evening: "p\u00E5 kv\u00E4llen", night: "p\u00E5 natten" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;