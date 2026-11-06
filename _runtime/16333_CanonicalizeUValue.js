// _runtime/16333_CanonicalizeUValue.js
import _mod16327 from "metro/16327__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16327.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
