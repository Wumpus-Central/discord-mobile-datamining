// _runtime/16367_supportedValuesOf.js
import _mod16368 from "metro/16368__.js";
import collations from "16370_collations.js";
import _mod16372 from "metro/16372__.js";
import _mod16374 from "metro/16374__.js";
import _mod16376 from "metro/16376__.js";
import _mod16378 from "metro/16378__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16368.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16372.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16374.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16376.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16378.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
