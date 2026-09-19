// === Module 14521: CanonicalizeUValue ===

// Module 14521 (CanonicalizeUValue)
import _mod14515 from "module_14515" /* 14515 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14515.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};