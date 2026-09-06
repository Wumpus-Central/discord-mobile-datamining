// === Module 4112: ? ===

// Module 4112
import module_2033 from "module_2033" /* 2033 */;

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return NumberResult + "\u65E5";
    } else if ("hour" === unit) {
      return NumberResult + "\u6642";
    } else if ("minute" === unit) {
      return NumberResult + "\u5206";
    } else if ("second" === unit) {
      return NumberResult + "\u79D2";
    } else {
      return "\u7B2C " + NumberResult;
    }
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["\u524D", "\u516C\u5143"], abbreviated: ["\u524D", "\u516C\u5143"], wide: ["\u516C\u5143\u524D", "\u516C\u5143"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["\u7B2C\u4E00\u523B", "\u7B2C\u4E8C\u523B", "\u7B2C\u4E09\u523B", "\u7B2C\u56DB\u523B"], wide: ["\u7B2C\u4E00\u523B\u9418", "\u7B2C\u4E8C\u523B\u9418", "\u7B2C\u4E09\u523B\u9418", "\u7B2C\u56DB\u523B\u9418"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;