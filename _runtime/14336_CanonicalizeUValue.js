// _runtime/14336_CanonicalizeUValue.js
import _mod14330 from "metro/14330__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14330.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
