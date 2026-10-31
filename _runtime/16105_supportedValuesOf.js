// _runtime/16105_supportedValuesOf.js
import _mod16106 from "metro/16106__.js";
import collations from "16108_collations.js";
import _mod16110 from "metro/16110__.js";
import _mod16112 from "metro/16112__.js";
import _mod16114 from "metro/16114__.js";
import _mod16116 from "metro/16116__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod16106.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod16110.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod16112.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod16114.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod16116.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
