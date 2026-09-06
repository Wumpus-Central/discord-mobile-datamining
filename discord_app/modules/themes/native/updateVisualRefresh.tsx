// discord_app/modules/themes/native/updateVisualRefresh.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeThemeModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = NativeThemeModuleDefault.setVisualRefreshEnabled(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
