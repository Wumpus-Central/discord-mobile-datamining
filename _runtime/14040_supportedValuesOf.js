// _runtime/14040_supportedValuesOf.js
import _mod14041 from "metro/14041__.js";
import collations from "14043_collations.js";
import _mod14045 from "metro/14045__.js";
import _mod14047 from "metro/14047__.js";
import _mod14049 from "metro/14049__.js";
import _mod14051 from "metro/14051__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14041.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14045.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14047.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14049.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14051.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
