// _runtime/16391_CanonicalizeUValue.js
import _mod16385 from "metro/16385__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16385.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
