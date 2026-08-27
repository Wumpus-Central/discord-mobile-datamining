// === Module 10553: SearchableUserList ===

// Module 10553 (SearchableUserList)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { UserRowModes } from "UserRowModes" /* 10552 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { searchBarContainer: null, searchBar: null, searchBarRowContainer: null, noResults: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: "disabled", minHeight: false };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_8 };
let obj1 = { paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default function SearchableUserList(selectedUserIds) {
  selectedUserIds = selectedUserIds.selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  const onSelectUser = selectedUserIds.onSelectUser;
  const handleMessage = selectedUserIds.handleMessage;
  let actions = selectedUserIds.actions;
  if (actions === undefined) {
    actions = [];
  }
  let ACTIONS = selectedUserIds.rowMode;
  if (ACTIONS === undefined) {
    ACTIONS = ref.ACTIONS;
  }
  let flag = selectedUserIds.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedUserIds.withGuildMembers;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = selectedUserIds.withAffinitySuggestions;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = selectedUserIds.withAlphabeticalSections;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withFriends;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let flag6 = selectedUserIds.withGameFriends;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = selectedUserIds.withFriendRequests;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendRequestsIncoming;
  if (flag8 === undefined) {
    flag8 = false;
  }
  let flag9 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag9 === undefined) {
    flag9 = false;
  }
  let flag10 = selectedUserIds.withFriendRequestsSpam;
  if (flag10 === undefined) {
    flag10 = false;
  }
  let flag11 = selectedUserIds.withFriendSuggestions;
  if (flag11 === undefined) {
    flag11 = false;
  }
  let flag12 = selectedUserIds.hideSearchOnDefaultNoResults;
  if (flag12 === undefined) {
    flag12 = false;
  }
  ({ defaultNoResultsFound, disableGradient, focusOnAdd, disableStickySections, disableThemedGradient } = selectedUserIds);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  closure_5 = undefined;
  let memo;
  ref = undefined;
  const tmp2 = callback();
  let obj = ACTIONS;
  let tmp3 = handleMessage(ACTIONS.useState(""), 2);
  const tmp6 = disabledUserIds(onSelectUser[8])({ query: tmp3[0], withGuildMembers: flag2, withAffinitySuggestions: flag3, withAlphabeticalSections: flag4, withFriends: flag5, withGameFriends: flag6, withFriendSuggestions: flag11, withFriendRequests: flag7, withFriendRequestsIncoming: flag8, withFriendRequestsOutgoing: flag9, withFriendRequestsSpam: flag10 });
  closure_5 = tmp6;
  let items = [selectedUserIds];
  memo = ACTIONS.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(memo.getUser);
    const found = mapped.filter(selectedUserIds(onSelectUser[9]).isNotNullish);
    return found.map(disabledUserIds(onSelectUser[10]));
  }, items);
  const items1 = [onSelectUser, memo];
  const items2 = [tmp6];
  callback = ACTIONS.useCallback((arg0) => {
    const user = memo.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = selectedUserIds(onSelectUser[11]).AccessibilityAnnouncer;
      const intl = selectedUserIds(onSelectUser[12]).intl;
      const obj = { text: null };
      obj[0] = tmp.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(selectedUserIds(onSelectUser[12]).t.srlxB8, obj));
    }
  }, items1);
  const memo1 = ACTIONS.useMemo(() => closure_5.map((items) => items.items.length), items2);
  const items3 = [tmp6];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const props = { title: closure_5[arg0].title };
    return { type: "section", props };
  }, items3);
  const tmp10 = tmp3[0].trim().length > 0;
  const items4 = [tmp6, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    ({ user, firstMatch } = closure_5[arg0].items[arg1]);
    const props = { type: tmp.type, user, nickname: null, onPress: null, handleMessage: null, disabled: null, selected: null, mode: null, start: null, end: null };
    let tmp3;
    const diff = closure_5[arg0].items.length - 1;
    if (user.username !== firstMatch) {
      tmp3 = firstMatch;
    }
    props[2] = tmp3;
    props[3] = onSelectUser;
    props[4] = handleMessage;
    let flag;
    if (disabledUserIds != null) {
      flag = obj2.includes(user.id);
    }
    if (flag == null) {
      flag = false;
    }
    props[5] = flag;
    let flag2;
    if (selectedUserIds != null) {
      flag2 = selectedUserIds.includes(user.id);
    }
    if (!flag2) {
      let hasItem;
      if (obj2 != null) {
        hasItem = obj2.includes(user.id);
      }
      flag2 = hasItem;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    props[6] = flag2;
    props[7] = ACTIONS;
    props[8] = 0 === arg1;
    props[9] = arg1 === diff;
    return { type: "user", props };
  }, items4);
  ref = ACTIONS.useRef(null);
  let obj2 = selectedUserIds(onSelectUser[13]);
  let tmp14;
  if (!tmp10) {
    tmp14 = actions;
  }
  obj = { actions: tmp14, style: null };
  let prop;
  if (!tmp10) {
    if (flag5) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj[1] = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items5 = [tmp3[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (flag12) {
    flag12 = !someResult;
  }
  if (flag12) {
    flag12 = !tmp10;
  }
  if (someResult) {
    obj = { ref: null, sections: null, getItemProps: null, getSectionProps: null, renderListHeader: null, listHeaderSize: null, insetEnd: 12, disableStickySections: null, disableThemedGradient: null };
    obj[0] = ref;
    obj[1] = memo1;
    obj[2] = callback2;
    obj[3] = callback1;
    obj[4] = renderHeader;
    obj[5] = headerSize;
    obj[7] = disableStickySections;
    obj[8] = disableThemedGradient;
    let tmp20Result = tmp20(tmp13(tmp5[14]).UsersFastList, obj);
    let tmp27 = tmp20;
  } else {
    obj1 = { style: null, children: null };
    if (tmp19) {
      const items6 = [noResults, ];
      let prop1;
      if (flag5) {
        if (!flag12) {
          prop1 = tmp2.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj1[0] = items6;
      obj1[1] = defaultNoResultsFound;
      let tmp24 = obj1;
    } else {
      obj1[0] = noResults;
      obj2 = { title: null, children: null };
      let tmp4Result = tmp4(tmp5[15]);
      let intl = tmp13(tmp5[12]).intl;
      obj2[0] = intl.string(tmp13(tmp5[12]).t.V6nAfF);
      const obj3 = { actions: null, style: null };
      obj3[0] = actions;
      let prop2;
      if (flag5) {
        prop2 = tmp2.searchBarRowContainer;
      }
      obj3[1] = prop2;
      obj2[1] = tmp20(tmp13(tmp5[13]).UserFlashListActions, obj3);
      obj1[1] = tmp20(tmp4Result, obj2);
      tmp24 = obj1;
    }
    tmp20Result = tmp20(closure_5, tmp24);
    tmp27 = tmp20;
    const tmp21 = closure_5;
  }
  let tmp27Result = !disableGradient;
  if (!disableGradient) {
    tmp27Result = tmp27(tmp4(tmp5[16]), { absolute: true });
  }
  const children = [tmp27Result, , ];
  tmp27Result = null;
  if (flag5) {
    tmp27Result = null;
    if (!flag12) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp2.searchBarContainer;
      const obj5 = { onChangeText: null, onRemove: null, tags: null, style: null, autoFocus: null, focusOnAdd: null };
      obj5[0] = tmp3[1];
      obj5[1] = callback;
      obj5[2] = memo;
      obj5[3] = tmp2.searchBar;
      tmp4Result = tmp4(tmp5[17]);
      if (flag) {
        flag = someResult;
      }
      obj5[4] = flag;
      obj5[5] = focusOnAdd;
      obj4[1] = tmp27(tmp4Result, obj5);
      tmp27Result = tmp27(closure_5, obj4);
      const tmp32 = closure_5;
    }
  }
  children[1] = tmp27Result;
  children[2] = tmp20Result;
  return closure_10(closure_9, { children });
};