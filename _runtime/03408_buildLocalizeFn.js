// _runtime/03408_buildLocalizeFn.js
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
    const StringResult = String(unit);
    if ("year" === StringResult) {
      const concat9 = "".concat;
      return "".concat(NumberResult, "\u5E74");
    } else if ("quarter" === StringResult) {
      const concat8 = "\u7B2C".concat;
      return "\u7B2C".concat(NumberResult, "\u56DB\u534A\u671F");
    } else if ("month" === StringResult) {
      const concat7 = "".concat;
      return "".concat(NumberResult, "\u6708");
    } else if ("week" === StringResult) {
      const concat6 = "\u7B2C".concat;
      return "\u7B2C".concat(NumberResult, "\u9031");
    } else if ("date" === StringResult) {
      const concat5 = "".concat;
      return "".concat(NumberResult, "\u65E5");
    } else if ("hour" === StringResult) {
      const concat4 = "".concat;
      return "".concat(NumberResult, "\u6642");
    } else if ("minute" === StringResult) {
      const concat3 = "".concat;
      return "".concat(NumberResult, "\u5206");
    } else if ("second" === StringResult) {
      const concat2 = "".concat;
      return "".concat(NumberResult, "\u79D2");
    } else {
      const concat = "".concat;
      return "".concat(NumberResult);
    }
  },
  era: obj.default({ values: { narrow: ["BC", "AC"], abbreviated: ["\u7D00\u5143\u524D", "\u897F\u66A6"], wide: ["\u7D00\u5143\u524D", "\u897F\u66A6"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"] }, defaultWidth: "wide" }),
  day: obj.default({ values: { narrow: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], short: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], abbreviated: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], wide: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, abbreviated: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, wide: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, abbreviated: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, wide: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;