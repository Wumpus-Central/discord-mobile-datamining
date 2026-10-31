// _runtime/16074_CanonicalizeUValue.js
import _mod16068 from "metro/16068__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16068.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
