// === Module 14306: supportedValuesOf ===

// Module 14306 (supportedValuesOf)
import _mod14307 from "module_14307" /* 14307 */;
import collations from "collations" /* 14309 */;
import _mod14311 from "module_14311" /* 14311 */;
import _mod14313 from "module_14313" /* 14313 */;
import _mod14315 from "module_14315" /* 14315 */;
import _mod14317 from "module_14317" /* 14317 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14307.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14311.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14313.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14315.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14317.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};