// _runtime/metro/04119__.js
import _mod4116 from "04116__.js";
import 02035__ from "02035__.js";
import 02036__ from "02036__.js";

if (!module_2035) {
  let obj = { default: module_2035 };
} else {
  obj = module_2035;
}
if (!module_2036) {
  obj = { default: module_2036 };
  let obj2 = obj;
} else {
  obj2 = module_2036;
}
const date = { ordinalNumber: obj2.default({ matchPattern: /^[०१२३४५६७८९]+/i, parsePattern: /^[०१२३४५६७८९]+/i, valueCallback: _mod4116.localeToNumber }), era: null, quarter: null, month: null, day: null, dayPeriod: null };
obj2 = { matchPatterns: { narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj3 = { any: null };
const items = [/^b/i, /^(a|c)/i];
obj3.any = items;
obj2.parsePatterns = obj3;
date.era = obj.default(obj2);
const obj4 = {
  matchPatterns: { narrow: /^[1234]/i, abbreviated: /^ति[1234]/i, wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i },
  defaultMatchWidth: "wide",
  parsePatterns: null,
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
};
const obj5 = { any: null };
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj5.any = items1;
obj4.parsePatterns = obj5;
date.quarter = obj.default(obj4);
const obj6 = { matchPatterns: { narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj7 = { narrow: null, any: null };
const items2 = [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i];
obj7.narrow = items2;
const items3 = [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i];
obj7.any = items3;
obj6.parsePatterns = obj7;
date.month = obj.default(obj6);
const obj8 = { matchPatterns: { narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i }, defaultMatchWidth: "wide", parsePatterns: null, defaultParseWidth: "any" };
const obj9 = { narrow: null, any: null };
const items4 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj9.narrow = items4;
const items5 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj9.any = items5;
obj8.parsePatterns = obj9;
date.day = obj.default(obj8);
const obj10 = { matchPatterns: { narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i } }, defaultParseWidth: "any" };
date.dayPeriod = obj.default(obj10);

export default date;
export default exports.default;