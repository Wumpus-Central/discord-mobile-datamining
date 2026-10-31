// === Module 16074: CanonicalizeUValue ===

// Module 16074 (CanonicalizeUValue)
import _mod16068 from "module_16068" /* 16068 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16068.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}