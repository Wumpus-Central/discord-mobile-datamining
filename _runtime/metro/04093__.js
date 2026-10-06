// _runtime/metro/04093__.js
import buildMatchFn from "../02126_buildMatchFn.js";
import buildMatchPatternFn from "../02127_buildMatchPatternFn.js";

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
const date = {
  ordinalNumber: obj3.default(obj5),
  era: obj.default(obj6),
  quarter: obj.default(obj8),
  month: obj.default(obj10),
  day: obj.default(obj12),
  dayPeriod: obj.default(obj14),
};
obj6 = {
  matchPatterns: {
    narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
    abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
    wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj7,
  defaultParseWidth: "any",
};
obj7 = { any: items };
items = [/^f/i, /^[ev]/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](:a|:e)? kvartalet/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  },
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = {
  matchPatterns: {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
    wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj11,
  defaultParseWidth: "any",
};
obj11 = { narrow: items2, any: items3 };
items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
items3 = [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj12 = {
  matchPatterns: {
    narrow: /^[smtofl]/i,
    short: /^(sö|må|ti|on|to|fr|lö)/i,
    abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
    wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i,
  },
  defaultMatchWidth: "wide",
  parsePatterns: obj13,
  defaultParseWidth: "any",
};
obj13 = { any: items4 };
items4 = [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i];
obj14 = {
  matchPatterns: { any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i },
  defaultMatchWidth: "any",
  parsePatterns: obj15,
  defaultParseWidth: "any",
};
obj15 = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgon/i,
    afternoon: /eftermiddag/i,
    evening: /kväll/i,
    night: /natt/i,
  },
};
obj5 = {
  matchPattern: /^(\d+)(:a|:e)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  },
};

export default date;
