// === Module 15320: CanonicalizeUValue ===

// Module 15320 (CanonicalizeUValue)
import _mod15314 from "module_15314" /* 15314 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15314.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};