// === Module 14527: CanonicalizeUValue ===

// Module 14527 (CanonicalizeUValue)
import _mod14521 from "module_14521" /* 14521 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14521.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};