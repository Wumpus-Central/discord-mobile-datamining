// _runtime/16381_CanonicalizeUValue.js
import _mod16375 from "metro/16375__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod16375.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
