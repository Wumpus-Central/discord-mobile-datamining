// _runtime/15526_supportedValuesOf.js
import _mod15527 from "metro/15527__.js";
import collations from "15529_collations.js";
import _mod15531 from "metro/15531__.js";
import _mod15533 from "metro/15533__.js";
import _mod15535 from "metro/15535__.js";
import _mod15537 from "metro/15537__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15527.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15531.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15533.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15535.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15537.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
