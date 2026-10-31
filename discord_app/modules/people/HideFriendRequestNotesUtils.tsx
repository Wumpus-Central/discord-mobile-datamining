// === Module 15012: HideFriendRequestNotesUtils ===

// Module 15012 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 4839 */;
import useUserIsTeen from "useUserIsTeen" /* 8368 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
}
export function useFriendRequestNote(arg0) {
  _require = arg0;
  const HideFriendRequestNotes = require("UserSettings").HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = require("useUserIsTeen").useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  const obj = require("useUserIsTeen");
  const items = [RelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.getNote(closure_0));
  let tmp6 = null;
  if (!userIsTeen) {
    tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if ("" !== stateFromStores) {
        tmp6 = stateFromStores;
      }
    }
  }
  return tmp6;
}