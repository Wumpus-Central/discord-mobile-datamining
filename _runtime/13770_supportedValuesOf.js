// === Module 13770: supportedValuesOf ===

// Module 13770 (supportedValuesOf)
import _mod13771 from "module_13771" /* 13771 */;
import collations from "collations" /* 13773 */;
import _mod13775 from "module_13775" /* 13775 */;
import _mod13777 from "module_13777" /* 13777 */;
import _mod13779 from "module_13779" /* 13779 */;
import _mod13781 from "module_13781" /* 13781 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13771.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13775.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13777.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13779.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13781.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};