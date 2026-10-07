// _runtime/14060_supportedValuesOf.js
import _mod14061 from "metro/14061__.js";
import collations from "14063_collations.js";
import _mod14065 from "metro/14065__.js";
import _mod14067 from "metro/14067__.js";
import _mod14069 from "metro/14069__.js";
import _mod14071 from "metro/14071__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14061.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14065.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14067.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14069.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14071.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
