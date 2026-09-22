// _runtime/14564_supportedValuesOf.js
import _mod14565 from "metro/14565__.js";
import collations from "14567_collations.js";
import _mod14569 from "metro/14569__.js";
import _mod14571 from "metro/14571__.js";
import _mod14573 from "metro/14573__.js";
import _mod14575 from "metro/14575__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14565.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14569.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14571.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14573.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14575.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
