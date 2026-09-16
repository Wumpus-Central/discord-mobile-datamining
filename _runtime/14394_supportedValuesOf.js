// _runtime/14394_supportedValuesOf.js
import _mod14395 from "metro/14395__.js";
import collations from "14397_collations.js";
import _mod14399 from "metro/14399__.js";
import _mod14401 from "metro/14401__.js";
import _mod14403 from "metro/14403__.js";
import _mod14405 from "metro/14405__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14395.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14399.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14401.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14403.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14405.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
