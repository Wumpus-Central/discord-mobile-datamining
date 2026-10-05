// _runtime/metro/14053__.js
const require = globalThis.__r;
let _require;

export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("14054__.js").units;
  return units.filter((item) => {
    function isSupported(unit, locale) {
      let str = locale;
      if (undefined === locale) {
        str = "en";
      }
      try {
        const obj = { style: "unit", unit };
        const memoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat(str, obj);
        return memoizedNumberFormat.resolvedOptions().unit === unit;
      } catch (err) {
        return false;
      }
    }
    return isSupported(item, locale);
  });
};
