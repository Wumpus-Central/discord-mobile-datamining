// === Module 13121: HideFriendRequestNotesUtils ===

// Module 13121 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 1935 */;
import useUserIsTeen from "useUserIsTeen" /* 8644 */;
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