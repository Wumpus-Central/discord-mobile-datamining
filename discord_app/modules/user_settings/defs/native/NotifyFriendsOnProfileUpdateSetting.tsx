// discord_app/modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js").F3llsQ);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js")["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js").F3llsQ);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js")["6goWcz"]);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: require("explicitContentFromProto").NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: require("onNotifyFriendsOnProfileUpdateSettingsChanged").onNotifyFriendsOnProfileUpdateSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;