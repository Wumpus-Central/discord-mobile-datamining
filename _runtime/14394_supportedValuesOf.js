// === Module 14394: supportedValuesOf ===

// Module 14394 (supportedValuesOf)
import _mod14395 from "module_14395" /* 14395 */;
import collations from "collations" /* 14397 */;
import _mod14399 from "module_14399" /* 14399 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14403 from "module_14403" /* 14403 */;
import _mod14405 from "module_14405" /* 14405 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14395.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14399.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14401.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14403.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14405.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};