// === Module 3983: ? ===

// Module 3983
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
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
if (!buildMatchFn) {
  obj = { default: buildMatchFn };
  const obj2 = { default: buildMatchFn };
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj3 = { default: buildMatchPatternFn };
  const obj4 = { default: buildMatchPatternFn };
} else {
  obj3 = buildMatchPatternFn;
}
const date = { ordinalNumber: obj3.default(obj5), era: obj.default(obj6), quarter: obj.default(obj8), month: obj.default(obj10), day: obj.default(obj12), dayPeriod: obj.default(obj14) };
obj6 = { matchPatterns: { narrow: /^(fKr|fvt|eKr|vt)/i, abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i, wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^f/i, /^(v|e)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234]. kvt\./i, wide: /^[1234]\.? kvartal/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
items3 = [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj12 = { matchPatterns: { narrow: /^[smtofl]/i, short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i, abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i, wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items4, any: items5 };
items4 = [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i];
items5 = [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i];
obj14 = { matchPatterns: { narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i, any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^a/i, pm: /^p/i, midnight: /midnat/i, noon: /middag/i, morning: /morgen/i, afternoon: /eftermiddag/i, evening: /aften/i, night: /nat/i } };
obj5 = {
  matchPattern: /^(\d+)(\.)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;