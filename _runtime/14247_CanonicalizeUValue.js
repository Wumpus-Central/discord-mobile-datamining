// === Module 14247: CanonicalizeUValue ===

// Module 14247 (CanonicalizeUValue)
import _mod14241 from "module_14241" /* 14241 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14241.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};