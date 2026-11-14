// === Module 17339: AccountDisableSetting ===

// Module 17339 (AccountDisableSetting)
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 17338 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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