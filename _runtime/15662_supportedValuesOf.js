// === Module 15662: supportedValuesOf ===

// Module 15662 (supportedValuesOf)
import _mod15663 from "module_15663" /* 15663 */;
import collations from "collations" /* 15665 */;
import _mod15667 from "module_15667" /* 15667 */;
import _mod15669 from "module_15669" /* 15669 */;
import _mod15671 from "module_15671" /* 15671 */;
import _mod15673 from "module_15673" /* 15673 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15663.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15667.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15669.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15671.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15673.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}