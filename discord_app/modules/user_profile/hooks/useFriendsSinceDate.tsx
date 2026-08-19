// === Module 9553: useFriendsSinceDate ===

// Module 9553 (useFriendsSinceDate)
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [closure_2];
  const stateFromStores = _require(647).useStateFromStores(items, () => locale.locale);
  const obj = _require(647);
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => {
    let since = null;
    if (closure_1_3.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = closure_1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _require(647);
  return _require(5224).getCreatedAtDate(stateFromStores1, stateFromStores);
};