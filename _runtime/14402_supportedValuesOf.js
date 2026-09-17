// === Module 14402: supportedValuesOf ===

// Module 14402 (supportedValuesOf)
import _mod14403 from "module_14403" /* 14403 */;
import collations from "collations" /* 14405 */;
import _mod14407 from "module_14407" /* 14407 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14413 from "module_14413" /* 14413 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14403.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14407.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14409.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14411.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14413.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};