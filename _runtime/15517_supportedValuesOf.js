// === Module 15517: supportedValuesOf ===

// Module 15517 (supportedValuesOf)
import _mod15518 from "module_15518" /* 15518 */;
import collations from "collations" /* 15520 */;
import _mod15522 from "module_15522" /* 15522 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15528 from "module_15528" /* 15528 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15518.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15522.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15524.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15526.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15528.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}