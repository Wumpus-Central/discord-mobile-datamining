// === Module 14920: toggle ===

// Module 14920 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import apexExperiment from "apexExperiment" /* 7200 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7480 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14366 */;
import createToggle from "createToggle" /* 10516 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dxlHN2);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/071J7"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = explicitContentFromProto.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = apexExperiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
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
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dxlHN2);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/071J7"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = explicitContentFromProto.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = apexExperiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
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
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;