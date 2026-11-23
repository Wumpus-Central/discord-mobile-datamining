// _runtime/15519_supportedValuesOf.js
import _mod15520 from "metro/15520__.js";
import collations from "15522_collations.js";
import _mod15524 from "metro/15524__.js";
import _mod15526 from "metro/15526__.js";
import _mod15528 from "metro/15528__.js";
import _mod15530 from "metro/15530__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15520.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15524.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15526.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15528.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15530.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
