// === Module 15401: CanonicalizeUValue ===

// Module 15401 (CanonicalizeUValue)
import _mod15395 from "module_15395" /* 15395 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15395.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}