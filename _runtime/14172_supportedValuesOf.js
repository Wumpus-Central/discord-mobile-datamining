// _runtime/14172_supportedValuesOf.js
import getSupportedCalendars from "14173_getSupportedCalendars.js";
import getSupportedCollations from "14175_getSupportedCollations.js";
import isSupportedCurrency from "14177_isSupportedCurrency.js";
import getSupportedNumberingSystems from "14179_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "14181_getSupportedTimeZones.js";
import getSupportedUnits from "14183_getSupportedUnits.js";

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
