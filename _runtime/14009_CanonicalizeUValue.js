// === Module 14009: CanonicalizeUValue ===

// Module 14009 (CanonicalizeUValue)
import _mod14003 from "module_14003" /* 14003 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14003.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};