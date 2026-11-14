// === Module 16697: CanonicalizeUValue ===

// Module 16697 (CanonicalizeUValue)
import _mod16691 from "module_16691" /* 16691 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16691.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}