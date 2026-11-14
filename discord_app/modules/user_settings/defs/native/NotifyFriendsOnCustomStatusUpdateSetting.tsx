// discord_app/modules/user_settings/defs/native/NotifyFriendsOnCustomStatusUpdateSetting.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2869 from "../../../activity_privacy/ActivityPrivacy.messages.js";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import NotifyFriendsOnCustomStatusUpdateUtils from "../../../notifications/custom_status/NotifyFriendsOnCustomStatusUpdateUtils.tsx";
import NotifyFriendsOnCustomStatusUpdateExperiment from "../../../notifications/custom_status/NotifyFriendsOnCustomStatusUpdateExperiment.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2869.AOUyrx);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2869.bZ094C);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnCustomStatusUpdate.useSetting,
  onValueChange: NotifyFriendsOnCustomStatusUpdateUtils.onNotifyFriendsOnCustomStatusUpdateSettingsChanged,
  usePredicate() {
    return NotifyFriendsOnCustomStatusUpdateExperiment.useNotifyFriendsOnCustomStatusUpdateExperiment(
      "NotifyFriendsOnCustomStatusUpdateSetting",
    );
  },
});
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/NotifyFriendsOnCustomStatusUpdateSetting.tsx",
);

export default toggle;
