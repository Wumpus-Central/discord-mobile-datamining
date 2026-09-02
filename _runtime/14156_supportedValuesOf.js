// _runtime/14156_supportedValuesOf.js
import getSupportedCalendars from "14157_getSupportedCalendars.js";
import getSupportedCollations from "14159_getSupportedCollations.js";
import isSupportedCurrency from "14161_isSupportedCurrency.js";
import getSupportedNumberingSystems from "14163_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "14165_getSupportedTimeZones.js";
import getSupportedUnits from "14167_getSupportedUnits.js";

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
