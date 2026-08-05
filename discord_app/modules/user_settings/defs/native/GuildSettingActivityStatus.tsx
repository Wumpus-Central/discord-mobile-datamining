// discord_app/modules/user_settings/defs/native/GuildSettingActivityStatus.tsx
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let c3;
let obj1;
({ getSelectedGuildId: obj1, useUserSafetySettingsSelectedGuildStore: c3 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.IQO6Bi);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.TUKMak);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityRestrictedGuilds = require("../../UserSettings.tsx") /* explicitContentFromProto */.ActivityRestrictedGuilds;
    const setting = ActivityRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityRestrictedGuilds = require("../../../../utils/UserSettingsUtils.tsx") /* getSanitizedRestrictedGuilds */.getSanitizedActivityRestrictedGuilds();
    if (arg0) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = require("../../UserSettings.tsx") /* explicitContentFromProto */.ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  }
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.IQO6Bi);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.TUKMak);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityRestrictedGuilds = require("../../UserSettings.tsx") /* explicitContentFromProto */.ActivityRestrictedGuilds;
    const setting = ActivityRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityRestrictedGuilds = require("../../../../utils/UserSettingsUtils.tsx") /* getSanitizedRestrictedGuilds */.getSanitizedActivityRestrictedGuilds();
    if (arg0) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = require("../../UserSettings.tsx") /* explicitContentFromProto */.ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  }
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityStatus.tsx");

export default toggle;