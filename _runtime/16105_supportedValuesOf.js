// === Module 16105: supportedValuesOf ===

// Module 16105 (supportedValuesOf)
import _mod16106 from "module_16106" /* 16106 */;
import collations from "collations" /* 16108 */;
import _mod16110 from "module_16110" /* 16110 */;
import _mod16112 from "module_16112" /* 16112 */;
import _mod16114 from "module_16114" /* 16114 */;
import _mod16116 from "module_16116" /* 16116 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16106.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16110.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16112.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16114.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16116.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}