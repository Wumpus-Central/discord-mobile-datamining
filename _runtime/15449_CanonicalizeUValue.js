// === Module 15449: CanonicalizeUValue ===

// Module 15449 (CanonicalizeUValue)
import _mod15443 from "module_15443" /* 15443 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15443.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};