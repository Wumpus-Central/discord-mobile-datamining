// _runtime/metro/03515__.js
import buildMatchPatternFn from "buildMatchPatternFn";
import buildMatchFn from "buildMatchFn";

if (!buildMatchPatternFn) {
  let obj = { default: null };
  obj[0] = buildMatchPatternFn;
} else {
  obj = buildMatchPatternFn;
}
if (!buildMatchFn) {
  obj = { default: null };
  obj[0] = buildMatchFn;
  let obj2 = obj;
} else {
  obj2 = buildMatchFn;
}
obj2 = {
  matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^B/i, /^A/i];
const items1 = [/^(紀元前)/i, /^(西暦|紀元後)/i];
const items2 = [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i];
const items3 = [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/];
const items4 = [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/];

export default { ordinalNumber: obj.default(obj2), era: obj2.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { narrow: items, any: items1 }, defaultParseWidth: "any" }), quarter: obj2.default(obj4), month: obj2.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { any: items3 }, defaultParseWidth: "any" }), day: obj2.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { any: items4 }, defaultParseWidth: "any" }), dayPeriod: obj2.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;