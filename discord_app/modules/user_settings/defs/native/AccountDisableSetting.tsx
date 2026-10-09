// === Module 15007: AccountDisableSetting ===

// Module 15007 (AccountDisableSetting)
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15006 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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