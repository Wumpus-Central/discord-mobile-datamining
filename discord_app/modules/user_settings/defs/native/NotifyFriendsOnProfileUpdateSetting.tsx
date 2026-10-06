// discord_app/modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2719 from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import NotifyFriendsOnProfileUpdateUtils from "../../../notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2719.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2719["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
