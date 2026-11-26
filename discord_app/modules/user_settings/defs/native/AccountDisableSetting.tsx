// === Module 16316: AccountDisableSetting ===

// Module 16316 (AccountDisableSetting)
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 16315 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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