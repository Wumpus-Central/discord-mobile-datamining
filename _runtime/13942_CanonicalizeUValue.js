// _runtime/13942_CanonicalizeUValue.js
import _mod13936 from "metro/13936__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13936.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
