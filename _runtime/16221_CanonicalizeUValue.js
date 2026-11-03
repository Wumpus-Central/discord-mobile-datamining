// === Module 16221: CanonicalizeUValue ===

// Module 16221 (CanonicalizeUValue)
import _mod16215 from "module_16215" /* 16215 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16215.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}