// discord_app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
import _slicedToArray from "_slicedToArray";
import reset from "reset";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(base_theme) {
  let tmp2;
  let tmp3;
  let tmp4;
  let obj = require(589) /* initialize */;
  let items = [reset];
  [tmp2, tmp3, tmp4] = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
  if (undefined !== tmp4) {
    return tmp4;
  } else {
    if (undefined !== tmp2) {
      if (undefined !== tmp3) {
        obj = { baseTheme: null, customTheme: null };
        obj[0] = tmp3;
        obj[1] = tmp2;
        return obj;
      }
    }
    if (null != base_theme) {
      obj = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2[0], gradient_angle: obj2[1], base_mix: obj2[2] } = base_theme);
      obj[3] = [];
      const obj1 = { baseTheme: null, customTheme: null };
      obj1[0] = base_theme.base_theme;
      obj1[1] = obj;
      return obj1;
    }
  }
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
};