// === Module 15270: CanonicalizeUValue ===

// Module 15270 (CanonicalizeUValue)
import _mod15264 from "module_15264" /* 15264 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15264.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};