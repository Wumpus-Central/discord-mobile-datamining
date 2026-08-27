// === Module 15061: toggle ===

// Module 15061 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import apexExperiment from "apexExperiment" /* 7272 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 8697 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14466 */;
import _modDef15062 from "module_15062" /* 15062 */;
import closure_3 from "DesktopNotificationTypes" /* 10084 */;
import createToggle from "createToggle" /* 10988 */;

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