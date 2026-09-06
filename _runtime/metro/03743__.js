// _runtime/metro/03743__.js
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
    matchPattern: /^(\d+)e?/i,
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
obj2 = { matchPatterns: { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^v/, /^n/];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i },
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
const obj6 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items2;
const items3 = [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items4 = [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i];
obj9.narrow = items4;
const items5 = [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i];
obj9.any = items5;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;