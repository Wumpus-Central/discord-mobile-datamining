// _runtime/15488_CanonicalizeUValue.js
import _mod15482 from "metro/15482__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15482.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
