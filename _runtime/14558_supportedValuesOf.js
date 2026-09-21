// === Module 14558: supportedValuesOf ===

// Module 14558 (supportedValuesOf)
import _mod14559 from "module_14559" /* 14559 */;
import collations from "collations" /* 14561 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14565 from "module_14565" /* 14565 */;
import _mod14567 from "module_14567" /* 14567 */;
import _mod14569 from "module_14569" /* 14569 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14559.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14563.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14565.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14567.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14569.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};