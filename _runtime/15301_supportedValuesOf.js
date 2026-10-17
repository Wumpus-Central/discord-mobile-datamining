// _runtime/15301_supportedValuesOf.js
import _mod15302 from "metro/15302__.js";
import collations from "15304_collations.js";
import _mod15306 from "metro/15306__.js";
import _mod15308 from "metro/15308__.js";
import _mod15310 from "metro/15310__.js";
import _mod15312 from "metro/15312__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15302.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15306.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15308.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15310.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15312.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
