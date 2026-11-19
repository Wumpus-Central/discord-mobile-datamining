// _runtime/15432_supportedValuesOf.js
import _mod15433 from "metro/15433__.js";
import collations from "15435_collations.js";
import _mod15437 from "metro/15437__.js";
import _mod15439 from "metro/15439__.js";
import _mod15441 from "metro/15441__.js";
import _mod15443 from "metro/15443__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15433.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15437.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15439.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15441.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15443.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
