// _runtime/16610_supportedValuesOf.js
import _mod16611 from "metro/16611__.js";
import collations from "16613_collations.js";
import _mod16615 from "metro/16615__.js";
import _mod16617 from "metro/16617__.js";
import _mod16619 from "metro/16619__.js";
import _mod16621 from "metro/16621__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16611.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16615.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16617.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16619.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16621.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
