// _runtime/metro/02034__.js
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  const obj2 = { default: module_2035 };
  let obj = obj2;
} else {
  obj = module_2035;
}
if (!module_2036) {
  const obj4 = { default: module_2036 };
  let obj3 = obj4;
} else {
  obj3 = module_2036;
}
const date = {
  ordinalNumber: obj3.default({
    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
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
const obj6 = { matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^b/i, /^(a|c)/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj11.narrow = items2;
const items3 = [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items4 = [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i];
obj13.narrow = items4;
const items5 = [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i];
obj13.any = items5;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;