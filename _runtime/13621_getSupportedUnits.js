// _runtime/13621_getSupportedUnits.js
import { 13622__ } from "metro/13622__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _13622__.units;
  return units.filter((arg0) => (function isSupported(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { style: "unit", unit: null };
      obj[1] = arg0;
      const memoizedNumberFormat = callback(table[0]).createMemoizedNumberFormat(str, obj);
      return memoizedNumberFormat.resolvedOptions().unit === arg0;
    } catch (err) {
      return false;
    }
  })(arg0, closure_0));
};