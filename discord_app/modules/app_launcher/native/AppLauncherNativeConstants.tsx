// discord_app/modules/app_launcher/native/AppLauncherNativeConstants.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import _modDef1606 from "../../../../_runtime/metro/01606__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeConstants.tsx");

export const APP_LAUNCHER_BUILT_IN_SECTION_ICON = _modDef1606;
export const AppLauncherRouteName = {
  HOME: "home",
  APPLICATION_VIEW: "application_view",
  COMMAND_VIEW: "command_view",
  APP_LIST_VIEW: "app_list_view",
};
export const useAppLauncherNavigation = function useAppLauncherNavigation() {
  return useNavigation.useNativeStackNavigation();
};
export const AppLauncherOptionAutoFocusType = {
  NONE: 0,
  [0]: "NONE",
  FIRST_REQUIRED_OPTION: 1,
  [1]: "FIRST_REQUIRED_OPTION",
  OPTIONAL_OPTION_ADDED: 2,
  [2]: "OPTIONAL_OPTION_ADDED",
};
export const DEFAULT_CONTENT_PADDING = nativeDefault.space.PX_16;
export const SCREEN_BACKGROUND_COLOR = nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
export const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = { itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
