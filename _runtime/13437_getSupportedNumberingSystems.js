// _runtime/13437_getSupportedNumberingSystems.js
import { 13438__ } from "metro/13438__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  const _require = locale;
  const numberingSystemNames = _13438__.numberingSystemNames;
  return numberingSystemNames.filter((arg0) => (function isSupportedNumberingSystem(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-nu-");
      const memoizedNumberFormat = callback(table[0]).createMemoizedNumberFormat(combined.concat(arg0));
      if (memoizedNumberFormat.resolvedOptions().numberingSystem !== arg0) {
        if ("123" === memoizedNumberFormat.format(123)) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(arg0, closure_0));
};