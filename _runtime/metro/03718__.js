// _runtime/metro/03718__.js
import 02033__ from "02033__.js";

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return String(Number(arg0));
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["D", "L", "M", "M", "G", "V", "S"], short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], wide: ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;