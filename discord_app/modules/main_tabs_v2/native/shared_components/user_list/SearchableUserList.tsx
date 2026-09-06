// discord_app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/UserStore.tsx";
import { UserRowModes } from "UserRowConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { searchBarContainer: null, searchBar: null, searchBarRowContainer: null, noResults: null };
createCacheKey = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingBottom: ThemesDefault.space.PX_8,
  backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: "ip", minHeight: false };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_8 };
let obj1 = { paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx",
);

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
  ({ defaultNoResultsFound, disableGradient, insetEnd, disableStickySections, disableThemedGradient } =
    selectedUserIds);
  if (insetEnd === undefined) {
    insetEnd = disabledUserIds(onSelectUser[7]).space.PX_12;
  }
  closure_5 = undefined;
  let memo;
  ref = undefined;
  ({ onContentLengthChange, onLayout, onScroll } = selectedUserIds);
  const tmp4 = callback();
  let obj = ACTIONS;
  const tmp5 = handleMessage(ACTIONS.useState(""), 2);
  const tmp8 = disabledUserIds(onSelectUser[8])({
    query: tmp5[0],
    withGuildMembers: flag3,
    withAffinitySuggestions: flag4,
    withAlphabeticalSections: flag5,
    withFriends: flag6,
    withGameFriends: flag7,
    withFriendSuggestions: flag12,
    withFriendRequests: flag8,
    withFriendRequestsIncoming: flag9,
    withFriendRequestsOutgoing: flag10,
    withFriendRequestsSpam: flag11,
  });
  closure_5 = tmp8;
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
  const items2 = [tmp8];
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
  const items3 = [tmp8];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const props = { title: closure_5[arg0].title };
    return { type: "section", props };
  }, items3);
  const tmp12 = tmp5[0].trim().length > 0;
  const items4 = [tmp8, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    ({ user, firstMatch } = closure_5[arg0].items[arg1]);
    const props = {
      type: tmp.type,
      user,
      nickname: null,
      onPress: null,
      handleMessage: null,
      disabled: null,
      selected: null,
      mode: null,
      start: null,
      end: null,
    };
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
  obj[1] = prop;
  const userListActionsProps = obj2.useUserListActionsProps(obj);
  const items5 = [tmp5[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((arg0) => arg0 > 0);
  if (flag13) {
    flag13 = !someResult;
  }
  if (flag13) {
    flag13 = !tmp12;
  }
  if (someResult) {
    obj = {
      ref: null,
      sections: null,
      getItemProps: null,
      getSectionProps: null,
      renderListHeader: null,
      listHeaderSize: null,
      insetEnd: null,
      onContentLengthChange: null,
      onLayout: null,
      onScroll: null,
      disableStickySections: null,
      disableThemedGradient: null,
    };
    obj[0] = ref;
    obj[1] = memo1;
    obj[2] = callback2;
    obj[3] = callback1;
    obj[4] = renderHeader;
    obj[5] = headerSize;
    obj[6] = insetEnd;
    obj[7] = onContentLengthChange;
    obj[8] = onLayout;
    obj[9] = onScroll;
    obj[10] = disableStickySections;
    obj[11] = disableThemedGradient;
    let tmp22Result = tmp22(tmp15(tmp7[14]).UsersFastList, obj);
    let tmp29 = tmp22;
  } else {
    obj1 = { style: null, children: null };
    if (tmp21) {
      const items6 = [noResults];
      let prop1;
      if (flag6) {
        if (!flag13) {
          prop1 = tmp4.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj1[0] = items6;
      obj1[1] = defaultNoResultsFound;
      let tmp26 = obj1;
    } else {
      obj1[0] = noResults;
      obj2 = { title: null, children: null };
      let tmp6Result = tmp6(tmp7[15]);
      let intl = tmp15(tmp7[12]).intl;
      obj2[0] = intl.string(tmp15(tmp7[12]).t.V6nAfF);
      const obj3 = { actions: null, style: null };
      obj3[0] = actions;
      let prop2;
      if (flag6) {
        prop2 = tmp4.searchBarRowContainer;
      }
      obj3[1] = prop2;
      obj2[1] = tmp22(tmp15(tmp7[13]).UserFlashListActions, obj3);
      obj1[1] = tmp22(tmp6Result, obj2);
      tmp26 = obj1;
    }
    tmp22Result = tmp22(closure_5, tmp26);
    tmp29 = tmp22;
    const tmp23 = closure_5;
  }
  let tmp29Result = !disableGradient;
  if (!disableGradient) {
    tmp29Result = tmp29(tmp6(tmp7[16]), { absolute: true });
  }
  const children = [tmp29Result, ,];
  tmp29Result = null;
  if (flag6) {
    tmp29Result = null;
    if (!flag13) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp4.searchBarContainer;
      const obj5 = { onChangeText: null, onRemove: null, tags: null, style: null, autoFocus: null, focusOnAdd: null };
      obj5[0] = tmp5[1];
      obj5[1] = callback;
      obj5[2] = memo;
      obj5[3] = tmp4.searchBar;
      tmp6Result = tmp6(tmp7[17]);
      if (flag) {
        flag = someResult;
      }
      obj5[4] = flag;
      obj5[5] = flag2;
      obj4[1] = tmp29(tmp6Result, obj5);
      tmp29Result = tmp29(closure_5, obj4);
      const tmp34 = closure_5;
    }
  }
  children[1] = tmp29Result;
  children[2] = tmp22Result;
  return closure_10(closure_9, { children });
}
