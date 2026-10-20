// _runtime/15320_CanonicalizeUValue.js
import _mod15314 from "metro/15314__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15314.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
