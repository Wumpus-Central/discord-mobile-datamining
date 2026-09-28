// _runtime/13769_supportedValuesOf.js
import _mod13770 from "metro/13770__.js";
import collations from "13772_collations.js";
import _mod13774 from "metro/13774__.js";
import _mod13776 from "metro/13776__.js";
import _mod13778 from "metro/13778__.js";
import _mod13780 from "metro/13780__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13770.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13774.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13776.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13778.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13780.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
