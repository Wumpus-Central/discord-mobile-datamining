// _runtime/15562_supportedValuesOf.js
import _mod15563 from "metro/15563__.js";
import collations from "15565_collations.js";
import _mod15567 from "metro/15567__.js";
import _mod15569 from "metro/15569__.js";
import _mod15571 from "metro/15571__.js";
import _mod15573 from "metro/15573__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15563.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15567.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15569.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15571.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15573.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
