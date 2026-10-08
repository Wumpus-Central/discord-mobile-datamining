// _runtime/14359_supportedValuesOf.js
import _mod14360 from "metro/14360__.js";
import collations from "14362_collations.js";
import _mod14364 from "metro/14364__.js";
import _mod14366 from "metro/14366__.js";
import _mod14368 from "metro/14368__.js";
import _mod14370 from "metro/14370__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14360.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14364.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14366.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14368.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14370.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
