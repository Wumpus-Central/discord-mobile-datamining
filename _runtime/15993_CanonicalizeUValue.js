// _runtime/15993_CanonicalizeUValue.js
import _mod15987 from "metro/15987__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15987.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
