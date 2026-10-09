// === Module 14424: CanonicalizeUValue ===

// Module 14424 (CanonicalizeUValue)
import _mod14418 from "module_14418" /* 14418 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14418.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};