// _runtime/14860_CanonicalizeUValue.js
import _mod14854 from "metro/14854__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14854.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
