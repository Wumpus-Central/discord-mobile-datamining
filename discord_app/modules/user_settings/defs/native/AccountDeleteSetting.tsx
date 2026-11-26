// === Module 16314: AccountDeleteSetting ===

// Module 16314 (AccountDeleteSetting)
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16315 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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