// === Module 12146: useDefaultAppLauncherWidth ===

// Module 12146 (useDefaultAppLauncherWidth)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5272 */;
import AppLauncherTypes from "AppLauncherTypes" /* 10089 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}