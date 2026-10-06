// discord_app/modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2687 from "../../../activity_privacy/ActivityPrivacy.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import go_live_GoLiveNotificationUtils from "../../../notifications/go_live/GoLiveNotificationUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2687["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2687.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
