// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import fuzzysearchDefault from "../../../../../../_runtime/05709_fuzzysearch.js";
import UserRowConstants from "UserRowConstants.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore_mod from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, selectedUserIds, title;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
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
    const obj = useChannelName;
    const channelName = obj.computeChannelName(id, UserStore, RelationshipStore);
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
const View = react_native.View;
let ChannelStore = ChannelStore_mod;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = [];
let createStyles = createStyles_mod;
let obj = { searchBarRowContainer: obj2, noResults: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_2;
      let closure_3;
      let first;
      let mutablePrivateChannels;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      [, _slicedToArray] = react.useState(first);
      if (cResult[1] === arg2) {
        if (cResult[2] === arg1) {
          let tmp5;
          let tmp6;
          if (cResult[3] === arg0) {
            tmp5 = cResult[4];
            tmp6 = cResult[5];
          }
          const effect = react.useEffect(tmp5, tmp6);
          return tmp4;
        }
      }
      const fn = function f() {
        const tmp = closure_0;
        if (tmp) {
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
            const sortByResult = obj2.sortBy(found1, (arg0) => -closure_1_3(arg0, 2)[1]);
            closure_3(sortByResult.map((item) => closure_1_3(item, 1)[0]));
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
    }
  : (arg0, arg1, arg2) => {
      let closure_3;
      let first;
      let mutablePrivateChannels;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      [first, _slicedToArray] = react.useState([]);
      let items = [arg0, arg1, arg2];
      const effect = react.useEffect(() => {
        const tmp = closure_0;
        if (tmp) {
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
              let tmp;
              [, tmp] = item;
              return tmp > 0;
            });
            const obj2 = closure_1(closure_2[15]);
            const sortByResult = obj2.sortBy(found1, (arg0) => {
              let tmp;
              [, tmp] = arg0;
              return -tmp;
            });
            closure_3(
              sortByResult.map((item) => {
                let tmp;
                [tmp] = item;
                return tmp;
              }),
            );
          } else {
            closure_3(closure_1_13);
          }
        } else {
          closure_3(closure_1_13);
        }
      }, items);
      return first;
    };
