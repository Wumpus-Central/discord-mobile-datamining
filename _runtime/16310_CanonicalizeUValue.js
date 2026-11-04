// === Module 16310: CanonicalizeUValue ===

// Module 16310 (CanonicalizeUValue)
import _mod16304 from "module_16304" /* 16304 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16304.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}