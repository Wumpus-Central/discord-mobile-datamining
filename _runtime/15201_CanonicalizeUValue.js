// === Module 15201: CanonicalizeUValue ===

// Module 15201 (CanonicalizeUValue)
import _mod15195 from "module_15195" /* 15195 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15195.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};