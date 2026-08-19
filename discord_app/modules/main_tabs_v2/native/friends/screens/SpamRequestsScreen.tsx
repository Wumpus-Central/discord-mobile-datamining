// discord_app/modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import markAllUserIdListsStale from "../../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { UserRowModes } from "../../shared_components/user_list/UserRowConstants.tsx";
import { RelationshipTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default function SpamRequestsScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let callback;
  const analyticsLocations = stateFromStoresArray(stateFromStoresArray1[6])(stateFromStoresArray(stateFromStoresArray1[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStoresArray1[8]);
  const items = [closure_4];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStoresArray1[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds);
  obj = { name: null };
  const tmp = stateFromStoresArray1;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1[6]);
  const tmp3 = analyticsLocations;
  obj[0] = analyticsLocations(stateFromStoresArray1[11]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX;
  stateFromStoresArray(stateFromStoresArray1[10])(obj);
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[10]);
  const items1 = [closure_5];
  const items2 = [stateFromStoresArray];
  stateFromStoresArray1 = analyticsLocations(stateFromStoresArray1[8]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item, index) => user.getUser(item));
    return mapped.filter((item, index) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  callback = callback.useCallback((id) => {
    stateFromStoresArray(stateFromStoresArray1[12])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [callback, stateFromStoresArray1];
  const callback1 = callback.useCallback(() => {

  }, []);
  if (0 !== stateFromStoresArray1.length) {
    obj = { getItemProps: null, getSectionProps: null, sections: null };
    obj[0] = tmp9;
    obj[1] = callback1;
    const items5 = [stateFromStoresArray1.length];
    obj[2] = items5;
    return jsx(tmp3(tmp[13]).UsersFastList, { getItemProps: null, getSectionProps: null, sections: null });
  } else {
    navigation.goBack();
  }
  const obj3 = analyticsLocations(stateFromStoresArray1[8]);
};