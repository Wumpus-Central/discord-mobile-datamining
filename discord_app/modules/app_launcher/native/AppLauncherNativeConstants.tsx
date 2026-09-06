// === Module 1482: APP_LAUNCHER_BUILT_IN_SECTION_ICON ===

// Module 1482 (APP_LAUNCHER_BUILT_IN_SECTION_ICON)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;
import useNavigation from "useNavigation" /* 1483 */;
import registerAssetDefault from "registerAsset" /* 1606 */;

const result = set.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeConstants.tsx");

export const APP_LAUNCHER_BUILT_IN_SECTION_ICON = registerAssetDefault;
export const AppLauncherRouteName = { HOME: "home", APPLICATION_VIEW: "application_view", COMMAND_VIEW: "command_view", APP_LIST_VIEW: "app_list_view" };
export const useAppLauncherNavigation = function useAppLauncherNavigation() {
  return useNavigation.useNativeStackNavigation();
};
export const AppLauncherOptionAutoFocusType = { NONE: 0, [0]: "NONE", FIRST_REQUIRED_OPTION: 1, [1]: "FIRST_REQUIRED_OPTION", OPTIONAL_OPTION_ADDED: 2, [2]: "OPTIONAL_OPTION_ADDED" };
export const DEFAULT_CONTENT_PADDING = ThemesDefault.space.PX_16;
export const SCREEN_BACKGROUND_COLOR = ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
export const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = { itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };