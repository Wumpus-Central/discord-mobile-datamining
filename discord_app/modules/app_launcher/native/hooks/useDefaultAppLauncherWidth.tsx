// === Module 9064: useDefaultAppLauncherWidth ===

// Module 9064 (useDefaultAppLauncherWidth)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5631 */;
import AppLauncherEntrypoint from "AppLauncherEntrypoint" /* 8444 */;

const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const result = set.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherEntrypoint.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};