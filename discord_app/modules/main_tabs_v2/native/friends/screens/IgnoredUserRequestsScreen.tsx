// discord_app/modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import markAllUserIdListsStale from "../../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { UserRowModes } from "../../shared_components/user_list/UserRowConstants.tsx";
import { RelationshipTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default function IgnoredUserRequestsScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStores;
  let callback;
  const analyticsLocations = stateFromStoresArray(stateFromStores[6])(stateFromStoresArray(stateFromStores[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStores[8]);
  const items = [closure_4];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStores[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds);
  const tmp = stateFromStores;
  const tmp2 = stateFromStoresArray(stateFromStores[6]);
  const tmp3 = analyticsLocations;
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  stateFromStores = analyticsLocations(stateFromStores[8]).useStateFromStores(items1, () => {
    const mapped = stateFromStoresArray.map((item, index) => user.getUser(item));
    return mapped.filter((item, index) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  callback = callback.useCallback((id) => {
    stateFromStoresArray(stateFromStores[10])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [callback, stateFromStores];
  const callback1 = callback.useCallback(() => {

  }, []);
  if (0 !== stateFromStores.length) {
    obj = { getItemProps: null, getSectionProps: null, sections: null };
    obj[0] = tmp7;
    obj[1] = callback1;
    const items5 = [stateFromStores.length];
    obj[2] = items5;
    return jsx(tmp3(tmp[11]).UsersFastList, { getItemProps: null, getSectionProps: null, sections: null });
  } else {
    navigation.goBack();
  }
  const obj2 = analyticsLocations(stateFromStores[8]);
};