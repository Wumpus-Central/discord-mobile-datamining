// _runtime/15191_CanonicalizeUValue.js
import _mod15185 from "metro/15185__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15185.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
