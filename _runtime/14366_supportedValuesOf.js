// === Module 14366: supportedValuesOf ===

// Module 14366 (supportedValuesOf)
import _mod14367 from "module_14367" /* 14367 */;
import collations from "collations" /* 14369 */;
import _mod14371 from "module_14371" /* 14371 */;
import _mod14373 from "module_14373" /* 14373 */;
import _mod14375 from "module_14375" /* 14375 */;
import _mod14377 from "module_14377" /* 14377 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14367.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14371.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14373.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14375.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14377.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};