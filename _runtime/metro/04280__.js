// === Module 4280: ? ===

// Module 4280
import _mod4277 from "module_4277" /* 4277 */;
import module_2119 from "module_2119" /* 2119 */;
import module_2120 from "module_2120" /* 2120 */;

if (!module_2119) {
  const obj2 = { default: module_2119 };
  let obj = obj2;
} else {
  obj = module_2119;
}
if (!module_2120) {
  const obj4 = { default: module_2120 };
  let obj3 = obj4;
} else {
  obj3 = module_2120;
}
const date = { ordinalNumber: obj3.default({ matchPattern: /^[०१२३४५६७८९]+/i, parsePattern: /^[०१२३४५६७८९]+/i, valueCallback: _mod4277.localeToNumber }), era: null, quarter: null, month: null, day: null, dayPeriod: null };
const obj6 = { matchPatterns: { narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { any: null };
const items = [/^b/i, /^(a|c)/i];
obj7.any = items;
obj6.parsePatterns = obj7;
date.era = obj.default(obj6);
const obj8 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^ति[1234]/i, wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj9 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj9.any = items1;
obj8.parsePatterns = obj9;
date.quarter = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj11 = { narrow: null, any: null };
const items2 = [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i];
obj11.narrow = items2;
const items3 = [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i];
obj11.any = items3;
obj10.parsePatterns = obj11;
date.month = obj.default(obj10);
const obj12 = { matchPatterns: { narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj13 = { narrow: null, any: null };
const items4 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj13.narrow = items4;
const items5 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj13.any = items5;
obj12.parsePatterns = obj13;
date.day = obj.default(obj12);
const obj14 = { matchPatterns: { narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj14);

export default date;
export default exports.default;