// === Module 16579: CanonicalizeUValue ===

// Module 16579 (CanonicalizeUValue)
import _mod16573 from "module_16573" /* 16573 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16573.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}