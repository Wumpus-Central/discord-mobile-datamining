// === Module 14478: CanonicalizeUValue ===

// Module 14478 (CanonicalizeUValue)
import _mod14472 from "module_14472" /* 14472 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14472.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};