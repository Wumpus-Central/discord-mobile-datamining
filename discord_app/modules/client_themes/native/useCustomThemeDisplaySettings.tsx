// === Module 4313: useCustomThemeDisplaySettings ===

// Module 4313 (useCustomThemeDisplaySettings)
import initialize from "initialize" /* 589 */;
import getThemeForColor from "getThemeForColor" /* 1347 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "reset" /* 1346 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(base_theme) {
  let obj = initialize;
  let items = [closure_3];
  [tmp4, tmp5, tmp6] = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        obj = { baseTheme: null, customTheme: null };
        obj[0] = tmp5;
        obj[1] = tmp4;
        return obj;
      }
    }
    if (null != base_theme) {
      obj = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2[0], gradient_angle: obj2[1], base_mix: obj2[2] } = base_theme);
      obj[3] = [];
      obj1 = { baseTheme: null, customTheme: null };
      obj1[0] = getThemeForColor.getCustomThemeBaseTheme(base_theme.base_theme);
      obj1[1] = obj;
      return obj1;
    }
  }
  const tmp = require;
  const tmp3 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
};