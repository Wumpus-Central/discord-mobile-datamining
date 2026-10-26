// _runtime/15495_CanonicalizeUValue.js
import _mod15489 from "metro/15489__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15489.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
