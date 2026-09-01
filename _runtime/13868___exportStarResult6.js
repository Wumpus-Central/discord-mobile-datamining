// === Module 13868: __exportStarResult6 ===

// Module 13868 (__exportStarResult6)
import __exportStarResult32 from "__exportStarResult32" /* 13859 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetStringOrBooleanOption = function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, arg5) {
  if (undefined === result1[useGrouping]) {
    return arg5;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      let str = __exportStarResult32.ToString(tmp);
      str = "true";
      if ("true" !== str) {
        if ("false" !== str) {
          let items = arg2;
          if (!arg2) {
            items = [];
          }
          if (-1 === items.indexOf(str)) {
            const _RangeError = RangeError;
            const concat = "Invalid value ".concat;
            const rangeError = new RangeError("Invalid value ".concat(str));
            throw rangeError;
          } else {
            return str;
          }
        }
      }
      return arg5;
    }
  }
};