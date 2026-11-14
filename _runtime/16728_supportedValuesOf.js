// === Module 16728: supportedValuesOf ===

// Module 16728 (supportedValuesOf)
import _mod16729 from "module_16729" /* 16729 */;
import collations from "collations" /* 16731 */;
import _mod16733 from "module_16733" /* 16733 */;
import _mod16735 from "module_16735" /* 16735 */;
import _mod16737 from "module_16737" /* 16737 */;
import _mod16739 from "module_16739" /* 16739 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16729.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16733.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16735.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16737.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16739.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}