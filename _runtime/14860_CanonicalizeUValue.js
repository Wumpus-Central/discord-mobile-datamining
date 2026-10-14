// === Module 14860: CanonicalizeUValue ===

// Module 14860 (CanonicalizeUValue)
import _mod14854 from "module_14854" /* 14854 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14854.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};