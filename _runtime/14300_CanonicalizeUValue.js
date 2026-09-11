// === Module 14300: CanonicalizeUValue ===

// Module 14300 (CanonicalizeUValue)
import _mod14294 from "module_14294" /* 14294 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14294.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};