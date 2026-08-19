// === Module 14824: toggle ===

// Module 14824 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import apexExperiment from "apexExperiment" /* 5364 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14268 */;
import _modDef14825 from "module_14825" /* 14825 */;
import DesktopNotificationTypes from "DesktopNotificationTypes" /* 10015 */;
import "createToggle";

require = fn;
let createToggle = {
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
    return _modDef14825.setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = apexExperiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default createToggle;