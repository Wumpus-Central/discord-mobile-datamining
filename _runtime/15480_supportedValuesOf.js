// _runtime/15480_supportedValuesOf.js
import _mod15481 from "metro/15481__.js";
import collations from "15483_collations.js";
import _mod15485 from "metro/15485__.js";
import _mod15487 from "metro/15487__.js";
import _mod15489 from "metro/15489__.js";
import _mod15491 from "metro/15491__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15481.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15485.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15487.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15489.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15491.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
