// _runtime/16364_supportedValuesOf.js
import _mod16365 from "metro/16365__.js";
import collations from "16367_collations.js";
import _mod16369 from "metro/16369__.js";
import _mod16371 from "metro/16371__.js";
import _mod16373 from "metro/16373__.js";
import _mod16375 from "metro/16375__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16365.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16369.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16371.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16373.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16375.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
