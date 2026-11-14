// _runtime/16697_CanonicalizeUValue.js
import _mod16691 from "metro/16691__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16691.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
