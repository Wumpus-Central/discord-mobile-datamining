// _runtime/15682_CanonicalizeUValue.js
import _mod15676 from "metro/15676__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15676.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
