// === Module 15222: supportedValuesOf ===

// Module 15222 (supportedValuesOf)
import _mod15223 from "module_15223" /* 15223 */;
import collations from "collations" /* 15225 */;
import _mod15227 from "module_15227" /* 15227 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15231 from "module_15231" /* 15231 */;
import _mod15233 from "module_15233" /* 15233 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15223.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15227.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15229.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15231.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15233.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};