// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import DesktopNotificationTypes from "DesktopNotificationTypes";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { NotificationActionCreators } from "../../../../actions/NotificationActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../parent_tools/FamilyCenterV3Experiment.tsx";
import { useUserIsTeenAgeGroup } from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import { useUserIdsForLinkStatus } from "../../../parent_tools/hooks/useUserLinks.tsx";

const require = arg1;
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
    const items = [DesktopNotificationTypes];
    return initialize.useStateFromStores(items, () => obj.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return NotificationActionCreators.setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = apexExperiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = apexExperiment;
    const tmp2 = useUserIsTeenAgeGroup();
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
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default createToggle;