// _runtime/13866_supportedValuesOf.js
import getSupportedCalendars from "13867_getSupportedCalendars.js";
import getSupportedCollations from "13869_getSupportedCollations.js";
import isSupportedCurrency from "13871_isSupportedCurrency.js";
import getSupportedNumberingSystems from "13873_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "13875_getSupportedTimeZones.js";
import getSupportedUnits from "13877_getSupportedUnits.js";

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