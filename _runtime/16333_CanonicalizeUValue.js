// === Module 16333: CanonicalizeUValue ===

// Module 16333 (CanonicalizeUValue)
import _mod16327 from "module_16327" /* 16327 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16327.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}