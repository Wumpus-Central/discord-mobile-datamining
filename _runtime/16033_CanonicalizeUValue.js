// _runtime/16033_CanonicalizeUValue.js
import _mod16027 from "metro/16027__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16027.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
