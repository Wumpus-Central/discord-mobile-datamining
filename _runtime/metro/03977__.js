// === Module 3977: ? ===

// Module 3977
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
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
obj6 = { matchPatterns: { narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i, abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i, wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^p[řr]/i, /^(po|n)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i, wide: /^[1234]\. [čc]tvrtlet[íi]/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[lúubdkčcszřrlp]/i, abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i, wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i];
items3 = [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i];
obj12 = { matchPatterns: { narrow: /^[npuúsčps]/i, short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i, abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i, wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items4, any: items5 };
items4 = [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i];
items5 = [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i];
obj14 = { matchPatterns: { any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^dop/i, pm: /^odp/i, midnight: /^p[ůu]lnoc/i, noon: /^poledne/i, morning: /r[áa]no/i, afternoon: /odpoledne/i, evening: /ve[čc]er/i, night: /noc/i } };
obj5 = {
  matchPattern: /^(\d+)\.?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;