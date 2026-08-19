// _runtime/13655_getSupportedCalendars.js
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCalendars = function getSupportedCalendars(locale) {
  const _require = locale;
  const calendars = require("metro/13656__.js").calendars;
  return calendars.filter((item, index) => (function isSupportedCalendar(item, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-ca-");
      const memoizedDateTimeFormat = callback(table[0]).createMemoizedDateTimeFormat(combined.concat(item));
      if ("gregory" === item) {
        if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(item, closure_0));
};