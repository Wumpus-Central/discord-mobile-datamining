// _runtime/14644_supportedValuesOf.js
import _mod14645 from "metro/14645__.js";
import collations from "14647_collations.js";
import _mod14649 from "metro/14649__.js";
import _mod14651 from "metro/14651__.js";
import _mod14653 from "metro/14653__.js";
import _mod14655 from "metro/14655__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14645.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14649.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14651.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14653.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14655.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
