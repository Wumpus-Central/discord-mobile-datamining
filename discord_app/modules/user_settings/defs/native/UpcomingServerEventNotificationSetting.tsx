import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14491) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14491) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;