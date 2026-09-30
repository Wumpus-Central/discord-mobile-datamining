// _runtime/13934_CanonicalizeUValue.js
import _mod13928 from "metro/13928__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13928.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
