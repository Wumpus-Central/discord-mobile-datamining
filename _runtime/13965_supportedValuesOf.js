// === Module 13965: supportedValuesOf ===

// Module 13965 (supportedValuesOf)
import _mod13966 from "module_13966" /* 13966 */;
import collations from "collations" /* 13968 */;
import _mod13970 from "module_13970" /* 13970 */;
import _mod13972 from "module_13972" /* 13972 */;
import _mod13974 from "module_13974" /* 13974 */;
import _mod13976 from "module_13976" /* 13976 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13966.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13970.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13972.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13974.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13976.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};