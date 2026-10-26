// _runtime/15525_supportedValuesOf.js
import _mod15526 from "metro/15526__.js";
import collations from "15528_collations.js";
import _mod15530 from "metro/15530__.js";
import _mod15532 from "metro/15532__.js";
import _mod15534 from "metro/15534__.js";
import _mod15536 from "metro/15536__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15526.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15530.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15532.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15534.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15536.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
