// === Module 15392: CanonicalizeUValue ===

// Module 15392 (CanonicalizeUValue)
import _mod15386 from "module_15386" /* 15386 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15386.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};