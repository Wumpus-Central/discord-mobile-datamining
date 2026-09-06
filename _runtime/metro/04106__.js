// === Module 4106: ? ===

// Module 4106
import module_2033 from "module_2033" /* 2033 */;

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, unit) {
    const str = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return str.toString() + "\u65E5";
    } else if ("hour" === unit) {
      return str.toString() + "\u65F6";
    } else if ("minute" === unit) {
      return str.toString() + "\u5206";
    } else if ("second" === unit) {
      return str.toString() + "\u79D2";
    } else {
      return "\u7B2C " + str.toString();
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
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["\u7B2C\u4E00\u5B63", "\u7B2C\u4E8C\u5B63", "\u7B2C\u4E09\u5B63", "\u7B2C\u56DB\u5B63"], wide: ["\u7B2C\u4E00\u5B63\u5EA6", "\u7B2C\u4E8C\u5B63\u5EA6", "\u7B2C\u4E09\u5B63\u5EA6", "\u7B2C\u56DB\u5B63\u5EA6"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
date.month = obj.default({ values: { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" } }, defaultFormattingWidth: "wide" });

export default date;
export default exports.default;