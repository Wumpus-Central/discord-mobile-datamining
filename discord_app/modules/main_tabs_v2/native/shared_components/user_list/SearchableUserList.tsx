// === Module 10861: SearchableUserList ===

// Module 10861 (SearchableUserList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import shared from "shared" /* 4411 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10863 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10860).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { searchBarContainer: null, searchBar: null, searchBarRowContainer: null, noResults: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.searchBarContainer = createStyles;
createStyles.searchBar = { height: "ip", minHeight: false };
createStyles.searchBarRowContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj1 = { paddingTop: nativeDefault.space.PX_8 };
createStyles.noResults = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

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
  let flag2 = selectedUserIds.focusOnAdd;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = selectedUserIds.withGuildMembers;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = selectedUserIds.withAffinitySuggestions;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let flag5 = selectedUserIds.withAlphabeticalSections;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let flag6 = selectedUserIds.withFriends;
  if (flag6 === undefined) {
    flag6 = true;
  }
  let flag7 = selectedUserIds.withGameFriends;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let flag8 = selectedUserIds.withFriendRequests;
  if (flag8 === undefined) {
    flag8 = false;
  }
  let flag9 = selectedUserIds.withFriendRequestsIncoming;
  if (flag9 === undefined) {
    flag9 = false;
  }
  let flag10 = selectedUserIds.withFriendRequestsOutgoing;
  if (flag10 === undefined) {
    flag10 = false;
  }
  let flag11 = selectedUserIds.withFriendRequestsSpam;
  if (flag11 === undefined) {
    flag11 = false;
  }
  let flag12 = selectedUserIds.withFriendSuggestions;
  if (flag12 === undefined) {
    flag12 = false;
  }
  let flag13 = selectedUserIds.hideSearchOnDefaultNoResults;
  if (flag13 === undefined) {
    flag13 = false;
  }
  ({ defaultNoResultsFound, disableGradient, insetEnd, disableStickySections, disableThemedGradient } = selectedUserIds);
  if (insetEnd === undefined) {
    insetEnd = disabledUserIds(onSelectUser[7]).space.PX_12;
  }
  ({ onContentLengthChange, onLayout, onScroll } = selectedUserIds);
  const tmp4 = closure_11();
  let obj = ACTIONS;
  const tmp5 = handleMessage(ACTIONS.useState(""), 2);
  const tmp8 = disabledUserIds(onSelectUser[8])({ query: tmp5[0], withGuildMembers: flag3, withAffinitySuggestions: flag4, withAlphabeticalSections: flag5, withFriends: flag6, withGameFriends: flag7, withFriendSuggestions: flag12, withFriendRequests: flag8, withFriendRequestsIncoming: flag9, withFriendRequestsOutgoing: flag10, withFriendRequestsSpam: flag11 });
  closure_5 = tmp8;
  let items = [selectedUserIds];
  const memo = ACTIONS.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items);
  const items1 = [onSelectUser, memo];
  const items2 = [tmp8];
  const callback = ACTIONS.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
    }
  }, items1);
  const memo1 = ACTIONS.useMemo(() => closure_5.map((items) => items.items.length), items2);
  const items3 = [tmp8];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const element = { type: "section", props: { title: closure_5[arg0].title } };
    return element;
  }, items3);
  const tmp12 = tmp5[0].trim().length > 0;
  const items4 = [tmp8, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    ({ user, firstMatch } = closure_5[arg0].items[arg1]);
    const props = { type: tmp.type, user, nickname: null, onPress: null, handleMessage: null, disabled: null, selected: null, mode: null, start: null, end: null };
    let tmp3;
    const diff = closure_5[arg0].items.length - 1;
    if (user.username !== firstMatch) {
      tmp3 = firstMatch;
    }
    props.nickname = tmp3;
    props.onPress = onSelectUser;
    props.handleMessage = handleMessage;
    let flag;
    if (disabledUserIds != null) {
      flag = disabledUserIds.includes(user.id);
    }
    if (flag == null) {
      flag = false;
    }
    props.disabled = flag;
    let flag2;
    if (selectedUserIds != null) {
      flag2 = selectedUserIds.includes(user.id);
    }
    if (!flag2) {
      let hasItem;
      if (disabledUserIds != null) {
        hasItem = disabledUserIds.includes(user.id);
      }
      flag2 = hasItem;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    props.selected = flag2;
    props.mode = ACTIONS;
    props.start = 0 === arg1;
    props.end = arg1 === diff;
    return { type: "user", props };
  }, items4);
  ref = ACTIONS.useRef(null);
  let obj2 = selectedUserIds(onSelectUser[13]);
  let tmp16;
  if (!tmp12) {
    tmp16 = actions;
  }
  obj = { actions: tmp16, style: null };
  let prop;
  if (!tmp12) {
    if (flag6) {
      prop = tmp4.searchBarRowContainer;
    }
  }
  obj.style = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items5 = [tmp5[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((item) => item > 0);
  if (flag13) {
    flag13 = !someResult;
  }
  if (flag13) {
    flag13 = !tmp12;
  }
  if (someResult) {
    obj = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd, onContentLengthChange, onLayout, onScroll, disableStickySections, disableThemedGradient };
    let tmp22Result = closure_8(tmp15(tmp7[14]).UsersFastList, obj);
    let tmp29 = closure_8;
  } else {
    const obj1 = { style: null, children: null };
    if (tmp21) {
      const items6 = [noResults, ];
      let prop1;
      if (flag6) {
        if (!flag13) {
          prop1 = tmp4.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj1.style = items6;
      obj1.children = defaultNoResultsFound;
      let tmp26 = obj1;
    } else {
      obj1.style = noResults;
      obj2 = { title: null, children: null };
      let tmp6Result = tmp6(tmp7[15]);
      let intl = tmp15(tmp7[12]).intl;
      obj2.title = intl.string(tmp15(tmp7[12]).t.V6nAfF);
      const obj3 = { actions, style: null };
      let prop2;
      if (flag6) {
        prop2 = tmp4.searchBarRowContainer;
      }
      obj3.style = prop2;
      obj2.children = closure_8(tmp15(tmp7[13]).UserFlashListActions, obj3);
      obj1.children = closure_8(tmp6Result, obj2);
      tmp26 = obj1;
    }
    tmp22Result = closure_8(closure_5, tmp26);
    tmp29 = closure_8;
  }
  let tmp29Result = !disableGradient;
  if (!disableGradient) {
    tmp29Result = tmp29(tmp6(tmp7[16]), { absolute: true });
  }
  const children = [tmp29Result, , ];
  tmp29Result = null;
  if (flag6) {
    tmp29Result = null;
    if (!flag13) {
      const obj4 = { style: tmp4.searchBarContainer, children: null };
      const obj5 = { onChangeText: tmp5[1], onRemove: callback, tags: memo, style: tmp4.searchBar, autoFocus: null, focusOnAdd: null };
      tmp6Result = tmp6(tmp7[17]);
      if (flag) {
        flag = someResult;
      }
      obj5.autoFocus = flag;
      obj5.focusOnAdd = flag2;
      obj4.children = tmp29(tmp6Result, obj5);
      tmp29Result = tmp29(closure_5, obj4);
    }
  }
  children[1] = tmp29Result;
  children[2] = tmp22Result;
  return closure_10(closure_9, { children });
};