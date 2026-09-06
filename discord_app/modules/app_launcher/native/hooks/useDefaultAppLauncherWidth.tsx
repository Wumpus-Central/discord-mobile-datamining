// discord_app/modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import AppLauncherTypes from "../../AppLauncherTypes.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = function useDefaultAppLauncherWidth(TEXT) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (TEXT !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
    const _Math = Math;
    bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
