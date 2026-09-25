// === Module 4026: ? ===

// Module 4026
import module_2121 from "module_2121" /* 2121 */;
import module_2122 from "module_2122" /* 2122 */;

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
    matchPattern: /^(\d+)[ºªo]?/i,
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
const obj6 = { matchPatterns: { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i, wide: /^(antes de cristo|depois de cristo)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null, wide: null };
const items = [/^ac/i, /^dc/i];
obj7.any = items;
const items1 = [/^antes de cristo/i, /^depois de cristo/i];
obj7.wide = items1;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items2 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items2;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[jfmajsond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items3 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj11.narrow = items3;
const items4 = [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i];
obj11.any = items4;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^(dom|[23456]ª?|s[aá]b)/i, short: /^(dom|[23456]ª?|s[aá]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i, wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { short: null, narrow: null, any: null };
const items5 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
obj13.short = items5;
const items6 = [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i];
obj13.narrow = items6;
const items7 = [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i];
obj13.any = items7;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mn|^meia[-\s]noite/i, noon: /^md|^meio[-\s]dia/i, morning: /manhã/i, afternoon: /tarde/i, evening: /tarde/i, night: /noite/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;