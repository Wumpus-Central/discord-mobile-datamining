// === Module 16323: CanonicalizeUValue ===

// Module 16323 (CanonicalizeUValue)
import _mod16317 from "module_16317" /* 16317 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16317.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}