// _runtime/14558_supportedValuesOf.js
import _mod14559 from "metro/14559__.js";
import collations from "14561_collations.js";
import _mod14563 from "metro/14563__.js";
import _mod14565 from "metro/14565__.js";
import _mod14567 from "metro/14567__.js";
import _mod14569 from "metro/14569__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14559.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14563.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14565.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14567.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14569.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
