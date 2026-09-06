// === Module 14848: DiscoveryByEmailSetting ===

// Module 14848 (DiscoveryByEmailSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12684 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w/qqKK"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = FlagUtils;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability(obj);
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;