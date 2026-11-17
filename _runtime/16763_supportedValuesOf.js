// _runtime/16763_supportedValuesOf.js
import _mod16764 from "metro/16764__.js";
import collations from "16766_collations.js";
import _mod16768 from "metro/16768__.js";
import _mod16770 from "metro/16770__.js";
import _mod16772 from "metro/16772__.js";
import _mod16774 from "metro/16774__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16764.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16768.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16770.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16772.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16774.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
