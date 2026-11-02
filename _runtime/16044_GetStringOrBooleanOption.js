// === Module 16044: GetStringOrBooleanOption ===

// Module 16044 (GetStringOrBooleanOption)
import _mod16035 from "module_16035" /* 16035 */;

require = arg1;
const dependencyMap = arg6;

export function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, min2) {
  if (undefined === result1[useGrouping]) {
    return min2;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      const str1 = _mod16035.ToString(tmp);
      if ("true" !== str1) {
        if ("false" !== str1) {
          let items = arg2;
          if (!arg2) {
            items = [];
          }
          if (-1 === items.indexOf(str1)) {
            const _RangeError = RangeError;
            const concat = "Invalid value ".concat;
            const rangeError = new RangeError("Invalid value ".concat(str1));
            throw rangeError;
          } else {
            return str1;
          }
        }
      }
      return min2;
    }
  }
}