// === Module 10593: SearchableUserList ===

// Module 10593 (SearchableUserList)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import shared from "shared" /* 4729 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10595 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10592).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { searchBarContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, searchBar: { height: "done", minHeight: false }, searchBarRowContainer: null, noResults: null };
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.searchBarRowContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.noResults = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selectedUserIds) => {
  const cResult = selectedUserIds(onSelectUser[9]).c(82);
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
  let obj = selectedUserIds(onSelectUser[9]);
  const tmp = selectedUserIds;
  const first = handleMessage(rowMode.useState(""), 2)[0];
  if (cResult[2] === first) {
    if (cResult[3] === tmp7) {
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp11) {
          if (cResult[6] === tmp12) {
            if (cResult[7] === tmp13) {
              if (cResult[8] === tmp14) {
                if (cResult[9] === tmp15) {
                  if (cResult[10] === tmp9) {
                    if (cResult[11] === tmp10) {
                      if (cResult[12] === tmp6) {
                        let tmp20 = cResult[13];
                      }
                      const arr2 = disabledUserIds(tmp2[10])(tmp20);
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
                        let tmp22 = mapped1;
                      } else {
                        tmp22 = cResult[15];
                      }
                      UserStore = tmp22;
                      if (cResult[16] === onSelectUser) {
                        if (cResult[19] !== arr2) {
                          const _Symbol = Symbol;
                          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                            function fe(items) {
                              return items.items.length;
                            }
                            cResult[21] = fe;
                            let tmp29 = fe;
                          } else {
                            tmp29 = cResult[21];
                          }
                          const mapped2 = arr2.map(tmp29);
                          cResult[19] = arr2;
                          cResult[20] = mapped2;
                        } else {
                          if (cResult[22] !== arr2) {
                            class Re {
                              constructor(arg0) {
                                element = { type: "section", props: null };
                                obj1 = { title: closure_5[selectedUserIds].title };
                                element.props = obj1;
                                return element;
                              }
                            }
                            cResult[22] = arr2;
                            cResult[23] = Re;
                          } else {
                            class Re {
                              constructor(arg0) {
                                element = { type: "section", props: null };
                                obj1 = { title: closure_5[selectedUserIds].title };
                                element.props = obj1;
                                return element;
                              }
                            }
                          }
                          if (cResult[24] !== first) {
                            class Re {
                              constructor(arg0) {
                                element = { type: "section", props: null };
                                obj1 = { title: closure_5[selectedUserIds].title };
                                element.props = obj1;
                                return element;
                              }
                            }
                            cResult[24] = first;
                            cResult[25] = tmp33;
                          } else {
                            class Re {
                              constructor(arg0) {
                                element = { type: "section", props: null };
                                obj1 = { title: closure_5[selectedUserIds].title };
                                element.props = obj1;
                                return element;
                              }
                            }
                          }
                          if (cResult[26] === arr2) {
                            class Re {
                              constructor(arg0) {
                                element = { type: "section", props: null };
                                obj1 = { title: closure_5[selectedUserIds].title };
                                element.props = obj1;
                                return element;
                              }
                            }
                          }
                          class Ae {
                            constructor(arg0, arg1) {
                              tmp = closure_5[selectedUserIds].items[arg1];
                              ({ user, firstMatch } = tmp);
                              props = { type: tmp.type, user, nickname: null, onPress: null, handleMessage: null, disabled: null, selected: null, mode: null, start: null, end: null };
                              tmp3 = undefined;
                              diff = closure_5[selectedUserIds].items.length - 1;
                              if (user.username !== firstMatch) {
                                tmp3 = firstMatch;
                              }
                              props.nickname = tmp3;
                              props.onPress = onSelectUser;
                              props.handleMessage = handleMessage;
                              obj2 = disabledUserIds;
                              flag = undefined;
                              if (disabledUserIds != null) {
                                flag = obj2.includes(user.id);
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              props.disabled = flag;
                              obj3 = selectedUserIds;
                              flag2 = undefined;
                              if (selectedUserIds != null) {
                                flag2 = obj3.includes(user.id);
                              }
                              if (!flag2) {
                                hasItem = undefined;
                                if (obj2 != null) {
                                  hasItem = obj2.includes(user.id);
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
                      }
                      function ve(arg0) {
                        const user = UserStore.getUser(tmp.id);
                        if (null != user) {
                          onSelectUser(user);
                          const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                          const intl = util.intl;
                          const obj = { text: tmp.text };
                          AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
                        }
                      }
                      cResult[16] = onSelectUser;
                      cResult[17] = tmp22;
                      cResult[18] = ve;
                      tmp21 = disabledUserIds;
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
  const tmp18 = handleMessage(rowMode.useState(""), 2);
}) : ((selectedUserIds) => {
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
  const tmp5 = handleMessage(ACTIONS.useState(""), 2);
  const tmp8 = disabledUserIds(onSelectUser[10])({ query: tmp5[0], withGuildMembers: flag3, withAffinitySuggestions: flag4, withAlphabeticalSections: flag5, withFriends: flag6, withGameFriends: flag7, withFriendSuggestions: flag12, withFriendRequests: flag8, withFriendRequestsIncoming: flag9, withFriendRequestsOutgoing: flag10, withFriendRequestsSpam: flag11 });
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
  let tmp16;
  if (!tmp12) {
    tmp16 = actions;
  }
  const obj2 = { actions: tmp16, style: null };
  let prop;
  if (!tmp12) {
    if (flag6) {
      prop = tmp4.searchBarRowContainer;
    }
  }
  obj2.style = prop;
  const userListActionsProps = selectedUserIds(onSelectUser[15]).useUserListActionsProps(obj2);
  const items5 = [tmp5[0]];
  ({ renderHeader, headerSize } = userListActionsProps);
  const layoutEffect = ACTIONS.useLayoutEffect(() => {
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
    const obj4 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd, onContentLengthChange, onLayout, onScroll, disableStickySections, disableThemedGradient };
    let tmp22Result = closure_8(tmp15(tmp7[16]).UsersFastList, obj4);
    let tmp29 = closure_8;
  } else {
    const obj5 = { style: null, children: null };
    if (tmp21) {
      const items6 = [noResults, ];
      let prop1;
      if (flag6) {
        if (!flag13) {
          prop1 = tmp4.searchBarRowContainer;
        }
      }
      items6[1] = prop1;
      obj5.style = items6;
      obj5.children = defaultNoResultsFound;
      let tmp26 = obj5;
    } else {
      obj5.style = noResults;
      const obj6 = { title: null, children: null };
      let intl = tmp15(tmp7[14]).intl;
      obj6.title = intl.string(tmp15(tmp7[14]).t.V6nAfF);
      const obj7 = { actions, style: null };
      let prop2;
      if (flag6) {
        prop2 = tmp4.searchBarRowContainer;
      }
      obj7.style = prop2;
      obj6.children = closure_8(tmp15(tmp7[15]).UserFlashListActions, obj7);
      obj5.children = closure_8(tmp6(tmp7[17]), obj6);
      tmp26 = obj5;
      const tmp6Result = tmp6(tmp7[17]);
    }
    tmp22Result = closure_8(closure_5, tmp26);
    tmp29 = closure_8;
  }
  let tmp29Result = !disableGradient;
  if (!disableGradient) {
    tmp29Result = tmp29(tmp6(tmp7[18]), { absolute: true });
  }
  const children = [tmp29Result, , ];
  let tmp29Result2 = null;
  if (flag6) {
    tmp29Result2 = null;
    if (!flag13) {
      const obj8 = { style: tmp4.searchBarContainer, children: null };
      const obj9 = { onChangeText: tmp5[1], onRemove: callback, tags: memo, style: tmp4.searchBar, autoFocus: null, focusOnAdd: null };
      if (flag) {
        flag = someResult;
      }
      obj9.autoFocus = flag;
      obj9.focusOnAdd = flag2;
      obj8.children = tmp29(tmp6(tmp7[19]), obj9);
      tmp29Result2 = tmp29(closure_5, obj8);
      const tmp6Result2 = tmp6(tmp7[19]);
    }
  }
  children[1] = tmp29Result2;
  children[2] = tmp22Result;
  return closure_10(closure_9, { children });
});