// _runtime/14366_supportedValuesOf.js
import _mod14367 from "metro/14367__.js";
import collations from "14369_collations.js";
import _mod14371 from "metro/14371__.js";
import _mod14373 from "metro/14373__.js";
import _mod14375 from "metro/14375__.js";
import _mod14377 from "metro/14377__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14367.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14371.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14373.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14375.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14377.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
