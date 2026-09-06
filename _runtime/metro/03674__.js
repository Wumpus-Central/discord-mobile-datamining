// _runtime/metro/03674__.js
import 02033__ from "02033__.js";

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
obj = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "M\u00E4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "M\u00E4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] };
const date = {
  ordinalNumber(arg0) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return arg0 - 1;
    }
  }),
  month: obj.default({ values: obj, formattingValues: { narrow: obj.narrow, abbreviated: ["Jan.", "Feb.", "M\u00E4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: obj.wide }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" } }, defaultFormattingWidth: "wide" })
};

export default date;
export default exports.default;