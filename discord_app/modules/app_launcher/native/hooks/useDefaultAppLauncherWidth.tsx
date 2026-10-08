// discord_app/modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import AppLauncherTypes from "../../AppLauncherTypes.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx");

export const useDefaultAppLauncherWidth = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDefaultAppLauncherWidth(arg0) {
      const width = useWindowDimensionsDefault().width;
      let bound = width;
      if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
        const _Math = Math;
        bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
      }
      return bound;
    }
  : function useDefaultAppLauncherWidth(arg0) {
      const width = useWindowDimensionsDefault().width;
      let bound = width;
      if (arg0 !== AppLauncherTypes.AppLauncherEntrypoint.TEXT) {
        const _Math = Math;
        bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
      }
      return bound;
    };
