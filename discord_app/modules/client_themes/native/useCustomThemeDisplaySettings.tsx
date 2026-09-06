// discord_app/modules/client_themes/native/useCustomThemeDisplaySettings.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CustomThemeMobileStore from "CustomThemeMobileStore.tsx";

const ClientThemesUtils = tmp(1229);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(stateFromStores) {
  let obj = initialize;
  let items = [CustomThemeMobileStore];
  [tmp4, tmp5, tmp6] = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        CustomThemeMobileStore.getCustomTheme(),
        CustomThemeMobileStore.getBaseTheme(),
        CustomThemeMobileStore.getPreviewTheme(),
      ];
      return items;
    }),
    3,
  );
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        obj = { baseTheme: tmp5, customTheme: tmp4 };
        return obj;
      }
    }
    if (null != stateFromStores) {
      obj = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: null };
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = stateFromStores);
      obj.gradientColorStops = [];
      const obj1 = {
        baseTheme: ClientThemesUtils.getCustomThemeBaseTheme(stateFromStores.base_theme),
        customTheme: obj,
      };
      return obj1;
    }
  }
  const tmp3 = _slicedToArray(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        CustomThemeMobileStore.getCustomTheme(),
        CustomThemeMobileStore.getBaseTheme(),
        CustomThemeMobileStore.getPreviewTheme(),
      ];
      return items;
    }),
    3,
  );
};
