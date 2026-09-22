// === Module 13433: HideFriendRequestNotesUtils ===

// Module 13433 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2020 */;
import useUserIsTeen from "useUserIsTeen" /* 8927 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};