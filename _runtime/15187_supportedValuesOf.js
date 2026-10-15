// _runtime/15187_supportedValuesOf.js
import _mod15188 from "metro/15188__.js";
import collations from "15190_collations.js";
import _mod15192 from "metro/15192__.js";
import _mod15194 from "metro/15194__.js";
import _mod15196 from "metro/15196__.js";
import _mod15198 from "metro/15198__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15188.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15192.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15194.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15196.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15198.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
