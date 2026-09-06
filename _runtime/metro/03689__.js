// === Module 3689: ? ===

// Module 3689
import module_2036 from "module_2036" /* 2036 */;
import module_2035 from "module_2035" /* 2035 */;

if (!module_2036) {
  let obj = { default: module_2036 };
} else {
  obj = module_2036;
}
if (!module_2035) {
  obj = { default: module_2035 };
  let obj2 = obj;
} else {
  obj2 = module_2035;
}
const date = {
  ordinalNumber: obj.default({
    matchPattern: /^(\d+)(º)?/i,
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
obj2 = { matchPatterns: { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null, wide: null };
const items = [/^ac/i, /^dc/i];
obj3.any = items;
const items1 = [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i];
obj3.wide = items1;
obj2.parsePatterns = obj3;
date.era = obj2.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items2 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items2;
obj4.parsePatterns = obj5;
date.quarter = obj2.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[efmajsond]/i, abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i, wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items3 = [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj7.narrow = items3;
const items4 = [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
obj7.any = items4;
obj6.parsePatterns = obj7;
date.month = obj2.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[dlmjvs]/i, short: /^(do|lu|ma|mi|ju|vi|s[áa])/i, abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i, wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
obj9.narrow = items5;
const items6 = [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i];
obj9.any = items6;
obj8.parsePatterns = obj9;
date.day = obj2.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i, any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañana/i, afternoon: /tarde/i, evening: /tarde/i, night: /noche/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj2.default(obj10);

export default date;
export default exports.default;