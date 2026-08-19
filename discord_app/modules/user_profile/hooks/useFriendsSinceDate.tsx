// discord_app/modules/user_profile/hooks/useFriendsSinceDate.tsx
import _getSystemLocale from "../../user_settings/LocaleStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [closure_2];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => locale.locale);
  const obj = defaultAreStatesEqual;
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => {
    let since = null;
    if (closure_1_3.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = closure_1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = defaultAreStatesEqual;
  return require("../../connections/ConnectionsUtils.tsx").getCreatedAtDate(stateFromStores1, stateFromStores);
};