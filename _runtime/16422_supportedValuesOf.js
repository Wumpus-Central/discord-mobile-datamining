// _runtime/16422_supportedValuesOf.js
import _mod16423 from "metro/16423__.js";
import collations from "16425_collations.js";
import _mod16427 from "metro/16427__.js";
import _mod16429 from "metro/16429__.js";
import _mod16431 from "metro/16431__.js";
import _mod16433 from "metro/16433__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16423.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16427.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16429.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16431.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16433.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
