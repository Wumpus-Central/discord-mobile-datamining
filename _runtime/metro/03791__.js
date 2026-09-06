// === Module 3791: ? ===

// Module 3791
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
    matchPattern: /^(\d+)(\.)?/i,
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
obj2 = { matchPatterns: { narrow: /^(mö|ms)/i, abbreviated: /^(mö|ms)/i, wide: /^(milattan önce|milattan sonra)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234]ç/i, wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null, abbreviated: null, wide: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
const items2 = [/1ç/i, /2ç/i, /3ç/i, /4ç/i];
obj5.abbreviated = items2;
const items3 = [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i];
obj5.wide = items3;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[oşmnhtaek]/i, abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i, wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items4 = [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i];
obj7.narrow = items4;
const items5 = [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i];
obj7.any = items5;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[psçc]/i, short: /^(pz|pt|sa|ça|pe|cu|ct)/i, abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i, wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null, wide: null };
const items6 = [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i];
obj9.narrow = items6;
const items7 = [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i];
obj9.any = items7;
const items8 = [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i];
obj9.wide = items8;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i, any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^ö\.?ö\.?/i, pm: /^ö\.?s\.?/i, midnight: /^(gy|gece yarısı)/i, noon: /^öğ/i, morning: /^sa/i, afternoon: /^öğleden sonra/i, evening: /^ak/i, night: /^ge/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;