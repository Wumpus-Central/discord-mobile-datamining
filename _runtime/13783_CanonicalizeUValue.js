// === Module 13783: CanonicalizeUValue ===

// Module 13783 (CanonicalizeUValue)
import _mod13777 from "module_13777" /* 13777 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13777.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};