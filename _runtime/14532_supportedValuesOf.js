// === Module 14532: supportedValuesOf ===

// Module 14532 (supportedValuesOf)
import _mod14533 from "module_14533" /* 14533 */;
import collations from "collations" /* 14535 */;
import _mod14537 from "module_14537" /* 14537 */;
import _mod14539 from "module_14539" /* 14539 */;
import _mod14541 from "module_14541" /* 14541 */;
import _mod14543 from "module_14543" /* 14543 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14533.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14537.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14539.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14541.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14543.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};