// === Module 16078: CanonicalizeUValue ===

// Module 16078 (CanonicalizeUValue)
import _mod16072 from "module_16072" /* 16072 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16072.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}