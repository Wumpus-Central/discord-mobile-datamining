// _runtime/16574_CanonicalizeUValue.js
import _mod16568 from "metro/16568__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16568.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
