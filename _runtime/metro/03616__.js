// === Module 3616: ? ===

// Module 3616
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
  matchPattern: /^(\d+)(\.)/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^e/i, /^j/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i];
const items3 = [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i];
const items4 = [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i];
const items5 = [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i];

export default { ordinalNumber: obj2.default(obj2), era: obj.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: obj.default(obj4), month: obj.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: obj.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: obj.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;