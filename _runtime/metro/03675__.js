// _runtime/metro/03675__.js
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
    matchPattern: /^(\d+)(\.)?/i,
    parsePattern: /\d+/i,
    valueCallback(match) {
      return parseInt(match);
    }
  }),
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj2 = { matchPatterns: { narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^v/i, /^n/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i },
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
const obj6 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i, wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items2;
const items3 = [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[smdmf]/i, short: /^(so|mo|di|mi|do|fr|sa)/i, abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i, wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { any: null };
const items4 = [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i];
obj9.any = items4;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i }, defaultMatchWidth: "wide", parsePatterns: { any: { am: /^v/i, pm: /^n/i, midnight: /^Mitte/i, noon: /^Mitta/i, morning: /morgens/i, afternoon: /nachmittags/i, evening: /abends/i, night: /nachts/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;