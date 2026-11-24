// _runtime/15540_supportedValuesOf.js
import _mod15541 from "metro/15541__.js";
import collations from "15543_collations.js";
import _mod15545 from "metro/15545__.js";
import _mod15547 from "metro/15547__.js";
import _mod15549 from "metro/15549__.js";
import _mod15551 from "metro/15551__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15541.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15545.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15547.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15549.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15551.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
