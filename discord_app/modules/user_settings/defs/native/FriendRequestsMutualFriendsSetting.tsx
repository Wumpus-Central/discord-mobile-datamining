// discord_app/modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const FriendSourceFlags = fn(1085).FriendSourceFlags;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
}
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFriendRequestsMutualFriendsSettingValue() {
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
    }
  : function useFriendRequestsMutualFriendsSettingValue() {
      const FriendSourceFlagsSetting = setting(2040).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualFriends;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IqlCSq);
  },
  parent: fn(7966).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useFriendRequestsMutualFriendsSettingValue() {
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
      }
    : function useFriendRequestsMutualFriendsSettingValue() {
        const FriendSourceFlagsSetting = setting(2040).FriendSourceFlagsSetting;
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
  useIsDisabled,
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualFriendsSetting.tsx");

export default toggle;
