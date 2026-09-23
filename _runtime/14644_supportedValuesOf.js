// === Module 14644: supportedValuesOf ===

// Module 14644 (supportedValuesOf)
import _mod14645 from "module_14645" /* 14645 */;
import collations from "collations" /* 14647 */;
import _mod14649 from "module_14649" /* 14649 */;
import _mod14651 from "module_14651" /* 14651 */;
import _mod14653 from "module_14653" /* 14653 */;
import _mod14655 from "module_14655" /* 14655 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14645.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14649.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14651.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14653.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14655.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};