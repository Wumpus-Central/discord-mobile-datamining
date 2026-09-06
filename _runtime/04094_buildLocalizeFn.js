// _runtime/04094_buildLocalizeFn.js
import buildLocalizeFn from "02033_buildLocalizeFn.js";

if (!buildLocalizeFn) {
  let obj = { default: null };
  obj[0] = buildLocalizeFn;
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    const NumberResult = Number(arg0);
    if ("date" === StringResult) {
      if (3 === NumberResult) {
        let str5 = "-\u0454";
      } else {
        str5 = "-\u0435";
      }
      let str3 = str5;
    } else {
      if ("minute" !== StringResult) {
        if ("second" !== StringResult) {
          str3 = "-\u0439";
        }
      }
      str3 = "-\u0430";
    }
    return NumberResult + str3;
  },
  era: obj.default({ values: { narrow: ["\u0434\u043E \u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u0434\u043E \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438", "\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"], abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."], wide: ["\u0441\u0456\u0447\u0435\u043D\u044C", "\u043B\u044E\u0442\u0438\u0439", "\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u043A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u0435\u0440\u0432\u0435\u043D\u044C", "\u043B\u0438\u043F\u0435\u043D\u044C", "\u0441\u0435\u0440\u043F\u0435\u043D\u044C", "\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0436\u043E\u0432\u0442\u0435\u043D\u044C", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0433\u0440\u0443\u0434\u0435\u043D\u044C"] }, defaultWidth: "wide", formattingValues: { narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"], abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."], wide: ["\u0441\u0456\u0447\u043D\u044F", "\u043B\u044E\u0442\u043E\u0433\u043E", "\u0431\u0435\u0440\u0435\u0437\u043D\u044F", "\u043A\u0432\u0456\u0442\u043D\u044F", "\u0442\u0440\u0430\u0432\u043D\u044F", "\u0447\u0435\u0440\u0432\u043D\u044F", "\u043B\u0438\u043F\u043D\u044F", "\u0441\u0435\u0440\u043F\u043D\u044F", "\u0432\u0435\u0440\u0435\u0441\u043D\u044F", "\u0436\u043E\u0432\u0442\u043D\u044F", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430", "\u0433\u0440\u0443\u0434\u043D\u044F"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0456\u0432", "\u0441\u0435\u0440", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"], wide: ["\u043D\u0435\u0434\u0456\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F", "\u0441\u0443\u0431\u043E\u0442\u0430"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u0456\u0447" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u0456\u0447" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D\u0456\u0447", noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0456\u0440", night: "\u043D\u0456\u0447" } }, defaultWidth: "any", formattingValues: { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D\u0456\u0447", noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;