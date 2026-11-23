// === Module 17379: GuildSettingActivityJoining ===

// Module 17379 (GuildSettingActivityJoining)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7415 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17365 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["T+nevN"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["b+bVSw"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
    const setting = ActivityJoiningRestrictedGuilds.useSetting();
    return !setting.includes(React3().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = React2();
    const sanitizedActivityJoiningRestrictedGuilds = UserSettingsUtils.getSanitizedActivityJoiningRestrictedGuilds();
    if (arg0) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
    items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityJoining.tsx");

export default toggle;