// === Module 15689: CanonicalizeUValue ===

// Module 15689 (CanonicalizeUValue)
import _mod15683 from "module_15683" /* 15683 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15683.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}