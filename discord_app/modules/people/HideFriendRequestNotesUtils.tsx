// discord_app/modules/people/HideFriendRequestNotesUtils.tsx
import set from "../../../_runtime/00002_set.js";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import useUserIsTeen from "../self_mod/hooks/useUserIsTeen.tsx";

const result = set.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
