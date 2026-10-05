// === Module 10593: SearchableUserList ===

// Module 10593 (SearchableUserList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import shared from "shared" /* 4729 */;
import UserRowConstants from "UserRowConstants" /* 10592 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10595 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selectedUserIds;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
let UserStore = UserStore_mod;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, searchBar: { height: "duration", minHeight: false }, searchBarRowContainer: obj3, noResults: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedUserIds) => {
  let actions;
  let autoFocusSearch;
  let closure_6;
  let defaultNoResultsFound;
  let disableGradient;
  let disableStickySections;
  let disableThemedGradient;
  let focusOnAdd;
  let hideSearchOnDefaultNoResults;
  let insetEnd;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let onSelectUser;
  let ref;
  let rowMode;
  let withAffinitySuggestions;
  let withAlphabeticalSections;
  let withFriendRequests;
  let withFriendRequestsIncoming;
  let withFriendRequestsOutgoing;
  let withFriendRequestsSpam;
  let withFriendSuggestions;
  let withFriends;
  let withGameFriends;
  let withGuildMembers;
  const tmp = selectedUserIds;
  let obj = selectedUserIds(onSelectUser[9]);
  const cResult = obj.c(82);
  selectedUserIds = selectedUserIds.selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  onSelectUser = selectedUserIds.onSelectUser;
  const handleMessage = selectedUserIds.handleMessage;
  ({ actions, rowMode, autoFocusSearch, focusOnAdd, withGuildMembers, withAffinitySuggestions, withAlphabeticalSections, withFriends, withGameFriends, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, withFriendSuggestions, hideSearchOnDefaultNoResults, defaultNoResultsFound, disableGradient, disableStickySections, disableThemedGradient, insetEnd, onContentLengthChange, onLayout, onScroll } = selectedUserIds);
  if (cResult[0] !== actions) {
    let items = actions;
    if (undefined === actions) {
      items = [];
    }
    cResult[0] = actions;
    cResult[1] = items;
  }
  if (undefined === rowMode) {
    rowMode = UserRowModes.ACTIONS;
  }
  if (undefined === insetEnd) {
    insetEnd = disabledUserIds(tmp2[7]).space.PX_12;
  }
  closure_11();
  const first = handleMessage(rowMode.useState(""), 2)[0];
  handleMessage(rowMode.useState(""), 2);
  if (cResult[2] === first) {
    if (cResult[3] === (undefined === withAffinitySuggestions || withAffinitySuggestions)) {
      if (cResult[4] === (undefined === withAlphabeticalSections || withAlphabeticalSections)) {
        if (cResult[5] === (undefined !== withFriendRequests && withFriendRequests)) {
          if (cResult[6] === (undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming)) {
            if (cResult[7] === (undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing)) {
              if (cResult[8] === (undefined !== withFriendRequestsSpam && withFriendRequestsSpam)) {
                if (cResult[9] === (undefined !== withFriendSuggestions && withFriendSuggestions)) {
                  if (cResult[10] === (undefined === withFriends || withFriends)) {
                    if (cResult[11] === (undefined !== withGameFriends && withGameFriends)) {
                      let tmp20;
                      let tmp22;
                      if (cResult[12] === (undefined !== withGuildMembers && withGuildMembers)) {
                        tmp20 = cResult[13];
                      }
                      const arr2 = disabledUserIds(tmp2[10])(tmp20);
                      const tmp21 = disabledUserIds;
                      if (cResult[14] !== selectedUserIds) {
                        let items1 = selectedUserIds;
                        if (selectedUserIds == null) {
                          items1 = [];
                        }
                        const mapped = items1.map(UserStore.getUser);
                        const found = mapped.filter(tmp(tmp2[11]).isNotNullish);
                        const mapped1 = found.map(tmp21(tmp2[12]));
                        cResult[14] = selectedUserIds;
                        cResult[15] = mapped1;
                        tmp22 = mapped1;
                      } else {
                        tmp22 = cResult[15];
                      }
                      UserStore = tmp22;
                      if (cResult[16] === onSelectUser) {
                        if (cResult[19] !== arr2) {
                          let tmp30;
                          const _Symbol = Symbol;
                          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                            function fe(items) {
                              return items.items.length;
                            }
                            cResult[21] = fe;
                            tmp30 = fe;
                          } else {
                            tmp30 = cResult[21];
                          }
                          const mapped2 = arr2.map(tmp30);
                          class Ae {
                            constructor(arg0, arg1) {
                              let diff;
                              let firstMatch;
                              let flag;
                              let flag2;
                              let tmp3;
                              let user;
                              ({ user, firstMatch } = arr2[arg0].items[arg1]);
                              const props = { type: tmp.type, user, nickname: tmp3, onPress: onSelectUser, handleMessage, disabled: flag, selected: flag2, mode: rowMode, start: 0 === arg1, end: arg1 === diff };
                              tmp3 = undefined;
                              diff = arr2[arg0].items.length - 1;
                              if (user.username !== firstMatch) {
                                tmp3 = firstMatch;
                              }
                              flag = undefined;
                              if (disabledUserIds != null) {
                                flag = disabledUserIds.includes(user.id);
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              flag2 = undefined;
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
                              return { type: "user", props };
                            }
                          }
                          cResult[20] = mapped2;
                        }
                        if (cResult[22] !== arr2) {
                          class Re {
                            constructor(arg0) {
                              const element = { type: "section", props: obj };
                              return element;
                            }
                          }
                          cResult[22] = arr2;
                          cResult[23] = Re;
                        } else {
                          class Re {
                            constructor(arg0) {
                              const element = { type: "section", props: obj };
                              return element;
                            }
                          }
                        }
                        if (cResult[24] !== first) {
                          class Re {
                            constructor(arg0) {
                              const element = { type: "section", props: obj };
                              return element;
                            }
                          }
                          cResult[24] = first;
                          cResult[25] = tmp33;
                        } else {
                          class Re {
                            constructor(arg0) {
                              const element = { type: "section", props: obj };
                              return element;
                            }
                          }
                        }
                        if (cResult[26] === arr2) {
                          class Re {
                            constructor(arg0) {
                              const element = { type: "section", props: obj };
                              return element;
                            }
                          }
                        }
                        class Ae {
                          constructor(arg0, arg1) {
                            let diff;
                            let firstMatch;
                            let flag;
                            let flag2;
                            let tmp3;
                            let user;
                            ({ user, firstMatch } = arr2[arg0].items[arg1]);
                            const props = { type: tmp.type, user, nickname: tmp3, onPress: onSelectUser, handleMessage, disabled: flag, selected: flag2, mode: rowMode, start: 0 === arg1, end: arg1 === diff };
                            tmp3 = undefined;
                            diff = arr2[arg0].items.length - 1;
                            if (user.username !== firstMatch) {
                              tmp3 = firstMatch;
                            }
                            flag = undefined;
                            if (disabledUserIds != null) {
                              flag = disabledUserIds.includes(user.id);
                            }
                            if (flag == null) {
                              flag = false;
                            }
                            flag2 = undefined;
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
                            return { type: "user", props };
                          }
                        }
                        cResult[26] = arr2;
                        cResult[27] = disabledUserIds;
                        cResult[28] = handleMessage;
                        cResult[29] = onSelectUser;
                        cResult[30] = rowMode;
                        cResult[31] = selectedUserIds;
                        cResult[32] = Ae;
                      }
                      cResult[16] = onSelectUser;
                      cResult[17] = tmp22;
                      cResult[18] = tmp27;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj2 = { query: first, withGuildMembers: undefined !== withGuildMembers && withGuildMembers, withAffinitySuggestions: undefined === withAffinitySuggestions || withAffinitySuggestions, withAlphabeticalSections: undefined === withAlphabeticalSections || withAlphabeticalSections, withFriends: undefined === withFriends || withFriends, withGameFriends: undefined !== withGameFriends && withGameFriends, withFriendSuggestions: undefined !== withFriendSuggestions && withFriendSuggestions, withFriendRequests: undefined !== withFriendRequests && withFriendRequests, withFriendRequestsIncoming: undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming, withFriendRequestsOutgoing: undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing, withFriendRequestsSpam: undefined !== withFriendRequestsSpam && withFriendRequestsSpam };
  cResult[2] = first;
  cResult[3] = undefined === withAffinitySuggestions || withAffinitySuggestions;
  cResult[4] = undefined === withAlphabeticalSections || withAlphabeticalSections;
  cResult[5] = undefined !== withFriendRequests && withFriendRequests;
  cResult[6] = undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming;
  cResult[7] = undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing;
  cResult[8] = undefined !== withFriendRequestsSpam && withFriendRequestsSpam;
  cResult[9] = undefined !== withFriendSuggestions && withFriendSuggestions;
  cResult[10] = undefined === withFriends || withFriends;
  cResult[11] = undefined !== withGameFriends && withGameFriends;
  cResult[12] = undefined !== withGuildMembers && withGuildMembers;
  cResult[13] = obj2;
  tmp20 = obj2;
}) : ((selectedUserIds) => {
  let UserFlashListActions;
  let defaultNoResultsFound;
  let disableGradient;
  let disableStickySections;
  let disableThemedGradient;
  let headerSize;
  let insetEnd;
  let intl;
  let obj6;
  let obj8;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let prop;
  let prop2;
  let ref;
  let renderHeader;
  let tmp24Result;
  let tmp31;
  let tmp7Result2;
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
    const tmp = ref;
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
    let tmp3 = onSelectUser;
    insetEnd = disabledUserIds(onSelectUser[7]).space.PX_12;
  }
  ({ onContentLengthChange, onLayout, onScroll } = selectedUserIds);
  const tmp4 = closure_11();
  let obj = ACTIONS;
  const tmp5 = handleMessage(ACTIONS.useState(""), 2);
  const tmp6 = tmp5[1];
  const tmp9 = disabledUserIds(onSelectUser[10])({ query: tmp5[0], withGuildMembers: flag3, withAffinitySuggestions: flag4, withAlphabeticalSections: flag5, withFriends: flag6, withGameFriends: flag7, withFriendSuggestions: flag12, withFriendRequests: flag8, withFriendRequestsIncoming: flag9, withFriendRequestsOutgoing: flag10, withFriendRequestsSpam: flag11 });
  let closure_5 = tmp9;
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
  const items2 = [tmp9];
  const callback = ACTIONS.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      onSelectUser(user);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      const obj = { text: memo[arg0].text };
      announce(intl.formatToPlainString(intl2.t.srlxB8, obj));
    }
  }, items1);
  const memo1 = ACTIONS.useMemo(() => closure_5.map((items) => items.items.length), items2);
  const items3 = [tmp9];
  const callback1 = ACTIONS.useCallback((arg0) => {
    const element = { type: "section", props: obj };
    return element;
  }, items3);
  const tmp13 = tmp5[0].trim().length > 0;
  const items4 = [tmp9, disabledUserIds, onSelectUser, handleMessage, ACTIONS, selectedUserIds];
  const callback2 = ACTIONS.useCallback((arg0, arg1) => {
    let diff;
    let firstMatch;
    let flag;
    let flag2;
    let tmp3;
    let user;
    ({ user, firstMatch } = closure_5[arg0].items[arg1]);
    const props = { type: tmp.type, user, nickname: tmp3, onPress: onSelectUser, handleMessage, disabled: flag, selected: flag2, mode: ACTIONS, start: 0 === arg1, end: arg1 === diff };
    tmp3 = undefined;
    diff = closure_5[arg0].items.length - 1;
    if (user.username !== firstMatch) {
      tmp3 = firstMatch;
    }
    flag = undefined;
    if (disabledUserIds != null) {
      flag = disabledUserIds.includes(user.id);
    }
    if (flag == null) {
      flag = false;
    }
    flag2 = undefined;
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
    return { type: "user", props };
  }, items4);
  ref = ACTIONS.useRef(null);
  let tmp18;
  const useUserListActionsProps = selectedUserIds(onSelectUser[15]).useUserListActionsProps;
  selectedUserIds(onSelectUser[15]);
  if (!tmp13) {
    tmp18 = actions;
  }
  const obj2 = { actions: tmp18, style: prop };
  prop = undefined;
  if (!tmp13) {
    if (flag6) {
      prop = tmp4.searchBarRowContainer;
    }
  }
  const userListActionsProps = useUserListActionsProps(obj2);
  const items5 = [tmp5[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((item) => item > 0);
  const tmp23 = 0 === tmp5[0].length && null != defaultNoResultsFound;
  if (flag13) {
    flag13 = !someResult;
  }
  if (flag13) {
    flag13 = !tmp13;
  }
  if (someResult) {
    const obj3 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd, onContentLengthChange, onLayout, onScroll, disableStickySections, disableThemedGradient };
    tmp24Result = closure_8(tmp16(tmp8[16]).UsersFastList, obj3);
    tmp31 = closure_8;
  } else {
    let tmp28;
    const obj4 = { style: null, children: null };
    const tmp25 = closure_5;
    if (tmp23) {
      const items6 = [tmp4.noResults, ];
      let prop1;
      if (flag6) {
        if (!flag13) {
          prop1 = tmp4.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj4.style = items6;
      obj4.children = defaultNoResultsFound;
      tmp28 = obj4;
    } else {
      obj4.style = tmp4.noResults;
      const obj5 = { title: intl.string(selectedUserIds(onSelectUser[14]).t.V6nAfF), children: closure_8(UserFlashListActions, obj6) };
      const tmp7Result = disabledUserIds(onSelectUser[17]);
      intl = tmp16(tmp8[14]).intl;
      obj6 = { actions, style: prop2 };
      prop2 = undefined;
      UserFlashListActions = tmp16(tmp8[15]).UserFlashListActions;
      if (flag6) {
        prop2 = tmp4.searchBarRowContainer;
      }
      obj4.children = closure_8(tmp7Result, obj5);
      tmp28 = obj4;
    }
    tmp24Result = closure_8(tmp25, tmp28);
    tmp31 = closure_8;
  }
  const children = [!disableGradient && tmp31(tmp7(tmp8[18]), { absolute: true }), , ];
  let tmp31Result2 = null;
  const tmp31Result = !disableGradient && tmp31(tmp7(tmp8[18]), { absolute: true });
  if (flag6) {
    tmp31Result2 = null;
    if (!flag13) {
      const obj7 = { style: tmp4.searchBarContainer, children: tmp31(tmp7Result2, obj8) };
      obj8 = { onChangeText: tmp6, onRemove: callback, tags: memo, style: tmp4.searchBar, autoFocus: flag, focusOnAdd: flag2 };
      const tmp36 = closure_5;
      tmp7Result2 = disabledUserIds(onSelectUser[19]);
      if (flag) {
        flag = someResult;
      }
      tmp31Result2 = tmp31(tmp36, obj7);
    }
  }
  children[1] = tmp31Result2;
  children[2] = tmp24Result;
  return closure_10(closure_9, { children });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default tmp4;