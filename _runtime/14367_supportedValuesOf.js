// === Module 14367: supportedValuesOf ===

// Module 14367 (supportedValuesOf)
import _mod14368 from "module_14368" /* 14368 */;
import collations from "collations" /* 14370 */;
import _mod14372 from "module_14372" /* 14372 */;
import _mod14374 from "module_14374" /* 14374 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14378 from "module_14378" /* 14378 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14368.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14372.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14374.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14376.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14378.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};