// === Module 17908: openBuildOverridesSettings ===

// Module 17908 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import openUserSettings from "openUserSettings" /* 7635 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.popWithKey("DevToolsNavigator");
  openUserSettings.openUserSettings({ screen: MobileUserSettings.BUILD_OVERRIDES });
}