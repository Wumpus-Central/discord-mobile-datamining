// === Module 16574: CanonicalizeUValue ===

// Module 16574 (CanonicalizeUValue)
import _mod16568 from "module_16568" /* 16568 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16568.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}