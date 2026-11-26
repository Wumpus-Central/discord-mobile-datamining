// _runtime/15713_supportedValuesOf.js
import _mod15714 from "metro/15714__.js";
import collations from "15716_collations.js";
import _mod15718 from "metro/15718__.js";
import _mod15720 from "metro/15720__.js";
import _mod15722 from "metro/15722__.js";
import _mod15724 from "metro/15724__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15714.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15718.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15720.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15722.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15724.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
