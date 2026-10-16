// _runtime/15232_supportedValuesOf.js
import _mod15233 from "metro/15233__.js";
import collations from "15235_collations.js";
import _mod15237 from "metro/15237__.js";
import _mod15239 from "metro/15239__.js";
import _mod15241 from "metro/15241__.js";
import _mod15243 from "metro/15243__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15233.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15237.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15239.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15241.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15243.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
