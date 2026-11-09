// === Module 16422: supportedValuesOf ===

// Module 16422 (supportedValuesOf)
import _mod16423 from "module_16423" /* 16423 */;
import collations from "collations" /* 16425 */;
import _mod16427 from "module_16427" /* 16427 */;
import _mod16429 from "module_16429" /* 16429 */;
import _mod16431 from "module_16431" /* 16431 */;
import _mod16433 from "module_16433" /* 16433 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16423.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16427.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16429.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16431.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16433.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}