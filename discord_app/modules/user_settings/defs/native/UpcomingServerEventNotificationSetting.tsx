// discord_app/modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import UpcomingServerEventExperiment from "../../../notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx";
import UpcomingServerEventNotificationUtils from "../../../notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MCVmjA);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.R0VpSW);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: UpcomingServerEventNotificationUtils.onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: () =>
    UpcomingServerEventExperiment.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle,
});
const result1 = size.fileFinishedImporting(
  "modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx",
);

export default toggle;
