// === Module 15682: CanonicalizeUValue ===

// Module 15682 (CanonicalizeUValue)
import _mod15676 from "module_15676" /* 15676 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15676.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}