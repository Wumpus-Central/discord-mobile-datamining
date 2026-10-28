// _runtime/15788_supportedValuesOf.js
import _mod15789 from "metro/15789__.js";
import collations from "15791_collations.js";
import _mod15793 from "metro/15793__.js";
import _mod15795 from "metro/15795__.js";
import _mod15797 from "metro/15797__.js";
import _mod15799 from "metro/15799__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15789.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15793.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15795.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15797.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15799.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
