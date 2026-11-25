// _runtime/15631_CanonicalizeUValue.js
import _mod15625 from "metro/15625__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15625.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
