// === Module 3818: isProtectedDayOfYearToken ===

// Module 3818 (isProtectedDayOfYearToken)
arg5.isProtectedDayOfYearToken = function isProtectedDayOfYearToken(arg0) {
  return -1 !== closure_0.indexOf(arg0);
};
arg5.isProtectedWeekYearToken = function isProtectedWeekYearToken(arg0) {
  return -1 !== closure_1.indexOf(arg0);
};
arg5.throwProtectedError = function throwProtectedError(arg0, closure_1, arg2) {
  if ("YYYY" === arg0) {
    const _RangeError4 = RangeError;
    const concat4 = "Use `yyyy` instead of `YYYY` (in `".concat;
    const combined = "Use `yyyy` instead of `YYYY` (in `".concat(closure_1, "`) for formatting years to the input `");
    const rangeError = new RangeError(combined.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError;
  } else if ("YY" === arg0) {
    const _RangeError3 = RangeError;
    const concat3 = "Use `yy` instead of `YY` (in `".concat;
    const combined1 = "Use `yy` instead of `YY` (in `".concat(closure_1, "`) for formatting years to the input `");
    const rangeError1 = new RangeError(combined1.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError1;
  } else if ("D" === arg0) {
    const _RangeError2 = RangeError;
    const concat2 = "Use `d` instead of `D` (in `".concat;
    const combined2 = "Use `d` instead of `D` (in `".concat(closure_1, "`) for formatting days of the month to the input `");
    const rangeError2 = new RangeError(combined2.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError2;
  } else if ("DD" === arg0) {
    const _RangeError = RangeError;
    const concat = "Use `dd` instead of `DD` (in `".concat;
    const combined3 = "Use `dd` instead of `DD` (in `".concat(closure_1, "`) for formatting days of the month to the input `");
    const rangeError3 = new RangeError(combined3.concat(arg2, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    throw rangeError3;
  }
};
let closure_0 = ["D", "DD"];
let closure_1 = ["YY", "YYYY"];