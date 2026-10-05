// _runtime/14011_CanonicalizeUValue.js
import _mod14005 from "metro/14005__.js";

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14005.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
