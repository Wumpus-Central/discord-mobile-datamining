// _runtime/16412_supportedValuesOf.js
import _mod16413 from "metro/16413__.js";
import collations from "16415_collations.js";
import _mod16417 from "metro/16417__.js";
import _mod16419 from "metro/16419__.js";
import _mod16421 from "metro/16421__.js";
import _mod16423 from "metro/16423__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16413.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16417.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16419.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16421.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16423.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
