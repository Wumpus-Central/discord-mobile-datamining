// === Module 15232: supportedValuesOf ===

// Module 15232 (supportedValuesOf)
import _mod15233 from "module_15233" /* 15233 */;
import collations from "collations" /* 15235 */;
import _mod15237 from "module_15237" /* 15237 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15241 from "module_15241" /* 15241 */;
import _mod15243 from "module_15243" /* 15243 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15233.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15237.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15239.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15241.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15243.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};