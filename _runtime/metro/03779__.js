// _runtime/metro/03779__.js
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  let obj = { default: module_2035 };
} else {
  obj = module_2035;
}
if (!module_2036) {
  obj = { default: module_2036 };
  let obj2 = obj;
} else {
  obj2 = module_2036;
}
const date = {
  ordinalNumber: obj2.default({
    matchPattern: /^(\d+)(:a|:e)?/i,
    parsePattern: /\d+/i,
    valueCallback(match) {
      return parseInt(match, 10);
    }
  }),
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj2 = { matchPatterns: { narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^f/i, /^[ev]/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](:a|:e)? kvartalet/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i, wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items2;
const items3 = [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[smtofl]/i, short: /^(sö|må|ti|on|to|fr|lö)/i, abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i, wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { any: null };
const items4 = [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i];
obj9.any = items4;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^f/i, pm: /^e/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgon/i, afternoon: /eftermiddag/i, evening: /kväll/i, night: /natt/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;