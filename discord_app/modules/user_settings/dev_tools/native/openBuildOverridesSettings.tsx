// === Module 17003: openBuildOverridesSettings ===

// Module 17003 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.popWithKey("DevToolsNavigator");
  openUserSettings.openUserSettings({ screen: MobileUserSettings.BUILD_OVERRIDES });
}