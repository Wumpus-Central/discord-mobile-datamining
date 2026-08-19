// === Module 16176: updateVisualRefresh ===

// Module 16176 (updateVisualRefresh)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 13815 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let result = obj132.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(closure_0) {
  if (obj.isAndroid()) {
    let result = enforcingDefault.setVisualRefreshEnabled(closure_0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(closure_0);
  }
  return result;
};