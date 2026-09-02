// === Module 3687: buildLocalizeFn ===

// Module 3687 (buildLocalizeFn)
import buildLocalizeFn from "buildLocalizeFn" /* 2003 */;

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  },
  era: obj.default({ values: { narrow: ["\u00CE", "D"], abbreviated: ["\u00CE.d.C.", "D.C."], wide: ["\u00CEnainte de Cristos", "Dup\u0103 Cristos"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"], wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["du", "lu", "ma", "mi", "jo", "vi", "s\u00E2"], abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\u00E2m"], wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\u00E2mb\u0103t\u0103"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "ami", morning: "dim", afternoon: "da", evening: "s", night: "n" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mn", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;