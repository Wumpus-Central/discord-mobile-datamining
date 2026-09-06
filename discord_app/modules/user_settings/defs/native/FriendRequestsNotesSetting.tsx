// discord_app/modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import HideFriendRequestNotesUtils from "../../../people/HideFriendRequestNotesUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.UVl5Hz);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    return !HideFriendRequestNotesUtils.useHideFriendRequestNotes();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
