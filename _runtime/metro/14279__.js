// _runtime/metro/14279__.js
const require = arg1;
const dependencyMap = arg6;

export const getSupportedCalendars = function getSupportedCalendars(locale) {
  _require = locale;
  const calendars = require("14280__.js").calendars;
  return calendars.filter((item) =>
    (function isSupportedCalendar(item, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const concat = "".concat;
        const combined = "".concat(str, "-u-ca-");
        const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(combined.concat(item));
        if ("gregory" === item) {
          if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
            return false;
          }
        }
        return true;
      } catch (err) {}
    })(item, closure_0),
  );
};
