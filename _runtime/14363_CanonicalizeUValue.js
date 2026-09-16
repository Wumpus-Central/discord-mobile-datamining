// === Module 14363: CanonicalizeUValue ===

// Module 14363 (CanonicalizeUValue)
import _mod14357 from "module_14357" /* 14357 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14357.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};