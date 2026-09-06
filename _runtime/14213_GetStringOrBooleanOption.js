// _runtime/14213_GetStringOrBooleanOption.js
import _mod14204 from "metro/14204__.js";

require = arg1;
const dependencyMap = arg6;

export const GetStringOrBooleanOption = function GetStringOrBooleanOption(
  result1,
  useGrouping,
  arg2,
  always,
  arg4,
  min2,
) {
  if (undefined === result1[useGrouping]) {
    return min2;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      _mod14204.ToString(tmp);
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
