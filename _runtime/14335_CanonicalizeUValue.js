// === Module 14335: CanonicalizeUValue ===

// Module 14335 (CanonicalizeUValue)
import _mod14329 from "module_14329" /* 14329 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14329.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};