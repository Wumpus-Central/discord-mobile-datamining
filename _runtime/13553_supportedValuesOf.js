// _runtime/13553_supportedValuesOf.js
import { getSupportedCalendars } from "13554_getSupportedCalendars.js";
import { getSupportedCollations } from "13556_getSupportedCollations.js";
import { isSupportedCurrency } from "13558_isSupportedCurrency.js";
import { getSupportedNumberingSystems } from "13560_getSupportedNumberingSystems.js";
import { getSupportedTimeZones } from "13562_getSupportedTimeZones.js";
import { getSupportedUnits } from "13564_getSupportedUnits.js";
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