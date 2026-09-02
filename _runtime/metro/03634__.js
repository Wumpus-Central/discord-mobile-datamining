// === Module 3634: ? ===

// Module 3634
import buildMatchFn from "buildMatchFn" /* 2005 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2006 */;

if (!buildMatchFn) {
  let obj = { default: null };
  obj[0] = buildMatchFn;
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj = { default: null };
  obj[0] = buildMatchPatternFn;
  let obj2 = obj;
} else {
  obj2 = buildMatchPatternFn;
}
obj2 = {
  matchPattern: /^(\d+)\.?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/ie/i, /isz/i];
const items1 = [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i];
const items2 = [/előtt/i, /(szerint|i. sz.)/i];
const items3 = [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i];
const items4 = [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i];
const items5 = [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items6 = [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i];
const items7 = [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i];

export default { ordinalNumber: obj2.default(obj2), era: obj.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { narrow: items, abbreviated: items1, any: items2 }, defaultParseWidth: "any" }), quarter: obj.default(obj4), month: obj.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), day: obj.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { narrow: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: obj.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;