let closure_19 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedUserIds) => {
      let actions;
      let afterSearchContent;
      let autoFocusSearch;
      let closure_6;
      let defaultNoResultsFound;
      let forceSearchResults;
      let noResultActions;
      let onForceSearchResults;
      let onSearchFocus;
      let onSelectUser;
      let overrideResults;
      let ref;
      let rowMode;
      let str;
      let tagListInputRef;
      let tmp19;
      let withAffinitySuggestions;
      let withFriendRequests;
      let withFriendRequestsIncoming;
      let withFriendRequestsOutgoing;
      let withFriendSuggestions;
      let withFriends;
      let withGDMNames;
      let withGameFriends;
      let withGuildMembers;
      let tmp3 = onSelectUser;
      let obj = selectedUserIds(onSelectUser[14]);
      const cResult = obj.c(75);
      selectedUserIds = selectedUserIds.selectedUserIds;
      const disabledUserIds = selectedUserIds.disabledUserIds;
      onSelectUser = selectedUserIds.onSelectUser;
      const onQueryChanged = selectedUserIds.onQueryChanged;
      ({
        actions,
        noResultActions,
        rowMode,
        tagListInputRef,
        autoFocusSearch,
        withGuildMembers,
        withAffinitySuggestions,
        withFriends,
        withGameFriends,
        withFriendRequests,
        withFriendRequestsIncoming,
        withFriendRequestsOutgoing,
        withFriendSuggestions,
        withGDMNames,
        defaultNoResultsFound,
        overrideResults,
        afterSearchContent,
        forceSearchResults,
        onForceSearchResults,
        onSearchFocus,
      } = selectedUserIds);
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
      let tmp8 = undefined === withAffinitySuggestions || withAffinitySuggestions;
      const tmp15 = undefined !== withGDMNames && withGDMNames;
      closure_14();
      [str, View] = onQueryChanged(rowMode.useState(""), 2);
      onQueryChanged(rowMode.useState(""), 2);
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
        tmp19 = trimmed;
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] === tmp19) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === (undefined !== withFriendRequests && withFriendRequests)) {
            if (cResult[9] === (undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming)) {
              if (cResult[10] === (undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing)) {
                if (cResult[11] === (undefined !== withFriendSuggestions && withFriendSuggestions)) {
                  if (cResult[12] === (undefined === withFriends || withFriends)) {
                    if (cResult[13] === (undefined === withGameFriends || withGameFriends)) {
                      let tmp21;
                      if (cResult[14] === (undefined !== withGuildMembers && withGuildMembers)) {
                        tmp21 = cResult[15];
                      }
                      const arr2 = disabledUserIds(tmp3[16])(tmp21);
                      const arr3 = closure_19(tmp15, selectedUserIds, tmp19);
                      if (cResult[16] === arr3) {
                        let tmp24;
                        if (cResult[17] === arr2) {
                          tmp24 = cResult[18];
                        }
                        ChannelStore = tmp24;
                        if (cResult[22] !== tmp24) {
                          const _Symbol3 = Symbol;
                          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                            class Me {
                              constructor(items) {
                                return items.items.length;
                              }
                            }
                            cResult[24] = Me;
                          } else {
                            class Me {
                              constructor(items) {
                                return items.items.length;
                              }
                            }
                          }
                          class Le {
                            constructor(arg0, arg1) {
                              let firstMatch;
                              let flag;
                              let obj8;
                              let tmp8;
                              let user;
                              const type = tmp.type;
                              const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                              if ("UserSearchItem" === type) {
                                const data = tmp.data;
                                ({ user, firstMatch } = data);
                                const type2 = data.type;
                                const hasItem = selectedUserIds.includes(user.id);
                                const obj = {
                                  type: type2,
                                  user,
                                  nickname: tmp8,
                                  onPress: onSelectUser,
                                  disabled: flag,
                                  selected: hasItem,
                                  mode: null,
                                  subLabel: null,
                                  arrow: null,
                                  start: null,
                                  end: null,
                                };
                                tmp8 = undefined;
                                if (null != firstMatch) {
                                  if (user.username !== firstMatch) {
                                    tmp8 = firstMatch;
                                  }
                                }
                                flag = undefined;
                                if (disabledUserIds != null) {
                                  flag = disabledUserIds.includes(user.id);
                                }
                                if (flag == null) {
                                  flag = false;
                                }
                                if (RelationshipStore.isFriend(user.id)) {
                                  let TOGGLE;
                                  if (hasItem) {
                                    TOGGLE = UserRowModes.TOGGLE;
                                  }
                                  const element = { type: "user", props: obj };
                                  obj.mode = TOGGLE;
                                  const obj2 = {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: obj8.getUserTag(user),
                                  };
                                  const Text = Text_Text.Text;
                                  obj8 = UserUtilsDefault;
                                  obj.subLabel = authStore(Text, obj2);
                                  obj.arrow = !RelationshipStore.isFriend(user.id);
                                  obj.start = 0 === arg1;
                                  obj.end = tmp3;
                                  return element;
                                }
                                TOGGLE = rowMode;
                              } else if ("GroupDMChannelRecord" === type) {
                                const element1 = { type: "gdm", props: obj3 };
                                return element1;
                              } else {
                                return closure_6[arg0].items[arg1];
                              }
                            }
                          }
                          cResult[22] = tmp24;
                          cResult[23] = tmp45;
                        } else {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                        }
                        if (cResult[25] !== tmp24) {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                          cResult[25] = tmp24;
                          cResult[26] = tmp46;
                          class Le {
                            constructor(arg0, arg1) {
                              let firstMatch;
                              let flag;
                              let obj8;
                              let tmp8;
                              let user;
                              const type = tmp.type;
                              const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                              if ("UserSearchItem" === type) {
                                const data = tmp.data;
                                ({ user, firstMatch } = data);
                                const type2 = data.type;
                                const hasItem = selectedUserIds.includes(user.id);
                                const obj = {
                                  type: type2,
                                  user,
                                  nickname: tmp8,
                                  onPress: onSelectUser,
                                  disabled: flag,
                                  selected: hasItem,
                                  mode: null,
                                  subLabel: null,
                                  arrow: null,
                                  start: null,
                                  end: null,
                                };
                                tmp8 = undefined;
                                if (null != firstMatch) {
                                  if (user.username !== firstMatch) {
                                    tmp8 = firstMatch;
                                  }
                                }
                                flag = undefined;
                                if (disabledUserIds != null) {
                                  flag = disabledUserIds.includes(user.id);
                                }
                                if (flag == null) {
                                  flag = false;
                                }
                                if (RelationshipStore.isFriend(user.id)) {
                                  let TOGGLE;
                                  if (hasItem) {
                                    TOGGLE = UserRowModes.TOGGLE;
                                  }
                                  const element = { type: "user", props: obj };
                                  obj.mode = TOGGLE;
                                  const obj2 = {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: obj8.getUserTag(user),
                                  };
                                  const Text = Text_Text.Text;
                                  obj8 = UserUtilsDefault;
                                  obj.subLabel = authStore(Text, obj2);
                                  obj.arrow = !RelationshipStore.isFriend(user.id);
                                  obj.start = 0 === arg1;
                                  obj.end = tmp3;
                                  return element;
                                }
                                TOGGLE = rowMode;
                              } else if ("GroupDMChannelRecord" === type) {
                                const element1 = { type: "gdm", props: obj3 };
                                return element1;
                              } else {
                                return closure_6[arg0].items[arg1];
                              }
                            }
                          }
                        } else {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                        }
                        if (cResult[27] === tmp24) {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                        }
                        class Le {
                          constructor(arg0, arg1) {
                            let firstMatch;
                            let flag;
                            let obj8;
                            let tmp8;
                            let user;
                            const type = tmp.type;
                            const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                            if ("UserSearchItem" === type) {
                              const data = tmp.data;
                              ({ user, firstMatch } = data);
                              const type2 = data.type;
                              const hasItem = selectedUserIds.includes(user.id);
                              const obj = {
                                type: type2,
                                user,
                                nickname: tmp8,
                                onPress: onSelectUser,
                                disabled: flag,
                                selected: hasItem,
                                mode: null,
                                subLabel: null,
                                arrow: null,
                                start: null,
                                end: null,
                              };
                              tmp8 = undefined;
                              if (null != firstMatch) {
                                if (user.username !== firstMatch) {
                                  tmp8 = firstMatch;
                                }
                              }
                              flag = undefined;
                              if (disabledUserIds != null) {
                                flag = disabledUserIds.includes(user.id);
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              if (RelationshipStore.isFriend(user.id)) {
                                let TOGGLE;
                                if (hasItem) {
                                  TOGGLE = UserRowModes.TOGGLE;
                                }
                                const element = { type: "user", props: obj };
                                obj.mode = TOGGLE;
                                const obj2 = {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: obj8.getUserTag(user),
                                };
                                const Text = Text_Text.Text;
                                obj8 = UserUtilsDefault;
                                obj.subLabel = authStore(Text, obj2);
                                obj.arrow = !RelationshipStore.isFriend(user.id);
                                obj.start = 0 === arg1;
                                obj.end = tmp3;
                                return element;
                              }
                              TOGGLE = rowMode;
                            } else if ("GroupDMChannelRecord" === type) {
                              const element1 = { type: "gdm", props: obj3 };
                              return element1;
                            } else {
                              return closure_6[arg0].items[arg1];
                            }
                          }
                        }
                        cResult[27] = tmp24;
                        cResult[28] = disabledUserIds;
                        cResult[29] = onSelectUser;
                        cResult[30] = rowMode;
                        cResult[31] = selectedUserIds;
                        cResult[32] = Le;
                      }
                      const _Symbol = Symbol;
                      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                        class Me {
                          constructor(items) {
                            return items.items.length;
                          }
                        }
                        cResult[19] = tmp27;
                      } else {
                        class Me {
                          constructor(items) {
                            return items.items.length;
                          }
                        }
                      }
                      const mapped = arr2.map(tmp27);
                      let tmp28 = mapped;
                      if (0 !== arr3.length) {
                        class Me {
                          constructor(items) {
                            return items.items.length;
                          }
                        }
                        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                          cResult[20] = tmp30;
                        } else {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                        }
                        let obj2 = { title: tmp31(tmp2(tmp3[17]).t.qGlQrW), items: arr3.map(tmp30) };
                        let intl = tmp2(tmp3[17]).intl;
                        class Le {
                          constructor(arg0, arg1) {
                            let firstMatch;
                            let flag;
                            let obj8;
                            let tmp8;
                            let user;
                            const type = tmp.type;
                            const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                            if ("UserSearchItem" === type) {
                              const data = tmp.data;
                              ({ user, firstMatch } = data);
                              const type2 = data.type;
                              const hasItem = selectedUserIds.includes(user.id);
                              const obj = {
                                type: type2,
                                user,
                                nickname: tmp8,
                                onPress: onSelectUser,
                                disabled: flag,
                                selected: hasItem,
                                mode: null,
                                subLabel: null,
                                arrow: null,
                                start: null,
                                end: null,
                              };
                              tmp8 = undefined;
                              if (null != firstMatch) {
                                if (user.username !== firstMatch) {
                                  tmp8 = firstMatch;
                                }
                              }
                              flag = undefined;
                              if (disabledUserIds != null) {
                                flag = disabledUserIds.includes(user.id);
                              }
                              if (flag == null) {
                                flag = false;
                              }
                              if (RelationshipStore.isFriend(user.id)) {
                                let TOGGLE;
                                if (hasItem) {
                                  TOGGLE = UserRowModes.TOGGLE;
                                }
                                const element = { type: "user", props: obj };
                                obj.mode = TOGGLE;
                                const obj2 = {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  children: obj8.getUserTag(user),
                                };
                                const Text = Text_Text.Text;
                                obj8 = UserUtilsDefault;
                                obj.subLabel = authStore(Text, obj2);
                                obj.arrow = !RelationshipStore.isFriend(user.id);
                                obj.start = 0 === arg1;
                                obj.end = tmp3;
                                return element;
                              }
                              TOGGLE = rowMode;
                            } else if ("GroupDMChannelRecord" === type) {
                              const element1 = { type: "gdm", props: obj3 };
                              return element1;
                            } else {
                              return closure_6[arg0].items[arg1];
                            }
                          }
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                          cResult[21] = Re;
                        } else {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                        }
                        const findIndexResult = arr2.findIndex(Re);
                        if (-1 !== findIndexResult) {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                          const arraySpreadResult = HermesBuiltin.arraySpread(
                            tmp37,
                            mapped.slice(0, findIndexResult),
                            0,
                          );
                          tmp37[arraySpreadResult] = obj2;
                          class Le {
                            constructor(arg0, arg1) {
                              let firstMatch;
                              let flag;
                              let obj8;
                              let tmp8;
                              let user;
                              const type = tmp.type;
                              const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                              if ("UserSearchItem" === type) {
                                const data = tmp.data;
                                ({ user, firstMatch } = data);
                                const type2 = data.type;
                                const hasItem = selectedUserIds.includes(user.id);
                                const obj = {
                                  type: type2,
                                  user,
                                  nickname: tmp8,
                                  onPress: onSelectUser,
                                  disabled: flag,
                                  selected: hasItem,
                                  mode: null,
                                  subLabel: null,
                                  arrow: null,
                                  start: null,
                                  end: null,
                                };
                                tmp8 = undefined;
                                if (null != firstMatch) {
                                  if (user.username !== firstMatch) {
                                    tmp8 = firstMatch;
                                  }
                                }
                                flag = undefined;
                                if (disabledUserIds != null) {
                                  flag = disabledUserIds.includes(user.id);
                                }
                                if (flag == null) {
                                  flag = false;
                                }
                                if (RelationshipStore.isFriend(user.id)) {
                                  let TOGGLE;
                                  if (hasItem) {
                                    TOGGLE = UserRowModes.TOGGLE;
                                  }
                                  const element = { type: "user", props: obj };
                                  obj.mode = TOGGLE;
                                  const obj2 = {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: obj8.getUserTag(user),
                                  };
                                  const Text = Text_Text.Text;
                                  obj8 = UserUtilsDefault;
                                  obj.subLabel = authStore(Text, obj2);
                                  obj.arrow = !RelationshipStore.isFriend(user.id);
                                  obj.start = 0 === arg1;
                                  obj.end = tmp3;
                                  return element;
                                }
                                TOGGLE = rowMode;
                              } else if ("GroupDMChannelRecord" === type) {
                                const element1 = { type: "gdm", props: obj3 };
                                return element1;
                              } else {
                                return closure_6[arg0].items[arg1];
                              }
                            }
                          }
                          HermesBuiltin.arraySpread(tmp37, mapped.slice(findIndexResult), arraySpreadResult + 1);
                          tmp28 = tmp37;
                        } else {
                          class Me {
                            constructor(items) {
                              return items.items.length;
                            }
                          }
                          tmp34[HermesBuiltin.arraySpread(tmp34, mapped, 0)] = obj2;
                          class Le {
                            constructor(arg0, arg1) {
                              let firstMatch;
                              let flag;
                              let obj8;
                              let tmp8;
                              let user;
                              const type = tmp.type;
                              const tmp3 = arg1 === closure_6[arg0].items.length - 1;
                              if ("UserSearchItem" === type) {
                                const data = tmp.data;
                                ({ user, firstMatch } = data);
                                const type2 = data.type;
                                const hasItem = selectedUserIds.includes(user.id);
                                const obj = {
                                  type: type2,
                                  user,
                                  nickname: tmp8,
                                  onPress: onSelectUser,
                                  disabled: flag,
                                  selected: hasItem,
                                  mode: null,
                                  subLabel: null,
                                  arrow: null,
                                  start: null,
                                  end: null,
                                };
                                tmp8 = undefined;
                                if (null != firstMatch) {
                                  if (user.username !== firstMatch) {
                                    tmp8 = firstMatch;
                                  }
                                }
                                flag = undefined;
                                if (disabledUserIds != null) {
                                  flag = disabledUserIds.includes(user.id);
                                }
                                if (flag == null) {
                                  flag = false;
                                }
                                if (RelationshipStore.isFriend(user.id)) {
                                  let TOGGLE;
                                  if (hasItem) {
                                    TOGGLE = UserRowModes.TOGGLE;
                                  }
                                  const element = { type: "user", props: obj };
                                  obj.mode = TOGGLE;
                                  const obj2 = {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: obj8.getUserTag(user),
                                  };
                                  const Text = Text_Text.Text;
                                  obj8 = UserUtilsDefault;
                                  obj.subLabel = authStore(Text, obj2);
                                  obj.arrow = !RelationshipStore.isFriend(user.id);
                                  obj.start = 0 === arg1;
                                  obj.end = tmp3;
                                  return element;
                                }
                                TOGGLE = rowMode;
                              } else if ("GroupDMChannelRecord" === type) {
                                const element1 = { type: "gdm", props: obj3 };
                                return element1;
                              } else {
                                return closure_6[arg0].items[arg1];
                              }
                            }
                          }
                        }
                      }
                      cResult[16] = arr3;
                      cResult[17] = arr2;
                      cResult[18] = tmp28;
                      tmp24 = tmp28;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj3 = {
        query: tmp19,
        withGuildMembers: tmp7,
        withAffinitySuggestions: tmp8,
        withFriends: tmp9,
        withGameFriends: tmp10,
        withFriendSuggestions: tmp14,
        withFriendRequests: tmp11,
        withFriendRequestsIncoming: tmp12,
        withFriendRequestsOutgoing: tmp13,
        excludeCurrentUser: true,
      };
      cResult[6] = tmp19;
      cResult[7] = tmp8;
      cResult[8] = undefined !== withFriendRequests && withFriendRequests;
      cResult[9] = undefined !== withFriendRequestsIncoming && withFriendRequestsIncoming;
      cResult[10] = undefined !== withFriendRequestsOutgoing && withFriendRequestsOutgoing;
      cResult[11] = undefined !== withFriendSuggestions && withFriendSuggestions;
      cResult[12] = undefined === withFriends || withFriends;
      cResult[13] = undefined === withGameFriends || withGameFriends;
      cResult[14] = undefined !== withGuildMembers && withGuildMembers;
      cResult[15] = obj3;
      tmp21 = obj3;
    }
  : (selectedUserIds) => {
      let UserFlashListActions;
      let _undefined;
      let afterSearchContent;
      let autoFocusSearch;
      let c5;
      let defaultNoResultsFound;
      let forceSearchResults;
      let headerSize;
      let intl;
      let intl2;
      let items7;
      let noResultActions;
      let obj6;
      let onForceSearchResults;
      let onSearchFocus;
      let overrideResults;
      let prop;
      let ref;
      let renderHeader;
      let rowMode;
      let str;
      let tagListInputRef;
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
        const tmp = ref;
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
      let obj = rowMode;
      let tmp3 = onQueryChanged(rowMode.useState(""), 2);
      [str, c5] = tmp3;
      let items = [onQueryChanged];
      const callback = rowMode.useCallback((arg0) => {
        _undefined(arg0);
        if (onQueryChanged != null) {
          onQueryChanged(arg0);
        }
      }, items);
      const trimmed = str.trim();
      let tmp8 = disabledUserIds(onSelectUser[16])({
        query: trimmed,
        withGuildMembers: flag,
        withAffinitySuggestions: flag2,
        withFriends: flag3,
        withGameFriends: flag4,
        withFriendSuggestions: flag8,
        withFriendRequests: flag5,
        withFriendRequestsIncoming: flag6,
        withFriendRequestsOutgoing: flag7,
        excludeCurrentUser: true,
      });
      let closure_6 = tmp8;
      const tmp9 = closure_19(flag9, selectedUserIds, trimmed);
      const length = tmp9;
      let items1 = [tmp9, tmp8];
      const memo = rowMode.useMemo(() => {
        let intl;
        const mapped = closure_6.map((title) => {
          let items;
          const obj = { title: title.title, items: items.map((data) => ({ type: "UserSearchItem", data })) };
          items = title.items;
          return obj;
        });
        if (0 === length.length) {
          return mapped;
        } else {
          let items1;
          const obj2 = {
            title: intl.string(intl3.t.qGlQrW),
            items: length.map((data) => ({ type: "GroupDMChannelRecord", data })),
          };
          intl = intl3.intl;
          const findIndexResult = closure_6.findIndex((title) => {
            title = title.title;
            const intl = selectedUserIds(onSelectUser[17]).intl;
            return title === intl.string(selectedUserIds(onSelectUser[17]).t.y29JXs);
          });
          if (-1 === findIndexResult) {
            let items = [];
            items[HermesBuiltin.arraySpread(items, mapped, 0)] = obj2;
            items1 = items;
          } else {
            items1 = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.slice(0, findIndexResult), 0);
            items1[arraySpreadResult] = obj2;
            HermesBuiltin.arraySpread(items1, mapped.slice(findIndexResult), arraySpreadResult + 1);
          }
          return items1;
        }
      }, items1);
      const items2 = [memo];
      const memo1 = rowMode.useMemo(() => memo.map((items) => items.items.length), items2);
      const items3 = [memo];
      const items4 = [memo, selectedUserIds, onSelectUser, disabledUserIds, rowMode];
      const callback1 = rowMode.useCallback((arg0) => {
        const element = { type: "section", props: obj };
        return element;
      }, items3);
      const callback2 = rowMode.useCallback((arg0, arg1) => {
        let firstMatch;
        let flag;
        let obj8;
        let tmp8;
        let user;
        const type = tmp.type;
        const tmp3 = arg1 === memo[arg0].items.length - 1;
        if ("UserSearchItem" === type) {
          const data = tmp.data;
          ({ user, firstMatch } = data);
          const type2 = data.type;
          const hasItem = selectedUserIds.includes(user.id);
          const obj = {
            type: type2,
            user,
            nickname: tmp8,
            onPress: onSelectUser,
            disabled: flag,
            selected: hasItem,
            mode: null,
            subLabel: null,
            arrow: null,
            start: null,
            end: null,
          };
          tmp8 = undefined;
          if (null != firstMatch) {
            if (user.username !== firstMatch) {
              tmp8 = firstMatch;
            }
          }
          flag = undefined;
          if (disabledUserIds != null) {
            flag = disabledUserIds.includes(user.id);
          }
          if (flag == null) {
            flag = false;
          }
          if (RelationshipStore.isFriend(user.id)) {
            let TOGGLE;
            if (hasItem) {
              TOGGLE = UserRowModes.TOGGLE;
            }
            const element = { type: "user", props: obj };
            obj.mode = TOGGLE;
            const obj2 = { variant: "text-xs/medium", color: "text-muted", children: obj8.getUserTag(user) };
            const Text = Text_Text.Text;
            obj8 = UserUtilsDefault;
            obj.subLabel = authStore(Text, obj2);
            obj.arrow = !RelationshipStore.isFriend(user.id);
            obj.start = 0 === arg1;
            obj.end = tmp3;
            return element;
          }
          TOGGLE = rowMode;
        } else if ("GroupDMChannelRecord" === type) {
          const element1 = { type: "gdm", props: obj3 };
          return element1;
        } else {
          return memo[arg0].items[arg1];
        }
      }, items4);
      ref = rowMode.useRef(null);
      let tmp16;
      const useUserListActionsProps = selectedUserIds(onSelectUser[19]).useUserListActionsProps;
      selectedUserIds(onSelectUser[19]);
      if (trimmed.length <= 0) {
        tmp16 = actions;
      }
      let obj2 = { actions: tmp16, style: prop };
      prop = undefined;
      if (trimmed.length <= 0) {
        if (flag3) {
          prop = tmp2.searchBarRowContainer;
        }
      }
      const userListActionsProps = useUserListActionsProps(obj2);
      const items5 = [str];
      ({ headerSize, renderHeader } = userListActionsProps);
      const layoutEffect = obj.useLayoutEffect(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToTop(false);
        }
      }, items5);
      const someResult = memo1.some((item) => item > 0);
      const tmp21 = 0 === str.length && null != defaultNoResultsFound;
      if (null == overrideResults) {
        if (someResult) {
          const obj3 = {
            ref,
            sections: memo1,
            getItemProps: callback2,
            getSectionProps: callback1,
            listHeaderSize: headerSize,
            renderListHeader: renderHeader,
            insetStart: 0,
            insetEnd: 12,
            disableThemedGradient: true,
          };
          closure_10(tmp14(onSelectUser[20]).UsersFastList, obj3);
        } else {
          let tmp24;
          const obj4 = { style: null, children: null };
          const tmp22 = c5;
          if (tmp21) {
            const items6 = [tmp2.noResults];
            let prop1;
            if (flag3) {
              prop1 = tmp2.searchBarRowContainer;
            }
            items6[1] = prop1;
            obj4.style = items6;
            obj4.children = defaultNoResultsFound;
            tmp24 = obj4;
          } else {
            obj4.style = tmp2.noResults;
            const obj5 = {
              title: intl.string(selectedUserIds(onSelectUser[17]).t.sPAvXU),
              subtitle: intl2.string(selectedUserIds(onSelectUser[17]).t.nQ05z2),
              children: closure_10(UserFlashListActions, obj6),
            };
            const tmp6Result = disabledUserIds(onSelectUser[21]);
            intl = tmp14(tmp7[17]).intl;
            intl2 = tmp14(tmp7[17]).intl;
            UserFlashListActions = tmp14(tmp7[19]).UserFlashListActions;
            obj6 = { actions: noResultActions };
            obj4.children = closure_10(tmp6Result, obj5);
            tmp24 = obj4;
          }
          closure_10(tmp22, tmp24);
        }
      }
      const tmp6Result2 = disabledUserIds(onSelectUser[22]);
      if (autoFocusSearch) {
        autoFocusSearch = someResult;
      }
      const obj7 = { children: items7 };
      items7 = [
        closure_10(tmp6Result2, {
          autoFocus: autoFocusSearch,
          hasQuery: trimmed.length > 0,
          onChangeText: callback,
          onFocus: onSearchFocus,
          onForceSearchResults,
          onSelectUser,
          selectedUserIds,
          forceSearchResults,
          tagListInputRef,
        }),
        afterSearchContent,
        overrideResults,
      ];
      return closure_12(closure_11, obj7);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx",
);

export default tmp5;
export { matchGroupDM };
export { filterGroupDMs };
export const useSearchGDMNames = tmp4;
