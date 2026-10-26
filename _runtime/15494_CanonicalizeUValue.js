// _runtime/15494_CanonicalizeUValue.js
import _mod15488 from "metro/15488__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15488.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
