// === Module 15525: supportedValuesOf ===

// Module 15525 (supportedValuesOf)
import _mod15526 from "module_15526" /* 15526 */;
import collations from "collations" /* 15528 */;
import _mod15530 from "module_15530" /* 15530 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15534 from "module_15534" /* 15534 */;
import _mod15536 from "module_15536" /* 15536 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15526.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15530.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15532.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15534.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15536.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};