// === Module 15501: supportedValuesOf ===

// Module 15501 (supportedValuesOf)
import _mod15502 from "module_15502" /* 15502 */;
import collations from "collations" /* 15504 */;
import _mod15506 from "module_15506" /* 15506 */;
import _mod15508 from "module_15508" /* 15508 */;
import _mod15510 from "module_15510" /* 15510 */;
import _mod15512 from "module_15512" /* 15512 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15502.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15506.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15508.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15510.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15512.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};