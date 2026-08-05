// discord_app/modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = require("../../UserSettings.tsx") /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = require("../../../../utils/AnalyticsUtils.tsx");
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = require("../../UserSettings.tsx") /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = require("../../../../utils/AnalyticsUtils.tsx");
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
};
const result = require("AccountNotificationFlags").fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;