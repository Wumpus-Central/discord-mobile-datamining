// === Module 17028: SpamRequestsScreen ===

// Module 17028 (SpamRequestsScreen)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8327 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const UserRowModes = fn(11014).UserRowModes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx");

export default function SpamRequestsScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let onPress;
  const analyticsLocations = stateFromStoresArray(stateFromStoresArray1[6])(stateFromStoresArray(stateFromStoresArray1[7]).FRIEND_REQUESTS).analyticsLocations;
  const tmp = stateFromStoresArray1;
  const tmp2 = stateFromStoresArray(stateFromStoresArray1[6]);
  const tmp3 = analyticsLocations;
  const items = [RelationshipStore];
  stateFromStoresArray = analyticsLocations(stateFromStoresArray1[8]).useStateFromStoresArray(items, () => analyticsLocations(stateFromStoresArray1[9]).getPendingRelationshipIds(mutableRelationships.getMutableRelationships()).spamIds);
  const obj2 = { name: null };
  const obj = analyticsLocations(stateFromStoresArray1[8]);
  obj2.name = analyticsLocations(stateFromStoresArray1[11]).ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX;
  stateFromStoresArray(stateFromStoresArray1[10])(obj2);
  const tmp5 = stateFromStoresArray(stateFromStoresArray1[10]);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  stateFromStoresArray1 = analyticsLocations(stateFromStoresArray1[8]).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items2);
  const items3 = [analyticsLocations];
  onPress = onPress.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const items4 = [onPress, stateFromStoresArray1];
  const callback1 = onPress.useCallback(() => {

  }, []);
  if (0 !== stateFromStoresArray1.length) {
    const obj4 = { getItemProps: tmp9, getSectionProps: callback1, sections: null };
    const items5 = [stateFromStoresArray1.length];
    obj4.sections = items5;
    return jsx(tmp3(tmp[13]).UsersFastList, { getItemProps: tmp9, getSectionProps: callback1, sections: null });
  } else {
    navigation.goBack();
  }
  const obj3 = analyticsLocations(stateFromStoresArray1[8]);
};