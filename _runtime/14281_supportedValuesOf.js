// _runtime/14281_supportedValuesOf.js
import _mod14282 from "metro/14282__.js";
import collations from "14284_collations.js";
import _mod14286 from "metro/14286__.js";
import _mod14288 from "metro/14288__.js";
import _mod14290 from "metro/14290__.js";
import _mod14292 from "metro/14292__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14282.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14286.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14288.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14290.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14292.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
