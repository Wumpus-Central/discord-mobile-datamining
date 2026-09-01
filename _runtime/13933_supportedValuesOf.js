// === Module 13933: supportedValuesOf ===

// Module 13933 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 13934 */;
import getSupportedCollations from "getSupportedCollations" /* 13936 */;
import isSupportedCurrency from "isSupportedCurrency" /* 13938 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 13940 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 13942 */;
import getSupportedUnits from "getSupportedUnits" /* 13944 */;

require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return getSupportedCalendars.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return getSupportedCollations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return isSupportedCurrency.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return getSupportedNumberingSystems.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return getSupportedTimeZones.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return getSupportedUnits.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};