// _runtime/metro/14061__.js
const require = globalThis.__r;
let _require;

export const getSupportedCalendars = function getSupportedCalendars(locale) {
  _require = locale;
  const calendars = require("14062__.js").calendars;
  return calendars.filter((item) => {
    function isSupportedCalendar(item, locale) {
      let str = locale;
      if (undefined === locale) {
        str = "en";
      }
      try {
        const concat = "".concat;
        const createMemoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat;
        const combined = "".concat(str, "-u-ca-");
        const memoizedDateTimeFormat = createMemoizedDateTimeFormat(combined.concat(item));
        if ("gregory" === item) {
          if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
            return false;
          }
        }
        return true;
      } catch (err) {}
    }
    return isSupportedCalendar(item, locale);
  });
};
