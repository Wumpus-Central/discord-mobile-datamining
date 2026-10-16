// === Module 15776: AccountDisableSetting ===

// Module 15776 (AccountDisableSetting)
import util from "util" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15775 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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