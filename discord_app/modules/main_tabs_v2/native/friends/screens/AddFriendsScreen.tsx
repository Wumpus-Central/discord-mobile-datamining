// === Module 16767: AddFriendsScreen ===

// Module 16767 (AddFriendsScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import IncomingRequestRow from "IncomingRequestRow" /* 16769 */;
import ContactSuggestionRow from "ContactSuggestionRow" /* 16771 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7658 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleFindFriends() {
  ContactSyncModalActionCreators.openContactSyncModal({}, constants2.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _handleShare() {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  let obj3 = InstantInviteActionCreatorsDefault;
  await obj3.createFriendInvite(null, constants.ADD_FRIENDS_MODAL);
  const code = value.code;
  obj3 = { channel: null, code, message: null, location: null };
  const intl2 = closure_130_0(closure_130_2[16]).intl;
  obj3.message = intl2.formatToPlainString(closure_130_0(closure_130_2[16]).t.PJf9P9, { link: closure_130_1(closure_130_2[17])(code) });
  obj3.location = closure_130_14.ADD_FRIENDS_MODAL;
  closure_129_0(obj3);
  await "HermesInternal";
  { link: closure_130_1(closure_130_2[17])(code) };
  const intl = closure_130_0(closure_130_2[16]).intl;
  closure_130_0(closure_130_2[15]).presentError(intl.string(closure_130_0(closure_130_2[16]).t.R0RpRX));
  closure_130_0(closure_130_2[15]);
};
function areHydratedGameFriendRequestRowStatesEqual(arr, arg1) {
  dependencyMap = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((user, index) => user.user === dependencyMap[index].user && user.applicationId === dependencyMap[index].applicationId);
    const tmp2 = arr.length === arg1.length && arr.every((user, index) => user.user === dependencyMap[index].user && user.applicationId === dependencyMap[index].applicationId);
  }
  return tmp;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Sections = fn(12699).Sections;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = Constants);
const ContactPermissions = fn(12678).ContactPermissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
fn(4560);
let createStyles = { container: { flex: 1 }, inviteAppsContainerNonSticky: null, inviteAppsContentContainer: null, emptyContainer: null, emptyActionContainer: null, loading: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 };
createStyles.inviteAppsContainerNonSticky = createStyles;
createStyles.inviteAppsContentContainer = { paddingTop: 0, paddingBottom: 0, minWidth: "100%" };
createStyles.emptyContainer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.emptyActionContainer = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let obj2 = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles.loading = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  navigation = navigation.navigation;
  importDefault = navigation.route.params.sourcePage;
  let analyticsLocations;
  _slicedToArray = undefined;
  c4 = undefined;
  noop = undefined;
  c6 = undefined;
  c17 = undefined;
  c18 = undefined;
  friendSuggestions = undefined;
  closure_20 = undefined;
  closure_21 = undefined;
  onItemPressed = undefined;
  let memo1;
  let tmp = closure_20();
  let tmp2 = importDefault;
  let obj = analyticsLocations;
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").ADD_FRIENDS).analyticsLocations;
  let obj1 = noop;
  let tmp3 = require("useAnalyticsLocations");
  [c3, c4] = _slicedToArray(noop.useState([]), 2);
  let tmp5 = _slicedToArray(noop.useState([]), 2);
  [c5, c6] = _slicedToArray(noop.useState([]), 2);
  const tmp7 = _slicedToArray(noop.useState([]), 2);
  const first = tmp7[0];
  let gameRelationshipsByType = tmp7[1];
  const tmp9 = _slicedToArray(noop.useState([]), 2);
  const first1 = tmp9[0];
  closure_10 = tmp9[1];
  closure_11 = noop.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
        return items;
      });
    } else {
      _undefined4((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  closure_12 = noop.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      gameRelationshipsByType((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId, applicationId };
        return items;
      });
    } else {
      _undefined2((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  require("useMountEffect")(() => {
    const obj = { friend_add_type: constants2.FRIENDS_ADD_FRIENDS_MODAL, source_page };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  });
  let items = [navigation];
  const onPress = noop.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  closure_14 = noop.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  let obj2 = navigation(analyticsLocations[25]);
  const items2 = [first1, closure_10];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    const mutableRelationships = RelationshipStore.getMutableRelationships();
    const keys = mutableRelationships.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (RelationshipStore.isUnfilteredPendingIncoming(nextResult)) {
        let user = UserStore.getUser(tmp3);
        let hasItem = null == user;
        let tmp8 = user;
        if (!hasItem) {
          hasItem = _undefined.includes(tmp3);
        }
        if (!hasItem) {
          let arr = items.push(tmp8);
        }
      }
      continue;
    }
    const items1 = [];
    const item = _undefined3.forEach((item) => {
      user = user.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    return _modDef12.unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = source_page(4404).getName(arg0);
      const obj = source_page(4404);
      return name.localeCompare(source_page(4404).getName(arg1));
    });
  });
  let obj3 = navigation(analyticsLocations[25]);
  const items3 = [gameRelationshipsByType, first1, closure_10];
  const items4 = [first1, first];
  const stateFromStores = obj3.useStateFromStores(items3, () => {
    gameRelationshipsByType = gameRelationshipsByType.getGameRelationshipsByType(stateFromStoresArray.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = UserStore.getUser(id);
      let obj = RelationshipStore;
      let someResult = RelationshipStore.isSpam(id) || obj.isBlockedOrIgnored(id);
      if (!someResult) {
        someResult = null == user;
      }
      if (!someResult) {
        someResult = first.some((userId) => userId.userId === id && userId.applicationId === tmp);
      }
      if (!someResult) {
        obj = { user, applicationId };
        items.push(obj);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((userId) => {
      const user = UserStore.getUser(userId.userId);
      if (null != user) {
        const obj = { user, applicationId: userId.applicationId };
        items1.push(obj);
      }
    });
    let obj = source_page(analyticsLocations[26]);
    return source_page(analyticsLocations[26]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = items1(4404).getName(user.user);
      const obj = items1(4404);
      return name.localeCompare(items1(4404).getName(user2.user));
    });
  }, items4, areHydratedGameFriendRequestRowStatesEqual);
  let tmp6 = _slicedToArray(noop.useState([]), 2);
  ({ added: c17, setAdded: c18, friendSuggestions } = require("useSuggestedFriends")());
  let tmp15 = friendSuggestions.length > 0;
  if (tmp15) {
    tmp15 = stateFromStoresArray.length > 3;
  }
  closure_20 = tmp15;
  let tmp16 = friendSuggestions.length > 0;
  if (tmp16) {
    tmp16 = stateFromStores.length > 3;
  }
  closure_21 = tmp16;
  const items5 = [stateFromStores, tmp16];
  const memo = obj1.useMemo(() => {
    if (closure_21) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp5 = stateFromStores[num2];
      if (null != tmp5) {
        let arr = items.push(tmp5.applicationId);
      }
    }
    return items;
  }, items5);
  tmp2(obj[29])(memo);
  let tmp4Result = tmp4(obj1.useState(false), 2);
  importDefault = tmp4Result[1];
  const items6 = [navigation];
  const effect = obj1.useEffect(() => navigation.addListener("transitionEnd", () => {
    source_page(true);
  }), items6);
  closure_129_0 = undefined;
  let tmp13Result = tmp13(obj[18]);
  const contactSyncAccount = tmp13Result.useContactSyncAccount();
  tmp13Result = tmp13(obj[18]);
  const isContactSyncEnabledResult = tmp13Result.isContactSyncEnabled(contactSyncAccount);
  tmp4Result = tmp4(obj1.useState(false), 2);
  [tmp24, closure_129_0] = tmp4Result;
  const effect1 = obj1.useEffect(() => {
    if (obj.isContactSyncAvailable()) {
      const result = ContactSyncUtils.checkContactPermissions();
      result.then((result) => {
        const obj = navigation(analyticsLocations[19]);
        let tmp3 = result === stateFromStores.NOT_DETERMINED;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        closure_1_0(tmp3);
        tmp2 = navigation(analyticsLocations[19]).isAndroid() && result === stateFromStores.UNAUTHORIZED;
      });
      const tmpResult = ContactSyncUtils;
    }
    obj = ContactSyncUtils;
  }, []);
  const tmp14 = require("useSuggestedFriends")();
  let result = navigation(obj[18]).isContactSyncAvailable();
  if (result) {
    let tmp27 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp27 = tmp24;
    }
    result = tmp27;
  }
  onItemPressed = result;
  const items7 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, result, tmp15, tmp16];
  memo1 = obj1.useMemo(() => {
    let num = 1;
    if (c22) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!closure_20) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!closure_21) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items7);
  const callback1 = obj1.useCallback((arg0) => {
    if (friendSuggestions.FIND_FRIENDS !== arg0) {
      if (friendSuggestions.INCOMING_FRIEND_REQUESTS === arg0) {
        const element = { type: "section", props: null };
        let obj = { title: null };
        const intl3 = navigation(analyticsLocations[16]).intl;
        obj.title = intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]);
        element.props = obj;
        return element;
      } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const element1 = { type: "section", props: null };
        obj = { title: null };
        const intl2 = navigation(analyticsLocations[16]).intl;
        obj.title = intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]);
        element1.props = obj;
        return element1;
      } else if (friendSuggestions.CONTACT_SUGGESTIONS === arg0) {
        const element2 = { type: "section", props: null };
        const obj1 = { title: null };
        const intl = navigation(analyticsLocations[16]).intl;
        obj1.title = intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]);
        element2.props = obj1;
        return element2;
      }
    }
  }, []);
  obj = { value: analyticsLocations, children: null };
  const items8 = [c17(tmp2(obj[30]), { absolute: true }), ];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.inviteAppsContainerNonSticky, children: null };
  obj2 = { onItemPressed, contentContainerStyle: tmp.inviteAppsContentContainer };
  obj1.children = c17(tmp2(obj[31]), obj2);
  const items9 = [c17(c6, obj1), ];
  if (!tmp4Result[0]) {
    if (!tmp28) {
      obj3 = { style: tmp.loading, children: tmp32(tmp13(obj[32]).ActivityIndicator, {}) };
      items9[1] = tmp32(tmp33, obj3);
      obj.children = items9;
      items8[1] = tmp31(tmp33, obj);
      obj.children = items8;
      return tmp31(tmp13(obj[20]).AnalyticsLocationProvider, obj);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    let obj4 = { style: tmp.emptyContainer, children: null };
    const obj5 = { style: tmp.emptyActionContainer, children: null };
    const obj6 = { label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null, start: true, end: true };
    let intl = tmp13(obj[16]).intl;
    obj6.label = intl.string(tmp13(obj[16]).t.QzVsOs);
    const obj7 = { IconComponent: tmp13(obj[36]).AtIcon };
    obj6.icon = tmp32(tmp13(obj[34]).TableRow.Icon, obj7);
    obj6.onPress = onPress;
    obj5.children = tmp32(tmp13(obj[34]).TableRow, obj6);
    const items10 = [tmp32(tmp33, obj5), ];
    tmp = null;
    if (result) {
      tmp2 = tmp2(obj[40]);
      obj = {};
      tmp = tmp32(tmp2, obj);
    }
    items10[1] = tmp;
    obj4.children = items10;
    tmp31(first, obj4);
  } else {
    const obj8 = {
      sections: memo1,
      getItemProps(flag2, arg1) {
          const start = tmp;
          const end = tmp2;
          if (friendSuggestions.FIND_FRIENDS === flag2) {
            if (tmp) {
              if (c22) {
                let obj = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          let obj = { start: true, height: "100%", label: null, labelLineClamp: 1, icon: null, trailing: null, onPress: null };
                          const intl = start(user[16]).intl;
                          obj.label = intl.string(start(user[16]).t.j2POVo);
                          obj = { IconComponent: start(user[35]).FriendsIcon };
                          obj.icon = closure_1_17(start(user[34]).TableRow.Icon, obj);
                          obj.trailing = closure_1_17(start(user[34]).TableRow.Arrow, {});
                          obj.onPress = onPress3;
                          return closure_1_17(start(user[34]).TableRow, obj);
                        }
                };
              }
              return obj;
            }
            obj = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  let obj = { start: !closure_1_22, end: true, height: "100%", label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null };
                  const intl = navigation(analyticsLocations[16]).intl;
                  obj.label = intl.string(navigation(analyticsLocations[16]).t.QzVsOs);
                  obj = { IconComponent: navigation(analyticsLocations[36]).AtIcon };
                  obj.icon = c17(navigation(analyticsLocations[34]).TableRow.Icon, obj);
                  obj.onPress = onPress;
                  return c17(navigation(analyticsLocations[34]).TableRow, obj);
                }
            };
          } else if (friendSuggestions.INCOMING_FRIEND_REQUESTS === flag2) {
            if (tmp2) {
              if (closure_20) {
                const obj1 = {
                  type: "custom",
                  itemType: "viewAll",
                  key: "friendRequestsViewAll",
                  component() {
                          let obj = {
                            onPress() {
                              closure_1(closure_2[23]);
                              const obj = { section_id: onAcceptIncomingRequest.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" };
                              obj.track(onDeclineIncomingRequest.FRIEND_FINDER_SECTION_EXPANDED, obj);
                              navigation.navigate("requests");
                            },
                            users: stateFromStoresArray.slice(3),
                            count: stateFromStoresArray.length
                          };
                          return c17(end(analyticsLocations[37]), obj);
                        }
                };
                return obj1;
              }
            }
            let user = tmp15;
            const obj2 = {
              type: "custom",
              itemType: "incomingRequest",
              key: stateFromStoresArray[arg1].id,
              component() {
                  return closure_3_17(IncomingRequestRow.IncomingFriendRequestRow, { accepted: suggestedFriend.includes(user.id), user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
                }
            };
            return obj2;
          } else if (friendSuggestions.INCOMING_GAME_FRIEND_REQUESTS === flag2) {
            if (tmp2) {
              if (onPress3) {
                const obj3 = {
                  type: "custom",
                  itemType: "viewAll",
                  key: "gameFriendRequestsViewAll",
                  component() {
                          const obj = {
                            onPress() {
                              navigation.navigate("requests");
                            },
                            users: null,
                            count: null
                          };
                          const substr = stateFromStores.slice(3);
                          obj.users = substr.map((user) => user.user);
                          obj.count = stateFromStores.length;
                          return c17(end(analyticsLocations[37]), obj);
                        }
                };
                return obj3;
              }
            }
            user = tmp11.user;
            const applicationId = tmp11.applicationId;
            const obj4 = { type: "custom", itemType: "incomingRequest", key: null, component: null };
            const _HermesInternal = HermesInternal;
            obj4.key = "" + user.id + "-" + applicationId;
            obj4.component = function component() {
              return closure_3_17(IncomingRequestRow.ConnectedIncomingGameFriendRequestRow, { accepted: null != first1.find((userId) => userId.userId === id.id && userId.applicationId === tmp), applicationId, user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
            };
            return obj4;
          } else if (friendSuggestions.CONTACT_SUGGESTIONS === flag2) {
            const suggestedFriend = tmp5;
            let mutualFriendsCount;
            if (friendSuggestions[arg1] != null) {
              mutualFriendsCount = tmp5.mutualFriendsCount;
            }
            let str2 = "contactSuggestionNoMutualCount";
            if (null != mutualFriendsCount) {
              let mutualFriendsCount1;
              if (tmp5 != null) {
                mutualFriendsCount1 = tmp5.mutualFriendsCount;
              }
              str2 = "contactSuggestionNoMutualCount";
              if (mutualFriendsCount1 > 0) {
                str2 = "contactSuggestionMutualCount";
              }
            }
            obj = {
              type: "custom",
              itemType: str2,
              key: friendSuggestions[arg1].user.id,
              component() {
                  return closure_3_17(ContactSuggestionRow.ContactSuggestionRow, {
                    added: c17.includes(suggestedFriend),
                    suggestedFriend,
                    start,
                    end,
                    onPress: onPress2,
                    location: constants3.ADD_FRIENDS_MODAL,
                    onAddSuggestion() {
                      return closure_2_18((arg0) => {
                        const items = [];
                        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_5;
                        return items;
                      });
                    }
                  });
                }
            };
            return obj;
          }
        },
      getSectionProps: callback1,
      insetEnd: 12,
      disableStickySections: true
    };
    tmp32(tmp13(obj[33]).UsersFastList, obj8);
  }
};