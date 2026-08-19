// _runtime/13589___exportStarResult6.js
import __exportStarResult32 from "13580___exportStarResult32.js";

require = arg1;
const dependencyMap = arg6;
arg5.GetStringOrBooleanOption = function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, min2) {
  if (undefined === result1[useGrouping]) {
    return min2;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      __exportStarResult32.ToString(tmp);
      const str = "true";
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
      return min2;
    }
  }
};