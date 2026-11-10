// === Module 16418: CanonicalizeUValue ===

// Module 16418 (CanonicalizeUValue)
import _mod16412 from "module_16412" /* 16412 */;

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16412.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}