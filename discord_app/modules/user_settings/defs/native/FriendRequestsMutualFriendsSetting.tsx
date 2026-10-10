// === Module 15237: FriendRequestsMutualFriendsSetting ===

// Module 15237 (FriendRequestsMutualFriendsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 2041 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendSourceFlags = fn(1085).FriendSourceFlags;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
}
const SettingBuilders = fn(10663);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualFriendsSettingValue() {
  const cResult = c.c(2);
  const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const flags = UserSettingsUtils.computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    let tmp5 = flags;
    const tmpResult = UserSettingsUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5.mutualFriends;
}) : (function useFriendRequestsMutualFriendsSettingValue() {
  const FriendSourceFlagsSetting = setting(2041).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualFriends;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(7992).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendRequestsMutualFriendsSettingValue() {
    const cResult = c.c(2);
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.useSetting();
    if (cResult[0] !== setting) {
      const flags = UserSettingsUtils.computeFlags(setting);
      cResult[0] = setting;
      cResult[1] = flags;
      let tmp5 = flags;
      const tmpResult = UserSettingsUtils;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5.mutualFriends;
  }) : (function useFriendRequestsMutualFriendsSettingValue() {
    const FriendSourceFlagsSetting = setting(2041).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualFriends;
  }),
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
  useIsDisabled
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default toggle;