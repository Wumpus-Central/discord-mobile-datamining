// _runtime/14402_supportedValuesOf.js
import _mod14403 from "metro/14403__.js";
import collations from "14405_collations.js";
import _mod14407 from "metro/14407__.js";
import _mod14409 from "metro/14409__.js";
import _mod14411 from "metro/14411__.js";
import _mod14413 from "metro/14413__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14403.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14407.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14409.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14411.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14413.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
