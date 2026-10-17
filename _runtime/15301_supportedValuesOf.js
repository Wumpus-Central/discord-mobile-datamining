// === Module 15301: supportedValuesOf ===

// Module 15301 (supportedValuesOf)
import _mod15302 from "module_15302" /* 15302 */;
import collations from "collations" /* 15304 */;
import _mod15306 from "module_15306" /* 15306 */;
import _mod15308 from "module_15308" /* 15308 */;
import _mod15310 from "module_15310" /* 15310 */;
import _mod15312 from "module_15312" /* 15312 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15302.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15306.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15308.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15310.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15312.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};