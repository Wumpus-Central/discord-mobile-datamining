// _runtime/15351_supportedValuesOf.js
import _mod15352 from "metro/15352__.js";
import collations from "15354_collations.js";
import _mod15356 from "metro/15356__.js";
import _mod15358 from "metro/15358__.js";
import _mod15360 from "metro/15360__.js";
import _mod15362 from "metro/15362__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15352.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15356.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15358.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15360.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15362.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
