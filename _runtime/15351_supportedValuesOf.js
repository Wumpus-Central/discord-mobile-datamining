// === Module 15351: supportedValuesOf ===

// Module 15351 (supportedValuesOf)
import _mod15352 from "module_15352" /* 15352 */;
import collations from "collations" /* 15354 */;
import _mod15356 from "module_15356" /* 15356 */;
import _mod15358 from "module_15358" /* 15358 */;
import _mod15360 from "module_15360" /* 15360 */;
import _mod15362 from "module_15362" /* 15362 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15352.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15356.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15358.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15360.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15362.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};