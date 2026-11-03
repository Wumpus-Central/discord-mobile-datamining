// _runtime/16221_CanonicalizeUValue.js
import _mod16215 from "metro/16215__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16215.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
