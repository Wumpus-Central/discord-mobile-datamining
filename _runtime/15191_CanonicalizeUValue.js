// === Module 15191: CanonicalizeUValue ===

// Module 15191 (CanonicalizeUValue)
import _mod15185 from "module_15185" /* 15185 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15185.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};