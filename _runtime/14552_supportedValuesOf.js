// === Module 14552: supportedValuesOf ===

// Module 14552 (supportedValuesOf)
import _mod14553 from "module_14553" /* 14553 */;
import collations from "collations" /* 14555 */;
import _mod14557 from "module_14557" /* 14557 */;
import _mod14559 from "module_14559" /* 14559 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14563 from "module_14563" /* 14563 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14553.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14557.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14559.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14561.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14563.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};