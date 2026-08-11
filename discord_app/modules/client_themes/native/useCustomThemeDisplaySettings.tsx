// discord_app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
import _slicedToArray from "_slicedToArray";
import reset from "reset";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(base_theme) {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = initialize;
  let items = [reset];
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
      const obj1 = { baseTheme: null, customTheme: null };
      obj1[0] = tmp(1347).getCustomThemeBaseTheme(base_theme.base_theme);
      obj1[1] = obj;
      return obj1;
    }
  }
  tmp = require;
  const tmp3 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
};