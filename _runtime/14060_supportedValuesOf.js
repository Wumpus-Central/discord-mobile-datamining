// === Module 14060: supportedValuesOf ===

// Module 14060 (supportedValuesOf)
import _mod14061 from "module_14061" /* 14061 */;
import collations from "collations" /* 14063 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14067 from "module_14067" /* 14067 */;
import _mod14069 from "module_14069" /* 14069 */;
import _mod14071 from "module_14071" /* 14071 */;


export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14061.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14065.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14067.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14069.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14071.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};