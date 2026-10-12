// _runtime/14532_supportedValuesOf.js
import _mod14533 from "metro/14533__.js";
import collations from "14535_collations.js";
import _mod14537 from "metro/14537__.js";
import _mod14539 from "metro/14539__.js";
import _mod14541 from "metro/14541__.js";
import _mod14543 from "metro/14543__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14533.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14537.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14539.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14541.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14543.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
