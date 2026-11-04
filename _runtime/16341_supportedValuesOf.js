// === Module 16341: supportedValuesOf ===

// Module 16341 (supportedValuesOf)
import _mod16342 from "module_16342" /* 16342 */;
import collations from "collations" /* 16344 */;
import _mod16346 from "module_16346" /* 16346 */;
import _mod16348 from "module_16348" /* 16348 */;
import _mod16350 from "module_16350" /* 16350 */;
import _mod16352 from "module_16352" /* 16352 */;

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