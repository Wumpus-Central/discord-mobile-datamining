// _runtime/14376_supportedValuesOf.js
import _mod14377 from "metro/14377__.js";
import collations from "14379_collations.js";
import _mod14381 from "metro/14381__.js";
import _mod14383 from "metro/14383__.js";
import _mod14385 from "metro/14385__.js";
import _mod14387 from "metro/14387__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14377.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14381.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14383.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14385.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14387.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
