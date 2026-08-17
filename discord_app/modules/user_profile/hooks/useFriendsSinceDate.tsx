// discord_app/modules/user_profile/hooks/useFriendsSinceDate.tsx
import closure_2 from "../../user_settings/LocaleStore.tsx";
import closure_3 from "../../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../../Constants.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { officialApplicationIds } from "../../connections/ConnectionsUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = function useFriendsSinceDate(userId) {
  const _require = userId;
  const items = [closure_2];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => locale.locale);
  const obj = _defaultAreStatesEqual;
  const items1 = [closure_3];
  const items2 = [userId];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => {
    let since = null;
    if (closure_1_3.getRelationshipType(closure_0) === closure_1_4.FRIEND) {
      since = closure_1_3.getSince(closure_0);
    }
    return since;
  }, items2);
  const obj2 = _defaultAreStatesEqual;
  return _officialApplicationIds.getCreatedAtDate(stateFromStores1, stateFromStores);
};