// _runtime/15396_supportedValuesOf.js
import _mod15397 from "metro/15397__.js";
import collations from "15399_collations.js";
import _mod15401 from "metro/15401__.js";
import _mod15403 from "metro/15403__.js";
import _mod15405 from "metro/15405__.js";
import _mod15407 from "metro/15407__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15397.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15401.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15403.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15405.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15407.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
