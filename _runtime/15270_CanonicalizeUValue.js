// _runtime/15270_CanonicalizeUValue.js
import _mod15264 from "metro/15264__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15264.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
