// === Module 13769: supportedValuesOf ===

// Module 13769 (supportedValuesOf)
import _mod13770 from "module_13770" /* 13770 */;
import collations from "collations" /* 13772 */;
import _mod13774 from "module_13774" /* 13774 */;
import _mod13776 from "module_13776" /* 13776 */;
import _mod13778 from "module_13778" /* 13778 */;
import _mod13780 from "module_13780" /* 13780 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13770.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13774.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13776.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13778.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13780.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};