// === Module 16336: CanonicalizeUValue ===

// Module 16336 (CanonicalizeUValue)
import _mod16330 from "module_16330" /* 16330 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16330.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}