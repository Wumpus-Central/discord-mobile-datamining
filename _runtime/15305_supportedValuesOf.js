// _runtime/15305_supportedValuesOf.js
import _mod15306 from "metro/15306__.js";
import collations from "15308_collations.js";
import _mod15310 from "metro/15310__.js";
import _mod15312 from "metro/15312__.js";
import _mod15314 from "metro/15314__.js";
import _mod15316 from "metro/15316__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15306.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15310.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15312.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15314.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15316.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
