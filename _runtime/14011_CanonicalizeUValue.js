// _runtime/14011_CanonicalizeUValue.js
import _mod14005 from "metro/14005__.js";

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, localeMatcher) {
  formatted = localeMatcher.toLowerCase();
  _mod14005.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
