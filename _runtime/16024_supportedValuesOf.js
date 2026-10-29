// _runtime/16024_supportedValuesOf.js
import _mod16025 from "metro/16025__.js";
import collations from "16027_collations.js";
import _mod16029 from "metro/16029__.js";
import _mod16031 from "metro/16031__.js";
import _mod16033 from "metro/16033__.js";
import _mod16035 from "metro/16035__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16025.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16029.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16031.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16033.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16035.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
