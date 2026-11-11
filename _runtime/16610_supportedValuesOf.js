// === Module 16610: supportedValuesOf ===

// Module 16610 (supportedValuesOf)
import _mod16611 from "module_16611" /* 16611 */;
import collations from "collations" /* 16613 */;
import _mod16615 from "module_16615" /* 16615 */;
import _mod16617 from "module_16617" /* 16617 */;
import _mod16619 from "module_16619" /* 16619 */;
import _mod16621 from "module_16621" /* 16621 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16611.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16615.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16617.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16619.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16621.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}