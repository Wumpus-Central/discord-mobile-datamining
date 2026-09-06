// === Module 3897: throwProtectedError ===

// Module 3897 (throwProtectedError)
let closure_0 = ["D", "DD"];
let closure_1 = ["YY", "YYYY"];

export const isProtectedDayOfYearToken = function isProtectedDayOfYearToken(value) {
  return -1 !== closure_0.indexOf(value);
};
export const isProtectedWeekYearToken = function isProtectedWeekYearToken(value) {
  return -1 !== closure_1.indexOf(value);
};
export const throwProtectedError = function throwProtectedError(value, value2, arg2) {
  if ("YYYY" === value) {
    const _RangeError4 = RangeError;
    const concat4 = "Use `yyyy` instead of `YYYY` (in `".concat;
    const combined = "Use `yyyy` instead of `YYYY` (in `".concat(value2, "`) for formatting years to the input `");
    const rangeError = new RangeError(combined.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError;
  } else if ("YY" === value) {
    const _RangeError3 = RangeError;
    const concat3 = "Use `yy` instead of `YY` (in `".concat;
    const combined1 = "Use `yy` instead of `YY` (in `".concat(value2, "`) for formatting years to the input `");
    const rangeError1 = new RangeError(combined1.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError1;
  } else if ("D" === value) {
    const _RangeError2 = RangeError;
    const concat2 = "Use `d` instead of `D` (in `".concat;
    const combined2 = "Use `d` instead of `D` (in `".concat(value2, "`) for formatting days of the month to the input `");
    const rangeError2 = new RangeError(combined2.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError2;
  } else if ("DD" === value) {
    const _RangeError = RangeError;
    const concat = "Use `dd` instead of `DD` (in `".concat;
    const combined3 = "Use `dd` instead of `DD` (in `".concat(value2, "`) for formatting days of the month to the input `");
    const rangeError3 = new RangeError(combined3.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError3;
  }
};