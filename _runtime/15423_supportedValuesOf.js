// _runtime/15423_supportedValuesOf.js
import _mod15424 from "metro/15424__.js";
import collations from "15426_collations.js";
import _mod15428 from "metro/15428__.js";
import _mod15430 from "metro/15430__.js";
import _mod15432 from "metro/15432__.js";
import _mod15434 from "metro/15434__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15424.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15428.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15430.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15432.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15434.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
