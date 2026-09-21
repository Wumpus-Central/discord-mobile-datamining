// === Module 17233: AddFriendsScreen ===

// Module 17233 (AddFriendsScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8448 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8649 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12929 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12933 */;
import IncomingRequestRow from "IncomingRequestRow" /* 17236 */;
import ContactSuggestionRow from "ContactSuggestionRow" /* 17238 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7894 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

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
  await InstantInviteActionCreatorsDefault.createFriendInvite(null, constants.ADD_FRIENDS_MODAL);
  const code = value.code;
  const obj8 = { channel: null, code, message: null, location: null };
  const intl2 = closure_130_0(closure_130_2[16]).intl;
  obj8.message = intl2.formatToPlainString(closure_130_0(closure_130_2[16]).t.PJf9P9, { link: closure_130_1(closure_130_2[17])(code) });
  obj8.location = closure_130_14.ADD_FRIENDS_MODAL;
  closure_129_0(obj8);
  await "HermesInternal";
  const intl = closure_130_0(closure_130_2[16]).intl;
  closure_130_0(closure_130_2[15]).presentError(intl.string(closure_130_0(closure_130_2[16]).t.R0RpRX));
  { link: closure_130_1(closure_130_2[17])(code) };
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
const Sections = fn(12952).Sections;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = Constants);
const ContactPermissions = fn(12931).ContactPermissions;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
const createStyles = fn(4756);
let obj2 = { container: { flex: 1 }, inviteAppsContainerNonSticky: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 }, inviteAppsContentContainer: { paddingTop: 0, paddingBottom: 0, minWidth: "100%" }, emptyContainer: null, emptyActionContainer: null, loading: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: nativeDefault.space.PX_16 };
obj2.emptyContainer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.emptyActionContainer = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let obj5 = { marginHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.loading = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let closure_20 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  navigation = navigation.navigation;
  importDefault = navigation.route.params.sourcePage;
  let analyticsLocations;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  first = undefined;
  closure_11 = undefined;
  first1 = undefined;
  closure_13 = undefined;
  c20 = undefined;
  c21 = undefined;
  friendSuggestions = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  c25 = undefined;
  let memo1;
  let callback1;
  let tmp = c20();
  let tmp2 = importDefault;
  let obj = analyticsLocations;
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").ADD_FRIENDS).analyticsLocations;
  const tmp4 = require("useScaledRowHeight")();
  _slicedToArray = tmp4;
  let tmp3 = require("useAnalyticsLocations");
  const userRowWithSubLabelHeight = navigation(analyticsLocations[23]).useUserRowWithSubLabelHeight(1);
  let obj2 = navigation(analyticsLocations[23]);
  const userRowWithSubLabelHeight1 = navigation(analyticsLocations[23]).useUserRowWithSubLabelHeight(2);
  let obj3 = navigation(analyticsLocations[23]);
  [c6, c7] = userRowWithSubLabelHeight1.useState([]);
  const tmp9 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  [c8, c9] = userRowWithSubLabelHeight1.useState([]);
  [first, closure_11] = userRowWithSubLabelHeight1.useState([]);
  [first1, closure_13] = userRowWithSubLabelHeight1.useState([]);
  closure_14 = userRowWithSubLabelHeight1.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      closure_13((arg0) => {
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
  constants = userRowWithSubLabelHeight1.useCallback((userId, applicationId) => {
    if (null != applicationId) {
      closure_11((arg0) => {
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
    AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: constants2.FRIENDS_ADD_FRIENDS_MODAL, source_page });
  });
  let items = [navigation];
  const onPress = userRowWithSubLabelHeight1.useCallback(() => {
    navigation.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  closure_17 = userRowWithSubLabelHeight1.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  const tmp10 = _slicedToArray(userRowWithSubLabelHeight1.useState([]), 2);
  const items2 = [c9, first];
  const stateFromStoresArray = navigation(analyticsLocations[27]).useStateFromStoresArray(items2, () => {
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
      const user = first.getUser(item);
      if (null != user) {
        items1.push(user);
      }
    });
    return _modDef12.unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = source_page(4600).getName(arg0);
      const obj = source_page(4600);
      return name.localeCompare(source_page(4600).getName(arg1));
    });
  });
  let obj5 = navigation(analyticsLocations[27]);
  const items3 = [c8, c9, first];
  const items4 = [first1, first];
  const stateFromStores = navigation(analyticsLocations[27]).useStateFromStores(items3, () => {
    const gameRelationshipsByType = _undefined3.getGameRelationshipsByType(constants.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = UserStore.getUser(id);
      let someResult = RelationshipStore.isSpam(id) || RelationshipStore.isBlockedOrIgnored(id);
      if (!someResult) {
        someResult = null == user;
      }
      if (!someResult) {
        someResult = first.some((userId) => userId.userId === id && userId.applicationId === tmp);
      }
      if (!someResult) {
        const obj2 = { user, applicationId };
        items.push(obj2);
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
    let obj = source_page(analyticsLocations[28]);
    return source_page(analyticsLocations[28]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = items1(4600).getName(user.user);
      const obj = items1(4600);
      return name.localeCompare(items1(4600).getName(user2.user));
    });
  }, items4, closure_24);
  let obj6 = navigation(analyticsLocations[27]);
  ({ added: c20, setAdded: c21, friendSuggestions } = require("useSuggestedFriends")());
  let tmp18 = friendSuggestions.length > 0;
  if (tmp18) {
    tmp18 = stateFromStoresArray.length > 3;
  }
  closure_23 = tmp18;
  let tmp19 = friendSuggestions.length > 0;
  if (tmp19) {
    tmp19 = stateFromStores.length > 3;
  }
  closure_24 = tmp19;
  const items5 = [stateFromStores, tmp19];
  const memo = obj4.useMemo(() => {
    if (closure_24) {
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
  tmp2(obj[31])(memo);
  const tmp8Result = _slicedToArray(userRowWithSubLabelHeight1.useState(false), 2);
  importDefault = tmp8Result[1];
  const items6 = [navigation];
  const effect = obj4.useEffect(() => navigation.addListener("transitionEnd", () => {
    source_page(true);
  }), items6);
  closure_129_0 = undefined;
  const tmp17 = require("useSuggestedFriends")();
  const contactSyncAccount = navigation(obj[18]).useContactSyncAccount();
  const tmp5Result = navigation(obj[18]);
  const isContactSyncEnabledResult = navigation(obj[18]).isContactSyncEnabled(contactSyncAccount);
  const tmp5Result3 = navigation(obj[18]);
  [tmp27, closure_129_0] = userRowWithSubLabelHeight1.useState(false);
  const effect1 = obj4.useEffect(() => {
    if (obj.isContactSyncAvailable()) {
      const result = ContactSyncUtils.checkContactPermissions();
      result.then((result) => {
        const obj = navigation(analyticsLocations[19]);
        let tmp3 = result === callback.NOT_DETERMINED;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        closure_1_0(tmp3);
        tmp2 = navigation(analyticsLocations[19]).isAndroid() && result === callback.UNAUTHORIZED;
      });
      const tmpResult = ContactSyncUtils;
    }
    obj = ContactSyncUtils;
  }, []);
  const tmp8Result2 = _slicedToArray(userRowWithSubLabelHeight1.useState(false), 2);
  let result = navigation(obj[18]).isContactSyncAvailable();
  if (result) {
    let tmp30 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp30 = tmp27;
    }
    result = tmp30;
  }
  c25 = result;
  const items7 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, result, tmp18, tmp19];
  memo1 = obj4.useMemo(() => {
    let num = 1;
    if (c25) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!closure_23) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!closure_24) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items7);
  const items8 = [memo1, tmp18, tmp19];
  callback1 = obj4.useCallback((arg0, arg1) => {
    let tmp = arg1 === memo1[arg0] - 1;
    if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
      if (tmp) {
        tmp = closure_23;
      }
      return tmp;
    } else if (tmp2.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
      let tmp3 = tmp;
      if (tmp) {
        tmp3 = closure_24;
      }
      return tmp3;
    } else {
      return false;
    }
  }, items8);
  const items9 = [callback1, tmp4, userRowWithSubLabelHeight, userRowWithSubLabelHeight1, friendSuggestions];
  const callback2 = obj4.useCallback((arg0) => {
    if (stateFromStores.FIND_FRIENDS !== arg0) {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS === arg0) {
        const element = { type: "section", props: null };
        const obj = { title: null };
        const intl3 = navigation(analyticsLocations[16]).intl;
        obj.title = intl3.string(navigation(analyticsLocations[16]).t["93cLE3"]);
        element.props = obj;
        return element;
      } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const element1 = { type: "section", props: null };
        const obj2 = { title: null };
        const intl2 = navigation(analyticsLocations[16]).intl;
        obj2.title = intl2.string(navigation(analyticsLocations[16]).t["0uVuaU"]);
        element1.props = obj2;
        return element1;
      } else if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
        const element2 = { type: "section", props: null };
        const obj3 = { title: null };
        const intl = navigation(analyticsLocations[16]).intl;
        obj3.title = intl.string(navigation(analyticsLocations[16]).t["1uAmCw"]);
        element2.props = obj3;
        return element2;
      }
    }
  }, []);
  const callback3 = obj4.useCallback((arg0, arg1) => {
    if (callback1(arg0, arg1)) {
      return closure_3;
    } else if (stateFromStores.FIND_FRIENDS === arg0) {
      return closure_3;
    } else {
      if (stateFromStores.INCOMING_FRIEND_REQUESTS !== arg0) {
        if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS !== arg0) {
          if (stateFromStores.CONTACT_SUGGESTIONS === arg0) {
            let mutualFriendsCount;
            if (friendSuggestions[arg1] != null) {
              mutualFriendsCount = tmp4.mutualFriendsCount;
            }
            let tmp7 = null != mutualFriendsCount;
            if (tmp7) {
              let mutualFriendsCount1;
              if (tmp4 != null) {
                mutualFriendsCount1 = tmp4.mutualFriendsCount;
              }
              tmp7 = mutualFriendsCount1 > 0;
            }
            return tmp7 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
          } else {
            return closure_3;
          }
        }
      }
      return userRowWithSubLabelHeight;
    }
  }, items9);
  let obj7 = { value: analyticsLocations, children: null };
  const items10 = [closure_17(tmp2(obj[32]), { absolute: true }), ];
  const obj8 = { style: tmp.container, children: null };
  const obj9 = { style: tmp.inviteAppsContainerNonSticky, children: closure_17(tmp2(obj[33]), { onItemPressed: friendSuggestions, contentContainerStyle: tmp.inviteAppsContentContainer }) };
  const items11 = [closure_17(c6, obj9), ];
  if (!tmp8Result[0]) {
    if (!tmp31) {
      const obj11 = { style: tmp.loading, children: tmp37(tmp5(obj[34]).ActivityIndicator, {}) };
      items11[1] = tmp37(tmp38, obj11);
      obj8.children = items11;
      items10[1] = tmp36(tmp38, obj8);
      obj7.children = items10;
      return tmp36(tmp5(obj[20]).AnalyticsLocationProvider, obj7);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    const obj12 = { style: tmp.emptyContainer, children: null };
    const obj13 = { style: tmp.emptyActionContainer, children: null };
    const obj14 = { label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null, start: true, end: true };
    let intl = tmp5(obj[16]).intl;
    obj14.label = intl.string(tmp5(obj[16]).t.QzVsOs);
    const obj15 = { IconComponent: tmp5(obj[38]).AtIcon };
    obj14.icon = tmp37(tmp5(obj[36]).TableRow.Icon, obj15);
    obj14.onPress = onPress;
    obj13.children = tmp37(tmp5(obj[36]).TableRow, obj14);
    const items12 = [tmp37(tmp38, obj13), ];
    tmp = null;
    if (result) {
      tmp2 = tmp2(obj[42]);
      obj = {};
      tmp = tmp37(tmp2, obj);
    }
    items12[1] = tmp;
    obj12.children = items12;
    tmp36(c7, obj12);
  } else {
    const obj16 = {
      sections: memo1,
      getItemProps(flag2, arg1) {
          const start = tmp;
          const end = arg1 === memo1[flag2] - 1;
          if (stateFromStores.FIND_FRIENDS === flag2) {
            if (tmp) {
              if (c25) {
                const obj2 = {
                  type: "custom",
                  itemType: "showContactSyncCTA",
                  key: "showContactSyncCTA",
                  component() {
                          const obj = { start: true, height: "100%", label: null, labelLineClamp: 1, icon: null, trailing: null, onPress: null };
                          const intl = start(user[16]).intl;
                          obj.label = intl.string(start(user[16]).t.j2POVo);
                          obj.icon = onPress2(start(user[36]).TableRow.Icon, { IconComponent: start(user[37]).FriendsIcon });
                          obj.trailing = onPress2(start(user[36]).TableRow.Arrow, {});
                          obj.onPress = onPress3;
                          return onPress2(start(user[36]).TableRow, obj);
                        }
                };
                let obj3 = obj2;
              }
              return obj3;
            }
            obj3 = {
              type: "custom",
              itemType: "addByUsername",
              key: "addByUsername",
              component() {
                  const obj = { start: !closure_1_25, end: true, height: "100%", label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null };
                  const intl = navigation(analyticsLocations[16]).intl;
                  obj.label = intl.string(navigation(analyticsLocations[16]).t.QzVsOs);
                  obj.icon = onPress2(navigation(analyticsLocations[36]).TableRow.Icon, { IconComponent: navigation(analyticsLocations[38]).AtIcon });
                  obj.onPress = onPress;
                  return onPress2(navigation(analyticsLocations[36]).TableRow, obj);
                }
            };
          } else if (stateFromStores.INCOMING_FRIEND_REQUESTS === flag2) {
            if (callback1(flag2, arg1)) {
              const obj4 = {
                type: "custom",
                itemType: "viewAll",
                key: "friendRequestsViewAll",
                component() {
                      const obj = {
                        onPress() {
                          closure_1(closure_2[25]).track(constants2.FRIEND_FINDER_SECTION_EXPANDED, { section_id: constants.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" });
                          navigation.navigate("requests");
                        },
                        users: stateFromStoresArray.slice(3),
                        count: stateFromStoresArray.length
                      };
                      return onPress2(end(analyticsLocations[39]), obj);
                    }
              };
              return obj4;
            } else {
              let user = tmp15;
              const obj5 = {
                type: "custom",
                itemType: "incomingRequest",
                key: stateFromStoresArray[arg1].id,
                component() {
                      return closure_3_17(IncomingRequestRow.IncomingFriendRequestRow, { accepted: c8.includes(user.id), user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
                    }
              };
              return obj5;
            }
          } else if (stateFromStores.INCOMING_GAME_FRIEND_REQUESTS === flag2) {
            if (callback1(flag2, arg1)) {
              const obj6 = {
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
                      return onPress2(end(analyticsLocations[39]), obj);
                    }
              };
              return obj6;
            } else {
              user = tmp11.user;
              const applicationId = tmp11.applicationId;
              const obj7 = { type: "custom", itemType: "incomingRequest", key: null, component: null };
              const _HermesInternal = HermesInternal;
              obj7.key = "" + user.id + "-" + applicationId;
              obj7.component = function component() {
                return closure_3_17(IncomingRequestRow.ConnectedIncomingGameFriendRequestRow, { accepted: null != first1.find((userId) => userId.userId === id.id && userId.applicationId === tmp), applicationId, user, start, end, onPress: onPress2, onDeclineIncomingRequest, onAcceptIncomingRequest });
              };
              return obj7;
            }
          } else if (stateFromStores.CONTACT_SUGGESTIONS === flag2) {
            const suggestedFriend = tmp4;
            let mutualFriendsCount;
            if (friendSuggestions[arg1] != null) {
              mutualFriendsCount = tmp4.mutualFriendsCount;
            }
            let tmp7 = null != mutualFriendsCount;
            if (tmp7) {
              let mutualFriendsCount1;
              if (tmp4 != null) {
                mutualFriendsCount1 = tmp4.mutualFriendsCount;
              }
              tmp7 = mutualFriendsCount1 > 0;
            }
            let str = "contactSuggestionNoMutualCount";
            if (tmp7) {
              str = "contactSuggestionMutualCount";
            }
            let obj = {
              type: "custom",
              itemType: str,
              key: friendSuggestions[arg1].user.id,
              component() {
                  return closure_3_17(ContactSuggestionRow.ContactSuggestionRow, {
                    added: c20.includes(suggestedFriend),
                    suggestedFriend,
                    start,
                    end,
                    onPress: onPress2,
                    location: constants3.ADD_FRIENDS_MODAL,
                    onAddSuggestion() {
                      return onPress3((arg0) => {
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
      getSectionProps: callback2,
      getItemSize: callback3,
      insetEnd: 12,
      disableStickySections: true
    };
    tmp37(tmp5(obj[35]).UsersFastList, obj16);
  }
};