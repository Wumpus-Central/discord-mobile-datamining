// _runtime/15509_CanonicalizeUValue.js
import _mod15503 from "metro/15503__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15503.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
