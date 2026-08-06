// _runtime/13468_getSupportedCalendars.js
import { 13469__ } from "metro/13469__.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCalendars = function getSupportedCalendars(locale) {
  const _require = locale;
  const calendars = _13469__.calendars;
  return calendars.filter((arg0) => (function isSupportedCalendar(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-ca-");
      const memoizedDateTimeFormat = callback(table[0]).createMemoizedDateTimeFormat(combined.concat(arg0));
      if ("gregory" === arg0) {
        if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(arg0, closure_0));
};