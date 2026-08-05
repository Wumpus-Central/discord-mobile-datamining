// _runtime/13430_supportedValuesOf.js
import { getSupportedCalendars } from "13431_getSupportedCalendars.js";
import { getSupportedCollations } from "13433_getSupportedCollations.js";
import { isSupportedCurrency } from "13435_isSupportedCurrency.js";
import { getSupportedNumberingSystems } from "13437_getSupportedNumberingSystems.js";
import { getSupportedTimeZones } from "13439_getSupportedTimeZones.js";
import { getSupportedUnits } from "13441_getSupportedUnits.js";
const require = arg1;
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