// === Module 15486: CanonicalizeUValue ===

// Module 15486 (CanonicalizeUValue)
import _mod15480 from "module_15480" /* 15480 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15480.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}