// === Module 13738: CanonicalizeUValue ===

// Module 13738 (CanonicalizeUValue)
import _mod13732 from "module_13732" /* 13732 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13732.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};