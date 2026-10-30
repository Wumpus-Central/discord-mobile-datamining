// === Module 16033: CanonicalizeUValue ===

// Module 16033 (CanonicalizeUValue)
import _mod16027 from "module_16027" /* 16027 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16027.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}