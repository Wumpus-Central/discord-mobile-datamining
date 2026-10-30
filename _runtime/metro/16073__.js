// === Module 16073: ? ===

// Module 16073
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_16074").timezones;
  return timezones.filter((item) => (function isSupported(timeZone, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const obj = { timeZone };
      const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
}