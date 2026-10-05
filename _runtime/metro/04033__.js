// === Module 4033: ? ===

// Module 4033
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;
import buildMatchFn from "buildMatchFn" /* 2126 */;

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
if (!buildMatchPatternFn) {
  obj = { default: buildMatchPatternFn };
  const obj2 = { default: buildMatchPatternFn };
} else {
  obj = buildMatchPatternFn;
}
if (!buildMatchFn) {
  obj3 = { default: buildMatchFn };
  const obj4 = { default: buildMatchFn };
} else {
  obj3 = buildMatchFn;
}
const date = { ordinalNumber: obj.default(obj5), era: obj3.default(obj6), quarter: obj3.default(obj8), month: obj3.default(obj10), day: obj3.default(obj12), dayPeriod: obj3.default(obj14) };
obj6 = { matchPatterns: { narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(紀元[前後]|西暦)/i, wide: /^(紀元[前後]|西暦)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { narrow: items, any: items1 };
items = [/^B/i, /^A/i];
items1 = [/^(紀元前)/i, /^(西暦|紀元後)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^第[1234一二三四１２３４]四半期/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items2 };
items2 = [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i];
obj10 = { matchPatterns: { narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])月/i, wide: /^([123456789]|1[012])月/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { any: items3 };
items3 = [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
obj12 = { matchPatterns: { narrow: /^[日月火水木金土]/, short: /^[日月火水木金土]/, abbreviated: /^[日月火水木金土]/, wide: /^[日月火水木金土]曜日/ }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { any: items4 };
items4 = [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/];
obj14 = { matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^(A|午前)/i, pm: /^(P|午後)/i, midnight: /^深夜|真夜中/i, noon: /^正午/i, morning: /^朝/i, afternoon: /^午後/i, evening: /^夜/i, night: /^深夜/i } };
obj5 = {
  matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;