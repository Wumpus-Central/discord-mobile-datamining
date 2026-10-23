// === Module 15470: CanonicalizeUValue ===

// Module 15470 (CanonicalizeUValue)
import _mod15464 from "module_15464" /* 15464 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15464.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};