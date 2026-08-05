import { 13468__ } from "metro/13468__.js";
// _runtime/13467_getSupportedTimeZones.js
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _13468__.timezones;
  return timezones.filter((arg0) => (function isSupported(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { timeZone: null };
      obj[0] = arg0;
      const memoizedDateTimeFormat = callback(table[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === arg0;
    } catch (err) {
      return false;
    }
  })(arg0, closure_0));
};