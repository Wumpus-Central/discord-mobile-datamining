// === Module 14466: CanonicalizeUValue ===

// Module 14466 (CanonicalizeUValue)
import _mod14460 from "module_14460" /* 14460 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14460.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};