// _runtime/03448_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(Number(arg0));
  },
  era: obj.default({ values: { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["D", "L", "M", "M", "G", "V", "S"], short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], wide: ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;