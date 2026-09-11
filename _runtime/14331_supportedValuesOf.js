// === Module 14331: supportedValuesOf ===

// Module 14331 (supportedValuesOf)
import _mod14332 from "module_14332" /* 14332 */;
import collations from "collations" /* 14334 */;
import _mod14336 from "module_14336" /* 14336 */;
import _mod14338 from "module_14338" /* 14338 */;
import _mod14340 from "module_14340" /* 14340 */;
import _mod14342 from "module_14342" /* 14342 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14332.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14336.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14338.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14340.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14342.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};