// === Module 15415: CanonicalizeUValue ===

// Module 15415 (CanonicalizeUValue)
import _mod15409 from "module_15409" /* 15409 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15409.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}