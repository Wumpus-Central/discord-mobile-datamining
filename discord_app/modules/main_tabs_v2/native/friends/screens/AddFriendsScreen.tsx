// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx
import ActivityIndicator from "ActivityIndicator";
import upsertRelationship from "upsertRelationship";
import set from "set";
import get_ActivityIndicator from "getInviteURL";
import recountRelationshipTypes from "recountRelationshipTypes";
import closure_9 from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Sections } from "SuggestedFriendSource";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "QUICK_SWITCHER";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_6;
let error;
let map1;
const require = arg1;
function handleFindFriends() {
  require(11943) /* handleNameInputScreenOrSuggestions */.openContactSyncModal({}, constants.FRIENDS_ADD_FRIENDS_MODAL);
}
function handleShare() {
  const self = this;
  const apply = _handleShare.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleShare() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, code) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw code;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = code;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw code;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = code;
              return obj;
            } else {
              const dependencyMap = tmp3;
              code = tmp7;
              code = undefined;
              let c4 = 1;
              let obj3 = outer1_1(outer1_2[14]);
              c5 = 2;
              c6 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = obj3.createFriendInvite(null, outer1_14.ADD_FRIENDS_MODAL);
              return obj1;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            obj1 = callback(3985);
            const intl = callback(1236).intl;
            obj1.presentError(intl.string(callback(1236).t.R0RpRX));
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw code;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = code;
            return obj;
          } else {
            code = code.code;
            c4 = 0;
            obj3 = { channel: null, code: null, message: null, location: null };
            obj3[1] = code;
            const intl2 = callback(1236).intl;
            const obj4 = { link: null };
            obj4[0] = code(7138)(code);
            obj3[2] = intl2.formatToPlainString(callback(1236).t.PJf9P9, obj4);
            obj3[3] = constants.ADD_FRIENDS_MODAL;
            callback(obj3);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          let ActivityIndicator = tmp21;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _handleShare = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function areHydratedGameFriendRequestRowStatesEqual(arr) {
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((user) => user.user === table[arg1].user && user.applicationId === table[arg1].applicationId);
    const tmp2 = arr.length === arg1.length && arr.every((user) => user.user === table[arg1].user && user.applicationId === table[arg1].applicationId);
  }
  return tmp;
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, AnalyticsSections: map1, InstantInviteSources: closure_14, RelationshipTypes: closure_15 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { FIND_FRIENDS: 0, [0]: "FIND_FRIENDS", INCOMING_FRIEND_REQUESTS: 1, [1]: "INCOMING_FRIEND_REQUESTS", INCOMING_GAME_FRIEND_REQUESTS: 2, [2]: "INCOMING_GAME_FRIEND_REQUESTS", CONTACT_SUGGESTIONS: 3, [3]: "CONTACT_SUGGESTIONS" };
createCacheKey = { container: { flex: 1 }, inviteAppsContainerNonSticky: null, inviteAppsContentContainer: null, emptyContainer: null, emptyActionContainer: null, loading: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingVertical: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingTop: 0, paddingBottom: 0, minWidth: "100%" };
createCacheKey[3] = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { marginHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
let obj2 = { marginHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, justifyContent: "center", flex: 1 };
let result = require("noop").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx");

export default function AddFriendsScreen(navigation) {
  let c0;
  let c17;
  let c18;
  let c3;
  let c4;
  let c5;
  let c6;
  let friendSuggestions;
  let tmp24;
  navigation = navigation.navigation;
  let _require = navigation;
  let importDefault = navigation.route.params.sourcePage;
  let analyticsLocations;
  let callback;
  c4 = undefined;
  let React;
  c6 = undefined;
  let first;
  let recountRelationshipTypes;
  let first1;
  let mergeGuildAvatar;
  let closure_11;
  let closure_12;
  callback = undefined;
  let closure_14;
  let stateFromStoresArray;
  let stateFromStores;
  let callback3;
  c18 = undefined;
  friendSuggestions = undefined;
  let createCacheKey;
  let c21;
  let c22;
  let memo1;
  let tmp = createCacheKey();
  let tmp2 = importDefault;
  let obj = analyticsLocations;
  analyticsLocations = importDefault(analyticsLocations[20])(importDefault(analyticsLocations[21]).ADD_FRIENDS).analyticsLocations;
  let obj1 = React;
  let tmp3 = importDefault(analyticsLocations[20]);
  [c3, c4] = callback(React.useState([]), 2);
  let tmp5 = callback(React.useState([]), 2);
  [c5, c6] = callback(React.useState([]), 2);
  const tmp7 = callback(React.useState([]), 2);
  first = tmp7[0];
  recountRelationshipTypes = tmp7[1];
  const tmp9 = callback(React.useState([]), 2);
  first1 = tmp9[0];
  mergeGuildAvatar = tmp9[1];
  closure_11 = React.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      user((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId: closure_0, applicationId: closure_1 };
        return items;
      });
    } else {
      _undefined5((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  closure_12 = React.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null != arg1) {
      gameRelationshipsByType((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = { userId: closure_0, applicationId: closure_1 };
        return items;
      });
    } else {
      _undefined3((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }, []);
  importDefault(analyticsLocations[22])(() => {
    let obj = callback(analyticsLocations[23]);
    obj = { friend_add_type: callback.FRIENDS_ADD_FRIENDS_MODAL, source_page: callback };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  });
  let items = [navigation];
  callback = React.useCallback(() => {
    _undefined.navigate("username-search");
  }, items);
  let items1 = [analyticsLocations];
  closure_14 = React.useCallback((id) => {
    callback(analyticsLocations[24])({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations, location: "Add Friends Modal User Profile" });
  }, items1);
  let obj2 = _require(analyticsLocations[25]);
  const items2 = [first1, mergeGuildAvatar];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    const mutableRelationships = first1.getMutableRelationships();
    const keys = mutableRelationships.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = first1;
      if (first1.isUnfilteredPendingIncoming(nextResult)) {
        let tmp5 = user;
        let tmp6 = nextResult;
        user = user.getUser(tmp3);
        let hasItem = null == user;
        let tmp8 = user;
        if (!hasItem) {
          let tmp10 = _undefined2;
          let tmp11 = nextResult;
          hasItem = _undefined2.includes(tmp3);
        }
        if (!hasItem) {
          let tmp12 = user;
          let arr = items.push(tmp8);
        }
      }
      continue;
    }
    const items1 = [];
    const item = _undefined4.forEach((arg0) => {
      const user = outer1_10.getUser(arg0);
      if (null != user) {
        items1.push(user);
      }
    });
    const obj2 = callback(analyticsLocations[26]);
    return callback(analyticsLocations[26]).unionBy(items1, items, (id) => id.id).sort((arg0, arg1) => {
      const name = callback(4124).getName(arg0);
      const obj = callback(4124);
      return name.localeCompare(callback(4124).getName(arg1));
    });
  });
  let obj3 = _require(analyticsLocations[25]);
  const items3 = [recountRelationshipTypes, first1, mergeGuildAvatar];
  const items4 = [first1, first];
  stateFromStores = obj3.useStateFromStores(items3, () => {
    gameRelationshipsByType = gameRelationshipsByType.getGameRelationshipsByType(stateFromStoresArray.PENDING_INCOMING);
    const items = [];
    const item = gameRelationshipsByType.forEach((id) => {
      id = id.id;
      const applicationId = id.applicationId;
      const user = authStore.getUser(id);
      let obj = first1;
      let someResult = first1.isSpam(id) || obj.isBlockedOrIgnored(id);
      if (!someResult) {
        someResult = null == user;
      }
      if (!someResult) {
        someResult = outer1_7.some((userId) => userId.userId === id && userId.applicationId === tmp);
      }
      if (!someResult) {
        obj = { user: null, applicationId: null };
        obj[0] = user;
        obj[1] = applicationId;
        id.push(obj);
      }
    });
    const items1 = [];
    const item1 = first1.forEach((userId) => {
      const user = authStore.getUser(userId.userId);
      if (null != user) {
        const obj = { user: null, applicationId: null };
        obj[0] = user;
        obj[1] = userId.applicationId;
        items1.push(obj);
      }
    });
    let obj = callback(analyticsLocations[26]);
    return callback(analyticsLocations[26]).unionBy(items1, items, (user) => user.user.id).sort((user, user2) => {
      const name = items1(4124).getName(user.user);
      const obj = items1(4124);
      return name.localeCompare(items1(4124).getName(user2.user));
    });
  }, items4, areHydratedGameFriendRequestRowStatesEqual);
  let tmp6 = callback(React.useState([]), 2);
  ({ added: c17, setAdded: c18, friendSuggestions } = importDefault(analyticsLocations[28])());
  let tmp15 = friendSuggestions.length > 0;
  if (tmp15) {
    tmp15 = stateFromStoresArray.length > 3;
  }
  createCacheKey = tmp15;
  let tmp16 = friendSuggestions.length > 0;
  if (tmp16) {
    tmp16 = stateFromStores.length > 3;
  }
  c21 = tmp16;
  const items5 = [stateFromStores, tmp16];
  const memo = obj1.useMemo(() => {
    if (c21) {
      const _Math = Math;
      let length = Math.min(stateFromStores.length, 3);
    } else {
      length = stateFromStores.length;
    }
    const items = [];
    for (let num2 = 0; num2 < length; num2 = num2 + 1) {
      let tmp4 = stateFromStores;
      let tmp5 = stateFromStores[num2];
      let tmp6 = num2;
      if (null != tmp5) {
        let arr = items.push(tmp5.applicationId);
      }
    }
    return items;
  }, items5);
  tmp2(obj[29])(memo);
  _require = navigation;
  importDefault = undefined;
  let tmp4Result = tmp4(obj1.useState(false), 2);
  importDefault = tmp4Result[1];
  const items6 = [navigation];
  const effect = obj1.useEffect(() => _undefined.addListener("transitionEnd", () => {
    callback(true);
  }), items6);
  _require = undefined;
  let tmp13Result = tmp13(obj[18]);
  const contactSyncAccount = tmp13Result.useContactSyncAccount();
  tmp13Result = tmp13(obj[18]);
  const isContactSyncEnabledResult = tmp13Result.isContactSyncEnabled(contactSyncAccount);
  tmp4Result = tmp4(obj1.useState(false), 2);
  [tmp24, c0] = tmp4Result;
  const effect1 = obj1.useEffect(() => {
    if (obj.isContactSyncAvailable()) {
      const result = _undefined(analyticsLocations[18]).checkContactPermissions();
      result.then((arg0) => {
        const obj = outer1_0(outer1_2[19]);
        const tmp = outer1_16;
        let tmp3 = arg0 === outer1_16.NOT_DETERMINED;
        if (!tmp3) {
          tmp3 = tmp2;
        }
        closure_0(tmp3);
      });
      const tmpResult = _undefined(analyticsLocations[18]);
    }
  }, []);
  const tmp14 = importDefault(analyticsLocations[28])();
  let result = _require(obj[18]).isContactSyncAvailable();
  if (result) {
    let tmp27 = !isContactSyncEnabledResult;
    if (isContactSyncEnabledResult) {
      tmp27 = tmp24;
    }
    result = tmp27;
  }
  c22 = result;
  const items7 = [stateFromStoresArray.length, friendSuggestions.length, stateFromStores.length, result, tmp15, tmp16];
  memo1 = obj1.useMemo(() => {
    let num = 1;
    if (c22) {
      num = 2;
    }
    const items = [num, , , ];
    let num2 = 4;
    let num3 = 4;
    if (!c20) {
      num3 = stateFromStoresArray.length;
    }
    items[1] = num3;
    if (!c21) {
      num2 = stateFromStores.length;
    }
    items[2] = num2;
    items[3] = friendSuggestions.length;
    return items;
  }, items7);
  const callback1 = obj1.useCallback((arg0) => {
    if (friendSuggestions.FIND_FRIENDS !== arg0) {
      if (tmp.INCOMING_FRIEND_REQUESTS === arg0) {
        let obj = { type: "section", props: null };
        obj = { title: null };
        const intl3 = _undefined(analyticsLocations[16]).intl;
        obj[0] = intl3.string(_undefined(analyticsLocations[16]).t["93cLE3"]);
        obj[1] = obj;
        return obj;
      } else if (tmp.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        const obj1 = { type: "section", props: null };
        const obj2 = { title: null };
        const intl2 = _undefined(analyticsLocations[16]).intl;
        obj2[0] = intl2.string(_undefined(analyticsLocations[16]).t["0uVuaU"]);
        obj1[1] = obj2;
        return obj1;
      } else if (tmp.CONTACT_SUGGESTIONS === arg0) {
        obj = { type: "section", props: null };
        const obj3 = { title: null };
        const intl = _undefined(analyticsLocations[16]).intl;
        obj3[0] = intl.string(_undefined(analyticsLocations[16]).t["1uAmCw"]);
        obj[1] = obj3;
        return obj;
      }
    }
  }, []);
  obj = { value: analyticsLocations, children: null };
  const items8 = [callback3(tmp2(obj[30]), { absolute: true }), ];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.inviteAppsContainerNonSticky, children: callback3(tmp2(obj[31]), obj2) };
  obj2 = { onItemPressed: c22, contentContainerStyle: tmp.inviteAppsContentContainer };
  const items9 = [callback3(c6, obj1), ];
  if (!tmp4Result[0]) {
    if (!tmp28) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp.loading;
      obj3[1] = tmp32(tmp13(obj[32]).ActivityIndicator, {});
      items9[1] = tmp32(tmp33, obj3);
      obj[1] = items9;
      items8[1] = tmp31(tmp33, obj);
      obj[1] = items8;
      return tmp31(tmp13(obj[20]).AnalyticsLocationProvider, obj);
    }
  }
  if (0 === stateFromStoresArray.length && 0 === stateFromStores.length && 0 === friendSuggestions.length) {
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.emptyContainer;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.emptyActionContainer;
    const obj6 = { label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null, start: true, end: true };
    let intl = tmp13(obj[16]).intl;
    obj6[0] = intl.string(tmp13(obj[16]).t.QzVsOs);
    const obj7 = { IconComponent: null };
    obj7[0] = tmp13(obj[36]).AtIcon;
    obj6[2] = tmp32(tmp13(obj[34]).TableRow.Icon, obj7);
    obj6[4] = callback;
    obj5[1] = tmp32(tmp13(obj[34]).TableRow, obj6);
    const items10 = [tmp32(tmp33, obj5), ];
    tmp = null;
    if (result) {
      tmp2 = tmp2(obj[40]);
      obj = {};
      tmp = tmp32(tmp2, obj);
    }
    items10[1] = tmp;
    obj4[1] = items10;
    tmp31(first, obj4);
    const tmp35 = first;
  } else {
    const obj8 = { sections: null, getItemProps: null, getSectionProps: null, insetEnd: 12, disableStickySections: true };
    obj8[0] = memo1;
    obj8[1] = function getItemProps(arg0, arg1) {
      let c0 = tmp;
      let closure_1 = tmp2;
      if (friendSuggestions.FIND_FRIENDS === arg0) {
        if (tmp) {
          if (c22) {
            let obj = { type: "custom", itemType: "showContactSyncCTA", key: "showContactSyncCTA", component: null };
            obj[3] = function component() {
              let obj = { start: true, height: "100%", label: null, labelLineClamp: 1, icon: null, trailing: null, onPress: null };
              const intl = tmp(tmp15[16]).intl;
              obj[2] = intl.string(tmp(tmp15[16]).t.j2POVo);
              obj = { IconComponent: null };
              obj[0] = tmp(tmp15[35]).FriendsIcon;
              obj[4] = callback(tmp(tmp15[34]).TableRow.Icon, obj);
              obj[5] = callback(tmp(tmp15[34]).TableRow.Arrow, {});
              obj[6] = closure_21;
              return callback(tmp(tmp15[34]).TableRow, obj);
            };
          }
          return obj;
        }
        obj = { type: "custom", itemType: "addByUsername", key: "addByUsername", component: null };
        obj[3] = function component() {
          let obj = { start: !closure_22, end: true, height: "100%", label: null, labelLineClamp: 1, icon: null, arrow: true, onPress: null };
          const intl = tmp(tmp15[16]).intl;
          obj[3] = intl.string(tmp(tmp15[16]).t.QzVsOs);
          obj = { IconComponent: null };
          obj[0] = tmp(tmp15[36]).AtIcon;
          obj[5] = outer1_17(tmp(tmp15[34]).TableRow.Icon, obj);
          obj[7] = closure_13;
          return outer1_17(tmp(tmp15[34]).TableRow, obj);
        };
      } else if (tmp3.INCOMING_FRIEND_REQUESTS === arg0) {
        if (tmp2) {
          if (c20) {
            const obj1 = { type: "custom", itemType: "viewAll", key: "friendRequestsViewAll", component: null };
            obj1[3] = function component() {
              let obj = {
                onPress() {
                  let obj = outer1_1(outer1_2[23]);
                  obj = { section_id: outer1_11.PENDING, truncated_count: 3, expanded_count: length.length, location: "AddFriends" };
                  obj.track(outer1_12.FRIEND_FINDER_SECTION_EXPANDED, obj);
                  navigation.navigate("requests");
                },
                users: null,
                count: null
              };
              obj[1] = arr.slice(3);
              obj[2] = arr.length;
              return outer1_17(tmp2(tmp15[37]), obj);
            };
            return obj1;
          }
        }
        const analyticsLocations = tmp15;
        const obj2 = { type: "custom", itemType: "incomingRequest", key: null, component: null };
        obj2[2] = stateFromStoresArray[arg1].id;
        obj2[3] = function component() {
          const obj = { accepted: null, user: null, start: null, end: null, onPress: null, onDeclineIncomingRequest: null, onAcceptIncomingRequest: null };
          obj[0] = tmp5.includes(tmp15.id);
          obj[1] = tmp15;
          obj[2] = closure_0;
          obj[3] = closure_1;
          obj[4] = outer1_14;
          obj[5] = outer1_12;
          obj[6] = outer1_11;
          return callback(tmp(analyticsLocations[38]).IncomingFriendRequestRow, obj);
        };
        return obj2;
      } else if (tmp3.INCOMING_GAME_FRIEND_REQUESTS === arg0) {
        if (tmp2) {
          if (c21) {
            const obj3 = { type: "custom", itemType: "viewAll", key: "gameFriendRequestsViewAll", component: null };
            obj3[3] = function component() {
              const obj = {
                onPress() {
                  navigation.navigate("requests");
                },
                users: null,
                count: null
              };
              const substr = arr2.slice(3);
              obj[1] = substr.map((user) => user.user);
              obj[2] = arr2.length;
              return outer1_17(tmp2(tmp15[37]), obj);
            };
            return obj3;
          }
        }
        const user = tmp11.user;
        const applicationId = tmp11.applicationId;
        const obj4 = { type: "custom", itemType: "incomingRequest", key: null, component: null };
        const _HermesInternal = HermesInternal;
        obj4[2] = "" + user.id + "-" + applicationId;
        obj4[3] = function component() {
          const obj = { accepted: null, applicationId: null, user: null, start: null, end: null, onPress: null, onDeclineIncomingRequest: null, onAcceptIncomingRequest: null };
          obj[0] = null != outer1_9.find((userId) => userId.userId === id.id && userId.applicationId === tmp);
          obj[1] = applicationId;
          obj[2] = user;
          obj[3] = closure_0;
          obj[4] = closure_1;
          obj[5] = outer1_14;
          obj[6] = outer1_12;
          obj[7] = outer1_11;
          return callback(tmp(analyticsLocations[38]).ConnectedIncomingGameFriendRequestRow, obj);
        };
        return obj4;
      } else if (tmp3.CONTACT_SUGGESTIONS === arg0) {
        let c5 = tmp5;
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
        obj = { type: "custom", itemType: null, key: null, component: null };
        obj[1] = str2;
        obj[2] = friendSuggestions[arg1].user.id;
        obj[3] = function component() {
          const obj = { added: null, suggestedFriend: null, start: null, end: null, onPress: null, location: null, onAddSuggestion: null };
          obj[0] = outer1_17.includes(set);
          obj[1] = set;
          obj[2] = closure_0;
          obj[3] = closure_1;
          obj[4] = outer1_14;
          obj[5] = constants.ADD_FRIENDS_MODAL;
          obj[6] = function onAddSuggestion() {
            return outer1_18((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = set;
              return items;
            });
          };
          return callback(tmp(analyticsLocations[39]).ContactSuggestionRow, obj);
        };
        return obj;
      }
    };
    obj8[2] = callback1;
    tmp32(tmp13(obj[33]).UsersFastList, obj8);
  }
};