// === Module 4003: ? ===

// Module 4003
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;
import buildMatchFn from "buildMatchFn" /* 2126 */;

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
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
if (!buildMatchPatternFn) {
  obj = { default: buildMatchPatternFn };
  const obj2 = { default: buildMatchPatternFn };
} else {
  obj = buildMatchPatternFn;
}
if (!buildMatchFn) {
  obj3 = { default: buildMatchFn };
  const obj4 = { default: buildMatchFn };
} else {
  obj3 = buildMatchFn;
}
const date = { ordinalNumber: obj.default(obj5), era: obj3.default(obj6), quarter: obj3.default(obj8), month: obj3.default(obj10), day: obj3.default(obj12), dayPeriod: obj3.default(obj14) };
obj6 = { matchPatterns: { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items, wide: items1 };
items = [/^ac/i, /^dc/i];
items1 = [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items2 };
items2 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[efmajsond]/i, abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i, wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items3, any: items4 };
items3 = [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
items4 = [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
obj12 = { matchPatterns: { narrow: /^[dlmjvs]/i, short: /^(do|lu|ma|mi|ju|vi|s[áa])/i, abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i, wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items5, any: items6 };
items5 = [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i];
items6 = [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i];
obj14 = { matchPatterns: { narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i, any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañana/i, afternoon: /tarde/i, evening: /tarde/i, night: /noche/i } };
obj5 = {
  matchPattern: /^(\d+)(º)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match, 10);
  }
};

export default date;