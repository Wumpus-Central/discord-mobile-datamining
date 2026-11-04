// _runtime/16323_CanonicalizeUValue.js
import _mod16317 from "metro/16317__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16317.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
