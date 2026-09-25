// _runtime/13814_supportedValuesOf.js
import _mod13815 from "metro/13815__.js";
import collations from "13817_collations.js";
import _mod13819 from "metro/13819__.js";
import _mod13821 from "metro/13821__.js";
import _mod13823 from "metro/13823__.js";
import _mod13825 from "metro/13825__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13815.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13819.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13821.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13823.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13825.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
