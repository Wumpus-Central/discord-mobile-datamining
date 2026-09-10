// === Module 14324: CanonicalizeUValue ===

// Module 14324 (CanonicalizeUValue)
import _mod14318 from "module_14318" /* 14318 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14318.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};