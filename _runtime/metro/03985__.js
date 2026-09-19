// === Module 3985: ? ===

// Module 3985
import module_2117 from "module_2117" /* 2117 */;

if (!module_2117) {
  const obj2 = { default: module_2117 };
  let obj = obj2;
} else {
  obj = module_2117;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["M\u00D6", "MS"], abbreviated: ["M\u00D6", "MS"], wide: ["Milattan \u00D6nce", "Milattan Sonra"] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: ["1", "2", "3", "4"], abbreviated: ["1\u00C7", "2\u00C7", "3\u00C7", "4\u00C7"], wide: ["\u0130lk \u00E7eyrek", "\u0130kinci \u00C7eyrek", "\u00DC\u00E7\u00FCnc\u00FC \u00E7eyrek", "Son \u00E7eyrek"] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return Number(arg0) - 1;
    }
  }),
  month: obj.default({ values: { narrow: ["O", "\u015E", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], abbreviated: ["Oca", "\u015Eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011Fu", "Eyl", "Eki", "Kas", "Ara"], wide: ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\u00FCl", "Ekim", "Kas\u0131m", "Aral\u0131k"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["P", "P", "S", "\u00C7", "P", "C", "C"], short: ["Pz", "Pt", "Sa", "\u00C7a", "Pe", "Cu", "Ct"], abbreviated: ["Paz", "Pzt", "Sal", "\u00C7ar", "Per", "Cum", "Cts"], wide: ["Pazar", "Pazartesi", "Sal\u0131", "\u00C7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "\u00F6\u00F6", pm: "\u00F6s", midnight: "gy", noon: "\u00F6", morning: "sa", afternoon: "\u00F6s", evening: "ak", night: "ge" }, abbreviated: { am: "\u00D6\u00D6", pm: "\u00D6S", midnight: "gece yar\u0131s\u0131", noon: "\u00F6\u011Fle", morning: "sabah", afternoon: "\u00F6\u011Fleden sonra", evening: "ak\u015Fam", night: "gece" }, wide: { am: "\u00D6.\u00D6.", pm: "\u00D6.S.", midnight: "gece yar\u0131s\u0131", noon: "\u00F6\u011Fle", morning: "sabah", afternoon: "\u00F6\u011Fleden sonra", evening: "ak\u015Fam", night: "gece" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\u00F6\u00F6", pm: "\u00F6s", midnight: "gy", noon: "\u00F6", morning: "sa", afternoon: "\u00F6s", evening: "ak", night: "ge" }, abbreviated: { am: "\u00D6\u00D6", pm: "\u00D6S", midnight: "gece yar\u0131s\u0131", noon: "\u00F6\u011Flen", morning: "sabahleyin", afternoon: "\u00F6\u011Fleden sonra", evening: "ak\u015Famleyin", night: "geceleyin" }, wide: { am: "\u00F6.\u00F6.", pm: "\u00F6.s.", midnight: "gece yar\u0131s\u0131", noon: "\u00F6\u011Flen", morning: "sabahleyin", afternoon: "\u00F6\u011Fleden sonra", evening: "ak\u015Famleyin", night: "geceleyin" } }, defaultFormattingWidth: "wide" })
};

export default date;
export default exports.default;