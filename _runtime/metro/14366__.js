// === Module 14366: ? ===

// Module 14366
const require = arg1;
const dependencyMap = arg6;

export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_14367").units;
  return units.filter((item) => (function isSupported(unit, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const obj = { style: "unit", unit };
      const memoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat(str, obj);
      return memoizedNumberFormat.resolvedOptions().unit === unit;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};