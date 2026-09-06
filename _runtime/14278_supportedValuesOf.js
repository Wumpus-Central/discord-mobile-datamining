// _runtime/14278_supportedValuesOf.js
import _mod14279 from "metro/14279__.js";
import collations from "14281_collations.js";
import _mod14283 from "metro/14283__.js";
import _mod14285 from "metro/14285__.js";
import _mod14287 from "metro/14287__.js";
import _mod14289 from "metro/14289__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14279.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14283.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14285.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14287.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14289.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
