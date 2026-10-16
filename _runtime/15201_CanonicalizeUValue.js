// _runtime/15201_CanonicalizeUValue.js
import _mod15195 from "metro/15195__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15195.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
