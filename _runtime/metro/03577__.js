// _runtime/metro/03577__.js
import buildMatchFn from "buildMatchFn";
import buildMatchPatternFn from "buildMatchPatternFn";

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
  matchPattern: /^(\d+)?/i,
  parsePattern: /\d+/i,
  valueCallback(joined) {
    return parseInt(joined, 10);
  }
};
const items = [/^p/i, /^n/i];
const items1 = [/1/i, /2/i, /3/i, /4/i];
const items2 = [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i];
const items3 = [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i];
const items4 = [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i];
const items5 = [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i];
const items6 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i];
const items7 = [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i];

export default { ordinalNumber: obj2.default(obj2), era: obj.default({ matchPatterns: obj3, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" }), quarter: obj.default(obj4), month: obj.default({ matchPatterns: obj6, defaultMatchWidth: "wide", parsePatterns: { narrow: items3, any: items4 }, defaultParseWidth: "any" }), day: obj.default({ matchPatterns: obj7, defaultMatchWidth: "wide", parsePatterns: { narrow: items5, abbreviated: items6, any: items7 }, defaultParseWidth: "any" }), dayPeriod: obj.default({ matchPatterns: obj8, defaultMatchWidth: "any", parsePatterns: { narrow: obj9, any: obj10 }, defaultParseWidth: "any" }) };
export default exports.default;