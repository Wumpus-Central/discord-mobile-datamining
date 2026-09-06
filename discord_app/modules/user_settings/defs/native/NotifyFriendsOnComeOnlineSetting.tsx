// discord_app/modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import _modDef2562 from "../../../activity_privacy/ActivityPrivacy.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FriendOnlineNotificationUtils from "../../../notifications/friend_online/FriendOnlineNotificationUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2562.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2562.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
