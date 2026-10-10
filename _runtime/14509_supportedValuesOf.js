// === Module 14509: supportedValuesOf ===

// Module 14509 (supportedValuesOf)
import _mod14510 from "module_14510" /* 14510 */;
import collations from "collations" /* 14512 */;
import _mod14514 from "module_14514" /* 14514 */;
import _mod14516 from "module_14516" /* 14516 */;
import _mod14518 from "module_14518" /* 14518 */;
import _mod14520 from "module_14520" /* 14520 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14510.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14514.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14516.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14518.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14520.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};