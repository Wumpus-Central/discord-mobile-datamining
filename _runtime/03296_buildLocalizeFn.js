// _runtime/03296_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "M\u00E4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "M\u00E4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] };

export default {
  ordinalNumber(arg0) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj3),
  month: obj.default({ values: obj, formattingValues: { narrow: obj.narrow, abbreviated: ["Jan.", "Feb.", "M\u00E4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: obj.wide }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" } }, defaultFormattingWidth: "wide" })
};
export default exports.default;