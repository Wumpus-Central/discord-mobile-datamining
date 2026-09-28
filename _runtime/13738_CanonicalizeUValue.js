// _runtime/13738_CanonicalizeUValue.js
import _mod13732 from "metro/13732__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod13732.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
