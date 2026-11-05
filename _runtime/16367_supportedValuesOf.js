// === Module 16367: supportedValuesOf ===

// Module 16367 (supportedValuesOf)
import _mod16368 from "module_16368" /* 16368 */;
import collations from "collations" /* 16370 */;
import _mod16372 from "module_16372" /* 16372 */;
import _mod16374 from "module_16374" /* 16374 */;
import _mod16376 from "module_16376" /* 16376 */;
import _mod16378 from "module_16378" /* 16378 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16368.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16372.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16374.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16376.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16378.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}