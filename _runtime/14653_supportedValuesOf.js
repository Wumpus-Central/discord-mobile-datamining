// === Module 14653: supportedValuesOf ===

// Module 14653 (supportedValuesOf)
import _mod14654 from "module_14654" /* 14654 */;
import collations from "collations" /* 14656 */;
import _mod14658 from "module_14658" /* 14658 */;
import _mod14660 from "module_14660" /* 14660 */;
import _mod14662 from "module_14662" /* 14662 */;
import _mod14664 from "module_14664" /* 14664 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14654.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14658.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14660.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14662.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14664.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};