// _runtime/15521_supportedValuesOf.js
import _mod15522 from "metro/15522__.js";
import collations from "15524_collations.js";
import _mod15526 from "metro/15526__.js";
import _mod15528 from "metro/15528__.js";
import _mod15530 from "metro/15530__.js";
import _mod15532 from "metro/15532__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15522.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15526.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15528.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15530.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15532.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
