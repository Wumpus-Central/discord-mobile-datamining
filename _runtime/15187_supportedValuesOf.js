// === Module 15187: supportedValuesOf ===

// Module 15187 (supportedValuesOf)
import _mod15188 from "module_15188" /* 15188 */;
import collations from "collations" /* 15190 */;
import _mod15192 from "module_15192" /* 15192 */;
import _mod15194 from "module_15194" /* 15194 */;
import _mod15196 from "module_15196" /* 15196 */;
import _mod15198 from "module_15198" /* 15198 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15188.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15192.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15194.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15196.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15198.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};