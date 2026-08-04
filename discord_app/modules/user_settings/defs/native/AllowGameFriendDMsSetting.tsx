// discord_app/modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XpBObB);
  },
  parent: require("MobileSetting").MobileSetting.CONNECTED_GAMES,
  useValue: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.XpBObB)];
    return items;
  },
  usePredicate: require("useIsAllowGameFriendDMsSettingVisible").useIsAllowGameFriendDMsSettingVisible
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XpBObB);
  },
  parent: require("MobileSetting").MobileSetting.CONNECTED_GAMES,
  useValue: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: require("explicitContentFromProto").AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.XpBObB)];
    return items;
  },
  usePredicate: require("useIsAllowGameFriendDMsSettingVisible").useIsAllowGameFriendDMsSettingVisible
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;