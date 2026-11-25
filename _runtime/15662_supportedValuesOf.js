// _runtime/15662_supportedValuesOf.js
import _mod15663 from "metro/15663__.js";
import collations from "15665_collations.js";
import _mod15667 from "metro/15667__.js";
import _mod15669 from "metro/15669__.js";
import _mod15671 from "metro/15671__.js";
import _mod15673 from "metro/15673__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15663.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15667.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15669.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15671.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15673.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
