// _runtime/14455_supportedValuesOf.js
import _mod14456 from "metro/14456__.js";
import collations from "14458_collations.js";
import _mod14460 from "metro/14460__.js";
import _mod14462 from "metro/14462__.js";
import _mod14464 from "metro/14464__.js";
import _mod14466 from "metro/14466__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14456.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14460.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14462.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14464.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14466.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
