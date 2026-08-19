// === Module 15022: toggle ===

// Module 15022 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getSanitizedRestrictedGuilds from "getSanitizedRestrictedGuilds" /* 7357 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 15011 */;
import createToggle from "createToggle" /* 10669 */;

({ getSelectedGuildId: obj1, useUserSafetySettingsSelectedGuildStore: c3 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.IQO6Bi);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TUKMak);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityRestrictedGuilds = explicitContentFromProto.ActivityRestrictedGuilds;
    const setting = ActivityRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityRestrictedGuilds = getSanitizedRestrictedGuilds.getSanitizedActivityRestrictedGuilds();
    if (arg0) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = explicitContentFromProto.ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityStatus.tsx");

export default toggle;