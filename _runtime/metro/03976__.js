// _runtime/metro/03976__.js
import 02121__ from "02121__.js";
import 02122__ from "02122__.js";

if (!module_2121) {
  const obj2 = { default: module_2121 };
  let obj = obj2;
} else {
  obj = module_2121;
}
if (!module_2122) {
  const obj4 = { default: module_2122 };
  let obj3 = obj4;
} else {
  obj3 = module_2122;
}
const date = {
  ordinalNumber: obj3.default({
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
const obj6 = { matchPatterns: { narrow: /^(ie\.|isz\.)/i, abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i, wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, abbreviated: null, any: null };
const items = [/ie/i, /isz/i];
obj7.narrow = items;
const items1 = [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i];
obj7.abbreviated = items1;
const items2 = [/előtt/i, /(szerint|i. sz.)/i];
obj7.any = items2;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]\.?/i, abbreviated: /^[1234]?\.?\s?n\.év/i, wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items3 = [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i];
obj9.any = items3;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[jfmaásond]|sz/i, abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i, wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items4 = [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i];
obj11.narrow = items4;
const items5 = [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj11.any = items5;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^([vhkpc]|sz|cs|sz)/i, short: /^([vhkp]|sze|cs|szo)/i, abbreviated: /^([vhkp]|sze|cs|szo)/i, wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items6 = [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i];
obj13.narrow = items6;
const items7 = [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i];
obj13.any = items7;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^de\.?/i, pm: /^du\.?/i, midnight: /^éjf/i, noon: /^dé/i, morning: /reg/i, afternoon: /^délu\.?/i, evening: /es/i, night: /éjj/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;