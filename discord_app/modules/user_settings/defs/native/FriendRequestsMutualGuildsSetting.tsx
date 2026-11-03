// === Module 17023: FriendRequestsMutualGuildsSetting ===

// Module 17023 (FriendRequestsMutualGuildsSetting)
import util from "util" /* 1113 */;
import FlagUtilsAll from "FlagUtils" /* 1398 */;
import UserSettings from "UserSettings" /* 4966 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7286 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16864 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendSourceFlags = fn(1072).FriendSourceFlags;
const SettingBuilders = fn(11677);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(8556).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const FriendSourceFlagsSetting = setting(4966).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    items = [setting];
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
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsMutualGuildsSetting.tsx");

export default toggle;