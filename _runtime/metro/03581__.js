// === Module 3581: ? ===

// Module 3581
import buildMatchPatternFn from "buildMatchPatternFn" /* 2007 */;
import buildMatchFn from "buildMatchFn" /* 2006 */;

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
  matchPattern: /^(\d+)(º)?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^ac/i, /^dc/i];
const items1 = [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
const items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
const items6 = [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i];

export default { ordinalNumber: obj.default(obj2), era: obj2.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { any: items, wide: items1 }, defaultParseWidth: "any" }), quarter: obj2.default(obj4), month: obj2.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: obj2.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { narrow: items5, any: items6 }, defaultParseWidth: "any" }), dayPeriod: obj2.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;