// _runtime/14853_supportedValuesOf.js
import _mod14854 from "metro/14854__.js";
import collations from "14856_collations.js";
import _mod14858 from "metro/14858__.js";
import _mod14860 from "metro/14860__.js";
import _mod14862 from "metro/14862__.js";
import _mod14864 from "metro/14864__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14854.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14858.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14860.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14862.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14864.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
