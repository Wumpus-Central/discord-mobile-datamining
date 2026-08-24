// discord_app/modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import apexExperiment from "../../../notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx";
import onUpcomingServerEventNotificationSettingsChanged from "../../../notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MCVmjA);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.R0VpSW);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: onUpcomingServerEventNotificationSettingsChanged.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MCVmjA);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.R0VpSW);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: onUpcomingServerEventNotificationSettingsChanged.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;