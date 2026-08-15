// discord_app/modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VxBO2F);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.F4VeBe);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return apexExperiment.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;