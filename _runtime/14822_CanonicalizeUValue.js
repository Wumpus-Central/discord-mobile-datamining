// _runtime/14822_CanonicalizeUValue.js
import _mod14816 from "metro/14816__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14816.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
