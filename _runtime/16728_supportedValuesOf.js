// _runtime/16728_supportedValuesOf.js
import _mod16729 from "metro/16729__.js";
import collations from "16731_collations.js";
import _mod16733 from "metro/16733__.js";
import _mod16735 from "metro/16735__.js";
import _mod16737 from "metro/16737__.js";
import _mod16739 from "metro/16739__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16729.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16733.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16735.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16737.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16739.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
