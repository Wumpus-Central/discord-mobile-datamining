// === Module 17056: openBuildOverridesSettings ===

// Module 17056 (openBuildOverridesSettings)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import openUserSettings from "openUserSettings" /* 8075 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/openBuildOverridesSettings.tsx");

export function openBuildOverridesSettings() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.popWithKey("DevToolsNavigator");
  openUserSettings.openUserSettings({ screen: MobileUserSettings.BUILD_OVERRIDES });
}