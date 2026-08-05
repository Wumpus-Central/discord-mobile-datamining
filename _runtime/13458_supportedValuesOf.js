import { getSupportedCalendars } from "13459_getSupportedCalendars.js";
import { getSupportedCollations } from "13461_getSupportedCollations.js";
import { isSupportedCurrency } from "13463_isSupportedCurrency.js";
import { getSupportedNumberingSystems } from "13465_getSupportedNumberingSystems.js";
import { getSupportedTimeZones } from "13467_getSupportedTimeZones.js";
import { getSupportedUnits } from "13469_getSupportedUnits.js";
// _runtime/13458_supportedValuesOf.js
const require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return getSupportedCalendars /* getSupportedCalendars */.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return getSupportedCollations /* getSupportedCollations */.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return isSupportedCurrency /* isSupportedCurrency */.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return getSupportedNumberingSystems /* getSupportedNumberingSystems */.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return getSupportedTimeZones /* getSupportedTimeZones */.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return getSupportedUnits /* getSupportedUnits */.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};