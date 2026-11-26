// === Module 15713: supportedValuesOf ===

// Module 15713 (supportedValuesOf)
import _mod15714 from "module_15714" /* 15714 */;
import collations from "collations" /* 15716 */;
import _mod15718 from "module_15718" /* 15718 */;
import _mod15720 from "module_15720" /* 15720 */;
import _mod15722 from "module_15722" /* 15722 */;
import _mod15724 from "module_15724" /* 15724 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15714.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15718.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15720.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15722.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15724.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}