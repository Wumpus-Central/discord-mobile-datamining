// _runtime/16336_CanonicalizeUValue.js
import _mod16330 from "metro/16330__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16330.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
