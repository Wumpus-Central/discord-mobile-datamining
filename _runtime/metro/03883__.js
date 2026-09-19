// _runtime/metro/03883__.js
import 02117__ from "02117__.js";

if (!module_2117) {
  const obj2 = { default: module_2117 };
  let obj = obj2;
} else {
  obj = module_2117;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "\u00BA";
  },
  era: obj.default({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despu\u00E9s de cristo"] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre"] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return Number(arg0) - 1;
    }
  }),
  month: obj.default({ values: { narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "mi", "ju", "vi", "s\u00E1"], abbreviated: ["dom", "lun", "mar", "mi\u00E9", "jue", "vie", "s\u00E1b"], wide: ["domingo", "lunes", "martes", "mi\u00E9rcoles", "jueves", "viernes", "s\u00E1bado"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" } }, defaultFormattingWidth: "wide" })
};

export default date;
export default exports.default;