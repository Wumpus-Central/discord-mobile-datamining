// === Module 1501: AppLauncherNativeConstants ===

// Module 1501 (AppLauncherNativeConstants)
import nativeDefault from "native" /* 587 */;
import useNavigation from "useNavigation" /* 1502 */;
import _modDef1625 from "module_1625" /* 1625 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeConstants.tsx");

export const APP_LAUNCHER_BUILT_IN_SECTION_ICON = _modDef1625;
export const AppLauncherRouteName = { HOME: "home", APPLICATION_VIEW: "application_view", COMMAND_VIEW: "command_view", APP_LIST_VIEW: "app_list_view" };
export const useAppLauncherNavigation = function useAppLauncherNavigation() {
  return useNavigation.useNativeStackNavigation();
};
export const AppLauncherOptionAutoFocusType = { NONE: 0, [0]: "NONE", FIRST_REQUIRED_OPTION: 1, [1]: "FIRST_REQUIRED_OPTION", OPTIONAL_OPTION_ADDED: 2, [2]: "OPTIONAL_OPTION_ADDED" };
export const DEFAULT_CONTENT_PADDING = nativeDefault.space.PX_16;
export const SCREEN_BACKGROUND_COLOR = nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
export const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = { itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };