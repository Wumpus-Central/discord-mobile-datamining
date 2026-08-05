import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";
// discord_app/modules/themes/native/updateVisualRefresh.tsx
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = enforcing.setVisualRefreshEnabled(closure_0);
    const obj2 = enforcing;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};