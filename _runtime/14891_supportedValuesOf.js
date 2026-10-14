// === Module 14891: supportedValuesOf ===

// Module 14891 (supportedValuesOf)
import _mod14892 from "module_14892" /* 14892 */;
import collations from "collations" /* 14894 */;
import _mod14896 from "module_14896" /* 14896 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14900 from "module_14900" /* 14900 */;
import _mod14902 from "module_14902" /* 14902 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14892.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14896.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14898.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14900.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14902.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};