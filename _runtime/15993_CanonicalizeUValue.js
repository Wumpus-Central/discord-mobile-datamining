// === Module 15993: CanonicalizeUValue ===

// Module 15993 (CanonicalizeUValue)
import _mod15987 from "module_15987" /* 15987 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15987.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}