// _runtime/13770_supportedValuesOf.js
import _mod13771 from "metro/13771__.js";
import collations from "13773_collations.js";
import _mod13775 from "metro/13775__.js";
import _mod13777 from "metro/13777__.js";
import _mod13779 from "metro/13779__.js";
import _mod13781 from "metro/13781__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13771.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13775.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13777.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13779.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13781.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
