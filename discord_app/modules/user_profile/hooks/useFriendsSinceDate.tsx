import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { officialApplicationIds } from "../../connections/ConnectionsUtils.tsx";
// discord_app/modules/user_profile/hooks/useFriendsSinceDate.tsx
import _getSystemLocale from "_getSystemLocale";
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [_getSystemLocale];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => locale.locale);
  const obj = _defaultAreStatesEqual;
  const items1 = [upsertRelationship];
  const items2 = [userId];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => {
    let since = null;
    if (outer1_3.getRelationshipType(closure_0) === outer1_4.FRIEND) {
      since = outer1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _defaultAreStatesEqual;
  return _officialApplicationIds.getCreatedAtDate(stateFromStores1, stateFromStores);
};