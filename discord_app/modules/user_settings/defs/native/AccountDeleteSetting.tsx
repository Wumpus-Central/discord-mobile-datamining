// === Module 14810: AccountDeleteSetting ===

// Module 14810 (AccountDeleteSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14811 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
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