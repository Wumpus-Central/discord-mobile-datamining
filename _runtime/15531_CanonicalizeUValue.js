// === Module 15531: CanonicalizeUValue ===

// Module 15531 (CanonicalizeUValue)
import _mod15525 from "module_15525" /* 15525 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15525.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};