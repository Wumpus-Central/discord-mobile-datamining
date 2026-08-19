// === Module 15051: toggle ===

// Module 15051 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import apexExperimentDefault from "apexExperiment" /* 13316 */;
import createToggle from "createToggle" /* 10669 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.UVl5Hz);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;