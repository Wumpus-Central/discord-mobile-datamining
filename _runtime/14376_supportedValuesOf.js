// === Module 14376: supportedValuesOf ===

// Module 14376 (supportedValuesOf)
import _mod14377 from "module_14377" /* 14377 */;
import collations from "collations" /* 14379 */;
import _mod14381 from "module_14381" /* 14381 */;
import _mod14383 from "module_14383" /* 14383 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14387 from "module_14387" /* 14387 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14377.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14381.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14383.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14385.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14387.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};