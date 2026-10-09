// discord_app/modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx
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
const SettingBuilders = fn(10629);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFriendRequestsMutualGuildsSettingValue() {
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
      return tmp5.mutualGuilds;
    }
  : function useFriendRequestsMutualGuildsSettingValue() {
      const FriendSourceFlagsSetting = setting(2041).FriendSourceFlagsSetting;
      setting = FriendSourceFlagsSetting.useSetting();
      const items = [setting];
      return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualGuilds;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(7974).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? function useFriendRequestsMutualGuildsSettingValue() {
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
        return tmp5.mutualGuilds;
      }
    : function useFriendRequestsMutualGuildsSettingValue() {
        const FriendSourceFlagsSetting = setting(2041).FriendSourceFlagsSetting;
        setting = FriendSourceFlagsSetting.useSetting();
        const items = [setting];
        return noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items).mutualGuilds;
      },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
    const setting = FriendSourceFlagsSetting.getSetting();
    const FriendSourceFlagsSetting2 = UserSettings.FriendSourceFlagsSetting;
    const obj = FlagUtilsAll;
    if (arg0) {
      let addFlagResult = obj.addFlag(setting, FriendSourceFlags.MUTUAL_GUILDS);
    } else {
      addFlagResult = obj.removeFlags(setting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
    }
    FriendSourceFlagsSetting2.updateSetting(addFlagResult);
  },
  useIsDisabled,
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default toggle;
