// === Module 14042: supportedValuesOf ===

// Module 14042 (supportedValuesOf)
import _mod14043 from "module_14043" /* 14043 */;
import collations from "collations" /* 14045 */;
import _mod14047 from "module_14047" /* 14047 */;
import _mod14049 from "module_14049" /* 14049 */;
import _mod14051 from "module_14051" /* 14051 */;
import _mod14053 from "module_14053" /* 14053 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14043.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14047.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14049.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14051.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14053.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};