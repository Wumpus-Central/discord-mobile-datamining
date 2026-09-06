// discord_app/modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import FlagUtilsAll from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const FriendSourceFlags = fn(1074).FriendSourceFlags;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
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
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default SettingBuilders;
