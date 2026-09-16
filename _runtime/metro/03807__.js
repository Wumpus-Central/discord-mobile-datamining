// _runtime/metro/03807__.js
import 02036__ from "02036__.js";
import 02037__ from "02037__.js";

if (!module_2036) {
  const obj2 = { default: module_2036 };
  let obj = obj2;
} else {
  obj = module_2036;
}
if (!module_2037) {
  const obj4 = { default: module_2037 };
  let obj3 = obj4;
} else {
  obj3 = module_2037;
}
const date = {
  ordinalNumber: obj3.default({
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
const obj6 = { matchPatterns: { narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(기원전|서기)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^(bc|기원전)/i, /^(ad|서기)/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]사?분기/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(1[012]|[123456789])/, abbreviated: /^(1[012]|[123456789])월/i, wide: /^(1[012]|[123456789])월/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { any: null };
const items2 = [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
obj11.any = items2;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[일월화수목금토]/, short: /^[일월화수목금토]/, abbreviated: /^[일월화수목금토]/, wide: /^[일월화수목금토]요일/ }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { any: null };
const items3 = [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/];
obj13.any = items3;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^(am|오전)/i, pm: /^(pm|오후)/i, midnight: /^자정/i, noon: /^정오/i, morning: /^아침/i, afternoon: /^오후/i, evening: /^저녁/i, night: /^밤/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;