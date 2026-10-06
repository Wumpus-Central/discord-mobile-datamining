// === Module 14029: CanonicalizeUValue ===

// Module 14029 (CanonicalizeUValue)
import _mod14023 from "module_14023" /* 14023 */;


export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14023.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};