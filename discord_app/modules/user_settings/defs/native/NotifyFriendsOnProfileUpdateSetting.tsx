// discord_app/modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2594 from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import NotifyFriendsOnProfileUpdateUtils from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2594.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2594["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
