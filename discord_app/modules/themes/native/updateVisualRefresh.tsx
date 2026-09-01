// discord_app/modules/themes/native/updateVisualRefresh.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
let result = set.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = enforcingDefault.setVisualRefreshEnabled(arg0);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
