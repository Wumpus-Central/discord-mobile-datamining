// _runtime/13783_CanonicalizeUValue.js
import _mod13777 from "metro/13777__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13777.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
