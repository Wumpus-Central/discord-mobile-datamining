// === Module 4421: ? ===

// Module 4421
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let obj;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj3;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
if (!buildMatchFn) {
  obj = { default: buildMatchFn };
  const obj2 = { default: buildMatchFn };
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj3 = { default: buildMatchPatternFn };
  const obj4 = { default: buildMatchPatternFn };
} else {
  obj3 = buildMatchPatternFn;
}
const date = { ordinalNumber: obj3.default(obj5), era: obj.default(obj6), quarter: obj.default(obj8), month: obj.default(obj10), day: obj.default(obj12), dayPeriod: obj.default(obj14) };
obj6 = { matchPatterns: { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^(前)/i, /^(公元)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻钟/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i];
obj10 = { matchPatterns: { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i];
items3 = [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i];
obj12 = { matchPatterns: { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^周[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { any: items4 };
items4 = [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i];
obj14 = { matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } };
obj5 = {
  matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;