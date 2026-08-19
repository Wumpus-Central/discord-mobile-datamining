// _runtime/13663_getSupportedTimeZones.js
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = require("metro/13664__.js").timezones;
  return timezones.filter((item, index) => (function isSupported(item, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { timeZone: null };
      obj[0] = item;
      const memoizedDateTimeFormat = callback(table[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === item;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};