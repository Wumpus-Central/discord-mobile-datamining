// _runtime/14302_GetStringOrBooleanOption.js
import _mod14293 from "metro/14293__.js";

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
      const str1 = _mod14293.ToString(tmp);
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
};
