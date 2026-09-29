// _runtime/13938_supportedValuesOf.js
import _mod13939 from "metro/13939__.js";
import collations from "13941_collations.js";
import _mod13943 from "metro/13943__.js";
import _mod13945 from "metro/13945__.js";
import _mod13947 from "metro/13947__.js";
import _mod13949 from "metro/13949__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13939.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13943.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13945.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13947.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13949.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
