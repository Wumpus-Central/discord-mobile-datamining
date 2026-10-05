// discord_app/modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import intl2 from "../../../../../intl/index.native.tsx";
import PermissionUtilsAll from "../../../../../utils/PermissionUtils.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import GuildUtilsDefault from "../../../../../utils/GuildUtils.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import _mod9496 from "../../../../autocompleter/index.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelMemberStore_mod from "../../../../../stores/ChannelMemberStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const _modDef9496 = _mod9496;
let closure_12;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
let ChannelMemberStore = ChannelMemberStore_mod;
({ EVERYONE_CHANNEL_ID: metroImportDefault, MemberListRowTypes: metroImportAll } = ChannelMemberStore);
ChannelMemberStore = ChannelMemberStore_mod;
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let ref;
      let str;
      let tmp16;
      let tmp7;
      let obj = guildId(ref[12]);
      const cResult = obj.c(30);
      guildId = guildId.guildId;
      const listRef = guildId.listRef;
      const searchable = guildId.searchable;
      const searchableEmptyState = guildId.searchableEmptyState;
      let obj2 = queryResults;
      ref = queryResults.useRef(null);
      const tmp4 = _slicedToArray(queryResults.useState(""), 2);
      [str, _slicedToArray] = tmp4;
      const tmp5 = _slicedToArray(queryResults.useState(closure_20), 2);
      let closure_6 = tmp5[1];
      if (cResult[0] !== guildId) {
        const fn = function l() {
          let obj2;
          const tmp = _modDef9496;
          const items = [_mod9496.AutocompleterResultTypes.USER];
          const obj = { userFilters: obj2 };
          obj2 = { guild: guildId, strict: true };
          const tmp2 = new tmp(
            (arg0, str) => {
              if ("" === str.trim()) {
                closure_1_6(closure_2_20);
              } else {
                closure_1_6(arg0);
              }
            },
            items,
            undefined,
            obj,
          );
          return tmp2;
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const first1 = _slicedToArray(obj2.useState(tmp7), 1)[0];
      if (cResult[2] === first1) {
        let tmp9;
        let tmp10;
        let tmp12;
        if (cResult[3] === searchable) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
        }
        const effect = obj2.useEffect(tmp9, tmp10);
        if (cResult[6] !== str) {
          const trimmed = str.trim();
          cResult[6] = str;
          cResult[7] = trimmed;
          tmp12 = trimmed;
        } else {
          tmp12 = cResult[7];
        }
        let closure_8 = tmp14;
        [tmp16, ChannelMemberStore] = obj2.useState(searchable);
        _slicedToArray(obj2.useState(searchable), 2);
        if ((cResult[8] === "") !== tmp12) {
          let tmp17;
          let tmp18;
          let tmp20;
          if (cResult[9] === tmp5[0]) {
            tmp17 = cResult[10];
            tmp18 = cResult[11];
          }
          const effect1 = obj2.useEffect(tmp17, tmp18);
          if (cResult[12] !== listRef) {
            const fn2 = function w() {
              const current = listRef.current;
              if (current != null) {
                current.scrollToTop(false);
              }
            };
            cResult[12] = listRef;
            cResult[13] = fn2;
            tmp20 = fn2;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === listRef) {
            let tmp21;
            if (cResult[15] === str) {
              tmp21 = cResult[16];
            }
            const layoutEffect = obj2.useLayoutEffect(tmp20, tmp21);
            if (cResult[17] === first1) {
              let tmp23;
              if (cResult[18] === guildId) {
                tmp23 = cResult[19];
              }
              if (cResult[20] === tmp16) {
                if (cResult[21] === str) {
                  if (cResult[22] === searchable) {
                    let tmp24;
                    if (cResult[23] === searchableEmptyState) {
                      tmp24 = cResult[24];
                    }
                    if ((cResult[25] === "") !== tmp12) {
                      if (cResult[26] === tmp23) {
                        if (cResult[27] === tmp5[0]) {
                          let tmp26;
                          if (cResult[28] === tmp24) {
                            tmp26 = cResult[29];
                          }
                          return tmp26;
                        }
                      }
                    }
                    const obj3 = {
                      hasQuery: null,
                      queryResults: tmp5[0],
                      onChangeText: tmp23,
                      searchBarRef: ref,
                      searchBarEmptyState: tmp24,
                    };
                    class P {
                      constructor(str) {
                        first1.search(str);
                        _slicedToArray(str);
                        if ("" !== str.trim()) {
                          const obj = GuildUtilsDefault;
                          const members = obj.requestMembers(guildId, str);
                        }
                      }
                    }
                    class L {
                      constructor() {
                        let closure_0;
                        if (first.length <= 0) {
                          if (closure_8) {
                            const _setTimeout = setTimeout;
                            const timeout = setTimeout(() => {
                              closure_1_9(false);
                            }, 300);
                            return () => {
                              clearTimeout(closure_0);
                            };
                          }
                        }
                        closure_9(true);
                      }
                    }
                    cResult[26] = tmp23;
                    cResult[27] = tmp5[0];
                    cResult[28] = tmp24;
                    cResult[29] = obj3;
                    tmp26 = obj3;
                  }
                }
              }
              class P {
                constructor(str) {
                  first1.search(str);
                  _slicedToArray(str);
                  if ("" !== str.trim()) {
                    const obj = GuildUtilsDefault;
                    const members = obj.requestMembers(guildId, str);
                  }
                }
              }
              cResult[20] = tmp16;
              cResult[21] = str;
              class L {
                constructor() {
                  let closure_0;
                  if (first.length <= 0) {
                    if (closure_8) {
                      const _setTimeout = setTimeout;
                      const timeout = setTimeout(() => {
                        closure_1_9(false);
                      }, 300);
                      return () => {
                        clearTimeout(closure_0);
                      };
                    }
                  }
                  closure_9(true);
                }
              }
              cResult[23] = searchableEmptyState;
              cResult[24] = null;
              tmp24 = tmp25;
            }
            class P {
              constructor(str) {
                first1.search(str);
                _slicedToArray(str);
                if ("" !== str.trim()) {
                  const obj = GuildUtilsDefault;
                  const members = obj.requestMembers(guildId, str);
                }
              }
            }
            cResult[17] = first1;
            cResult[18] = guildId;
            class L {
              constructor() {
                let closure_0;
                if (first.length <= 0) {
                  if (closure_8) {
                    const _setTimeout = setTimeout;
                    const timeout = setTimeout(() => {
                      closure_1_9(false);
                    }, 300);
                    return () => {
                      clearTimeout(closure_0);
                    };
                  }
                }
                closure_9(true);
              }
            }
            tmp23 = P;
          }
          let items = [listRef, str];
          cResult[14] = listRef;
          class L {
            constructor() {
              let closure_0;
              if (first.length <= 0) {
                if (closure_8) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => {
                    closure_1_9(false);
                  }, 300);
                  return () => {
                    clearTimeout(closure_0);
                  };
                }
              }
              closure_9(true);
            }
          }
          cResult[15] = str;
          cResult[16] = items;
          tmp21 = items;
        }
        class L {
          constructor() {
            let closure_0;
            if (first.length <= 0) {
              if (closure_8) {
                const _setTimeout = setTimeout;
                const timeout = setTimeout(() => {
                  closure_1_9(false);
                }, 300);
                return () => {
                  clearTimeout(closure_0);
                };
              }
            }
            closure_9(true);
          }
        }
        const items1 = [tmp5[0], "" !== tmp12];
        cResult[8] = "" !== tmp12;
        cResult[9] = tmp5[0];
        cResult[10] = L;
        cResult[11] = items1;
        tmp18 = items1;
        tmp17 = L;
      }
      class E {
        constructor() {
          if (searchable) {
            const searchContext = first1.createSearchContext();
          } else {
            _slicedToArray("");
            first1.clean();
            const current = ref.current;
            if (current != null) {
              current.setText("");
            }
          }
        }
      }
      const items2 = [searchable, first1];
      cResult[2] = first1;
      cResult[3] = searchable;
      cResult[4] = E;
      cResult[5] = items2;
      tmp10 = items2;
      tmp9 = E;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const listRef = guildId.listRef;
      const searchable = guildId.searchable;
      const searchableEmptyState = guildId.searchableEmptyState;
      let str;
      const ref = str.useRef(null);
      let tmp2 = ref(str.useState(""), 2);
      str = tmp2[0];
      let closure_6 = tmp2[1];
      const tmp3 = ref(str.useState(closure_20), 2);
      const queryResults = tmp3[0];
      let closure_8 = tmp3[1];
      const first1 = ref(
        str.useState(() => {
          let obj2;
          const tmp = _modDef9496;
          const items = [_mod9496.AutocompleterResultTypes.USER];
          const obj = { userFilters: obj2 };
          obj2 = { guild: guildId, strict: true };
          const tmp2 = new tmp(
            (arg0, str) => {
              if ("" === str.trim()) {
                closure_1_8(closure_2_20);
              } else {
                closure_1_8(arg0);
              }
            },
            items,
            undefined,
            obj,
          );
          return tmp2;
        }),
        1,
      )[0];
      let items = [searchable, first1];
      const effect = str.useEffect(() => {
        if (searchable) {
          const searchContext = first1.createSearchContext();
        } else {
          closure_6("");
          first1.clean();
          const current = ref.current;
          if (current != null) {
            current.setText("");
          }
        }
      }, items);
      const tmp7 = "" !== str.trim();
      let closure_10 = tmp7;
      const tmp8 = ref(str.useState(searchable), 2);
      const first2 = tmp8[0];
      closure_12 = tmp8[1];
      const items1 = [queryResults, tmp7];
      const effect1 = str.useEffect(() => {
        let closure_0;
        if (first.length <= 0) {
          if (closure_10) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => {
              closure_1_12(false);
            }, 300);
            return () => {
              clearTimeout(closure_0);
            };
          }
        }
        closure_12(true);
      }, items1);
      const items2 = [listRef, str];
      const layoutEffect = str.useLayoutEffect(() => {
        const current = listRef.current;
        if (current != null) {
          current.scrollToTop(false);
        }
      }, items2);
      const items3 = [first1, guildId];
      const items4 = [searchable, searchableEmptyState, first2, str];
      const callback = str.useCallback((str) => {
        first1.search(str);
        closure_6(str);
        if ("" !== str.trim()) {
          const obj = GuildUtilsDefault;
          const members = obj.requestMembers(guildId, str);
        }
      }, items3);
      let obj = {
        hasQuery: tmp7,
        queryResults,
        onChangeText: callback,
        searchBarRef: ref,
        searchBarEmptyState: str.useMemo(() => {
          let tmp = null;
          if (searchable) {
            tmp = null;
            if (!first2) {
              let tmp3Result;
              if (searchableEmptyState != null) {
                tmp3Result = tmp3(str);
              }
              tmp = tmp3Result;
            }
          }
          return tmp;
        }, items4),
      };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let channelId;
        let disableBottomSafeZone;
        let disableStickySections;
        let disableThemedGradient;
        let headerShown;
        let inActionSheet;
        let insetEnd;
        let isNameplatedList;
        let length;
        let listActionHeight;
        let listActionRenderer;
        let listStyleOverride;
        let onChangeText;
        let onUserPress;
        let opensUserProfileOnUserPress;
        let queryResults;
        let searchBarEmptyState;
        let searchBarRef;
        let searchable;
        let searchableEmptyState;
        let stateFromStores1;
        let obj = channelId(onUserPress[12]);
        const cResult = obj.c(96);
        ({ searchable, searchableEmptyState, channelId } = guildId);
        guildId = guildId.guildId;
        const roleId = guildId.roleId;
        ({ headerShown, onUserPress } = guildId);
        const onUserLongPress = guildId.onUserLongPress;
        ({
          opensUserProfileOnUserPress,
          disableStickySections,
          inActionSheet,
          disableThemedGradient,
          listStyleOverride,
          disableBottomSafeZone,
          insetEnd,
          isNameplatedList,
        } = guildId);
        let canShowDisplayNameStylesFont = guildId.canShowDisplayNameStylesFont;
        const tmp4 = undefined !== searchable && searchable;
        let closure_6 = undefined === opensUserProfileOnUserPress || opensUserProfileOnUserPress;
        canShowDisplayNameStylesFont = undefined !== canShowDisplayNameStylesFont && canShowDisplayNameStylesFont;
        let tmp6 = guildId;
        const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
        const ref = isNameplatedList.useRef(null);
        if (cResult[0] === guildId) {
          if (cResult[1] === tmp4) {
            let tmp8;
            let tmp12;
            if (cResult[2] === searchableEmptyState) {
              tmp8 = cResult[3];
            }
            const tmp10 = closure_21(tmp8);
            const hasQuery = tmp10.hasQuery;
            ({ onChangeText, queryResults, searchBarRef, searchBarEmptyState } = tmp10);
            let tmp11 = globalThis;
            const _Symbol = Symbol;
            let str = "react.memo_cache_sentinel";
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              let tmp13 = hasQuery;
              const items = [hasQuery];
              cResult[4] = items;
              tmp12 = items;
            } else {
              tmp12 = cResult[4];
            }
            if (cResult[5] === channelId) {
              let tmp14;
              let tmp16;
              let tmp18;
              let tmp21;
              let tmp20;
              let tmp25;
              if (cResult[6] === guildId) {
                tmp14 = cResult[7];
              }
              const tmpResult = channelId(onUserPress[18]);
              const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp12, tmp14);
              const groups = stateFromStoresObject.groups;
              const rows = stateFromStoresObject.rows;
              const _Symbol2 = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [groups];
                let num5 = 8;
                cResult[8] = items1;
                tmp16 = items1;
              } else {
                tmp16 = cResult[8];
              }
              if (cResult[9] !== channelId) {
                function te() {
                  if (channelId !== metroImportDefault) {
                    return ChannelStore.getChannel(tmp);
                  }
                }
                cResult[9] = channelId;
                cResult[10] = te;
                tmp18 = te;
              } else {
                tmp18 = cResult[10];
              }
              const tmpResult3 = channelId(onUserPress[18]);
              const stateFromStores = tmpResult3.useStateFromStores(tmp16, tmp18);
              const _Symbol3 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items2 = [stateFromStores1];
                function ae() {
                  return stateFromStores1.getChannelId();
                }
                cResult[11] = items2;
                cResult[12] = ae;
                tmp21 = ae;
                tmp20 = items2;
              } else {
                tmp20 = cResult[11];
                tmp21 = cResult[12];
              }
              const tmpResult4 = channelId(onUserPress[18]);
              stateFromStores1 = tmpResult4.useStateFromStores(tmp20, tmp21);
              const tmp24 = tmp6(onUserPress[19])();
              if (cResult[13] !== guildId) {
                const guild = stateFromStores.getGuild(guildId);
                let guildVisualOwnerId;
                if (null != guild) {
                  const obj7 = roleId(onUserPress[20]);
                  guildVisualOwnerId = obj7.getGuildVisualOwnerId(guild);
                }
                cResult[13] = guildId;
                cResult[14] = guildVisualOwnerId;
                tmp25 = guildVisualOwnerId;
              } else {
                tmp25 = cResult[14];
              }
              let user = tmp25;
              const ref1 = isNameplatedList.useRef(0);
              const ref2 = isNameplatedList.useRef(0);
              if (cResult[15] === channelId) {
                if (cResult[16] === guildId) {
                  if (cResult[17] === hasQuery) {
                    let tmp32;
                    if (cResult[18] === tmp24) {
                      tmp32 = cResult[19];
                    }
                    const guildId2 = tmp32.guildId;
                    const channelId2 = tmp32.channelId;
                    const hasQuery2 = tmp32.hasQuery;
                    const listRef = tmp32.listRef;
                    const scrollOffsetRef = tmp32.scrollOffsetRef;
                    const heightRef = tmp32.heightRef;
                    const scaledRowHeight = tmp32.scaledRowHeight;
                    const items3 = [
                      channelId2,
                      guildId2,
                      hasQuery2,
                      scaledRowHeight,
                      heightRef,
                      listRef,
                      scrollOffsetRef,
                    ];
                    const memo = isNameplatedList.useMemo(() => {
                      let ref3;
                      let rowHeight;
                      return guildId(onUserPress[15])(() => {
                        let tmp = null == ref.current || hasQuery;
                        if (!tmp) {
                          tmp = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
                          const tmp4 = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
                        }
                        if (!tmp) {
                          const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
                          const obj = guildId(ref[16]);
                          const result = obj.subscribeChannelDimensions(obj2);
                        }
                      }, 50);
                    }, items3);
                    if (cResult[20] !== memo) {
                      class Se {
                        constructor(nativeEvent) {
                          ref1.current = nativeEvent.nativeEvent.layout.height;
                          memo();
                        }
                      }
                      cResult[20] = memo;
                      cResult[21] = Se;
                    } else {
                      class Se {
                        constructor(nativeEvent) {
                          ref1.current = nativeEvent.nativeEvent.layout.height;
                          memo();
                        }
                      }
                    }
                    if (cResult[22] !== memo) {
                      class Se {
                        constructor(nativeEvent) {
                          ref1.current = nativeEvent.nativeEvent.layout.height;
                          memo();
                        }
                      }
                      cResult[22] = memo;
                      cResult[23] = tmp36;
                    } else {
                      class Se {
                        constructor(nativeEvent) {
                          ref1.current = nativeEvent.nativeEvent.layout.height;
                          memo();
                        }
                      }
                    }
                    if (cResult[24] === stateFromStores) {
                      class Se {
                        constructor(nativeEvent) {
                          ref1.current = nativeEvent.nativeEvent.layout.height;
                          memo();
                        }
                      }
                      ({ listActionRenderer, listActionHeight } = tmp6(onUserPress[21])(tmp38));
                      tmp6(onUserPress[21])(tmp38);
                      if (cResult[27] === stateFromStores) {
                        class Se {
                          constructor(nativeEvent) {
                            ref1.current = nativeEvent.nativeEvent.layout.height;
                            memo();
                          }
                        }
                        const effect = isNameplatedList.useEffect(Ce, tmp42);
                        const _Symbol4 = Symbol;
                        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                          class Se {
                            constructor(nativeEvent) {
                              ref1.current = nativeEvent.nativeEvent.layout.height;
                              memo();
                            }
                          }
                          const items4 = [rows, user];
                          class Ce {
                            constructor() {
                              if (null != stateFromStores) {
                                memo();
                              }
                            }
                          }
                          class Te {
                            constructor() {
                              if (null != roleId) {
                                let obj = channelId(onUserPress[22]);
                                if (!obj.isEveryoneRoleId(guildId, tmp)) {
                                  let tmp6 = null;
                                  if (closure_0 !== canShowDisplayNameStylesFont) {
                                    tmp6 = closure_0;
                                  }
                                  closure_0 = tmp6;
                                  const members = rows.getMembers(guildId);
                                  const found = members.filter((roles) => {
                                    roles = roles.roles;
                                    const hasItem = roles.includes(roleId) && null != user.getUser(roles.userId);
                                    return hasItem;
                                  });
                                  return found.sort((userId, userId2) => {
                                    user = UserStore.getUser(userId.userId);
                                    const user1 = UserStore.getUser(userId2.userId);
                                    const obj = NicknameUtilsDefault;
                                    let str = obj.getNickname(guildId, closure_0, user);
                                    if (str == null) {
                                      const tmp3Result = UserUtilsDefault;
                                      str = tmp3Result.getGlobalName(user);
                                    }
                                    const tmp3Result3 = NicknameUtilsDefault;
                                    let str2 = tmp3Result3.getNickname(guildId, closure_0, user1);
                                    if (str2 == null) {
                                      const tmp3Result4 = UserUtilsDefault;
                                      str2 = tmp3Result4.getGlobalName(user1);
                                    }
                                    if (str == null) {
                                      str = "";
                                    }
                                    const localeCompare = str.localeCompare;
                                    if (str2 == null) {
                                      str2 = "";
                                    }
                                    return localeCompare(str2);
                                  });
                                }
                              }
                              return [];
                            }
                          }
                        } else {
                          class Se {
                            constructor(nativeEvent) {
                              ref1.current = nativeEvent.nativeEvent.layout.height;
                              memo();
                            }
                          }
                        }
                        class Ce {
                          constructor() {
                            if (null != stateFromStores) {
                              memo();
                            }
                          }
                        }
                        class Te {
                          constructor() {
                            if (null != roleId) {
                              let obj = channelId(onUserPress[22]);
                              if (!obj.isEveryoneRoleId(guildId, tmp)) {
                                let tmp6 = null;
                                if (closure_0 !== canShowDisplayNameStylesFont) {
                                  tmp6 = closure_0;
                                }
                                closure_0 = tmp6;
                                const members = rows.getMembers(guildId);
                                const found = members.filter((roles) => {
                                  roles = roles.roles;
                                  const hasItem = roles.includes(roleId) && null != user.getUser(roles.userId);
                                  return hasItem;
                                });
                                return found.sort((userId, userId2) => {
                                  user = UserStore.getUser(userId.userId);
                                  const user1 = UserStore.getUser(userId2.userId);
                                  const obj = NicknameUtilsDefault;
                                  let str = obj.getNickname(guildId, closure_0, user);
                                  if (str == null) {
                                    const tmp3Result = UserUtilsDefault;
                                    str = tmp3Result.getGlobalName(user);
                                  }
                                  const tmp3Result3 = NicknameUtilsDefault;
                                  let str2 = tmp3Result3.getNickname(guildId, closure_0, user1);
                                  if (str2 == null) {
                                    const tmp3Result4 = UserUtilsDefault;
                                    str2 = tmp3Result4.getGlobalName(user1);
                                  }
                                  if (str == null) {
                                    str = "";
                                  }
                                  const localeCompare = str.localeCompare;
                                  if (str2 == null) {
                                    str2 = "";
                                  }
                                  return localeCompare(str2);
                                });
                              }
                            }
                            return [];
                          }
                        }
                        cResult[32] = channelId;
                        cResult[33] = guildId;
                        cResult[34] = roleId;
                        cResult[35] = Te;
                      }
                      class Ce {
                        constructor() {
                          if (null != stateFromStores) {
                            memo();
                          }
                        }
                      }
                      tmp42[0] = stateFromStores;
                      tmp42[1] = memo;
                      cResult[27] = stateFromStores;
                      cResult[28] = memo;
                      cResult[29] = Ce;
                      cResult[30] = tmp42;
                    }
                    const obj3 = { channel: stateFromStores, disable: hasQuery || !tmp5 };
                    cResult[24] = stateFromStores;
                    cResult[25] = hasQuery || !(undefined === headerShown || headerShown);
                    cResult[26] = obj3;
                  }
                }
              }
              let obj4 = {
                guildId,
                channelId,
                hasQuery,
                listRef: ref,
                scrollOffsetRef: ref2,
                heightRef: ref1,
                scaledRowHeight: tmp24,
              };
              cResult[15] = channelId;
              cResult[16] = guildId;
              cResult[17] = hasQuery;
              cResult[18] = tmp24;
              cResult[19] = obj4;
              tmp32 = obj4;
            }
            let fn = function $() {
              let tmp3 = null;
              const getProps = ChannelMemberStore.getProps;
              if (channelId !== metroImportDefault) {
                tmp3 = channelId;
              }
              return getProps(guildId, tmp3);
            };
            cResult[5] = channelId;
            let num3 = 6;
            cResult[6] = guildId;
            let num4 = 7;
            cResult[7] = fn;
            tmp14 = fn;
          }
        }
        let obj5 = { guildId, listRef: ref, searchable: tmp4, searchableEmptyState };
        cResult[0] = guildId;
        cResult[1] = tmp4;
        cResult[2] = searchableEmptyState;
        cResult[3] = obj5;
        tmp8 = obj5;
      }
    : (searchable) => {
        let canShowDisplayNameStylesFont;
        let disableBottomSafeZone;
        let disableStickySections;
        let disableThemedGradient;
        let headerShown;
        let inActionSheet;
        let insetEnd;
        let items12;
        let listActionHeight;
        let listActionRenderer;
        let listStyleOverride;
        let mapped;
        let obj8;
        let obj9;
        let onChangeText;
        let searchBarEmptyState;
        let searchBarRef;
        let searchableEmptyState;
        let tmp17;
        let flag = searchable.searchable;
        if (flag === undefined) {
          flag = false;
        }
        const channelId = searchable.channelId;
        let guildId = searchable.guildId;
        const roleId = searchable.roleId;
        ({ headerShown, searchableEmptyState } = searchable);
        if (headerShown === undefined) {
          headerShown = true;
        }
        const onUserPress = searchable.onUserPress;
        const onUserLongPress = searchable.onUserLongPress;
        let flag2 = searchable.opensUserProfileOnUserPress;
        if (flag2 === undefined) {
          flag2 = true;
        }
        const isNameplatedList = searchable.isNameplatedList;
        ({
          canShowDisplayNameStylesFont,
          disableStickySections,
          inActionSheet,
          disableThemedGradient,
          listStyleOverride,
          disableBottomSafeZone,
          insetEnd,
        } = searchable);
        if (canShowDisplayNameStylesFont === undefined) {
          canShowDisplayNameStylesFont = false;
        }
        let stateFromStoresArray;
        closure_20 = undefined;
        let memo2;
        const tmp2 = onUserPress;
        let tmp = guildId;
        const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
        let obj = flag2;
        const ref = flag2.useRef(null);
        let tmp4 = memo2({ guildId, listRef: ref, searchable: flag, searchableEmptyState });
        const hasQuery = tmp4.hasQuery;
        const queryResults = tmp4.queryResults;
        ({ onChangeText, searchBarRef, searchBarEmptyState } = tmp4);
        let obj2 = channelId(onUserPress[18]);
        const items = [hasQuery];
        const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
          let tmp3 = null;
          const getProps = ChannelMemberStore.getProps;
          if (channelId !== metroImportDefault) {
            tmp3 = channelId;
          }
          return getProps(guildId, tmp3);
        });
        const groups = stateFromStoresObject.groups;
        const rows = stateFromStoresObject.rows;
        const obj3 = channelId(onUserPress[18]);
        const items1 = [queryResults];
        const stateFromStores = obj3.useStateFromStores(items1, () => {
          if (channelId !== metroImportDefault) {
            return ChannelStore.getChannel(tmp);
          }
        });
        let obj4 = channelId(onUserPress[18]);
        const items2 = [stateFromStores];
        const stateFromStores1 = obj4.useStateFromStores(items2, () => stateFromStores.getChannelId());
        const tmp9 = guildId(onUserPress[19])();
        const items3 = [guildId];
        const memo = flag2.useMemo(() => {
          const guild = GuildStore.getGuild(guildId);
          let guildVisualOwnerId;
          if (null != guild) {
            const obj = PermissionUtilsAll;
            guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
          }
          return guildVisualOwnerId;
        }, items3);
        const ref1 = flag2.useRef(0);
        const ref2 = flag2.useRef(0);
        let closure_6 = tmp9;
        const items4 = [channelId, guildId, hasQuery, tmp9, ref1, ref, ref2];
        const memo1 = flag2.useMemo(() => {
          let ref3;
          let rowHeight;
          return guildId(onUserPress[15])(() => {
            let tmp = null == ref.current || hasQuery;
            if (!tmp) {
              tmp = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
              const tmp4 = channelId !== canShowDisplayNameStylesFont && null == channel.getChannel(tmp2);
            }
            if (!tmp) {
              const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
              const obj = guildId(ref[16]);
              const result = obj.subscribeChannelDimensions(obj2);
            }
          }, 50);
        }, items4);
        const items5 = [memo1];
        const items6 = [memo1];
        const callback = flag2.useCallback((nativeEvent) => {
          ref1.current = nativeEvent.nativeEvent.layout.height;
          memo1();
        }, items5);
        const callback1 = flag2.useCallback((nativeEvent) => {
          ref2.current = nativeEvent.nativeEvent.contentOffset.y;
          memo1();
        }, items6);
        let obj5 = { channel: stateFromStores, disable: tmp17 };
        tmp17 = hasQuery;
        const tmp16 = guildId(onUserPress[21]);
        if (!hasQuery) {
          tmp17 = !headerShown;
        }
        const items7 = [stateFromStores, memo1];
        ({ listActionRenderer, listActionHeight } = tmp16(obj5));
        tmp16(obj5);
        const effect = obj.useEffect(() => {
          if (null != stateFromStores) {
            memo1();
          }
        }, items7);
        const items8 = [groups, stateFromStores1];
        const tmp5Result = channelId(tmp2[18]);
        stateFromStoresArray = tmp5Result.useStateFromStoresArray(items8, () => {
          if (null != roleId) {
            let obj = channelId(onUserPress[22]);
            if (!obj.isEveryoneRoleId(guildId, tmp)) {
              let tmp6 = null;
              if (closure_0 !== canShowDisplayNameStylesFont) {
                tmp6 = closure_0;
              }
              closure_0 = tmp6;
              const members = groups.getMembers(guildId);
              const found = members.filter((roles) => {
                roles = roles.roles;
                const hasItem = roles.includes(roleId) && null != stateFromStores1.getUser(roles.userId);
                return hasItem;
              });
              return found.sort((userId, userId2) => {
                const user = UserStore.getUser(userId.userId);
                const user1 = UserStore.getUser(userId2.userId);
                const obj = NicknameUtilsDefault;
                let str = obj.getNickname(guildId, closure_0, user);
                if (str == null) {
                  const tmp3Result = UserUtilsDefault;
                  str = tmp3Result.getGlobalName(user);
                }
                const tmp3Result3 = NicknameUtilsDefault;
                let str2 = tmp3Result3.getNickname(guildId, closure_0, user1);
                if (str2 == null) {
                  const tmp3Result4 = UserUtilsDefault;
                  str2 = tmp3Result4.getGlobalName(user1);
                }
                if (str == null) {
                  str = "";
                }
                const localeCompare = str.localeCompare;
                if (str2 == null) {
                  str2 = "";
                }
                return localeCompare(str2);
              });
            }
          }
          return [];
        });
        let tmp20 = null != roleId;
        if (tmp20) {
          const tmp5Result2 = channelId(tmp2[22]);
          tmp20 = !tmp5Result2.isEveryoneRoleId(guildId, roleId);
        }
        closure_20 = tmp20;
        const items9 = [guildId, roleId, tmp20, hasQuery, queryResults];
        memo2 = obj.useMemo(() => {
          if (closure_20) {
            let found;
            if (hasQuery) {
              found = queryResults.filter((record) => {
                const member = groups.getMember(guildId, record.record.id);
                let found;
                if (member != null) {
                  const roles = member.roles;
                  if (roles != null) {
                    found = roles.find((item) => item === closure_1_2);
                  }
                }
                return null != found;
              });
            }
            return found;
          }
          found = queryResults;
        }, items9);
        const items10 = [groups, memo2, tmp20];
        const items11 = [
          tmp20,
          stateFromStoresArray,
          memo2,
          hasQuery,
          guildId,
          rows,
          groups,
          memo,
          onUserPress,
          flag2,
          channelId,
          stateFromStores1,
          onUserLongPress,
          analyticsLocations,
          isNameplatedList,
          canShowDisplayNameStylesFont,
        ];
        const callback2 = obj.useCallback((arg0) => {
          let count;
          let intl;
          let obj;
          let obj2;
          let title;
          if (memo2.length > 0) {
            const element = { type: "section", props: obj };
            obj = { title: intl.string(intl2.t["zkoeq/"]) };
            intl = intl2.intl;
            return element;
          } else if (!closure_20) {
            ({ title, count } = groups[arg0]);
            if (null != title) {
              if (0 !== count) {
                let element1;
                if (tmp3 === ref1.UNKNOWN) {
                  element1 = { type: "placeholder" };
                } else {
                  element1 = { type: "section", props: obj2 };
                  const _HermesInternal = HermesInternal;
                  obj2 = { title: "" + title + " \u2014 " + count };
                }
                return element1;
              }
            }
          }
        }, items10);
        let tmp23Result = null;
        const callback3 = obj.useCallback((arg0, arg1) => {
          let closure_1;
          let colorString;
          let colorStrings;
          let comparator2;
          let end;
          let fn;
          let guildMember;
          let isOwner;
          let nick;
          let premiumSince;
          let tmp20;
          let tmp3;
          let closure_0 = arg0;
          guildId = arg1;
          if (closure_20) {
            if (!hasQuery) {
              if (arg1 < stateFromStoresArray.length) {
                const user1 = stateFromStores1.getUser(tmp4.userId);
                if (null != user1) {
                  let obj = {
                    user: user1,
                    guildMember: stateFromStoresArray[arg1],
                    end: arg1 === stateFromStoresArray.length - 1,
                  };
                  tmp3 = obj;
                }
              }
            }
            let num4 = 0;
            if (null != tmp3) {
              const user = tmp3.user;
              const memberListMember = tmp3.memberListMember;
              ({ guildMember, comparator: comparator2 } = tmp3);
              let obj2 = {
                type: memo.NONE,
                user,
                nickname: nick,
                usernameColor: colorString,
                roleColors: colorStrings,
                isNameplatedRow: isNameplatedList,
                premiumSince,
                isOwner,
                guildId,
                canShowDisplayNameStylesFont,
                onPress(user) {
                  let colorRoleId;
                  if (null != onUserPress) {
                    const obj = { user, index: null };
                    if (!closure_20) {
                      let sum;
                      if (!hasQuery) {
                        let num3 = 0;
                        let num4 = 0;
                        let num5 = 0;
                        if (0 < closure_0) {
                          do {
                            num4 = num4 + groups[num3].count;
                            num3 = num3 + 1;
                            num5 = num4;
                          } while (num3 < closure_0);
                        }
                        sum = num5 + closure_1;
                      }
                      obj.index = sum;
                      tmp(obj);
                    }
                    sum = closure_1;
                  }
                  if (flag2) {
                    const obj2 = {
                      userId: user.id,
                      channelId: channelId !== metroImportDefault ? channelId : stateFromStores1,
                      roleId: colorRoleId,
                      sourceAnalyticsLocations: analyticsLocations,
                    };
                    colorRoleId = undefined;
                    const tmp13 = showUserProfileActionSheetDefault;
                    if (memberListMember != null) {
                      colorRoleId = memberListMember.colorRoleId;
                    }
                    tmp13(obj2);
                  }
                },
                onLongPress: fn,
                start: 0 === arg1,
                end,
              };
              nick = undefined;
              end = tmp3.end;
              if (memberListMember != null) {
                nick = memberListMember.nick;
              }
              if (nick == null) {
                if (null != comparator2) {
                  nick = comparator2;
                }
                let nick1;
                if (guildMember != null) {
                  nick1 = guildMember.nick;
                }
                comparator2 = nick1;
              }
              colorString = undefined;
              if (memberListMember != null) {
                colorString = memberListMember.colorString;
              }
              if (colorString == null) {
                let colorString1;
                if (guildMember != null) {
                  colorString1 = guildMember.colorString;
                }
                colorString = colorString1;
              }
              colorStrings = undefined;
              if (memberListMember != null) {
                colorStrings = memberListMember.colorStrings;
              }
              if (colorStrings == null) {
                let colorStrings1;
                if (guildMember != null) {
                  colorStrings1 = guildMember.colorStrings;
                }
                colorStrings = colorStrings1;
              }
              premiumSince = undefined;
              if (memberListMember != null) {
                premiumSince = memberListMember.premiumSince;
              }
              if (premiumSince == null) {
                let premiumSince1;
                if (guildMember != null) {
                  premiumSince1 = guildMember.premiumSince;
                }
                premiumSince = premiumSince1;
              }
              if (null != memberListMember) {
                isOwner = memberListMember.isOwner;
              } else {
                isOwner = memo === user.id;
              }
              fn = undefined;
              if (null != onUserLongPress) {
                fn = () => {
                  const obj = { user, index: null };
                  if (!closure_20) {
                    let sum;
                    if (!hasQuery) {
                      let num3 = 0;
                      let num4 = 0;
                      let num5 = 0;
                      if (0 < closure_0) {
                        do {
                          num4 = num4 + groups[num3].count;
                          num3 = num3 + 1;
                          num5 = num4;
                        } while (num3 < closure_0);
                      }
                      sum = num5 + closure_1;
                    }
                    obj.index = sum;
                    return tmp(obj);
                  }
                  sum = closure_1;
                };
              }
              const element = { type: "user", props: obj2 };
              return element;
            } else {
              const element1 = { type: "placeholder", props: obj3 };
              let num5 = 1;
              return element1;
            }
          }
          if (hasQuery) {
            let num3 = 1;
            let tmp15;
            const diff = memo2.length - 1;
            if (arg1 < memo2.length) {
              tmp15 = memo2[arg1];
            }
            if (null != tmp15) {
              const record = tmp15.record;
              const comparator = tmp15.comparator;
              const member = groups.getMember(guildId, record.id);
              if (null != member) {
                const obj4 = { user: record, guildMember: member, comparator: tmp20, end: arg1 === diff };
                tmp20 = undefined;
                if (!closure_20) {
                  tmp20 = comparator;
                }
                tmp3 = obj4;
              }
            }
          } else {
            const tmp11 = rows[groups[arg0].index + 1 + arg1];
            if (null != tmp11) {
              if (tmp11.type === analyticsLocations.MEMBER) {
                tmp3 = { user: tmp11.user, memberListMember: tmp11, end: arg1 === tmp10[arg0].count - 1 };
                const obj5 = { user: tmp11.user, memberListMember: tmp11, end: arg1 === tmp10[arg0].count - 1 };
              }
            }
          }
        }, items11);
        if (flag) {
          const obj6 = { children: items12 };
          const obj7 = { style: obj8, children: ref2(channelId(tmp2[28]).SearchField, obj9) };
          obj8 = { marginHorizontal: tmp(tmp2[27]).space.PX_16 };
          obj9 = { size: "md", onChange: onChangeText, ref: searchBarRef };
          items12 = [ref2(isNameplatedList, obj7), searchBarEmptyState];
          tmp23Result = tmp23(tmp24, obj6);
        }
        const items13 = [tmp23Result];
        const obj10 = {
          ref,
          sections: null,
          getItemProps: null,
          getSectionProps: null,
          renderListHeader: null,
          listHeaderSize: null,
          onLayout: null,
          onScroll: null,
          disableStickySections: null,
          inActionSheet: null,
          disableThemedGradient: null,
          listStyleOverride: null,
          disableBottomSafeZone: null,
          insetEnd: null,
        };
        const tmp28 = ref2;
        if (tmp20) {
          let items14;
          if (!hasQuery) {
            items14 = [stateFromStoresArray.length];
          }
          obj10.sections = items14;
          obj10.getItemProps = callback3;
          obj10.getSectionProps = callback2;
          obj10.renderListHeader = listActionRenderer;
          obj10.listHeaderSize = listActionHeight;
          obj10.onLayout = callback;
          obj10.onScroll = callback1;
          obj10.disableStickySections = disableStickySections;
          obj10.inActionSheet = inActionSheet;
          obj10.disableThemedGradient = disableThemedGradient;
          obj10.listStyleOverride = listStyleOverride;
          obj10.disableBottomSafeZone = disableBottomSafeZone;
          obj10.insetEnd = insetEnd;
          let str = "guild-channel-user-list";
          if (hasQuery) {
            str = "guild-channel-user-list-search-results";
          }
          const obj11 = { children: items13 };
          items13[1] = tmp28(tmp29, obj10, str);
          return stateFromStoresArray(memo1, obj11);
        }
        if (hasQuery) {
          const items15 = [memo2.length];
          mapped = items15;
        } else {
          const groups1 = stateFromStoresObject.groups;
          mapped = groups1.map((count) => count.count);
        }
        items14 = mapped;
      },
);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx",
);

export default memoResult;
