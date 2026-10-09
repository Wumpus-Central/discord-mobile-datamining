// === Module 15005: AccountDeleteSetting ===

// Module 15005 (AccountDeleteSetting)
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15006 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8lQ2rR"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;