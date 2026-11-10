// === Module 17056: AccountDeleteSetting ===

// Module 17056 (AccountDeleteSetting)
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 17057 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
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