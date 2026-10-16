// _runtime/15222_supportedValuesOf.js
import _mod15223 from "metro/15223__.js";
import collations from "15225_collations.js";
import _mod15227 from "metro/15227__.js";
import _mod15229 from "metro/15229__.js";
import _mod15231 from "metro/15231__.js";
import _mod15233 from "metro/15233__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15223.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15227.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15229.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15231.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15233.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
