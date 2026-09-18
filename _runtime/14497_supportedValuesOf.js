// === Module 14497: supportedValuesOf ===

// Module 14497 (supportedValuesOf)
import _mod14498 from "module_14498" /* 14498 */;
import collations from "collations" /* 14500 */;
import _mod14502 from "module_14502" /* 14502 */;
import _mod14504 from "module_14504" /* 14504 */;
import _mod14506 from "module_14506" /* 14506 */;
import _mod14508 from "module_14508" /* 14508 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14498.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14502.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14504.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14506.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14508.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};