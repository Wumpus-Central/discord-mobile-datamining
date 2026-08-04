// _runtime/metro/03741__.js
import buildMatchFn from "buildMatchFn";
import buildMatchPatternFn from "buildMatchPatternFn";

if (!buildMatchFn) {
  let obj = { default: null };
  obj[0] = buildMatchFn;
} else {
  obj = buildMatchFn;
}
if (!buildMatchPatternFn) {
  obj = { default: null };
  obj[0] = buildMatchPatternFn;
  let obj2 = obj;
} else {
  obj2 = buildMatchPatternFn;
}
const obj1 = { ordinalNumber: null, era: null, quarter: null, month: null, day: null, dayPeriod: null };
obj2 = { matchPattern: /^[०१२३४५६७८९]+/i, parsePattern: /^[०१२३४५६७८९]+/i, valueCallback: require("localeToNumber").localeToNumber };
obj1[0] = obj2.default(obj2);
const items = [/^b/i, /^(a|c)/i];
obj1[1] = obj.default({ matchPatterns: { narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i }, defaultMatchWidth: "wide", parsePatterns: { any: items }, defaultParseWidth: "any" });
const items1 = [/1/i, /2/i, /3/i, /4/i];
obj1[2] = obj.default({
  matchPatterns: obj5,
  defaultMatchWidth: "wide",
  parsePatterns: { any: items1 },
  defaultParseWidth: "any",
  valueCallback(arg0) {
    return arg0 + 1;
  }
});
const items2 = [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i];
const items3 = [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i];
obj1[3] = obj.default({ matchPatterns: { narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: items2, any: items3 }, defaultParseWidth: "any" });
const items4 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
const items5 = [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i];
obj1[4] = obj.default({ matchPatterns: { narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: items4, any: items5 }, defaultParseWidth: "any" });
obj1[5] = obj.default({ matchPatterns: { narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i } }, defaultParseWidth: "any" });

export default obj1;
export default exports.default;