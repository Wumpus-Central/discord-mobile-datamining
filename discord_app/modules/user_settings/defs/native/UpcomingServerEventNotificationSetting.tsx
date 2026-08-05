// discord_app/modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require("../../../notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx") /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require("../../../notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx") /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;