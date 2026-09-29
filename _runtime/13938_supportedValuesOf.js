// === Module 13938: supportedValuesOf ===

// Module 13938 (supportedValuesOf)
import _mod13939 from "module_13939" /* 13939 */;
import collations from "collations" /* 13941 */;
import _mod13943 from "module_13943" /* 13943 */;
import _mod13945 from "module_13945" /* 13945 */;
import _mod13947 from "module_13947" /* 13947 */;
import _mod13949 from "module_13949" /* 13949 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13939.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13943.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13945.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13947.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13949.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};