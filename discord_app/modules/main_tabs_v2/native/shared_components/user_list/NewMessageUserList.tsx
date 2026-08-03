// === Module 11589: matchGroupDMRecipients ===

// Module 11589 (matchGroupDMRecipients)
import _slicedToArray from "_slicedToArray";
import NoResults from "NoResults";
import { View } from "UserFlashListActions";
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserRowModes } from "UserRowModes";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function matchGroupDMRecipients(trimmed1, recipients) {
  const obj = recipients.recipients[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = user;
    user = user.getUser(tmp);
    let tmp4 = user;
    if (null != user) {
      let tmp17 = user;
      let username = tmp4.username;
      let tmp19 = importDefault;
      let tmp20 = dependencyMap;
      let toLocaleLowerCaseResult = username.toLocaleLowerCase();
      if (importDefault(5168)(trimmed1, toLocaleLowerCaseResult)) {
        let tmp16 = obj;
        obj.return();
        let num3 = 1;
        return 1;
      } else {
        let tmp19Result = tmp19(4094);
        let tmp5 = user;
        let globalName = tmp19Result.getGlobalName(tmp4);
        let toLocaleLowerCaseResult1;
        if (globalName != null) {
          toLocaleLowerCaseResult1 = globalName.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult1) {
          let tmp8 = toLocaleLowerCaseResult1;
          if (tmp19(5168)(trimmed1, tmp7)) {
            let tmp15 = obj;
            obj.return();
            let num2 = 1;
            return 1;
          }
        }
        let tmp9 = nickname;
        let tmp10 = user;
        nickname = nickname.getNickname(tmp4.id);
        let toLocaleLowerCaseResult2;
        if (nickname != null) {
          toLocaleLowerCaseResult2 = nickname.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult2) {
          let tmp13 = toLocaleLowerCaseResult2;
          if (tmp19(5168)(trimmed1, tmp12)) {
            let tmp14 = obj;
            obj.return();
            let num = 1;
            return 1;
          }
        }
      }
    }
    continue;
  }
  return 0;
}
function matchGroupDM(id, trimmed1) {
  if ("" === trimmed1) {
    return 0;
  } else {
    const channelName = require(4446) /* computeChannelName */.computeChannelName(id, mergeGuildAvatar, upsertRelationship);
    const toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
    let num = 3;
    if (!toLocaleLowerCaseResult.startsWith(trimmed1)) {
      let num2 = 2;
      if (!importDefault(5168)(trimmed1, toLocaleLowerCaseResult)) {
        num2 = matchGroupDMRecipients(trimmed1, id);
      }
      num = num2;
    }
    return num;
  }
}
function isMatchNewMessageUserListGroupDM(recipients, arg1, trimmed1) {
  if ("" === trimmed1) {
    return 0;
  } else if (0 === arg1.length) {
    return matchGroupDM(recipients, trimmed1);
  } else {
    const obj = arg1[Symbol.iterator]();
    while (obj !== undefined) {
      recipients = recipients.recipients;
      if (recipients.includes(tmp5)) {
        continue;
      } else {
        let tmp7 = obj;
        obj.return();
        return 0;
      }
    }
    return matchGroupDMRecipients(trimmed1, recipients);
  }
}
function filterGroupDMs(isGroupDM) {
  return isGroupDM.isGroupDM();
}
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = [];
createCacheKey = { searchBarRowContainer: null, noResults: null };
createCacheKey = { paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

export default function NewMessageUserList(selectedUserIds) {
  let autoFocusSearch;
  let c3;
  let c5;
  let defaultNoResultsFound;
  let forceSearchResults;
  let headerSize;
  let noResultActions;
  let onForceSearchResults;
  let onSearchFocus;
  let overrideResults;
  let renderHeader;
  let rowMode;
  let str;
  let tagListInputRef;
  let tmp10;
  selectedUserIds = selectedUserIds.selectedUserIds;
  let flag9 = selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  selectedUserIds = disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  let trimmed = onSelectUser;
  const onQueryChanged = selectedUserIds.onQueryChanged;
  let callback = onQueryChanged;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  ({ noResultActions, rowMode } = selectedUserIds);
  if (rowMode === undefined) {
    rowMode = ref.ACTIONS;
  }
  ({ autoFocusSearch, tagListInputRef } = selectedUserIds);
  if (autoFocusSearch === undefined) {
    autoFocusSearch = false;
  }
  let flag = selectedUserIds.withGuildMembers;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedUserIds.withAffinitySuggestions;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = selectedUserIds.withFriends;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = selectedUserIds.withGameFriends;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withFriendRequests;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = selectedUserIds.withFriendRequestsIncoming;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendSuggestions;
  if (flag8 === undefined) {
    flag8 = false;
  }
  flag9 = selectedUserIds.withGDMNames;
  if (flag9 === undefined) {
    flag9 = false;
  }
  ({ defaultNoResultsFound, overrideResults } = selectedUserIds);
  c5 = undefined;
  let c6;
  let c7;
  let memo;
  ref = undefined;
  ({ forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
  const tmp2 = createCacheKey();
  let obj = rowMode;
  [str, c5] = callback(rowMode.useState(""), 2);
  let items = [onQueryChanged];
  callback = rowMode.useCallback((arg0) => {
    _undefined2(arg0);
    if (_undefined != null) {
      _undefined(arg0);
    }
  }, items);
  trimmed = str.trim();
  let tmp8 = selectedUserIds(trimmed[14])({ query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true });
  c6 = tmp8;
  callback = undefined;
  let tmp3 = callback(rowMode.useState(""), 2);
  [tmp10, c3] = callback(rowMode.useState([]), 2);
  let items1 = [flag9, selectedUserIds, trimmed];
  const effect = rowMode.useEffect(() => {
    if (closure_0) {
      if ("" !== trimmed) {
        closure_0 = obj.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(_undefined3.getMutablePrivateChannels());
        const found = values.filter(outer1_18);
        const mapped = found.map((arg0) => {
          const items = [arg0, outer2_17(arg0, outer1_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp > 0;
        });
        const obj2 = selectedUserIds(trimmed[13]);
        _undefined(selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        }).map((arg0) => {
          let tmp;
          [tmp] = arg0;
          return tmp;
        }));
        const sortByResult = selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        _undefined(outer1_13);
      }
      obj = trimmed;
    } else {
      _undefined(outer1_13);
    }
  }, items1);
  c7 = tmp10;
  const items2 = [tmp10, tmp8];
  memo = rowMode.useMemo(() => {
    let obj = _undefined3;
    const mapped = _undefined3.map((title) => {
      const items = title.items;
      return { title: title.title, items: items.map((data) => ({ type: "UserSearchItem", data })) };
    });
    if (0 === _undefined4.length) {
      return mapped;
    } else {
      obj = { title: null, items: null };
      let intl = flag9(trimmed[15]).intl;
      obj[0] = intl.string(flag9(trimmed[15]).t.qGlQrW);
      obj[1] = arr2.map((data) => ({ type: "GroupDMChannelRecord", data }));
      const findIndexResult = obj.findIndex((title) => {
        const intl = callback(1236).intl;
        return title.title === intl.string(callback(1236).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        let items = [];
        items[HermesBuiltin.arraySpread(mapped, 0)] = obj;
        let items1 = items;
      } else {
        items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(mapped.slice(0, findIndexResult), 0);
        items1[arraySpreadResult] = obj;
        arraySpreadResult = HermesBuiltin.arraySpread(mapped.slice(findIndexResult), arraySpreadResult + 1);
      }
      return items1;
    }
    arr2 = _undefined4;
  }, items2);
  const items3 = [memo];
  const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items3);
  const items4 = [memo];
  const items5 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = rowMode.useCallback((arg0) => {
    const props = { title: memo[arg0].title };
    return { type: "section", props };
  }, items4);
  const callback2 = rowMode.useCallback((arg0, arg1) => {
    let firstMatch;
    let user;
    const type = tmp.type;
    const tmp3 = arg1 === memo[arg0].items.length - 1;
    if ("UserSearchItem" === type) {
      const data = tmp.data;
      ({ user, firstMatch } = data);
      const hasItem = flag9.includes(user.id);
      let obj = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
      obj[0] = data.type;
      obj[1] = user;
      let tmp8;
      if (null != firstMatch) {
        if (user.username !== firstMatch) {
          tmp8 = firstMatch;
        }
      }
      obj[2] = tmp8;
      obj[3] = trimmed;
      let flag;
      if (selectedUserIds != null) {
        flag = obj4.includes(user.id);
      }
      if (flag == null) {
        flag = false;
      }
      obj[4] = flag;
      obj[5] = hasItem;
      if (_undefined4.isFriend(user.id)) {
        if (hasItem) {
          let TOGGLE = ref.TOGGLE;
        }
        obj = { type: "user", props: null };
        obj[6] = TOGGLE;
        const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
        obj1[2] = selectedUserIds(trimmed[11]).getUserTag(user);
        obj[7] = outer1_10(flag9(trimmed[16]).Text, obj1);
        obj[8] = !obj5.isFriend(user.id);
        obj[9] = tmp2;
        obj[10] = tmp3;
        obj[1] = obj;
        return obj;
      }
      TOGGLE = rowMode;
      obj4 = selectedUserIds;
      obj5 = _undefined4;
    } else if ("GroupDMChannelRecord" === type) {
      obj = { type: "gdm", props: null };
      const obj2 = { channel: null, onPress: null, arrow: true, start: null, end: null };
      obj2[0] = tmp.data;
      obj2[1] = trimmed;
      obj2[3] = tmp2;
      obj2[4] = tmp3;
      obj[1] = obj2;
      return obj;
    } else {
      return tmp;
    }
  }, items5);
  ref = rowMode.useRef(null);
  let UsersFastList = flag9;
  let obj2 = flag9(trimmed[17]);
  let tmp16;
  if (trimmed.length <= 0) {
    tmp16 = actions;
  }
  obj = { actions: tmp16, style: null };
  let prop;
  if (trimmed.length <= 0) {
    if (flag3) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj[1] = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items6 = [str];
  ({ headerSize, renderHeader } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items6);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (null != overrideResults) {
    let tmp6Result = tmp6(tmp7[20]);
    if (autoFocusSearch) {
      autoFocusSearch = someResult;
    }
    obj = { children: null };
    let obj1 = { autoFocus: null, hasQuery: null, onChangeText: null, onFocus: null, onForceSearchResults: null, onSelectUser: null, selectedUserIds: null, forceSearchResults: null, tagListInputRef: null };
    obj1[0] = autoFocusSearch;
    obj1[1] = tmp5;
    obj1[2] = callback;
    obj1[3] = onSearchFocus;
    obj1[4] = onForceSearchResults;
    obj1[5] = onSelectUser;
    obj1[6] = selectedUserIds;
    obj1[7] = forceSearchResults;
    obj1[8] = tagListInputRef;
    const items7 = [closure_10(tmp6Result, obj1), overrideResults];
    obj[0] = items7;
    return closure_12(closure_11, obj);
  } else if (someResult) {
    UsersFastList = UsersFastList(tmp7[18]).UsersFastList;
    obj2 = { ref: null, sections: null, getItemProps: null, getSectionProps: null, listHeaderSize: null, renderListHeader: null, insetStart: 0, insetEnd: 12, disableThemedGradient: true };
    obj2[0] = ref;
    obj2[1] = memo1;
    obj2[2] = callback2;
    obj2[3] = callback1;
    obj2[4] = headerSize;
    obj2[5] = renderHeader;
    let tmp32Result = tmp32(UsersFastList, obj2);
  } else {
    const obj3 = { style: null, children: null };
    if (tmp21) {
      const items8 = [noResults, ];
      let prop1;
      if (flag3) {
        prop1 = tmp2.searchBarRowContainer;
      }
      items8[1] = prop1;
      obj3[0] = items8;
      obj3[1] = defaultNoResultsFound;
      let tmp24 = obj3;
    } else {
      obj3[0] = noResults;
      let obj4 = { title: null, subtitle: null, children: null };
      tmp6Result = tmp6(tmp7[19]);
      let intl = UsersFastList(tmp7[15]).intl;
      obj4[0] = intl.string(UsersFastList(tmp7[15]).t.sPAvXU);
      const intl2 = UsersFastList(tmp7[15]).intl;
      obj4[1] = intl2.string(UsersFastList(tmp7[15]).t.nQ05z2);
      let obj5 = { actions: null };
      obj5[0] = noResultActions;
      obj4[2] = tmp32(UsersFastList(tmp7[17]).UserFlashListActions, obj5);
      obj3[1] = tmp32(tmp6Result, obj4);
      tmp24 = obj3;
    }
    tmp32Result = tmp32(c5, tmp24);
    const tmp22 = c5;
  }
};
export { matchGroupDM };
export { filterGroupDMs };
export const useSearchGDMNames = function useSearchGDMNames(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const tmp = callback(React.useState([]), 2);
  callback = tmp[1];
  const items = [arg0, arg1, arg2];
  const effect = React.useEffect(() => {
    if (closure_0) {
      if ("" !== trimmed) {
        closure_0 = obj.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(_undefined3.getMutablePrivateChannels());
        const found = values.filter(outer1_18);
        const mapped = found.map((arg0) => {
          const items = [arg0, outer2_17(arg0, outer1_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return tmp > 0;
        });
        const obj2 = selectedUserIds(trimmed[13]);
        _undefined(selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        }).map((arg0) => {
          let tmp;
          [tmp] = arg0;
          return tmp;
        }));
        const sortByResult = selectedUserIds(trimmed[13]).sortBy(found1, (arg0) => {
          let tmp;
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        _undefined(outer1_13);
      }
      obj = trimmed;
    } else {
      _undefined(outer1_13);
    }
  }, items);
  return tmp[0];
};