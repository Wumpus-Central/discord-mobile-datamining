// _runtime/15467_supportedValuesOf.js
import _mod15468 from "metro/15468__.js";
import collations from "15470_collations.js";
import _mod15472 from "metro/15472__.js";
import _mod15474 from "metro/15474__.js";
import _mod15476 from "metro/15476__.js";
import _mod15478 from "metro/15478__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15468.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15472.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15474.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15476.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15478.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
