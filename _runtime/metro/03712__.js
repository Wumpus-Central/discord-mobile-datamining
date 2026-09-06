// === Module 3712: ? ===

// Module 3712
import module_2033 from "module_2033" /* 2033 */;

if (!module_2033) {
  let obj = { default: module_2033 };
} else {
  obj = module_2033;
}
const date = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: null,
  quarter: null,
  month: null,
  day: null,
  dayPeriod: null
};
obj = { values: { narrow: ["ie.", "isz."], abbreviated: ["i. e.", "i. sz."], wide: ["Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint"] }, defaultWidth: "wide" };
date.era = obj.default(obj);
date.quarter = obj.default({
  values: { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. n.\u00E9v", "2. n.\u00E9v", "3. n.\u00E9v", "4. n.\u00E9v"], wide: ["1. negyed\u00E9v", "2. negyed\u00E9v", "3. negyed\u00E9v", "4. negyed\u00E9v"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  },
  formattingValues: { narrow: ["I.", "II.", "III.", "IV."], abbreviated: ["I. n.\u00E9v", "II. n.\u00E9v", "III. n.\u00E9v", "IV. n.\u00E9v"], wide: ["I. negyed\u00E9v", "II. negyed\u00E9v", "III. negyed\u00E9v", "IV. negyed\u00E9v"] },
  defaultFormattingWidth: "wide"
});
date.month = obj.default({ values: { narrow: ["J", "F", "M", "\u00C1", "M", "J", "J", "A", "Sz", "O", "N", "D"], abbreviated: ["jan.", "febr.", "m\u00E1rc.", "\u00E1pr.", "m\u00E1j.", "j\u00FAn.", "j\u00FAl.", "aug.", "szept.", "okt.", "nov.", "dec."], wide: ["janu\u00E1r", "febru\u00E1r", "m\u00E1rcius", "\u00E1prilis", "m\u00E1jus", "j\u00FAnius", "j\u00FAlius", "augusztus", "szeptember", "okt\u00F3ber", "november", "december"] }, defaultWidth: "wide" });
date.day = obj.default({ values: { narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"], short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], wide: ["vas\u00E1rnap", "h\u00E9tf\u0151", "kedd", "szerda", "cs\u00FCt\u00F6rt\u00F6k", "p\u00E9ntek", "szombat"] }, defaultWidth: "wide" });
date.dayPeriod = obj.default({ values: { narrow: { am: "de.", pm: "du.", midnight: "\u00E9jf\u00E9l", noon: "d\u00E9l", morning: "reggel", afternoon: "du.", evening: "este", night: "\u00E9jjel" }, abbreviated: { am: "de.", pm: "du.", midnight: "\u00E9jf\u00E9l", noon: "d\u00E9l", morning: "reggel", afternoon: "du.", evening: "este", night: "\u00E9jjel" }, wide: { am: "de.", pm: "du.", midnight: "\u00E9jf\u00E9l", noon: "d\u00E9l", morning: "reggel", afternoon: "d\u00E9lut\u00E1n", evening: "este", night: "\u00E9jjel" } }, defaultWidth: "wide" });

export default date;
export default exports.default;