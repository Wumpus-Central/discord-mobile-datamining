// === Module 3652: ? ===

// Module 3652
import buildMatchFn from "buildMatchFn" /* 2007 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2008 */;

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
  matchPattern: /^(\d+)[ºªo]?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^ac/i, /^dc/i];
const items1 = [/^antes de cristo/i, /^depois de cristo/i];
const items2 = [/1/i, /2/i, /3/i, /4/i];
const items3 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
const items4 = [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i];
const items5 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
const items6 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
const items7 = [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i];

export default { ordinalNumber: obj2.default(obj2), era: obj.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { any: items, wide: items1 }, defaultParseWidth: "any" }), quarter: obj.default(obj4), month: obj.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: obj.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { short: items5, narrow: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: obj.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;