// _runtime/13965_supportedValuesOf.js
import _mod13966 from "metro/13966__.js";
import collations from "13968_collations.js";
import _mod13970 from "metro/13970__.js";
import _mod13972 from "metro/13972__.js";
import _mod13974 from "metro/13974__.js";
import _mod13976 from "metro/13976__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13966.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13970.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13972.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13974.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13976.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
