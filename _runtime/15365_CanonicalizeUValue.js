// === Module 15365: CanonicalizeUValue ===

// Module 15365 (CanonicalizeUValue)
import _mod15359 from "module_15359" /* 15359 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15359.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}