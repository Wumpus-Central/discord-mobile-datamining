// _runtime/16252_supportedValuesOf.js
import _mod16253 from "metro/16253__.js";
import collations from "16255_collations.js";
import _mod16257 from "metro/16257__.js";
import _mod16259 from "metro/16259__.js";
import _mod16261 from "metro/16261__.js";
import _mod16263 from "metro/16263__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16253.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16257.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16259.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16261.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16263.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
