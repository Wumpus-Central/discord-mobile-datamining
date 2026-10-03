// === Module 10995: useDefaultAppLauncherWidth ===

// Module 10995 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}) : ((arg0) => {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
});