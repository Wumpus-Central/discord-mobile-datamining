// _runtime/metro/03920__.js
import 02120__ from "02120__.js";
import 02119__ from "02119__.js";

if (!module_2120) {
  const obj2 = { default: module_2120 };
  let obj = obj2;
} else {
  obj = module_2120;
}
if (!module_2119) {
  const obj4 = { default: module_2119 };
  let obj3 = obj4;
} else {
  obj3 = module_2119;
}
const date = {
  ordinalNumber: obj.default({
    matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
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
const obj6 = { matchPatterns: { narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(紀元[前後]|西暦)/i, wide: /^(紀元[前後]|西暦)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items = [/^B/i, /^A/i];
obj7.narrow = items;
const items1 = [/^(紀元前)/i, /^(西暦|紀元後)/i];
obj7.any = items1;
obj6.parsePatterns = obj7;
date.era = obj3.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^第[1234一二三四１２３４]四半期/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items2 = [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i];
obj9.any = items2;
obj8.parsePatterns = obj9;
date.quarter = obj3.default(obj8);
const obj10 = { matchPatterns: { narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])月/i, wide: /^([123456789]|1[012])月/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { any: null };
const items3 = [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj3.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[日月火水木金土]/, short: /^[日月火水木金土]/, abbreviated: /^[日月火水木金土]/, wide: /^[日月火水木金土]曜日/ }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { any: null };
const items4 = [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/];
obj13.any = items4;
obj12.parsePatterns = obj13;
date.day = obj3.default(obj12);
const obj14 = { matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^(A|午前)/i, pm: /^(P|午後)/i, midnight: /^深夜|真夜中/i, noon: /^正午/i, morning: /^朝/i, afternoon: /^午後/i, evening: /^夜/i, night: /^深夜/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj3.default(obj14);

export default date;
export default exports.default;