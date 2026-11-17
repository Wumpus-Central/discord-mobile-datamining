// === Module 16732: CanonicalizeUValue ===

// Module 16732 (CanonicalizeUValue)
import _mod16726 from "module_16726" /* 16726 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16726.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}