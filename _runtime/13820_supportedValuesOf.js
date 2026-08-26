// _runtime/13820_supportedValuesOf.js
import getSupportedCalendars from "13821_getSupportedCalendars.js";
import getSupportedCollations from "13823_getSupportedCollations.js";
import isSupportedCurrency from "13825_isSupportedCurrency.js";
import getSupportedNumberingSystems from "13827_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "13829_getSupportedTimeZones.js";
import getSupportedUnits from "13831_getSupportedUnits.js";

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