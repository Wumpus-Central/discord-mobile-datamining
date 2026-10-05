// discord_app/modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useUserLinks from "../../../parent_tools/hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
      const obj = useUserLinks;
      if (hasActiveParentLinks) {
        hasActiveParentLinks = obj.useHasActiveParentLinks();
      }
      return hasActiveParentLinks;
    }
  : () => {
      let hasActiveParentLinks = useUserIsTeenAgeGroupDefault();
      const obj = useUserLinks;
      if (hasActiveParentLinks) {
        hasActiveParentLinks = obj.useHasActiveParentLinks();
      }
      return hasActiveParentLinks;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.dxlHN2);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/071J7"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = UserSettings.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate: tmp2,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
