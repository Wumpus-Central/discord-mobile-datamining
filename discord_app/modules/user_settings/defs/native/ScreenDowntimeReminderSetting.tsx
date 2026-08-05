// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import DesktopNotificationTypes from "DesktopNotificationTypes";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.z6tZKH);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.TummoQ);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const items = [DesktopNotificationTypes];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => obj.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return require("../../../../actions/NotificationActionCreators.tsx").setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require("../../../parent_tools/FamilyCenterV3Experiment.tsx") /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = require("../../../parent_tools/FamilyCenterV3Experiment.tsx") /* apexExperiment */;
    const tmp2 = require("../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx")();
    const hasActiveParentLinks = require("../../../parent_tools/hooks/useUserLinks.tsx") /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
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