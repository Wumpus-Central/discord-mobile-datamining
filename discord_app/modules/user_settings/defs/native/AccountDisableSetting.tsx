// === Module 15786: AccountDisableSetting ===

// Module 15786 (AccountDisableSetting)
import util from "util" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15785 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jf5GGb);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;