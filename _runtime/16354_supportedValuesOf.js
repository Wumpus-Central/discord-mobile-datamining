// === Module 16354: supportedValuesOf ===

// Module 16354 (supportedValuesOf)
import _mod16355 from "module_16355" /* 16355 */;
import collations from "collations" /* 16357 */;
import _mod16359 from "module_16359" /* 16359 */;
import _mod16361 from "module_16361" /* 16361 */;
import _mod16363 from "module_16363" /* 16363 */;
import _mod16365 from "module_16365" /* 16365 */;

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16355.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16359.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16361.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16363.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16365.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}