// === Module 3713: ? ===

// Module 3713
import module_2035 from "module_2035" /* 2035 */;
import module_2036 from "module_2036" /* 2036 */;

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
    matchPattern: /^(\d+)\.?/i,
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
obj2 = { matchPatterns: { narrow: /^(ie\.|isz\.)/i, abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i, wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { narrow: null, abbreviated: null, any: null };
const items = [/ie/i, /isz/i];
obj3.narrow = items;
const items1 = [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i];
obj3.abbreviated = items1;
const items2 = [/előtt/i, /(szerint|i. sz.)/i];
obj3.any = items2;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]\.?/i, abbreviated: /^[1234]?\.?\s?n\.év/i, wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items3 = [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i];
obj5.any = items3;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[jfmaásond]|sz/i, abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i, wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items4 = [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items4;
const items5 = [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.any = items5;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^([vhkpc]|sz|cs|sz)/i, short: /^([vhkp]|sze|cs|szo)/i, abbreviated: /^([vhkp]|sze|cs|szo)/i, wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items6 = [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i];
obj9.narrow = items6;
const items7 = [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i];
obj9.any = items7;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^de\.?/i, pm: /^du\.?/i, midnight: /^éjf/i, noon: /^dé/i, morning: /reg/i, afternoon: /^délu\.?/i, evening: /es/i, night: /éjj/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;