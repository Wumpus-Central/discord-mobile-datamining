// === Module 15066: AccountDisableSetting ===

// Module 15066 (AccountDisableSetting)
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15065 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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