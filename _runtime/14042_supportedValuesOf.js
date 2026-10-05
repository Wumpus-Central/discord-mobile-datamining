// _runtime/14042_supportedValuesOf.js
import _mod14043 from "metro/14043__.js";
import collations from "14045_collations.js";
import _mod14047 from "metro/14047__.js";
import _mod14049 from "metro/14049__.js";
import _mod14051 from "metro/14051__.js";
import _mod14053 from "metro/14053__.js";

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14043.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14047.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14049.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14051.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14053.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
