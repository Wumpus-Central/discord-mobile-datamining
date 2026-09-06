// discord_app/modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import FamilyCenterV3Experiment from "../../../parent_tools/FamilyCenterV3Experiment.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useUserLinks from "../../../parent_tools/hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dxlHN2);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["/071J7"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = FamilyCenterV3Experiment.useIsFamilyCenterV3Enabled({
      location: "ScreenDowntimeScheduleSetting",
    });
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserLinks.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
