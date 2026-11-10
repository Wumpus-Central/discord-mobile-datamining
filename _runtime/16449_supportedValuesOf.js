// _runtime/16449_supportedValuesOf.js
import _mod16450 from "metro/16450__.js";
import collations from "16452_collations.js";
import _mod16454 from "metro/16454__.js";
import _mod16456 from "metro/16456__.js";
import _mod16458 from "metro/16458__.js";
import _mod16460 from "metro/16460__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16450.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16454.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16456.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16458.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16460.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
