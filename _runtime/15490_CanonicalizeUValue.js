// === Module 15490: CanonicalizeUValue ===

// Module 15490 (CanonicalizeUValue)
import _mod15484 from "module_15484" /* 15484 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15484.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};