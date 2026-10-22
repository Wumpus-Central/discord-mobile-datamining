// === Module 15436: CanonicalizeUValue ===

// Module 15436 (CanonicalizeUValue)
import _mod15430 from "module_15430" /* 15430 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15430.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};