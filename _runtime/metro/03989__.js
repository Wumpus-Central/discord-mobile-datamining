// === Module 3989: ? ===

// Module 3989
import buildMatchFn from "buildMatchFn" /* 2126 */;
import buildMatchPatternFn from "buildMatchPatternFn" /* 2127 */;

let items;
let items1;
let items2;
let items3;
let items4;
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
obj6 = { matchPatterns: { narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^v/i, /^n/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i, wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i];
items3 = [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i];
obj12 = { matchPatterns: { narrow: /^[smdmf]/i, short: /^(so|mo|di|mi|do|fr|sa)/i, abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i, wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { any: items4 };
items4 = [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i];
obj14 = { matchPatterns: { narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i }, defaultMatchWidth: "wide", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^v/i, pm: /^n/i, midnight: /^Mitte/i, noon: /^Mitta/i, morning: /morgens/i, afternoon: /nachmittags/i, evening: /abends/i, night: /nachts/i } };
obj5 = {
  matchPattern: /^(\d+)(\.)?/i,
  parsePattern: /\d+/i,
  valueCallback(match) {
    return parseInt(match);
  }
};

export default date;