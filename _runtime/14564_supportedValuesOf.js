// === Module 14564: supportedValuesOf ===

// Module 14564 (supportedValuesOf)
import _mod14565 from "module_14565" /* 14565 */;
import collations from "collations" /* 14567 */;
import _mod14569 from "module_14569" /* 14569 */;
import _mod14571 from "module_14571" /* 14571 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14575 from "module_14575" /* 14575 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14565.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14569.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14571.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14573.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14575.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};