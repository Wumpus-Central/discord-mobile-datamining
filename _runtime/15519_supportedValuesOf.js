// === Module 15519: supportedValuesOf ===

// Module 15519 (supportedValuesOf)
import _mod15520 from "module_15520" /* 15520 */;
import collations from "collations" /* 15522 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15528 from "module_15528" /* 15528 */;
import _mod15530 from "module_15530" /* 15530 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15520.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15524.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15526.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15528.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15530.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}