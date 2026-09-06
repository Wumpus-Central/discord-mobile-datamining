// === Module 4095: ? ===

// Module 4095
import buildMatchFn from "buildMatchFn" /* 2035 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2036 */;

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
  matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^д/i, /^н/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i];
const items3 = [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i];
const items4 = [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i];
const items5 = [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i];

export default { ordinalNumber: obj2.default(obj2), era: obj.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: obj.default(obj4), month: obj.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" }), day: obj.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" }), dayPeriod: obj.default({ matchPatterns: obj8, defaultMatchWidth: "wide", parsePatterns: { any: obj9 }, defaultParseWidth: "any" }) };
export default exports.default;