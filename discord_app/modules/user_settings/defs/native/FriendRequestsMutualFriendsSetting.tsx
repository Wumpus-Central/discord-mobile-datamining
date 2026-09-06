// === Module 14977: FriendRequestsMutualFriendsSetting ===

// Module 14977 (FriendRequestsMutualFriendsSetting)
import util from "util" /* 1114 */;
import FlagUtilsAll from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendSourceFlags = fn(1074).FriendSourceFlags;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualFriends;
  },
  onValueChange: function onFriendRequestsMutualFriendsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_FRIENDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_FRIENDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default SettingBuilders;