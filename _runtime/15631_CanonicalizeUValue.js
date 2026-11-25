// === Module 15631: CanonicalizeUValue ===

// Module 15631 (CanonicalizeUValue)
import _mod15625 from "module_15625" /* 15625 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15625.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}