// === Module 4009: ? ===

// Module 4009
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
obj6 = { matchPatterns: { narrow: /^(e|j)/i, abbreviated: /^(eaa.|jaa.)/i, wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^e/i, /^j/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\.? kvartaali/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[thmkeslj]/i, abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i, wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i];
items3 = [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i];
obj12 = { matchPatterns: { narrow: /^[smtkpl]/i, short: /^(su|ma|ti|ke|to|pe|la)/i, abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i, wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items4, any: items5 };
items4 = [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i];
items5 = [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i];
obj14 = { matchPatterns: { narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i, any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^ap/i, pm: /^ip/i, midnight: /^keskiyö/i, noon: /^keskipäivä/i, morning: /aamupäivällä/i, afternoon: /iltapäivällä/i, evening: /illalla/i, night: /yöllä/i } };
obj5 = {
  matchPattern: /^(\d+)(\.)/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;