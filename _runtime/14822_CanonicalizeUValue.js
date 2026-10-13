// === Module 14822: CanonicalizeUValue ===

// Module 14822 (CanonicalizeUValue)
import _mod14816 from "module_14816" /* 14816 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14816.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};