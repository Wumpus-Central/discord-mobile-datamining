// === Module 15495: CanonicalizeUValue ===

// Module 15495 (CanonicalizeUValue)
import _mod15489 from "module_15489" /* 15489 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15489.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};