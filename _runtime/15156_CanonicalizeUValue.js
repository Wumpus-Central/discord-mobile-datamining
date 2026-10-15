// === Module 15156: CanonicalizeUValue ===

// Module 15156 (CanonicalizeUValue)
import _mod15150 from "module_15150" /* 15150 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15150.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};