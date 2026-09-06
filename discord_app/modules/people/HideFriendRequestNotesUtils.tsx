// discord_app/modules/people/HideFriendRequestNotesUtils.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import useUserIsTeen from "../self_mod/hooks/useUserIsTeen.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
