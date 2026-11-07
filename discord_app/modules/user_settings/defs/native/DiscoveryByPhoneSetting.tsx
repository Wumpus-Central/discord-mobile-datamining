// === Module 17058: DiscoveryByPhoneSetting ===

// Module 17058 (DiscoveryByPhoneSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 14490 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone, email: hasFlagResult });
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;