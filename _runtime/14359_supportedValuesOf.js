// === Module 14359: supportedValuesOf ===

// Module 14359 (supportedValuesOf)
import _mod14360 from "module_14360" /* 14360 */;
import collations from "collations" /* 14362 */;
import _mod14364 from "module_14364" /* 14364 */;
import _mod14366 from "module_14366" /* 14366 */;
import _mod14368 from "module_14368" /* 14368 */;
import _mod14370 from "module_14370" /* 14370 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14360.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14364.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14366.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14368.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14370.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};