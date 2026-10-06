// === Module 14069: ? ===

// Module 14069
const require = globalThis.__r;
let _require;


export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_14070").timezones;
  return timezones.filter((item) => {
    function isSupported(timeZone, locale) {
      let str = locale;
      if (undefined === locale) {
        str = "en";
      }
      try {
        const obj = { timeZone };
        const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(str, obj);
        return memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
      } catch (err) {
        return false;
      }
    }
    return isSupported(item, locale);
  });
};