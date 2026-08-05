// _runtime/13458_supportedValuesOf.js
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return require("13459_getSupportedCalendars.js") /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return require("13461_getSupportedCollations.js") /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return require("13463_isSupportedCurrency.js") /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return require("13465_getSupportedNumberingSystems.js") /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return require("13467_getSupportedTimeZones.js") /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return require("13469_getSupportedUnits.js") /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};