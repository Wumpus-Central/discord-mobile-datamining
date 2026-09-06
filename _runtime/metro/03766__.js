// === Module 3766: ? ===

// Module 3766
import module_2033 from "module_2033" /* 2033 */;

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["\u00CE", "D"], abbreviated: ["\u00CE.d.C.", "D.C."], wide: ["\u00CEnainte de Cristos", "Dup\u0103 Cristos"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"], wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["du", "lu", "ma", "mi", "jo", "vi", "s\u00E2"], abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\u00E2m"], wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\u00E2mb\u0103t\u0103"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "ami", morning: "dim", afternoon: "da", evening: "s", night: "n" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;