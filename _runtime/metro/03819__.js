// _runtime/metro/03819__.js
import 02036__ from "02036__.js";
import 02037__ from "02037__.js";

if (!module_2036) {
  const obj2 = { default: module_2036 };
  let obj = obj2;
} else {
  obj = module_2036;
}
if (!module_2037) {
  const obj4 = { default: module_2037 };
  let obj3 = obj4;
} else {
  obj3 = module_2037;
}
const date = {
  ordinalNumber: obj3.default({
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
const obj6 = { matchPatterns: { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^v/, /^n/];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i },
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
const obj10 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj11.narrow = items2;
const items3 = [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items4 = [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i];
obj13.narrow = items4;
const items5 = [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i];
obj13.any = items5;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;