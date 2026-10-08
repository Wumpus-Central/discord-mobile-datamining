// === Module 12083: NewMessageUserList ===

// Module 12083 (NewMessageUserList)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import useChannelName from "useChannelName" /* 5417 */;
import fuzzysearchDefault from "fuzzysearch" /* 6099 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

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
const UserRowModes = fn(10202).UserRowModes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [];
const createStyles = fn(5090);
let obj2 = { searchBarRowContainer: { paddingTop: nativeDefault.space.PX_8 }, noResults: null };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.noResults = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchGDMNames(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  _slicedToArray = _slicedToArray(noop.useState(first), 2)[1];
  if (cResult[1] === arg2) {
    if (cResult[2] === arg1) {
      if (cResult[3] === arg0) {
        let tmp5 = cResult[4];
        let tmp6 = cResult[5];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      return tmp4;
    }
  }
  const fn = function f() {
    if (closure_0) {
      if ("" !== closure_2) {
        closure_0 = closure_2.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
        const found = values.filter(filterGroupDMs);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, closure_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => closure_1_3(item, 2)[1] > 0);
        const obj2 = closure_1(closure_2[15]);
        closure_3(closure_1(closure_2[15]).sortBy(found1, (arg0) => -closure_1_3(arg0, 2)[1]).map((item) => closure_1_3(item, 1)[0]));
        const sortByResult = closure_1(closure_2[15]).sortBy(found1, (arg0) => -closure_1_3(arg0, 2)[1]);
      } else {
        closure_3(closure_1_13);
      }
    } else {
      closure_3(closure_1_13);
    }
  };
  const items1 = [arg0, arg1, arg2];
  cResult[1] = arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp6 = items1;
  tmp5 = fn;
  const tmp3 = _slicedToArray(noop.useState(first), 2);
}) : (function useSearchGDMNames(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const tmp = _slicedToArray(noop.useState([]), 2);
  _slicedToArray = tmp[1];
  let items = [arg0, arg1, arg2];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      if ("" !== closure_2) {
        closure_0 = closure_2.toLocaleLowerCase();
        const _Object = Object;
        const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
        const found = values.filter(filterGroupDMs);
        const mapped = found.map((item) => {
          const items = [item, isMatchNewMessageUserListGroupDM(item, closure_1, closure_0)];
          return items;
        });
        const found1 = mapped.filter((item) => {
          [, tmp] = item;
          return tmp > 0;
        });
        const obj2 = closure_1(closure_2[15]);
        closure_3(closure_1(closure_2[15]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        }).map((item) => {
          [tmp] = item;
          return tmp;
        }));
        const sortByResult = closure_1(closure_2[15]).sortBy(found1, (arg0) => {
          [, tmp] = arg0;
          return -tmp;
        });
      } else {
        closure_3(closure_1_13);
      }
    } else {
      closure_3(closure_1_13);
    }
  }, items);
  return tmp[0];
});
let closure_19 = tmp3;
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NewMessageUserList(selectedUserIds) {
  const cResult = selectedUserIds(onSelectUser[14]).c(75);
  selectedUserIds = selectedUserIds.selectedUserIds;
  const disabledUserIds = selectedUserIds.disabledUserIds;
  onSelectUser = selectedUserIds.onSelectUser;
  const onQueryChanged = selectedUserIds.onQueryChanged;
  ({ actions, noResultActions, rowMode, tagListInputRef, autoFocusSearch, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendSuggestions, withGDMNames, defaultNoResultsFound, overrideResults, afterSearchContent, forceSearchResults, onForceSearchResults, onSearchFocus } = selectedUserIds);
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
  closure_14();
  let obj = selectedUserIds(onSelectUser[14]);
  const tmp14 = undefined !== withGDMNames && withGDMNames;
  [str, View] = onQueryChanged(rowMode.useState(""), 2);
  if (cResult[2] !== onQueryChanged) {
    const fn = function z(arg0) {
      View(arg0);
      if (onQueryChanged != null) {
        onQueryChanged(arg0);
      }
    };
    cResult[2] = onQueryChanged;
    cResult[3] = fn;
  }
  if (cResult[4] !== str) {
    const trimmed = str.trim();
    cResult[4] = str;
    cResult[5] = trimmed;
    let tmp18 = trimmed;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp18) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp12) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp9) {
                  if (cResult[14] === tmp6) {
                    let tmp20 = cResult[15];
                  }
                  const arr2 = disabledUserIds(tmp2[16])(tmp20);
                  const arr3 = closure_19(tmp14, selectedUserIds, tmp18);
                  if (cResult[16] === arr3) {
                    if (cResult[17] === arr2) {
                      if (cResult[22] !== cResult[18]) {
                        const _Symbol3 = Symbol;
                        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                          class Fe {
                            constructor(arg0) {
                              return selectedUserIds.items.length;
                            }
                          }
                          cResult[24] = Fe;
                        } else {
                          class Fe {
                            constructor(arg0) {
                              return selectedUserIds.items.length;
                            }
                          }
                        }
                        const mapped = arr4.map(Fe);
                        cResult[22] = arr4;
                        cResult[23] = mapped;
                      } else {
                        class Fe {
                          constructor(arg0) {
                            return selectedUserIds.items.length;
                          }
                        }
                        if (cResult[25] !== arr4) {
                          class Fe {
                            constructor(arg0) {
                              return selectedUserIds.items.length;
                            }
                          }
                          cResult[25] = arr4;
                          class Ce {
                            constructor(arg0, arg1) {
                              tmp = closure_6[selectedUserIds].items[arg1];
                              type = tmp.type;
                              tmp2 = 0 === arg1;
                              tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                              if ("UserSearchItem" === type) {
                                data = tmp.data;
                                ({ user, firstMatch } = data);
                                tmp5 = selectedUserIds;
                                hasItem = selectedUserIds.includes(user.id);
                                obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                                obj1.type = data.type;
                                obj1.user = user;
                                tmp7 = null;
                                tmp8 = undefined;
                                if (null != firstMatch) {
                                  if (user.username !== firstMatch) {
                                    tmp8 = firstMatch;
                                  }
                                }
                                obj1.nickname = tmp8;
                                tmp9 = onSelectUser;
                                obj1.onPress = onSelectUser;
                                obj4 = disabledUserIds;
                                flag = undefined;
                                if (disabledUserIds != null) {
                                  flag = obj4.includes(user.id);
                                }
                                if (flag == null) {
                                  flag = false;
                                }
                                obj1.disabled = flag;
                                obj1.selected = hasItem;
                                obj5 = closure_7;
                                if (closure_7.isFriend(user.id)) {
                                  if (hasItem) {
                                    tmp10 = UserRowModes;
                                    TOGGLE = UserRowModes.TOGGLE;
                                  }
                                  element = { type: "user", props: null };
                                  obj1.mode = TOGGLE;
                                  tmp11 = jsx;
                                  tmp12 = closure_0;
                                  tmp13 = closure_2;
                                  obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                                  tmp14 = closure_1;
                                  obj8 = closure_1(closure_2[11]);
                                  obj9.children = obj8.getUserTag(user);
                                  obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                                  obj1.arrow = !obj5.isFriend(user.id);
                                  obj1.start = tmp2;
                                  obj1.end = tmp3;
                                  element.props = obj1;
                                  return element;
                                }
                                TOGGLE = ACTIONS;
                              } else {
                                str = "GroupDMChannelRecord";
                                if ("GroupDMChannelRecord" === type) {
                                  element1 = { type: "gdm", props: null };
                                  obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                                  obj10.channel = tmp.data;
                                  tmp4 = onSelectUser;
                                  obj10.onPress = onSelectUser;
                                  obj10.start = tmp2;
                                  obj10.end = tmp3;
                                  element1.props = obj10;
                                  return element1;
                                } else {
                                  return tmp;
                                }
                              }
                              return;
                            }
                          }
                          cResult[26] = tmp43;
                        } else {
                          class Fe {
                            constructor(arg0) {
                              return selectedUserIds.items.length;
                            }
                          }
                        }
                        if (cResult[27] === arr4) {
                          class Fe {
                            constructor(arg0) {
                              return selectedUserIds.items.length;
                            }
                          }
                        }
                        class Ce {
                          constructor(arg0, arg1) {
                            tmp = closure_6[selectedUserIds].items[arg1];
                            type = tmp.type;
                            tmp2 = 0 === arg1;
                            tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                            if ("UserSearchItem" === type) {
                              data = tmp.data;
                              ({ user, firstMatch } = data);
                              tmp5 = selectedUserIds;
                              hasItem = selectedUserIds.includes(user.id);
                              obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                              obj1.type = data.type;
                              obj1.user = user;
                              tmp7 = null;
                              tmp8 = undefined;
                              if (null != firstMatch) {
                                if (user.username !== firstMatch) {
                                  tmp8 = firstMatch;
                                }
                              }
                              obj1.nickname = tmp8;
                              tmp9 = onSelectUser;
                              obj1.onPress = onSelectUser;
                              obj4 = disabledUserIds;
                              flag = undefined;
                              if (disabledUserIds != null) {
                                flag = obj4.includes(user.id);
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              obj1.disabled = flag;
                              obj1.selected = hasItem;
                              obj5 = closure_7;
                              if (closure_7.isFriend(user.id)) {
                                if (hasItem) {
                                  tmp10 = UserRowModes;
                                  TOGGLE = UserRowModes.TOGGLE;
                                }
                                element = { type: "user", props: null };
                                obj1.mode = TOGGLE;
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                                tmp14 = closure_1;
                                obj8 = closure_1(closure_2[11]);
                                obj9.children = obj8.getUserTag(user);
                                obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                                obj1.arrow = !obj5.isFriend(user.id);
                                obj1.start = tmp2;
                                obj1.end = tmp3;
                                element.props = obj1;
                                return element;
                              }
                              TOGGLE = ACTIONS;
                            } else {
                              str = "GroupDMChannelRecord";
                              if ("GroupDMChannelRecord" === type) {
                                element1 = { type: "gdm", props: null };
                                obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                                obj10.channel = tmp.data;
                                tmp4 = onSelectUser;
                                obj10.onPress = onSelectUser;
                                obj10.start = tmp2;
                                obj10.end = tmp3;
                                element1.props = obj10;
                                return element1;
                              } else {
                                return tmp;
                              }
                            }
                            return;
                          }
                        }
                        cResult[27] = arr4;
                        cResult[28] = disabledUserIds;
                        cResult[29] = onSelectUser;
                        cResult[30] = rowMode;
                        cResult[31] = selectedUserIds;
                        cResult[32] = Ce;
                      }
                    }
                  }
                  let _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    class Fe {
                      constructor(arg0) {
                        return selectedUserIds.items.length;
                      }
                    }
                    cResult[19] = tmp25;
                    class Ce {
                      constructor(arg0, arg1) {
                        tmp = closure_6[selectedUserIds].items[arg1];
                        type = tmp.type;
                        tmp2 = 0 === arg1;
                        tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                        if ("UserSearchItem" === type) {
                          data = tmp.data;
                          ({ user, firstMatch } = data);
                          tmp5 = selectedUserIds;
                          hasItem = selectedUserIds.includes(user.id);
                          obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                          obj1.type = data.type;
                          obj1.user = user;
                          tmp7 = null;
                          tmp8 = undefined;
                          if (null != firstMatch) {
                            if (user.username !== firstMatch) {
                              tmp8 = firstMatch;
                            }
                          }
                          obj1.nickname = tmp8;
                          tmp9 = onSelectUser;
                          obj1.onPress = onSelectUser;
                          obj4 = disabledUserIds;
                          flag = undefined;
                          if (disabledUserIds != null) {
                            flag = obj4.includes(user.id);
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          obj1.disabled = flag;
                          obj1.selected = hasItem;
                          obj5 = closure_7;
                          if (closure_7.isFriend(user.id)) {
                            if (hasItem) {
                              tmp10 = UserRowModes;
                              TOGGLE = UserRowModes.TOGGLE;
                            }
                            element = { type: "user", props: null };
                            obj1.mode = TOGGLE;
                            tmp11 = jsx;
                            tmp12 = closure_0;
                            tmp13 = closure_2;
                            obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                            tmp14 = closure_1;
                            obj8 = closure_1(closure_2[11]);
                            obj9.children = obj8.getUserTag(user);
                            obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                            obj1.arrow = !obj5.isFriend(user.id);
                            obj1.start = tmp2;
                            obj1.end = tmp3;
                            element.props = obj1;
                            return element;
                          }
                          TOGGLE = ACTIONS;
                        } else {
                          str = "GroupDMChannelRecord";
                          if ("GroupDMChannelRecord" === type) {
                            element1 = { type: "gdm", props: null };
                            obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                            obj10.channel = tmp.data;
                            tmp4 = onSelectUser;
                            obj10.onPress = onSelectUser;
                            obj10.start = tmp2;
                            obj10.end = tmp3;
                            element1.props = obj10;
                            return element1;
                          } else {
                            return tmp;
                          }
                        }
                        return;
                      }
                    }
                  } else {
                    class Fe {
                      constructor(arg0) {
                        return selectedUserIds.items.length;
                      }
                    }
                  }
                  const mapped1 = arr2.map(tmp24);
                  let slice = arr3.length;
                  let tmp26 = mapped1;
                  if (0 === slice) {
                    class Fe {
                      constructor(arg0) {
                        return selectedUserIds.items.length;
                      }
                    }
                    cResult[16] = arr3;
                    class Ce {
                      constructor(arg0, arg1) {
                        tmp = closure_6[selectedUserIds].items[arg1];
                        type = tmp.type;
                        tmp2 = 0 === arg1;
                        tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                        if ("UserSearchItem" === type) {
                          data = tmp.data;
                          ({ user, firstMatch } = data);
                          tmp5 = selectedUserIds;
                          hasItem = selectedUserIds.includes(user.id);
                          obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                          obj1.type = data.type;
                          obj1.user = user;
                          tmp7 = null;
                          tmp8 = undefined;
                          if (null != firstMatch) {
                            if (user.username !== firstMatch) {
                              tmp8 = firstMatch;
                            }
                          }
                          obj1.nickname = tmp8;
                          tmp9 = onSelectUser;
                          obj1.onPress = onSelectUser;
                          obj4 = disabledUserIds;
                          flag = undefined;
                          if (disabledUserIds != null) {
                            flag = obj4.includes(user.id);
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          obj1.disabled = flag;
                          obj1.selected = hasItem;
                          obj5 = closure_7;
                          if (closure_7.isFriend(user.id)) {
                            if (hasItem) {
                              tmp10 = UserRowModes;
                              TOGGLE = UserRowModes.TOGGLE;
                            }
                            element = { type: "user", props: null };
                            obj1.mode = TOGGLE;
                            tmp11 = jsx;
                            tmp12 = closure_0;
                            tmp13 = closure_2;
                            obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                            tmp14 = closure_1;
                            obj8 = closure_1(closure_2[11]);
                            obj9.children = obj8.getUserTag(user);
                            obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                            obj1.arrow = !obj5.isFriend(user.id);
                            obj1.start = tmp2;
                            obj1.end = tmp3;
                            element.props = obj1;
                            return element;
                          }
                          TOGGLE = ACTIONS;
                        } else {
                          str = "GroupDMChannelRecord";
                          if ("GroupDMChannelRecord" === type) {
                            element1 = { type: "gdm", props: null };
                            obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                            obj10.channel = tmp.data;
                            tmp4 = onSelectUser;
                            obj10.onPress = onSelectUser;
                            obj10.start = tmp2;
                            obj10.end = tmp3;
                            element1.props = obj10;
                            return element1;
                          } else {
                            return tmp;
                          }
                        }
                        return;
                      }
                    }
                    cResult[18] = tmp26;
                  } else {
                    class Fe {
                      constructor(arg0) {
                        return selectedUserIds.items.length;
                      }
                    }
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      class Fe {
                        constructor(arg0) {
                          return selectedUserIds.items.length;
                        }
                      }
                      cResult[20] = tmp28;
                      class Ce {
                        constructor(arg0, arg1) {
                          tmp = closure_6[selectedUserIds].items[arg1];
                          type = tmp.type;
                          tmp2 = 0 === arg1;
                          tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                          if ("UserSearchItem" === type) {
                            data = tmp.data;
                            ({ user, firstMatch } = data);
                            tmp5 = selectedUserIds;
                            hasItem = selectedUserIds.includes(user.id);
                            obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                            obj1.type = data.type;
                            obj1.user = user;
                            tmp7 = null;
                            tmp8 = undefined;
                            if (null != firstMatch) {
                              if (user.username !== firstMatch) {
                                tmp8 = firstMatch;
                              }
                            }
                            obj1.nickname = tmp8;
                            tmp9 = onSelectUser;
                            obj1.onPress = onSelectUser;
                            obj4 = disabledUserIds;
                            flag = undefined;
                            if (disabledUserIds != null) {
                              flag = obj4.includes(user.id);
                            }
                            if (flag == null) {
                              flag = false;
                            }
                            obj1.disabled = flag;
                            obj1.selected = hasItem;
                            obj5 = closure_7;
                            if (closure_7.isFriend(user.id)) {
                              if (hasItem) {
                                tmp10 = UserRowModes;
                                TOGGLE = UserRowModes.TOGGLE;
                              }
                              element = { type: "user", props: null };
                              obj1.mode = TOGGLE;
                              tmp11 = jsx;
                              tmp12 = closure_0;
                              tmp13 = closure_2;
                              obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                              tmp14 = closure_1;
                              obj8 = closure_1(closure_2[11]);
                              obj9.children = obj8.getUserTag(user);
                              obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                              obj1.arrow = !obj5.isFriend(user.id);
                              obj1.start = tmp2;
                              obj1.end = tmp3;
                              element.props = obj1;
                              return element;
                            }
                            TOGGLE = ACTIONS;
                          } else {
                            str = "GroupDMChannelRecord";
                            if ("GroupDMChannelRecord" === type) {
                              element1 = { type: "gdm", props: null };
                              obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                              obj10.channel = tmp.data;
                              tmp4 = onSelectUser;
                              obj10.onPress = onSelectUser;
                              obj10.start = tmp2;
                              obj10.end = tmp3;
                              element1.props = obj10;
                              return element1;
                            } else {
                              return tmp;
                            }
                          }
                          return;
                        }
                      }
                    } else {
                      class Fe {
                        constructor(arg0) {
                          return selectedUserIds.items.length;
                        }
                      }
                    }
                    class Ce {
                      constructor(arg0, arg1) {
                        tmp = closure_6[selectedUserIds].items[arg1];
                        type = tmp.type;
                        tmp2 = 0 === arg1;
                        tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                        if ("UserSearchItem" === type) {
                          data = tmp.data;
                          ({ user, firstMatch } = data);
                          tmp5 = selectedUserIds;
                          hasItem = selectedUserIds.includes(user.id);
                          obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                          obj1.type = data.type;
                          obj1.user = user;
                          tmp7 = null;
                          tmp8 = undefined;
                          if (null != firstMatch) {
                            if (user.username !== firstMatch) {
                              tmp8 = firstMatch;
                            }
                          }
                          obj1.nickname = tmp8;
                          tmp9 = onSelectUser;
                          obj1.onPress = onSelectUser;
                          obj4 = disabledUserIds;
                          flag = undefined;
                          if (disabledUserIds != null) {
                            flag = obj4.includes(user.id);
                          }
                          if (flag == null) {
                            flag = false;
                          }
                          obj1.disabled = flag;
                          obj1.selected = hasItem;
                          obj5 = closure_7;
                          if (closure_7.isFriend(user.id)) {
                            if (hasItem) {
                              tmp10 = UserRowModes;
                              TOGGLE = UserRowModes.TOGGLE;
                            }
                            element = { type: "user", props: null };
                            obj1.mode = TOGGLE;
                            tmp11 = jsx;
                            tmp12 = closure_0;
                            tmp13 = closure_2;
                            obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                            tmp14 = closure_1;
                            obj8 = closure_1(closure_2[11]);
                            obj9.children = obj8.getUserTag(user);
                            obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                            obj1.arrow = !obj5.isFriend(user.id);
                            obj1.start = tmp2;
                            obj1.end = tmp3;
                            element.props = obj1;
                            return element;
                          }
                          TOGGLE = ACTIONS;
                        } else {
                          str = "GroupDMChannelRecord";
                          if ("GroupDMChannelRecord" === type) {
                            element1 = { type: "gdm", props: null };
                            obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                            obj10.channel = tmp.data;
                            tmp4 = onSelectUser;
                            obj10.onPress = onSelectUser;
                            obj10.start = tmp2;
                            obj10.end = tmp3;
                            element1.props = obj10;
                            return element1;
                          } else {
                            return tmp;
                          }
                        }
                        return;
                      }
                    }
                    let intl = tmp(tmp2[17]).intl;
                    slice[0] = intl.string(tmp(tmp2[17]).t.qGlQrW);
                    slice[1] = arr3.map(tmp27);
                    const _Symbol2 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      class Fe {
                        constructor(arg0) {
                          return selectedUserIds.items.length;
                        }
                      }
                      cResult[21] = Re;
                      class Ce {
                        constructor(arg0, arg1) {
                          tmp = closure_6[selectedUserIds].items[arg1];
                          type = tmp.type;
                          tmp2 = 0 === arg1;
                          tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                          if ("UserSearchItem" === type) {
                            data = tmp.data;
                            ({ user, firstMatch } = data);
                            tmp5 = selectedUserIds;
                            hasItem = selectedUserIds.includes(user.id);
                            obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                            obj1.type = data.type;
                            obj1.user = user;
                            tmp7 = null;
                            tmp8 = undefined;
                            if (null != firstMatch) {
                              if (user.username !== firstMatch) {
                                tmp8 = firstMatch;
                              }
                            }
                            obj1.nickname = tmp8;
                            tmp9 = onSelectUser;
                            obj1.onPress = onSelectUser;
                            obj4 = disabledUserIds;
                            flag = undefined;
                            if (disabledUserIds != null) {
                              flag = obj4.includes(user.id);
                            }
                            if (flag == null) {
                              flag = false;
                            }
                            obj1.disabled = flag;
                            obj1.selected = hasItem;
                            obj5 = closure_7;
                            if (closure_7.isFriend(user.id)) {
                              if (hasItem) {
                                tmp10 = UserRowModes;
                                TOGGLE = UserRowModes.TOGGLE;
                              }
                              element = { type: "user", props: null };
                              obj1.mode = TOGGLE;
                              tmp11 = jsx;
                              tmp12 = closure_0;
                              tmp13 = closure_2;
                              obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                              tmp14 = closure_1;
                              obj8 = closure_1(closure_2[11]);
                              obj9.children = obj8.getUserTag(user);
                              obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                              obj1.arrow = !obj5.isFriend(user.id);
                              obj1.start = tmp2;
                              obj1.end = tmp3;
                              element.props = obj1;
                              return element;
                            }
                            TOGGLE = ACTIONS;
                          } else {
                            str = "GroupDMChannelRecord";
                            if ("GroupDMChannelRecord" === type) {
                              element1 = { type: "gdm", props: null };
                              obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                              obj10.channel = tmp.data;
                              tmp4 = onSelectUser;
                              obj10.onPress = onSelectUser;
                              obj10.start = tmp2;
                              obj10.end = tmp3;
                              element1.props = obj10;
                              return element1;
                            } else {
                              return tmp;
                            }
                          }
                          return;
                        }
                      }
                    } else {
                      class Fe {
                        constructor(arg0) {
                          return selectedUserIds.items.length;
                        }
                      }
                    }
                    _Symbol = arr2.findIndex(tmp29);
                    if (-1 === _Symbol) {
                      class Fe {
                        constructor(arg0) {
                          return selectedUserIds.items.length;
                        }
                      }
                      class Ce {
                        constructor(arg0, arg1) {
                          tmp = closure_6[selectedUserIds].items[arg1];
                          type = tmp.type;
                          tmp2 = 0 === arg1;
                          tmp3 = arg1 === closure_6[selectedUserIds].items.length - 1;
                          if ("UserSearchItem" === type) {
                            data = tmp.data;
                            ({ user, firstMatch } = data);
                            tmp5 = selectedUserIds;
                            hasItem = selectedUserIds.includes(user.id);
                            obj1 = { type: null, user: null, nickname: null, onPress: null, disabled: null, selected: null, mode: null, subLabel: null, arrow: null, start: null, end: null };
                            obj1.type = data.type;
                            obj1.user = user;
                            tmp7 = null;
                            tmp8 = undefined;
                            if (null != firstMatch) {
                              if (user.username !== firstMatch) {
                                tmp8 = firstMatch;
                              }
                            }
                            obj1.nickname = tmp8;
                            tmp9 = onSelectUser;
                            obj1.onPress = onSelectUser;
                            obj4 = disabledUserIds;
                            flag = undefined;
                            if (disabledUserIds != null) {
                              flag = obj4.includes(user.id);
                            }
                            if (flag == null) {
                              flag = false;
                            }
                            obj1.disabled = flag;
                            obj1.selected = hasItem;
                            obj5 = closure_7;
                            if (closure_7.isFriend(user.id)) {
                              if (hasItem) {
                                tmp10 = UserRowModes;
                                TOGGLE = UserRowModes.TOGGLE;
                              }
                              element = { type: "user", props: null };
                              obj1.mode = TOGGLE;
                              tmp11 = jsx;
                              tmp12 = closure_0;
                              tmp13 = closure_2;
                              obj9 = { variant: "text-xs/medium", color: "text-muted", children: null };
                              tmp14 = closure_1;
                              obj8 = closure_1(closure_2[11]);
                              obj9.children = obj8.getUserTag(user);
                              obj1.subLabel = jsx(closure_0(closure_2[18]).Text, obj9);
                              obj1.arrow = !obj5.isFriend(user.id);
                              obj1.start = tmp2;
                              obj1.end = tmp3;
                              element.props = obj1;
                              return element;
                            }
                            TOGGLE = ACTIONS;
                          } else {
                            str = "GroupDMChannelRecord";
                            if ("GroupDMChannelRecord" === type) {
                              element1 = { type: "gdm", props: null };
                              obj10 = { channel: null, onPress: null, arrow: true, start: null, end: null };
                              obj10.channel = tmp.data;
                              tmp4 = onSelectUser;
                              obj10.onPress = onSelectUser;
                              obj10.start = tmp2;
                              obj10.end = tmp3;
                              element1.props = obj10;
                              return element1;
                            } else {
                              return tmp;
                            }
                          }
                          return;
                        }
                      }
                      tmp30[HermesBuiltin.arraySpread(mapped1, 0)] = slice;
                      tmp26 = tmp30;
                    }
                  }
                  const items1 = [];
                  const arraySpreadResult = HermesBuiltin.arraySpread(mapped1.slice(0, _Symbol), 0);
                  items1[arraySpreadResult] = slice;
                  slice = mapped1.slice;
                  HermesBuiltin.arraySpread(slice(_Symbol), arraySpreadResult + 1);
                  tmp26 = items1;
                }
              }
            }
          }
        }
      }
    }
  }
  let obj2 = { query: tmp18, withGuildMembers: undefined !== withGuildMembers && withGuildMembers, withAffinitySuggestions: undefined === withAffinitySuggestions || withAffinitySuggestions, withFriends: undefined === withFriends || withFriends, withGameFriends: undefined === withGameFriends || withGameFriends, withFriendSuggestions: undefined !== withFriendSuggestions && withFriendSuggestions, withFriendRequests: undefined !== withFriendRequests && withFriendRequests, withFriendRequestsIncoming: undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming, withFriendRequestsOutgoing: undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing, excludeCurrentUser: true };
  cResult[6] = tmp18;
  cResult[7] = undefined === withAffinitySuggestions || withAffinitySuggestions;
  cResult[8] = undefined !== withFriendRequests && withFriendRequests;
  cResult[9] = undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming;
  cResult[10] = undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing;
  cResult[11] = undefined !== withFriendSuggestions && withFriendSuggestions;
  cResult[12] = undefined === withFriends || withFriends;
  cResult[13] = undefined === withGameFriends || withGameFriends;
  cResult[14] = undefined !== withGuildMembers && withGuildMembers;
  cResult[15] = obj2;
  tmp20 = obj2;
  const tmp16 = onQueryChanged(rowMode.useState(""), 2);
}) : (function NewMessageUserList(selectedUserIds) {
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
  let tmp8 = disabledUserIds(onSelectUser[16])({ query: trimmed, withGuildMembers: flag, withAffinitySuggestions: flag2, withFriends: flag3, withGameFriends: flag4, withFriendSuggestions: flag8, withFriendRequests: flag5, withFriendRequestsIncoming: flag6, withFriendRequestsOutgoing: flag7, excludeCurrentUser: true });
  closure_6 = tmp8;
  const tmp9 = closure_19(flag9, selectedUserIds, trimmed);
  let items1 = [tmp9, tmp8];
  const memo = rowMode.useMemo(() => {
    const mapped = closure_6.map((title) => {
      const obj = { title: title.title, items: null };
      const items = title.items;
      obj.items = items.map((data) => ({ type: "UserSearchItem", data }));
      return obj;
    });
    if (0 === length.length) {
      return mapped;
    } else {
      const obj2 = { title: null, items: null };
      let intl = util.intl;
      obj2.title = intl.string(util.t.qGlQrW);
      obj2.items = length.map((data) => ({ type: "GroupDMChannelRecord", data }));
      const findIndexResult = closure_6.findIndex((title) => {
        const intl = selectedUserIds(1126).intl;
        return title.title === intl.string(selectedUserIds(1126).t.y29JXs);
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
  }, items1);
  const items2 = [memo];
  const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items2);
  const items3 = [memo];
  const items4 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
  const callback1 = rowMode.useCallback((arg0) => {
    const element = { type: "section", props: { title: memo[arg0].title } };
    return element;
  }, items3);
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
        obj.subLabel = collapsed(Text_Text.Text, obj2);
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
  }, items4);
  ref = rowMode.useRef(null);
  let UsersFastList = selectedUserIds;
  let obj = rowMode;
  let tmp3 = onQueryChanged(rowMode.useState(""), 2);
  let tmp14;
  if (trimmed.length <= 0) {
    tmp14 = actions;
  }
  let obj2 = { actions: tmp14, style: null };
  let prop;
  if (trimmed.length <= 0) {
    if (flag3) {
      prop = tmp2.searchBarRowContainer;
    }
  }
  obj2.style = prop;
  const userListActionsProps = selectedUserIds(onSelectUser[19]).useUserListActionsProps(obj2);
  const items5 = [str];
  ({ headerSize, renderHeader } = userListActionsProps);
  const layoutEffect = obj.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items5);
  const someResult = memo1.some((item) => item > 0);
  if (null != overrideResults) {
    if (autoFocusSearch) {
      autoFocusSearch = someResult;
    }
    const obj4 = { children: null };
    const obj5 = { autoFocus: autoFocusSearch, hasQuery: tmp5, onChangeText: callback, onFocus: onSearchFocus, onForceSearchResults, onSelectUser, selectedUserIds, forceSearchResults, tagListInputRef };
    const items6 = [closure_10(tmp6(tmp7[22]), obj5), afterSearchContent, overrideResults];
    obj4.children = items6;
    return closure_12(closure_11, obj4);
  } else if (someResult) {
    UsersFastList = UsersFastList(tmp7[20]).UsersFastList;
    const obj6 = { ref, sections: memo1, getItemProps: callback2, getSectionProps: callback1, listHeaderSize: headerSize, renderListHeader: renderHeader, insetStart: 0, insetEnd: 12, disableThemedGradient: true };
    let tmp30Result = closure_10(UsersFastList, obj6);
  } else {
    const obj7 = { style: null, children: null };
    if (tmp19) {
      const items7 = [noResults, ];
      let prop1;
      if (flag3) {
        prop1 = tmp2.searchBarRowContainer;
      }
      items7[1] = prop1;
      obj7.style = items7;
      obj7.children = defaultNoResultsFound;
      let tmp22 = obj7;
    } else {
      obj7.style = noResults;
      const obj8 = { title: null, subtitle: null, children: null };
      let intl = UsersFastList(tmp7[17]).intl;
      obj8.title = intl.string(UsersFastList(tmp7[17]).t.sPAvXU);
      const intl2 = UsersFastList(tmp7[17]).intl;
      obj8.subtitle = intl2.string(UsersFastList(tmp7[17]).t.nQ05z2);
      const obj9 = { actions: noResultActions };
      obj8.children = closure_10(UsersFastList(tmp7[19]).UserFlashListActions, obj9);
      obj7.children = closure_10(tmp6(tmp7[21]), obj8);
      tmp22 = obj7;
      const tmp6Result2 = tmp6(tmp7[21]);
    }
    tmp30Result = closure_10(c5, tmp22);
  }
  let obj3 = selectedUserIds(onSelectUser[19]);
  tmp19 = 0 === str.length && null != defaultNoResultsFound;
});
export { matchGroupDM };
export { filterGroupDMs };
export const useSearchGDMNames = tmp3;