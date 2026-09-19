// _runtime/14552_supportedValuesOf.js
import _mod14553 from "metro/14553__.js";
import collations from "14555_collations.js";
import _mod14557 from "metro/14557__.js";
import _mod14559 from "metro/14559__.js";
import _mod14561 from "metro/14561__.js";
import _mod14563 from "metro/14563__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14553.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14557.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14559.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14561.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14563.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
