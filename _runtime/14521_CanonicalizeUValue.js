// _runtime/14521_CanonicalizeUValue.js
import _mod14515 from "metro/14515__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14515.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
