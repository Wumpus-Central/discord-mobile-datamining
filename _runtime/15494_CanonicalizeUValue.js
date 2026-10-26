// === Module 15494: CanonicalizeUValue ===

// Module 15494 (CanonicalizeUValue)
import _mod15488 from "module_15488" /* 15488 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15488.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};