// === Module 4021: ? ===

// Module 4021
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
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
obj6 = { matchPatterns: { narrow: /^(ie\.|isz\.)/i, abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i, wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { narrow: items, abbreviated: items1, any: items2 };
items = [/ie/i, /isz/i];
items1 = [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i];
items2 = [/előtt/i, /(szerint|i. sz.)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]\.?/i, abbreviated: /^[1234]?\.?\s?n\.év/i, wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items3 };
items3 = [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i];
obj10 = { matchPatterns: { narrow: /^[jfmaásond]|sz/i, abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i, wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items4, any: items5 };
items4 = [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i];
items5 = [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj12 = { matchPatterns: { narrow: /^([vhkpc]|sz|cs|sz)/i, short: /^([vhkp]|sze|cs|szo)/i, abbreviated: /^([vhkp]|sze|cs|szo)/i, wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items6, any: items7 };
items6 = [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i];
items7 = [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i];
obj14 = { matchPatterns: { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^de\.?/i, pm: /^du\.?/i, midnight: /^éjf/i, noon: /^dé/i, morning: /reg/i, afternoon: /^délu\.?/i, evening: /es/i, night: /éjj/i } };
obj5 = {
  matchPattern: /^(\d+)\.?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;