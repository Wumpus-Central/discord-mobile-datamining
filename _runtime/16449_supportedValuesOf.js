// === Module 16449: supportedValuesOf ===

// Module 16449 (supportedValuesOf)
import _mod16450 from "module_16450" /* 16450 */;
import collations from "collations" /* 16452 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16456 from "module_16456" /* 16456 */;
import _mod16458 from "module_16458" /* 16458 */;
import _mod16460 from "module_16460" /* 16460 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16450.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16454.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16456.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16458.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16460.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}