// _runtime/16579_CanonicalizeUValue.js
import _mod16573 from "metro/16573__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16573.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
