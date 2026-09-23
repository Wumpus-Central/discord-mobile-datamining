// === Module 14613: CanonicalizeUValue ===

// Module 14613 (CanonicalizeUValue)
import _mod14607 from "module_14607" /* 14607 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14607.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};