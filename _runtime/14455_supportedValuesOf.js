// === Module 14455: supportedValuesOf ===

// Module 14455 (supportedValuesOf)
import _mod14456 from "module_14456" /* 14456 */;
import collations from "collations" /* 14458 */;
import _mod14460 from "module_14460" /* 14460 */;
import _mod14462 from "module_14462" /* 14462 */;
import _mod14464 from "module_14464" /* 14464 */;
import _mod14466 from "module_14466" /* 14466 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14456.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14460.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14462.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14464.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14466.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};