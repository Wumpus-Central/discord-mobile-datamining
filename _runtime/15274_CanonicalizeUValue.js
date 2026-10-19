// === Module 15274: CanonicalizeUValue ===

// Module 15274 (CanonicalizeUValue)
import _mod15268 from "module_15268" /* 15268 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15268.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};