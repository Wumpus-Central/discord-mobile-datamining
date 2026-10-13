// === Module 14853: supportedValuesOf ===

// Module 14853 (supportedValuesOf)
import _mod14854 from "module_14854" /* 14854 */;
import collations from "collations" /* 14856 */;
import _mod14858 from "module_14858" /* 14858 */;
import _mod14860 from "module_14860" /* 14860 */;
import _mod14862 from "module_14862" /* 14862 */;
import _mod14864 from "module_14864" /* 14864 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14854.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14858.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14860.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14862.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14864.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};