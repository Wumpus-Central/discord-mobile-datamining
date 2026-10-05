// discord_app/modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useUserLinks from "../../../parent_tools/hooks/useUserLinks.tsx";
import useUserIsTeenAgeGroupDefault from "../../../parent_tools/hooks/useUserIsTeenAgeGroup.tsx";
import NotificationActionCreatorsDefault from "../../../../actions/NotificationActionCreators.tsx";
import NotificationSettingsStore from "../../../../stores/NotificationSettingsStore.tsx";
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
    return intl.string(intl2.t.z6tZKH);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.TummoQ);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [NotificationSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => NotificationSettingsStore.screenDowntimeReminder);
  },
  onValueChange(screen_downtime_reminder) {
    const obj = NotificationActionCreatorsDefault;
    return obj.setScreenDowntimeReminder(screen_downtime_reminder);
  },
  usePredicate: tmp2,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
