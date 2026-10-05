// === Module 4427: ? ===

// Module 4427
import localeToNumber from "localeToNumber" /* 4424 */;
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
obj6 = { matchPatterns: { narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i }, defaultMatchWidth: "wide", parsePatterns: obj7, defaultParseWidth: "any" };
obj7 = { any: items };
items = [/^b/i, /^(a|c)/i];
obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^ति[1234]/i, wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i },
  defaultMatchWidth: "wide",
  parsePatterns: obj9,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
obj9 = { any: items1 };
items1 = [/1/i, /2/i, /3/i, /4/i];
obj10 = { matchPatterns: { narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i }, defaultMatchWidth: "wide", parsePatterns: obj11, defaultParseWidth: "any" };
obj11 = { narrow: items2, any: items3 };
items2 = [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i];
items3 = [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i];
obj12 = { matchPatterns: { narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i }, defaultMatchWidth: "wide", parsePatterns: obj13, defaultParseWidth: "any" };
obj13 = { narrow: items4, any: items5 };
items4 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
items5 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj14 = { matchPatterns: { narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i }, defaultMatchWidth: "any", parsePatterns: obj15, defaultParseWidth: "any" };
obj15 = { any: { am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i } };
obj5 = { matchPattern: /^[०१२३४५६७८९]+/i, parsePattern: /^[०१२३४५६७८९]+/i, valueCallback: localeToNumber.localeToNumber };

export default date;