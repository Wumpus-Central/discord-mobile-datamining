// === Module 14501: CanonicalizeUValue ===

// Module 14501 (CanonicalizeUValue)
import _mod14495 from "module_14495" /* 14495 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14495.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};