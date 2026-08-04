import _getSystemLocale from "_getSystemLocale";
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [_getSystemLocale];
  const stateFromStores = _require(647).useStateFromStores(items, () => locale.locale);
  const obj = _require(647);
  const items1 = [upsertRelationship];
  const items2 = [userId];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => {
    let since = null;
    if (outer1_3.getRelationshipType(closure_0) === outer1_4.FRIEND) {
      since = outer1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _require(647);
  return _require(5091).getCreatedAtDate(stateFromStores1, stateFromStores);
};