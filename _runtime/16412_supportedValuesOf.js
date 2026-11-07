// === Module 16412: supportedValuesOf ===

// Module 16412 (supportedValuesOf)
import _mod16413 from "module_16413" /* 16413 */;
import collations from "collations" /* 16415 */;
import _mod16417 from "module_16417" /* 16417 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16421 from "module_16421" /* 16421 */;
import _mod16423 from "module_16423" /* 16423 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16413.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16417.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16419.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16421.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16423.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}