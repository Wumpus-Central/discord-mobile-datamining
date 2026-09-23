// === Module 13515: HideFriendRequestNotesUtils ===

// Module 13515 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2020 */;
import useUserIsTeen from "useUserIsTeen" /* 8998 */;
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