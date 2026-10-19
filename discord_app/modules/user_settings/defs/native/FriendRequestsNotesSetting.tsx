// === Module 17046: FriendRequestsNotesSetting ===

// Module 17046 (FriendRequestsNotesSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 14234 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

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
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;