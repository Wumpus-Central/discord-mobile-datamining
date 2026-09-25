// === Module 13814: supportedValuesOf ===

// Module 13814 (supportedValuesOf)
import _mod13815 from "module_13815" /* 13815 */;
import collations from "collations" /* 13817 */;
import _mod13819 from "module_13819" /* 13819 */;
import _mod13821 from "module_13821" /* 13821 */;
import _mod13823 from "module_13823" /* 13823 */;
import _mod13825 from "module_13825" /* 13825 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13815.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13819.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13821.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13823.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13825.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};