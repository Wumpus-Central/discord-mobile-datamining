// === Module 15509: CanonicalizeUValue ===

// Module 15509 (CanonicalizeUValue)
import _mod15503 from "module_15503" /* 15503 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15503.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}