// _runtime/14278_supportedValuesOf.js
import getSupportedCalendars from "14279_getSupportedCalendars.js";
import getSupportedCollations from "14281_getSupportedCollations.js";
import isSupportedCurrency from "14283_isSupportedCurrency.js";
import getSupportedNumberingSystems from "14285_getSupportedNumberingSystems.js";
import getSupportedTimeZones from "14287_getSupportedTimeZones.js";
import getSupportedUnits from "14289_getSupportedUnits.js";

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
