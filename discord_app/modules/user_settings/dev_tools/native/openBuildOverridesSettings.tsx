// === Module 17214: openBuildOverridesSettings ===

// Module 17214 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.popWithKey("DevToolsNavigator");
  openUserSettings.openUserSettings({ screen: MobileUserSettings.BUILD_OVERRIDES });
}