// === Module 14172: supportedValuesOf ===

// Module 14172 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 14173 */;
import getSupportedCollations from "getSupportedCollations" /* 14175 */;
import isSupportedCurrency from "isSupportedCurrency" /* 14177 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 14179 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 14181 */;
import getSupportedUnits from "getSupportedUnits" /* 14183 */;

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