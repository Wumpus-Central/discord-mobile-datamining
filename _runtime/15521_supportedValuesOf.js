// === Module 15521: supportedValuesOf ===

// Module 15521 (supportedValuesOf)
import _mod15522 from "module_15522" /* 15522 */;
import collations from "collations" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15528 from "module_15528" /* 15528 */;
import _mod15530 from "module_15530" /* 15530 */;
import _mod15532 from "module_15532" /* 15532 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15522.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15526.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15528.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15530.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15532.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};