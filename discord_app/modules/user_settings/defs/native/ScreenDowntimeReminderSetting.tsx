// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import apexExperiment from "../../../parent_tools/FamilyCenterV3Experiment.tsx";
import useUserIdsForLinkStatus from "../../../parent_tools/hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import _modDef15062 from "../../../../actions/NotificationActionCreators.tsx";
import closure_3 from "../../../../stores/NotificationSettingsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.z6tZKH);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TummoQ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => obj.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return _modDef15062.setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = apexExperiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = apexExperiment;
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserIdsForLinkStatus.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default createToggle;