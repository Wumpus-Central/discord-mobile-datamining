// _runtime/03594_buildLocalizeFn.js
import buildLocalizeFn from "buildLocalizeFn" /* 2002 */;

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
    let str = "-\u0435";
    if ("date" !== unit) {
      if ("week" !== unit) {
        if ("minute" !== unit) {
          let str4 = "-\u0439";
        }
        str = str4;
      }
      str4 = "-\u044F";
    }
    return Number(arg0) + str;
  },
  era: obj.default({ values: { narrow: ["\u0434\u043E \u043D.\u044D.", "\u043D.\u044D."], abbreviated: ["\u0434\u043E \u043D. \u044D.", "\u043D. \u044D."], wide: ["\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B"] }, defaultWidth: "wide" }),
  quarter: obj.default(obj1),
  month: obj.default({ values: { narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440.", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."], wide: ["\u044F\u043D\u0432\u0430\u0440\u044C", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"] }, defaultWidth: "wide", formattingValues: { narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u044F", "\u0438\u044E\u043D.", "\u0438\u044E\u043B.", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."], wide: ["\u044F\u043D\u0432\u0430\u0440\u044F", "\u0444\u0435\u0432\u0440\u0430\u043B\u044F", "\u043C\u0430\u0440\u0442\u0430", "\u0430\u043F\u0440\u0435\u043B\u044F", "\u043C\u0430\u044F", "\u0438\u044E\u043D\u044F", "\u0438\u044E\u043B\u044F", "\u0430\u0432\u0433\u0443\u0441\u0442\u0430", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F", "\u043E\u043A\u0442\u044F\u0431\u0440\u044F", "\u043D\u043E\u044F\u0431\u0440\u044F", "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: { narrow: ["\u0412", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u0432\u0441", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u0432\u0441\u043A", "\u043F\u043D\u0434", "\u0432\u0442\u0440", "\u0441\u0440\u0434", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"], wide: ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"] }, defaultWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044C" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044C" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C", noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0435\u0440", night: "\u043D\u043E\u0447\u044C" } }, defaultWidth: "any", formattingValues: { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0438" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0438" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C", noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447\u0435\u0440\u0430", night: "\u043D\u043E\u0447\u0438" } }, defaultFormattingWidth: "wide" })
};

export default obj;
export default exports.default;