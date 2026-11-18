// === Module 17063: openBuildOverridesSettings ===

// Module 17063 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import openUserSettings from "openUserSettings" /* 8106 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.popWithKey("DevToolsNavigator");
  openUserSettings.openUserSettings({ screen: MobileUserSettings.BUILD_OVERRIDES });
}