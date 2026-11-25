// === Module 16432: FriendRequestsMutualFriendsSetting ===

// Module 16432 (FriendRequestsMutualFriendsSetting)
import util from "util" /* 1112 */;
import FlagUtilsAll from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4837 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7320 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16272 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendSourceFlags = fn(1071).FriendSourceFlags;
const SettingBuilders = fn(11914);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(9513).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = setting(4837).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    items = [setting];
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default toggle;