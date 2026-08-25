// === Module 9685: useFriendsSinceDate ===

// Module 9685 (useFriendsSinceDate)
import closure_2 from "_getSystemLocale" /* 1996 */;
import closure_3 from "markAllUserIdListsStale" /* 4034 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [closure_2];
  const stateFromStores = _require(647).useStateFromStores(items, () => locale.locale);
  const obj = _require(647);
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => {
    let since = null;
    if (closure_1_3.getRelationshipType(closure_0) === closure_1_4.FRIEND) {
      since = closure_1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _require(647);
  return _require(5232).getCreatedAtDate(stateFromStores1, stateFromStores);
};