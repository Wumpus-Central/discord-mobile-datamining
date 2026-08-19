// === Module 13665: getSupportedUnits ===

// Module 13665 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13666).units;
  return units.filter((item, index) => (function isSupported(item, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { style: "unit", unit: null };
      obj[1] = item;
      const memoizedNumberFormat = callback(table[0]).createMemoizedNumberFormat(str, obj);
      return memoizedNumberFormat.resolvedOptions().unit === item;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};