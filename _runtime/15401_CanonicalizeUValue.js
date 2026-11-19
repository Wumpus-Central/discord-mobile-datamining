// _runtime/15401_CanonicalizeUValue.js
import _mod15395 from "metro/15395__.js";

require = arg1;
const dependencyMap = arg6;

export function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15395.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
}
