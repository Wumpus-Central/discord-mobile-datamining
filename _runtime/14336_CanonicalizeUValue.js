// === Module 14336: CanonicalizeUValue ===

// Module 14336 (CanonicalizeUValue)
import _mod14330 from "module_14330" /* 14330 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14330.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};