// _runtime/13973_supportedValuesOf.js
import _mod13974 from "metro/13974__.js";
import collations from "13976_collations.js";
import _mod13978 from "metro/13978__.js";
import _mod13980 from "metro/13980__.js";
import _mod13982 from "metro/13982__.js";
import _mod13984 from "metro/13984__.js";

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod13974.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod13978.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod13980.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod13982.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod13984.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
