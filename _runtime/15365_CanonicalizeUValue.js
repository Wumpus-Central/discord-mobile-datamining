// _runtime/15365_CanonicalizeUValue.js
import _mod15359 from "metro/15359__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15359.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
