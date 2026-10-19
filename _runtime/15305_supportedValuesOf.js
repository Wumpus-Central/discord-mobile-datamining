// === Module 15305: supportedValuesOf ===

// Module 15305 (supportedValuesOf)
import _mod15306 from "module_15306" /* 15306 */;
import collations from "collations" /* 15308 */;
import _mod15310 from "module_15310" /* 15310 */;
import _mod15312 from "module_15312" /* 15312 */;
import _mod15314 from "module_15314" /* 15314 */;
import _mod15316 from "module_15316" /* 15316 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15306.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15310.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15312.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15314.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15316.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};