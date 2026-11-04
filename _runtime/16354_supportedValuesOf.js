// _runtime/16354_supportedValuesOf.js
import _mod16355 from "metro/16355__.js";
import collations from "16357_collations.js";
import _mod16359 from "metro/16359__.js";
import _mod16361 from "metro/16361__.js";
import _mod16363 from "metro/16363__.js";
import _mod16365 from "metro/16365__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16355.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16359.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16361.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16363.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16365.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
