// discord_app/modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").A0FVCV);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").A0FVCV);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../activity_privacy/ActivityPrivacy.messages.js").vHX6RG);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: require("explicitContentFromProto").NotifyFriendsOnComeOnline.useSetting,
  onValueChange: require("onFriendOnlineNotificationSettingsChanged").onNotifyFriendsOnComeOnlineSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;