// === Module 16109: supportedValuesOf ===

// Module 16109 (supportedValuesOf)
import _mod16110 from "module_16110" /* 16110 */;
import collations from "collations" /* 16112 */;
import _mod16114 from "module_16114" /* 16114 */;
import _mod16116 from "module_16116" /* 16116 */;
import _mod16118 from "module_16118" /* 16118 */;
import _mod16120 from "module_16120" /* 16120 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16110.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16114.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16116.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16118.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16120.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}