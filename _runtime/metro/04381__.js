// _runtime/metro/04381__.js
import 02122__ from "02122__.js";
import 02123__ from "02123__.js";

if (!module_2122) {
  const obj2 = { default: module_2122 };
  let obj = obj2;
} else {
  obj = module_2122;
}
if (!module_2123) {
  const obj4 = { default: module_2123 };
  let obj3 = obj4;
} else {
  obj3 = module_2123;
}
const date = {
  ordinalNumber: obj3.default({
    matchPattern: /^(第\s*)?\d+(日|時|分|秒)?/i,
    parsePattern: /\d+/i,
    valueCallback(match) {
      return parseInt(match, 10);
    }
  }),
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
const obj6 = { matchPatterns: { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^(前)/i, /^(公元)/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻鐘/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items2 = [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i];
obj11.narrow = items2;
const items3 = [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^週[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { any: null };
const items4 = [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i];
obj13.any = items4;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;