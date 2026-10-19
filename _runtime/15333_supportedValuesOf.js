// _runtime/15333_supportedValuesOf.js
import _mod15334 from "metro/15334__.js";
import collations from "15336_collations.js";
import _mod15338 from "metro/15338__.js";
import _mod15340 from "metro/15340__.js";
import _mod15342 from "metro/15342__.js";
import _mod15344 from "metro/15344__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15334.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15338.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15340.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15342.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15344.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
