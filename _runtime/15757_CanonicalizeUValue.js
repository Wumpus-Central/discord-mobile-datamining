// === Module 15757: CanonicalizeUValue ===

// Module 15757 (CanonicalizeUValue)
import _mod15751 from "module_15751" /* 15751 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15751.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};