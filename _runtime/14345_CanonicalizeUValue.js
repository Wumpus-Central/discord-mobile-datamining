// _runtime/14345_CanonicalizeUValue.js
import _mod14339 from "metro/14339__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14339.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
