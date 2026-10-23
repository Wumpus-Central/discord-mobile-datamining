// _runtime/15501_supportedValuesOf.js
import _mod15502 from "metro/15502__.js";
import collations from "15504_collations.js";
import _mod15506 from "metro/15506__.js";
import _mod15508 from "metro/15508__.js";
import _mod15510 from "metro/15510__.js";
import _mod15512 from "metro/15512__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15502.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15506.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15508.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15510.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15512.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
