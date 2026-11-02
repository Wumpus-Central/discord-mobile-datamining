// _runtime/16109_supportedValuesOf.js
import _mod16110 from "metro/16110__.js";
import collations from "16112_collations.js";
import _mod16114 from "metro/16114__.js";
import _mod16116 from "metro/16116__.js";
import _mod16118 from "metro/16118__.js";
import _mod16120 from "metro/16120__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16110.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16114.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16116.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16118.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16120.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
