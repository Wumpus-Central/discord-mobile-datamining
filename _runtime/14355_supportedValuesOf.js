// === Module 14355: supportedValuesOf ===

// Module 14355 (supportedValuesOf)
import _mod14356 from "module_14356" /* 14356 */;
import collations from "collations" /* 14358 */;
import _mod14360 from "module_14360" /* 14360 */;
import _mod14362 from "module_14362" /* 14362 */;
import _mod14364 from "module_14364" /* 14364 */;
import _mod14366 from "module_14366" /* 14366 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14356.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14360.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14362.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14364.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14366.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};