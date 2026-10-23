// _runtime/15470_CanonicalizeUValue.js
import _mod15464 from "metro/15464__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15464.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
