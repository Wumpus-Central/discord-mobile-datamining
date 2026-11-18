// === Module 15446: supportedValuesOf ===

// Module 15446 (supportedValuesOf)
import _mod15447 from "module_15447" /* 15447 */;
import collations from "collations" /* 15449 */;
import _mod15451 from "module_15451" /* 15451 */;
import _mod15453 from "module_15453" /* 15453 */;
import _mod15455 from "module_15455" /* 15455 */;
import _mod15457 from "module_15457" /* 15457 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15447.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15451.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15453.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15455.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15457.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}