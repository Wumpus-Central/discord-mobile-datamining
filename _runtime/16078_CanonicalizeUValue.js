// _runtime/16078_CanonicalizeUValue.js
import _mod16072 from "metro/16072__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16072.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
