// === Module 13907: CanonicalizeUValue ===

// Module 13907 (CanonicalizeUValue)
import _mod13901 from "module_13901" /* 13901 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13901.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};