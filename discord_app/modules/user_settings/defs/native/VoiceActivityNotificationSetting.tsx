// discord_app/modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { expandEventProperties } from "../../../../utils/AnalyticsUtils.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = expandEventProperties;
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = explicitContentFromProto /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = expandEventProperties;
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
};
const result = require("AccountNotificationFlags").fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;