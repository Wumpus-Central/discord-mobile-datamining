// _runtime/13747_supportedValuesOf.js
import getSupportedCalendars from "13748_getSupportedCalendars.js";
import getSupportedCollations from "13750_getSupportedCollations.js";
import isSupportedCurrency from "13752_isSupportedCurrency.js";
import getSupportedNumberingSystems from "13754_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "13756_getSupportedTimeZones.js";
import getSupportedUnits from "13758_getSupportedUnits.js";

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