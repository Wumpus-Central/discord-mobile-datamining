// === Module 15562: supportedValuesOf ===

// Module 15562 (supportedValuesOf)
import _mod15563 from "module_15563" /* 15563 */;
import collations from "collations" /* 15565 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15563.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15567.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15569.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15571.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15573.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};