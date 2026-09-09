// _runtime/14306_supportedValuesOf.js
import _mod14307 from "metro/14307__.js";
import collations from "14309_collations.js";
import _mod14311 from "metro/14311__.js";
import _mod14313 from "metro/14313__.js";
import _mod14315 from "metro/14315__.js";
import _mod14317 from "metro/14317__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14307.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14311.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14313.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14315.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14317.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
