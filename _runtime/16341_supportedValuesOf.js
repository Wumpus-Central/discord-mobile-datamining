// _runtime/16341_supportedValuesOf.js
import _mod16342 from "metro/16342__.js";
import collations from "16344_collations.js";
import _mod16346 from "metro/16346__.js";
import _mod16348 from "metro/16348__.js";
import _mod16350 from "metro/16350__.js";
import _mod16352 from "metro/16352__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16342.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16346.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16348.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16350.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16352.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
