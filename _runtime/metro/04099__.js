// === Module 4099: ? ===

// Module 4099
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
let items8;
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
obj6 = { matchPatterns: { narrow: /^(mö|ms)/i, abbreviated: /^(mö|ms)/i, wide: /^(milattan önce|milattan sonra)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234]ç/i, wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1, abbreviated: items2, wide: items3 };
items1 = [/1/i, /2/i, /3/i, /4/i];
items2 = [/1ç/i, /2ç/i, /3ç/i, /4ç/i];
items3 = [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i];
obj10 = { matchPatterns: { narrow: /^[oşmnhtaek]/i, abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i, wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items4, any: items5 };
items4 = [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i];
items5 = [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i];
obj12 = { matchPatterns: { narrow: /^[psçc]/i, short: /^(pz|pt|sa|ça|pe|cu|ct)/i, abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i, wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items6, any: items7, wide: items8 };
items6 = [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i];
items7 = [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i];
items8 = [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i];
obj14 = { matchPatterns: { narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i, any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^ö\.?ö\.?/i, pm: /^ö\.?s\.?/i, midnight: /^(gy|gece yarısı)/i, noon: /^öğ/i, morning: /^sa/i, afternoon: /^öğleden sonra/i, evening: /^ak/i, night: /^ge/i } };
obj5 = {
  matchPattern: /^(\d+)(\.)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;