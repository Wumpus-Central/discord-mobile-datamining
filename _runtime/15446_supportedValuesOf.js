// _runtime/15446_supportedValuesOf.js
import _mod15447 from "metro/15447__.js";
import collations from "15449_collations.js";
import _mod15451 from "metro/15451__.js";
import _mod15453 from "metro/15453__.js";
import _mod15455 from "metro/15455__.js";
import _mod15457 from "metro/15457__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15447.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15451.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15453.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15455.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15457.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
