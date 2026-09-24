// === Module 14622: CanonicalizeUValue ===

// Module 14622 (CanonicalizeUValue)
import _mod14616 from "module_14616" /* 14616 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14616.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};