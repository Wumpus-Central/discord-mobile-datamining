// _runtime/03796_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
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
  era: obj.default({ values: { narrow: ["\u524D", "\u516C\u5143"], abbreviated: ["\u524D", "\u516C\u5143"], wide: ["\u516C\u5143\u524D", "\u516C\u5143"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;