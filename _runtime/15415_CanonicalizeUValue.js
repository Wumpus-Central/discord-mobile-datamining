// _runtime/15415_CanonicalizeUValue.js
import _mod15409 from "metro/15409__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15409.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
