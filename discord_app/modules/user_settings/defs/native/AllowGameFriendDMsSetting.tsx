// === Module 16275: AllowGameFriendDMsSetting ===

// Module 16275 (AllowGameFriendDMsSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 16276 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XpBObB);
  },
  parent: SettingsConstants.MobileUserSettings.CONNECTED_GAMES,
  useValue: UserSettings.AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: UserSettings.AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.XpBObB)];
    return items;
  },
  usePredicate: useIsAllowGameFriendDMsSettingVisible.useIsAllowGameFriendDMsSettingVisible
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;