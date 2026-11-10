// _runtime/16418_CanonicalizeUValue.js
import _mod16412 from "metro/16412__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16412.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
