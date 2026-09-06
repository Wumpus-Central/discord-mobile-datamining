// _runtime/metro/03731__.js
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  let obj = { default: module_2035 };
} else {
  obj = module_2035;
}
if (!module_2036) {
  obj = { default: module_2036 };
  let obj2 = obj;
} else {
  obj2 = module_2036;
}
const date = {
  ordinalNumber: obj2.default({
    matchPattern: /^(\d+)(일|번째)?/i,
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
obj2 = { matchPatterns: { narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(기원전|서기)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^(bc|기원전)/i, /^(ad|서기)/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]사?분기/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^(1[012]|[123456789])/, abbreviated: /^(1[012]|[123456789])월/i, wide: /^(1[012]|[123456789])월/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items2 = [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
obj7.any = items2;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[일월화수목금토]/, short: /^[일월화수목금토]/, abbreviated: /^[일월화수목금토]/, wide: /^[일월화수목금토]요일/ }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { any: null };
const items3 = [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/];
obj9.any = items3;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^(am|오전)/i, pm: /^(pm|오후)/i, midnight: /^자정/i, noon: /^정오/i, morning: /^아침/i, afternoon: /^오후/i, evening: /^저녁/i, night: /^밤/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;