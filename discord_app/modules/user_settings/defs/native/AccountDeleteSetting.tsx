// === Module 16366: AccountDeleteSetting ===

// Module 16366 (AccountDeleteSetting)
import util from "util" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16367 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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