// === Module 16024: supportedValuesOf ===

// Module 16024 (supportedValuesOf)
import _mod16025 from "module_16025" /* 16025 */;
import collations from "collations" /* 16027 */;
import _mod16029 from "module_16029" /* 16029 */;
import _mod16031 from "module_16031" /* 16031 */;
import _mod16033 from "module_16033" /* 16033 */;
import _mod16035 from "module_16035" /* 16035 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16025.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16029.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16031.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16033.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16035.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}