// === Module 14281: supportedValuesOf ===

// Module 14281 (supportedValuesOf)
import _mod14282 from "module_14282" /* 14282 */;
import collations from "collations" /* 14284 */;
import _mod14286 from "module_14286" /* 14286 */;
import _mod14288 from "module_14288" /* 14288 */;
import _mod14290 from "module_14290" /* 14290 */;
import _mod14292 from "module_14292" /* 14292 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14282.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14286.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14288.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14290.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14292.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};