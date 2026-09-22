// === Module 14533: CanonicalizeUValue ===

// Module 14533 (CanonicalizeUValue)
import _mod14527 from "module_14527" /* 14527 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14527.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};