// _runtime/14367_supportedValuesOf.js
import _mod14368 from "metro/14368__.js";
import collations from "14370_collations.js";
import _mod14372 from "metro/14372__.js";
import _mod14374 from "metro/14374__.js";
import _mod14376 from "metro/14376__.js";
import _mod14378 from "metro/14378__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14368.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14372.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14374.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14376.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14378.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
