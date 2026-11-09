// === Module 16391: CanonicalizeUValue ===

// Module 16391 (CanonicalizeUValue)
import _mod16385 from "module_16385" /* 16385 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16385.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}