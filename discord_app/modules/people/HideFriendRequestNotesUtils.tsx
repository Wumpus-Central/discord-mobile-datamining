// === Module 12972: HideFriendRequestNotesUtils ===

// Module 12972 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 2028 */;
import useUserIsTeen from "useUserIsTeen" /* 8327 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;

const require = globalThis.__r;

require = fn;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
}) : (() => {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
});
let closure_3 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = tmp2;
export const useFriendRequestNote = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  const obj = require("c");
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return RelationshipStore.getNote(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmp4 = closure_3();
  const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
  let tmp9 = null;
  if (!tmp4) {
    tmp9 = null;
    if (null != stateFromStores) {
      tmp9 = null;
      if ("" !== stateFromStores) {
        tmp9 = stateFromStores;
      }
    }
  }
  return tmp9;
}) : ((arg0) => {
  _require = arg0;
  const tmp = closure_3();
  const items = [RelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.getNote(closure_0));
  let tmp3 = null;
  if (!tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = null;
      if ("" !== stateFromStores) {
        tmp3 = stateFromStores;
      }
    }
  }
  return tmp3;
});