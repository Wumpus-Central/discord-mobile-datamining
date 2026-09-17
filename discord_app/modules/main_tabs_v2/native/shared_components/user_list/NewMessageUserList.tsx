// === Module 12518: NewMessageUserList ===

// Module 12518 (NewMessageUserList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4484 */;
import Text_Text from "Text/Text" /* 4636 */;
import useChannelName from "useChannelName" /* 4793 */;
import fuzzysearchDefault from "fuzzysearch" /* 5605 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function matchGroupDMRecipients(trimmed1, recipients) {
  const obj = recipients.recipients[Symbol.iterator]();
  while (obj !== undefined) {
    let user = UserStore.getUser(tmp);
    let tmp4 = user;
    if (null != user) {
      let username = tmp4.username;
      let toLocaleLowerCaseResult = username.toLocaleLowerCase();
      if (fuzzysearchDefault(trimmed1, toLocaleLowerCaseResult)) {
        obj.return();
        return 1;
      } else {
        let tmp19Result = UserUtilsDefault;
        let globalName = tmp19Result.getGlobalName(tmp4);
        let toLocaleLowerCaseResult1;
        if (globalName != null) {
          toLocaleLowerCaseResult1 = globalName.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult1) {
          if (fuzzysearchDefault(trimmed1, tmp7)) {
            obj.return();
            return 1;
          }
        }
        let nickname = RelationshipStore.getNickname(tmp4.id);
        let toLocaleLowerCaseResult2;
        if (nickname != null) {
          toLocaleLowerCaseResult2 = nickname.toLocaleLowerCase();
        }
        if (null != toLocaleLowerCaseResult2) {
          if (fuzzysearchDefault(trimmed1, tmp12)) {
            obj.return();
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
    const channelName = useChannelName.computeChannelName(id, UserStore, RelationshipStore);
    const toLocaleLowerCaseResult = channelName.toLocaleLowerCase();
    let num = 3;
    if (!toLocaleLowerCaseResult.startsWith(trimmed1)) {
      let num2 = 2;
      if (!fuzzysearchDefault(trimmed1, toLocaleLowerCaseResult)) {
        num2 = matchGroupDMRecipients(trimmed1, id);
      }
      num = num2;
    }
    return num;
  }
}
function isMatchNewMessageUserListGroupDM(recipients, disabledUserIds, trimmed1) {
  if ("" === trimmed1) {
    return 0;
  } else if (0 === disabledUserIds.length) {
    return matchGroupDM(recipients, trimmed1);
  } else {
    const obj = disabledUserIds[Symbol.iterator]();
    while (obj !== undefined) {
      recipients = recipients.recipients;
      if (recipients.includes(tmp5)) {
        continue;
      } else {
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
const View = fn(17).View;
const UserRowModes = fn(11014).UserRowModes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [];
const createStyles = fn(4640);
let obj2 = { searchBarRowContainer: { paddingTop: nativeDefault.space.PX_8 }, noResults: null };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.noResults = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

export default function NewMessageUserList(selectedUserIds) {
  selectedUserIds = selectedUserIds.selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const onQueryChanged = selectedUserIds.onQueryChanged;
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
  let flag9 = selectedUserIds.withGDMNames;
  if (flag9 === undefined) {
    flag9 = false;
  }
  ({ defaultNoResultsFound, overrideResults } = selectedUserIds);
  c5 = undefined;
  ({ afterSearchContent, forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
  const tmp2 = closure_14();
  [str, c5] = onQueryChanged(rowMode.useState(""), 2);
  let items = [onQueryChanged];
  const callback = rowMode.useCallback((arg0) => {
    _undefined(arg0);
    if (onQueryChanged != null) {
      onQueryChanged(arg0);
    }
  }, items);
  const trimmed = str.trim();
  let tmp8 = disabledUserIds(onSelectUser[14])({ query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true });
  closure_6 = tmp8;
  closure_129_0 = flag9;
  closure_129_1 = selectedUserIds;
  closure_129_2 = trimmed;
  closure_129_3 = undefined;
  let obj = rowMode;
  let tmp3 = onQueryChanged(rowMode.useState(""), 2);
  [tmp10, closure_129_3] = onQueryChanged(rowMode.useState([]), 2);
  let items1 = [flag9, selectedUserIds, trimmed];
  const effect = rowMode.useEffect(() => {
    if (closure_0) {
      if ("" !== onSelectUser) {
        closure_0 = onSelectUser.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(closure_6.getMutablePrivateChannels());
        const found = values.filter(filterGroupDMs);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, disabledUserIds, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => {
          [, tmp] = item;
          return tmp > 0;
        });
        const obj2 = disabledUserIds(onSelectUser[13]);
        onQueryChanged(disabledUserIds(onSelectUser[13]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        }).map((item) => {
          [tmp] = item;
          return tmp;
        }));
        const sortByResult = disabledUserIds(onSelectUser[13]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        onQueryChanged(closure_1_13);
      }
    } else {
      onQueryChanged(closure_1_13);
    }
  }, items1);
  c7 = tmp10;
  const items2 = [tmp10, tmp8];
  const memo = rowMode.useMemo(() => {
    const mapped = closure_6.map((title) => {
      const obj = { title: title.title, items: null };
      const items = title.items;
      obj.items = items.map((data) => ({ type: "UserSearchItem", data }));
      return obj;
    });
    if (0 === _undefined2.length) {
      return mapped;
    } else {
      const obj2 = { title: null, items: null };
      let intl = util.intl;
      obj2.title = intl.string(util.t.qGlQrW);
      obj2.items = _undefined2.map((data) => ({ type: "GroupDMChannelRecord", data }));
      const findIndexResult = closure_6.findIndex((title) => {
        const intl = selectedUserIds(1115).intl;
        return title.title === intl.string(selectedUserIds(1115).t.y29JXs);
      });
      if (-1 === findIndexResult) {
        let items = [];
        items[HermesBuiltin.arraySpread(mapped, 0)] = obj2;
        let items1 = items;
      } else {
        items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(mapped.slice(0, findIndexResult), 0);
        items1[arraySpreadResult] = obj2;
        HermesBuiltin.arraySpread(mapped.slice(findIndexResult), arraySpreadResult + 1);
      }
      return items1;
    }
  }, items2);
  const items3 = [memo];
  const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items3);
  const items4 = [memo];
  const items5 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = rowMode.useCallback((arg0) => {
    const element = { type: "section", props: { title: memo[arg0].title } };
    return element;
  }, items4);
  const callback2 = rowMode.useCallback((arg0, arg1) => {
    const type = tmp.type;
    const tmp3 = arg1 === memo[arg0].items.length - 1;
    if ("UserSearchItem" === type) {
      const data = tmp.data;
      ({ user, firstMatch } = data);
      const hasItem = selectedUserIds.includes(user.id);
      const obj = { type: data.type, user, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
      let tmp8;
      if (null != firstMatch) {
        if (user.username !== firstMatch) {
          tmp8 = firstMatch;
        }
      }
      obj.nickname = tmp8;
      obj.onPress = onSelectUser;
      let flag;
      if (disabledUserIds != null) {
        flag = disabledUserIds.includes(user.id);
      }
      if (flag == null) {
        flag = false;
      }
      obj.disabled = flag;
      obj.selected = hasItem;
      if (RelationshipStore.isFriend(user.id)) {
        if (hasItem) {
          let TOGGLE = UserRowModes.TOGGLE;
        }
        const element = { type: "user", props: null };
        obj.mode = TOGGLE;
        const obj2 = { variant: "text-xs/medium", color: "text-muted", children: UserUtilsDefault.getUserTag(user) };
        obj.subLabel = closure_2_10(Text_Text.Text, obj2);
        obj.arrow = !RelationshipStore.isFriend(user.id);
        obj.start = tmp2;
        obj.end = tmp3;
        element.props = obj;
        return element;
      }
      TOGGLE = rowMode;
    } else if ("GroupDMChannelRecord" === type) {
      const element1 = { type: "gdm", props: null };
      const obj3 = { channel: tmp.data, onPress: onSelectUser, arrow: true, start: tmp2, end: tmp3 };
      element1.props = obj3;
      return element1;
    } else {
      return tmp;
    }
  }, items5);
  ref = rowMode.useRef(null);
  let UsersFastList = selectedUserIds;
  const tmp9 = onQueryChanged(rowMode.useState([]), 2);
  let tmp16;
  if (trimmed.length <= 0) {
    tmp16 = actions;
  }
  let obj2 = { actions: tmp16, style: null };
  let prop;
  if (trimmed.length <= 0) {
    if (flag3) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj2.style = prop;
  const userListActionsProps = selectedUserIds(onSelectUser[17]).useUserListActionsProps(obj2);
  const items6 = [str];
  ({ headerSize, renderHeader } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items6);
  const someResult = memo1.some((item) => item > 0);
  if (null != overrideResults) {
    if (autoFocusSearch) {
      autoFocusSearch = someResult;
    }
    const obj4 = { children: null };
    const obj5 = { autoFocus: autoFocusSearch, hasQuery: tmp5, onChangeText: callback, onFocus: onSearchFocus, onForceSearchResults, onSelectUser, selectedUserIds, forceSearchResults, tagListInputRef };
    const items7 = [closure_10(tmp6(tmp7[20]), obj5), afterSearchContent, overrideResults];
    obj4.children = items7;
    return closure_12(closure_11, obj4);
  } else if (someResult) {
    UsersFastList = UsersFastList(tmp7[18]).UsersFastList;
    const obj6 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, listHeaderSize: headerSize, renderListHeader: renderHeader, insetStart: 0, insetEnd: 12, disableThemedGradient: true };
    let tmp32Result = closure_10(UsersFastList, obj6);
  } else {
    const obj7 = { style: null, children: null };
    if (tmp21) {
      const items8 = [noResults, ];
      let prop1;
      if (flag3) {
        prop1 = tmp2.searchBarRowContainer;
      }
      items8[1] = prop1;
      obj7.style = items8;
      obj7.children = defaultNoResultsFound;
      let tmp24 = obj7;
    } else {
      obj7.style = noResults;
      const obj8 = { title: null, subtitle: null, children: null };
      let intl = UsersFastList(tmp7[15]).intl;
      obj8.title = intl.string(UsersFastList(tmp7[15]).t.sPAvXU);
      const intl2 = UsersFastList(tmp7[15]).intl;
      obj8.subtitle = intl2.string(UsersFastList(tmp7[15]).t.nQ05z2);
      const obj9 = { actions: noResultActions };
      obj8.children = closure_10(UsersFastList(tmp7[17]).UserFlashListActions, obj9);
      obj7.children = closure_10(tmp6(tmp7[19]), obj8);
      tmp24 = obj7;
      const tmp6Result2 = tmp6(tmp7[19]);
    }
    tmp32Result = closure_10(c5, tmp24);
  }
  let obj3 = selectedUserIds(onSelectUser[17]);
  tmp21 = 0 === str.length && null != defaultNoResultsFound;
};
export { matchGroupDM };
export { filterGroupDMs };
export const useSearchGDMNames = function useSearchGDMNames(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const tmp = _slicedToArray(noop.useState([]), 2);
  _slicedToArray = tmp[1];
  const items = [arg0, arg1, arg2];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      if ("" !== onSelectUser) {
        closure_0 = onSelectUser.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(closure_6.getMutablePrivateChannels());
        const found = values.filter(filterGroupDMs);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, disabledUserIds, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => {
          [, tmp] = item;
          return tmp > 0;
        });
        const obj2 = disabledUserIds(onSelectUser[13]);
        onQueryChanged(disabledUserIds(onSelectUser[13]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        }).map((item) => {
          [tmp] = item;
          return tmp;
        }));
        const sortByResult = disabledUserIds(onSelectUser[13]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        onQueryChanged(closure_1_13);
      }
    } else {
      onQueryChanged(closure_1_13);
    }
  }, items);
  return tmp[0];
};