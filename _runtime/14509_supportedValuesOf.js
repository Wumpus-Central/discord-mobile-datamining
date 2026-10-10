// _runtime/14509_supportedValuesOf.js
import _mod14510 from "metro/14510__.js";
import collations from "14512_collations.js";
import _mod14514 from "metro/14514__.js";
import _mod14516 from "metro/14516__.js";
import _mod14518 from "metro/14518__.js";
import _mod14520 from "metro/14520__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14510.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14514.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14516.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14518.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14520.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
