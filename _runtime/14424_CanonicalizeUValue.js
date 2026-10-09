// _runtime/14424_CanonicalizeUValue.js
import _mod14418 from "metro/14418__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14418.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
