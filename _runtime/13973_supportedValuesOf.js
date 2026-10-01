// === Module 13973: supportedValuesOf ===

// Module 13973 (supportedValuesOf)
import _mod13974 from "module_13974" /* 13974 */;
import collations from "collations" /* 13976 */;
import _mod13978 from "module_13978" /* 13978 */;
import _mod13980 from "module_13980" /* 13980 */;
import _mod13982 from "module_13982" /* 13982 */;
import _mod13984 from "module_13984" /* 13984 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13974.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13978.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13980.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13982.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13984.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};