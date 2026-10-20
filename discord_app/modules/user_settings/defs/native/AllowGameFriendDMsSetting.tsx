// === Module 17042: AllowGameFriendDMsSetting ===

// Module 17042 (AllowGameFriendDMsSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 17043 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
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