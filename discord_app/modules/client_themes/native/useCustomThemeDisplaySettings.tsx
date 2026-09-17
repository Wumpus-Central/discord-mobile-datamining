// === Module 4573: useCustomThemeDisplaySettings ===

// Module 4573 (useCustomThemeDisplaySettings)
import initialize from "initialize" /* 504 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import _slicedToArray from "module_32" /* 32 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(stateFromStores) {
  let items = [CustomThemeMobileStore];
  [tmp4, tmp5, tmp6] = initialize.useStateFromStoresArray(items, () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  });
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        const obj3 = { baseTheme: tmp5, customTheme: tmp4 };
        return obj3;
      }
    }
    if (null != stateFromStores) {
      const obj4 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = stateFromStores);
      obj4.gradientColorStops = [];
      const obj5 = { baseTheme: ClientThemesUtils.getCustomThemeBaseTheme(stateFromStores.base_theme), customTheme: obj4 };
      return obj5;
    }
  }
  const tmp3 = _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  }), 3);
};