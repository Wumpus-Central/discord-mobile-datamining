// === Module 12897: HideFriendRequestNotesUtils ===

// Module 12897 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2021 */;
import useUserIsTeen from "useUserIsTeen" /* 8290 */;
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