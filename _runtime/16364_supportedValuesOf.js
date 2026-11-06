// === Module 16364: supportedValuesOf ===

// Module 16364 (supportedValuesOf)
import _mod16365 from "module_16365" /* 16365 */;
import collations from "collations" /* 16367 */;
import _mod16369 from "module_16369" /* 16369 */;
import _mod16371 from "module_16371" /* 16371 */;
import _mod16373 from "module_16373" /* 16373 */;
import _mod16375 from "module_16375" /* 16375 */;

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