// _runtime/13665_getSupportedUnits.js
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = require("metro/13666__.js").units;
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