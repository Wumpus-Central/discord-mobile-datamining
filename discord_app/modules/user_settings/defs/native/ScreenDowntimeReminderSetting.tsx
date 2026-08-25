// === Module 14918: toggle ===

// Module 14918 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import apexExperiment from "apexExperiment" /* 7200 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7480 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14366 */;
import _modDef14919 from "module_14919" /* 14919 */;
import closure_3 from "DesktopNotificationTypes" /* 9909 */;
import createToggle from "createToggle" /* 10516 */;

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
    return _modDef14919.setScreenDowntimeReminder(screenDowntimeReminder);
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