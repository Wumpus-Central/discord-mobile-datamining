// _runtime/15392_CanonicalizeUValue.js
import _mod15386 from "metro/15386__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15386.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
