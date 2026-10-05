// === Module 14011: CanonicalizeUValue ===

// Module 14011 (CanonicalizeUValue)
import _mod14005 from "module_14005" /* 14005 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14005.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};