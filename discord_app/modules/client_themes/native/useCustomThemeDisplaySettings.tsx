// discord_app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getThemeForColor from "../ClientThemesUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import reset from "CustomThemeMobileStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(stateFromStores) {
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
    if (null != stateFromStores) {
      obj = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2[0], gradient_angle: obj2[1], base_mix: obj2[2] } = stateFromStores);
      obj[3] = [];
      obj1 = { baseTheme: null, customTheme: null };
      obj1[0] = getThemeForColor.getCustomThemeBaseTheme(stateFromStores.base_theme);
      obj1[1] = obj;
      return obj1;
    }
  }
  const tmp3 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
    return items;
  }), 3);
};