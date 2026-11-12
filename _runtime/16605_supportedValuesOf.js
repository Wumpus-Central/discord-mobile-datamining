// _runtime/16605_supportedValuesOf.js
import _mod16606 from "metro/16606__.js";
import collations from "16608_collations.js";
import _mod16610 from "metro/16610__.js";
import _mod16612 from "metro/16612__.js";
import _mod16614 from "metro/16614__.js";
import _mod16616 from "metro/16616__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16606.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16610.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16612.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16614.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16616.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
