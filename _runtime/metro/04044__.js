// === Module 4044: ? ===

// Module 4044
import buildLocalizeFn from "buildLocalizeFn" /* 2124 */;

let obj;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
if (!buildLocalizeFn) {
  obj = { default: buildLocalizeFn };
  const obj2 = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
const date = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    const _String = String;
    if (null != unit) {
      unit = unit.unit;
    }
    const _StringResult = _String(unit);
    if ("minute" !== _StringResult) {
      if ("second" !== _StringResult) {
        if ("date" === _StringResult) {
          return NumberResult + "\uC77C";
        } else {
          return NumberResult + "\uBC88\uC9F8";
        }
      }
    }
    return String(NumberResult);
  },
  era: obj.default(obj3),
  quarter: obj.default(obj4),
  month: obj.default(obj5),
  day: obj.default(obj6),
  dayPeriod: obj.default(obj7)
};
obj3 = { values: { narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"] }, defaultWidth: "wide" };
obj4 = {
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
};
obj5 = { values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], wide: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"] }, defaultWidth: "wide" };
obj6 = { values: { narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], wide: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"] }, defaultWidth: "wide" };
obj7 = { values: { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } }, defaultFormattingWidth: "wide" };

export default date;