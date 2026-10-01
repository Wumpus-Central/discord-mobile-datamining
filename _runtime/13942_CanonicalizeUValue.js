// === Module 13942: CanonicalizeUValue ===

// Module 13942 (CanonicalizeUValue)
import _mod13936 from "module_13936" /* 13936 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13936.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};