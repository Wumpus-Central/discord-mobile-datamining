// === Module 14552: AccountDisableSetting ===

// Module 14552 (AccountDisableSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14551 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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