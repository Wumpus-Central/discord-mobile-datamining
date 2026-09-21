// _runtime/14527_CanonicalizeUValue.js
import _mod14521 from "metro/14521__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14521.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
