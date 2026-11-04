// _runtime/16310_CanonicalizeUValue.js
import _mod16304 from "metro/16304__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16304.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
