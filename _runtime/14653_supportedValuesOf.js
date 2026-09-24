// _runtime/14653_supportedValuesOf.js
import _mod14654 from "metro/14654__.js";
import collations from "14656_collations.js";
import _mod14658 from "metro/14658__.js";
import _mod14660 from "metro/14660__.js";
import _mod14662 from "metro/14662__.js";
import _mod14664 from "metro/14664__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14654.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14658.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14660.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14662.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14664.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
