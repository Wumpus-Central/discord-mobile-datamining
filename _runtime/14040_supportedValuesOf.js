// === Module 14040: supportedValuesOf ===

// Module 14040 (supportedValuesOf)
import _mod14041 from "module_14041" /* 14041 */;
import collations from "collations" /* 14043 */;
import _mod14045 from "module_14045" /* 14045 */;
import _mod14047 from "module_14047" /* 14047 */;
import _mod14049 from "module_14049" /* 14049 */;
import _mod14051 from "module_14051" /* 14051 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14041.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14045.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14047.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14049.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14051.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};