// _runtime/15720_supportedValuesOf.js
import _mod15721 from "metro/15721__.js";
import collations from "15723_collations.js";
import _mod15725 from "metro/15725__.js";
import _mod15727 from "metro/15727__.js";
import _mod15729 from "metro/15729__.js";
import _mod15731 from "metro/15731__.js";

require = arg1;
const dependencyMap = arg6;

export function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod15721.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod15725.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod15727.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod15729.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod15731.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
}
