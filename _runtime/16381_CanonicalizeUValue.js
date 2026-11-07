// === Module 16381: CanonicalizeUValue ===

// Module 16381 (CanonicalizeUValue)
import _mod16375 from "module_16375" /* 16375 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16375.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}