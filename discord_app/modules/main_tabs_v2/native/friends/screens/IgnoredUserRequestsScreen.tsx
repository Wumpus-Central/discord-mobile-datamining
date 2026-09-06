// === Module 16781: IgnoredUserRequestsScreen ===

// Module 16781 (IgnoredUserRequestsScreen)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const UserRowModes = fn(10860).UserRowModes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/IgnoredUserRequestsScreen.tsx");

export default function IgnoredUserRequestsScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStores;
  let onPress;
  const analyticsLocations = stateFromStoresArray(stateFromStores[6])(stateFromStoresArray(stateFromStores[7]).FRIEND_REQUESTS).analyticsLocations;
  let obj = analyticsLocations(stateFromStores[8]);
  const items = [RelationshipStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => analyticsLocations(stateFromStores[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).ignoredUserIds);
  const tmp = stateFromStores;
  const tmp2 = stateFromStoresArray(stateFromStores[6]);
  const tmp3 = analyticsLocations;
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  stateFromStores = analyticsLocations(stateFromStores[8]).useStateFromStores(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [onPress, stateFromStores];
  const callback1 = onPress.useCallback(() => {

  }, []);
  if (0 !== stateFromStores.length) {
    obj = { getItemProps: tmp7, getSectionProps: callback1, sections: null };
    const items5 = [stateFromStores.length];
    obj.sections = items5;
    return jsx(tmp3(tmp[11]).UsersFastList, { getItemProps: tmp7, getSectionProps: callback1, sections: null });
  } else {
    navigation.goBack();
  }
  const obj2 = analyticsLocations(stateFromStores[8]);
};