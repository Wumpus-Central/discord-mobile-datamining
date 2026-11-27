// _runtime/15689_CanonicalizeUValue.js
import _mod15683 from "metro/15683__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15683.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
