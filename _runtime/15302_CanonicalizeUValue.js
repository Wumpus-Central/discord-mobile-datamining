// _runtime/15302_CanonicalizeUValue.js
import _mod15296 from "metro/15296__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod15296.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
