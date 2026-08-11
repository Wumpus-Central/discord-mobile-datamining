// _runtime/03437_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "\u00BA";
  },
  era: obj.default({ values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despu\u00E9s de cristo"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "mi", "ju", "vi", "s\u00E1"], abbreviated: ["dom", "lun", "mar", "mi\u00E9", "jue", "vie", "s\u00E1b"], wide: ["domingo", "lunes", "martes", "mi\u00E9rcoles", "jueves", "viernes", "s\u00E1bado"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "ma\u00F1ana", afternoon: "tarde", evening: "tarde", night: "noche" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "de la ma\u00F1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;