// === Module 14328: CanonicalizeUValue ===

// Module 14328 (CanonicalizeUValue)
import _mod14322 from "module_14322" /* 14322 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14322.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};