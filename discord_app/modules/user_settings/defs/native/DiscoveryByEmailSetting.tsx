// === Module 15104: DiscoveryByEmailSetting ===

// Module 15104 (DiscoveryByEmailSetting)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12406 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDiscoveryByEmailSettingValue() {
  const cResult = c.c(2);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  if (cResult[0] !== setting) {
    const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    cResult[0] = setting;
    cResult[1] = hasFlagResult;
    let tmp5 = hasFlagResult;
    const tmpResult = FlagUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useDiscoveryByEmailSettingValue() {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
});
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
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useDiscoveryByEmailSettingValue() {
    const cResult = c.c(2);
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    if (cResult[0] !== setting) {
      const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
      cResult[0] = setting;
      cResult[1] = hasFlagResult;
      let tmp5 = hasFlagResult;
      const tmpResult = FlagUtils;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  }) : (function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  }),
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const hasFlagResult = FlagUtils.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: hasFlagResult, email });
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;