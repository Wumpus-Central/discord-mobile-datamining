// === Module 15302: CanonicalizeUValue ===

// Module 15302 (CanonicalizeUValue)
import _mod15296 from "module_15296" /* 15296 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15296.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};