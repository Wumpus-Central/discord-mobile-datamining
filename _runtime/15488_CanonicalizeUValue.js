// === Module 15488: CanonicalizeUValue ===

// Module 15488 (CanonicalizeUValue)
import _mod15482 from "module_15482" /* 15482 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15482.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}