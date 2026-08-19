// discord_app/modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ACTION_SHEET_START_HEIGHT_RATIO from "../../../action_sheet/native/ActionSheetConstants.tsx";
import AppLauncherEntrypoint from "../../AppLauncherTypes.tsx";

const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const result = obj132.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherEntrypoint.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};