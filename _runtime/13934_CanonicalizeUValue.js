// === Module 13934: CanonicalizeUValue ===

// Module 13934 (CanonicalizeUValue)
import _mod13928 from "module_13928" /* 13928 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13928.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};