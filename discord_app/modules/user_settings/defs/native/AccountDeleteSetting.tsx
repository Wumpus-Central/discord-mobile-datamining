// === Module 14550: AccountDeleteSetting ===

// Module 14550 (AccountDeleteSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14551 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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