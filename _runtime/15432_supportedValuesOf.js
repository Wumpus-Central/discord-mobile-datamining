// === Module 15432: supportedValuesOf ===

// Module 15432 (supportedValuesOf)
import _mod15433 from "module_15433" /* 15433 */;
import collations from "collations" /* 15435 */;
import _mod15437 from "module_15437" /* 15437 */;
import _mod15439 from "module_15439" /* 15439 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15443 from "module_15443" /* 15443 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15433.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15437.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15439.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15441.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15443.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}