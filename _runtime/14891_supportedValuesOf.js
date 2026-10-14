// _runtime/14891_supportedValuesOf.js
import _mod14892 from "metro/14892__.js";
import collations from "14894_collations.js";
import _mod14896 from "metro/14896__.js";
import _mod14898 from "metro/14898__.js";
import _mod14900 from "metro/14900__.js";
import _mod14902 from "metro/14902__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14892.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14896.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14898.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14900.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14902.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
