// _runtime/16064_supportedValuesOf.js
import _mod16065 from "metro/16065__.js";
import collations from "16067_collations.js";
import _mod16069 from "metro/16069__.js";
import _mod16071 from "metro/16071__.js";
import _mod16073 from "metro/16073__.js";
import _mod16075 from "metro/16075__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16065.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16069.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16071.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16073.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16075.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
