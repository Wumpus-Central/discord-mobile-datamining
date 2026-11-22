// _runtime/15486_CanonicalizeUValue.js
import _mod15480 from "metro/15480__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15480.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
