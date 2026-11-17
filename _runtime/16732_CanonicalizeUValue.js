// _runtime/16732_CanonicalizeUValue.js
import _mod16726 from "metro/16726__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16726.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
