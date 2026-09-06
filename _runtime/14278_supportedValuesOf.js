// === Module 14278: supportedValuesOf ===

// Module 14278 (supportedValuesOf)
import _mod14279 from "module_14279" /* 14279 */;
import collations from "collations" /* 14281 */;
import _mod14283 from "module_14283" /* 14283 */;
import _mod14285 from "module_14285" /* 14285 */;
import _mod14287 from "module_14287" /* 14287 */;
import _mod14289 from "module_14289" /* 14289 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14279.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14283.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14285.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14287.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14289.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};