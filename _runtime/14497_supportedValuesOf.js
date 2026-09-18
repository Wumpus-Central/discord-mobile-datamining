// _runtime/14497_supportedValuesOf.js
import _mod14498 from "metro/14498__.js";
import collations from "14500_collations.js";
import _mod14502 from "metro/14502__.js";
import _mod14504 from "metro/14504__.js";
import _mod14506 from "metro/14506__.js";
import _mod14508 from "metro/14508__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14498.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14502.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14504.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14506.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14508.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
