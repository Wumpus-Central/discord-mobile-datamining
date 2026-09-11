// _runtime/14331_supportedValuesOf.js
import _mod14332 from "metro/14332__.js";
import collations from "14334_collations.js";
import _mod14336 from "metro/14336__.js";
import _mod14338 from "metro/14338__.js";
import _mod14340 from "metro/14340__.js";
import _mod14342 from "metro/14342__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14332.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14336.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14338.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14340.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14342.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
