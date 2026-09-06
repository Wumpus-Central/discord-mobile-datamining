// _runtime/metro/14289__.js
const require = arg1;
const dependencyMap = arg6;

export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("14290__.js").units;
  return units.filter((item) =>
    (function isSupported(unit, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const obj = { style: "unit", unit };
        const memoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat(str, obj);
        return memoizedNumberFormat.resolvedOptions().unit === unit;
      } catch (err) {
        return false;
      }
    })(item, closure_0),
  );
};
