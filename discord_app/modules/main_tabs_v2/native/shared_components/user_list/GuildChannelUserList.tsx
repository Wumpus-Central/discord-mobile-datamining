// === Module 11223: GuildChannelUserList ===

// Module 11223 (GuildChannelUserList)
import throttleDefault from "throttle" /* 550 */;
import util from "util" /* 1126 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import sortByMatchScore from "sortByMatchScore" /* 9509 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelMemberStore_mod from "ChannelMemberStore" /* 6792 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
const View = fn(17).View;
let ChannelMemberStore = fn(6792);
({ EVERYONE_CHANNEL_ID: closure_7, MemberListRowTypes: closure_8 } = ChannelMemberStore);
let ChannelMemberStore = ChannelMemberStore_mod;
const Constants = fn(1085);
({ RelationshipTypes: closure_15, StatusTypes: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = [];
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(ref[12]).c(30);
  guildId = guildId.guildId;
  const listRef = guildId.listRef;
  const searchable = guildId.searchable;
  const searchableEmptyState = guildId.searchableEmptyState;
  ref = queryResults.useRef(null);
  let obj = guildId(ref[12]);
  [str, _slicedToArray] = queryResults.useState("");
  [, closure_6] = queryResults.useState(closure_20);
  if (cResult[0] !== guildId) {
    const fn = function l() {
      const items = [sortByMatchScore.AutocompleterResultTypes.USER];
      const obj = { userFilters: { guild: guildId, strict: true } };
      const obj2 = { guild: guildId, strict: true };
      return new sortByMatchScoreDefault((arg0, str) => {
        if ("" === str.trim()) {
          closure_1_6(closure_2_20);
        } else {
          closure_1_6(arg0);
        }
      }, items, undefined, obj);
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const first1 = _slicedToArray(obj2.useState(tmp7), 1)[0];
  if (cResult[2] === first1) {
    if (cResult[3] === searchable) {
      let tmp9 = cResult[4];
      let tmp10 = cResult[5];
    }
    const effect = obj2.useEffect(tmp9, tmp10);
    if (cResult[6] !== str) {
      const trimmed = str.trim();
      cResult[6] = str;
      cResult[7] = trimmed;
      let tmp12 = trimmed;
    } else {
      tmp12 = cResult[7];
    }
    closure_8 = tmp14;
    [tmp16, ChannelMemberStore] = obj2.useState(searchable);
    if (cResult[8] === "" !== tmp12) {
      if (cResult[9] === queryResults) {
        let tmp17 = cResult[10];
        let tmp18 = cResult[11];
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
        let tmp20 = fn2;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === listRef) {
        if (cResult[15] === str) {
          let tmp21 = cResult[16];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp20, tmp21);
        if (cResult[17] === first1) {
          if (cResult[18] === guildId) {
            let tmp23 = cResult[19];
          }
          if (cResult[20] === tmp16) {
            if (cResult[21] === str) {
              if (cResult[22] === searchable) {
                if (cResult[23] === searchableEmptyState) {
                  let tmp24 = cResult[24];
                }
                if (cResult[25] === tmp14) {
                  if (cResult[26] === tmp23) {
                    if (cResult[27] === queryResults) {
                      if (cResult[28] === tmp24) {
                        let tmp26 = cResult[29];
                      }
                      return tmp26;
                    }
                  }
                }
                const obj3 = { hasQuery: null, queryResults: null, onChangeText: null, searchBarRef: null, searchBarEmptyState: null };
                class P {
                  constructor(arg0) {
                    searchResult = closure_7.search(guildId);
                    tmp2 = closure_4(guildId);
                    if ("" !== guildId.trim()) {
                      tmp3 = closure_1;
                      tmp4 = closure_3;
                      obj = closure_1(closure_3[14]);
                      tmp5 = guildId;
                      members = obj.requestMembers(guildId, guildId);
                    }
                    return;
                  }
                }
                obj3.queryResults = queryResults;
                obj3.onChangeText = tmp23;
                obj3.searchBarRef = ref;
                obj3.searchBarEmptyState = tmp24;
                class L {
                  constructor() {
                    if (closure_5.length <= 0) {
                      tmp = closure_8;
                      if (closure_8) {
                        tmp2 = globalThis;
                        _setTimeout = setTimeout;
                        num = 300;
                        closure_0 = setTimeout(() => {
                          closure_1_9(false);
                        }, 300);
                        return () => {
                          clearTimeout(closure_0);
                        };
                      }
                    }
                    tmp3 = closure_9(true);
                    return;
                  }
                }
                cResult[26] = tmp23;
                cResult[27] = queryResults;
                cResult[28] = tmp24;
                cResult[29] = obj3;
                tmp26 = obj3;
              }
            }
          }
          class P {
            constructor(arg0) {
              searchResult = closure_7.search(guildId);
              tmp2 = closure_4(guildId);
              if ("" !== guildId.trim()) {
                tmp3 = closure_1;
                tmp4 = closure_3;
                obj = closure_1(closure_3[14]);
                tmp5 = guildId;
                members = obj.requestMembers(guildId, guildId);
              }
              return;
            }
          }
          cResult[20] = tmp16;
          cResult[21] = str;
          class L {
            constructor() {
              if (closure_5.length <= 0) {
                tmp = closure_8;
                if (closure_8) {
                  tmp2 = globalThis;
                  _setTimeout = setTimeout;
                  num = 300;
                  closure_0 = setTimeout(() => {
                    closure_1_9(false);
                  }, 300);
                  return () => {
                    clearTimeout(closure_0);
                  };
                }
              }
              tmp3 = closure_9(true);
              return;
            }
          }
          cResult[23] = searchableEmptyState;
          cResult[24] = null;
          tmp24 = tmp25;
        }
        class P {
          constructor(arg0) {
            searchResult = closure_7.search(guildId);
            tmp2 = closure_4(guildId);
            if ("" !== guildId.trim()) {
              tmp3 = closure_1;
              tmp4 = closure_3;
              obj = closure_1(closure_3[14]);
              tmp5 = guildId;
              members = obj.requestMembers(guildId, guildId);
            }
            return;
          }
        }
        cResult[17] = first1;
        cResult[18] = guildId;
        class L {
          constructor() {
            if (closure_5.length <= 0) {
              tmp = closure_8;
              if (closure_8) {
                tmp2 = globalThis;
                _setTimeout = setTimeout;
                num = 300;
                closure_0 = setTimeout(() => {
                  closure_1_9(false);
                }, 300);
                return () => {
                  clearTimeout(closure_0);
                };
              }
            }
            tmp3 = closure_9(true);
            return;
          }
        }
        tmp23 = P;
      }
      let items = [listRef, str];
      cResult[14] = listRef;
      class L {
        constructor() {
          if (closure_5.length <= 0) {
            tmp = closure_8;
            if (closure_8) {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 300;
              closure_0 = setTimeout(() => {
                closure_1_9(false);
              }, 300);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
          tmp3 = closure_9(true);
          return;
        }
      }
      cResult[15] = str;
      cResult[16] = items;
      tmp21 = items;
    }
    class L {
      constructor() {
        if (closure_5.length <= 0) {
          tmp = closure_8;
          if (closure_8) {
            tmp2 = globalThis;
            _setTimeout = setTimeout;
            num = 300;
            closure_0 = setTimeout(() => {
              closure_1_9(false);
            }, 300);
            return () => {
              clearTimeout(closure_0);
            };
          }
        }
        tmp3 = closure_9(true);
        return;
      }
    }
    const items1 = [queryResults, "" !== tmp12];
    cResult[8] = "" !== tmp12;
    cResult[9] = queryResults;
    cResult[10] = L;
    cResult[11] = items1;
    tmp18 = items1;
    tmp17 = L;
    const tmp3Result = _slicedToArray(obj2.useState(searchable), 2);
  }
  class E {
    constructor() {
      if (searchable) {
        tmp8 = closure_7;
        searchContext = closure_7.createSearchContext();
      } else {
        tmp = closure_4;
        str = "";
        tmp2 = closure_4("");
        tmp3 = closure_7;
        cleanResult = closure_7.clean();
        tmp5 = closure_3;
        current = closure_3.current;
        tmp6 = null;
        if (current != null) {
          setTextResult = current.setText("");
        }
      }
      return;
    }
  }
  const items2 = [searchable, first1];
  cResult[2] = first1;
  cResult[3] = searchable;
  cResult[4] = E;
  cResult[5] = items2;
  tmp10 = items2;
  tmp9 = E;
  const tmp4 = _slicedToArray(queryResults.useState(""), 2);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const listRef = guildId.listRef;
  const searchable = guildId.searchable;
  const searchableEmptyState = guildId.searchableEmptyState;
  let str;
  const ref = str.useRef(null);
  const tmp2 = ref(str.useState(""), 2);
  str = tmp2[0];
  closure_6 = tmp2[1];
  const tmp3 = ref(str.useState(closure_20), 2);
  const queryResults = tmp3[0];
  closure_8 = tmp3[1];
  const first1 = ref(str.useState(() => {
    const items = [sortByMatchScore.AutocompleterResultTypes.USER];
    const obj = { userFilters: { guild: guildId, strict: true } };
    const obj2 = { guild: guildId, strict: true };
    return new sortByMatchScoreDefault((arg0, str) => {
      if ("" === str.trim()) {
        closure_1_8(closure_2_20);
      } else {
        closure_1_8(arg0);
      }
    }, items, undefined, obj);
  }), 1)[0];
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
  closure_10 = tmp7;
  const tmp8 = ref(str.useState(searchable), 2);
  const first2 = tmp8[0];
  closure_12 = tmp8[1];
  const items1 = [queryResults, tmp7];
  const effect1 = str.useEffect(() => {
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
      const members = GuildUtilsDefault.requestMembers(guildId, str);
    }
  }, items3);
  return {
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
    }, items4)
  };
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = channelId(onUserPress[12]).c(96);
  ({ searchable, searchableEmptyState, channelId } = guildId);
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  ({ headerShown, onUserPress } = guildId);
  const onUserLongPress = guildId.onUserLongPress;
  ({ opensUserProfileOnUserPress, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd, isNameplatedList } = guildId);
  let canShowDisplayNameStylesFont = guildId.canShowDisplayNameStylesFont;
  closure_6 = undefined === opensUserProfileOnUserPress || opensUserProfileOnUserPress;
  canShowDisplayNameStylesFont = undefined !== canShowDisplayNameStylesFont && canShowDisplayNameStylesFont;
  const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
  const ref = isNameplatedList.useRef(null);
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === searchableEmptyState) {
        let tmp7 = cResult[3];
      }
      const tmp9 = closure_21(tmp7);
      const hasQuery = tmp9.hasQuery;
      ({ onChangeText, queryResults, searchBarRef, searchBarEmptyState } = tmp9);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasQuery];
        cResult[4] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === channelId) {
        if (cResult[6] === guildId) {
          let tmp13 = cResult[7];
        }
        const stateFromStoresObject = channelId(onUserPress[18]).useStateFromStoresObject(tmp11, tmp13);
        const groups = stateFromStoresObject.groups;
        const rows = stateFromStoresObject.rows;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [groups];
          cResult[8] = items1;
          let tmp15 = items1;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== channelId) {
          function te() {
            if (channelId !== React5) {
              return ChannelStore.getChannel(tmp);
            }
          }
          cResult[9] = channelId;
          cResult[10] = te;
          let tmp17 = te;
        } else {
          tmp17 = cResult[10];
        }
        const tmpResult = channelId(onUserPress[18]);
        const stateFromStores = channelId(onUserPress[18]).useStateFromStores(tmp15, tmp17);
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [stateFromStores1];
          function ae() {
            return stateFromStores1.getChannelId();
          }
          cResult[11] = items2;
          cResult[12] = ae;
          let tmp20 = ae;
          let tmp19 = items2;
        } else {
          tmp19 = cResult[11];
          tmp20 = cResult[12];
        }
        const tmpResult3 = channelId(onUserPress[18]);
        stateFromStores1 = channelId(onUserPress[18]).useStateFromStores(tmp19, tmp20);
        const tmp23 = tmp5(onUserPress[19])();
        if (cResult[13] !== guildId) {
          guild = stateFromStores.getGuild(guildId);
          let guildVisualOwnerId;
          if (null != guild) {
            guildVisualOwnerId = roleId(onUserPress[20]).getGuildVisualOwnerId(guild);
            const obj7 = roleId(onUserPress[20]);
          }
          cResult[13] = guildId;
          cResult[14] = guildVisualOwnerId;
          let tmp24 = guildVisualOwnerId;
        } else {
          tmp24 = cResult[14];
        }
        let user = tmp24;
        const tmpResult4 = channelId(onUserPress[18]);
        const ref1 = isNameplatedList.useRef(0);
        if (cResult[15] === channelId) {
          if (cResult[16] === guildId) {
            if (cResult[17] === hasQuery) {
              if (cResult[18] === tmp23) {
                let tmp31 = cResult[19];
              }
              const guildId2 = tmp31.guildId;
              closure_129_0 = guildId2;
              const channelId2 = tmp31.channelId;
              closure_129_1 = channelId2;
              const hasQuery2 = tmp31.hasQuery;
              closure_129_2 = hasQuery2;
              const listRef = tmp31.listRef;
              closure_129_3 = listRef;
              const scrollOffsetRef = tmp31.scrollOffsetRef;
              closure_129_4 = scrollOffsetRef;
              const heightRef = tmp31.heightRef;
              closure_129_5 = heightRef;
              const scaledRowHeight = tmp31.scaledRowHeight;
              closure_129_6 = scaledRowHeight;
              const items3 = [channelId2, guildId2, hasQuery2, scaledRowHeight, heightRef, listRef, scrollOffsetRef];
              const memo = isNameplatedList.useMemo(() => throttleDefault(() => {
                let tmp = null == ref.current || roleId;
                if (!tmp) {
                  let tmp4 = channelId !== canShowDisplayNameStylesFont;
                  if (tmp4) {
                    tmp4 = null == queryResults.getChannel(tmp2);
                  }
                  tmp = tmp4;
                }
                if (!tmp) {
                  const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
                  const result = channelId(onUserPress[16]).subscribeChannelDimensions(obj2);
                  const obj = channelId(onUserPress[16]);
                }
              }, 50), items3);
              if (cResult[20] !== memo) {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
                cResult[20] = memo;
                cResult[21] = Se;
              } else {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
              }
              if (cResult[22] !== memo) {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
                cResult[22] = memo;
                cResult[23] = tmp35;
              } else {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
              }
              if (!hasQuery) {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
              }
              if (cResult[24] === stateFromStores) {
                class Se {
                  constructor(arg0) {
                    closure_15.current = guildId.nativeEvent.layout.height;
                    tmp = closure_17();
                    return;
                  }
                }
                ({ listActionRenderer, listActionHeight } = tmp5(onUserPress[21])(tmp37));
                if (cResult[27] === stateFromStores) {
                  class Se {
                    constructor(arg0) {
                      closure_15.current = guildId.nativeEvent.layout.height;
                      tmp = closure_17();
                      return;
                    }
                  }
                  const effect = isNameplatedList.useEffect(Ce, tmp41);
                  const _Symbol4 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    class Se {
                      constructor(arg0) {
                        closure_15.current = guildId.nativeEvent.layout.height;
                        tmp = closure_17();
                        return;
                      }
                    }
                    const items4 = [rows, user];
                    class Ce {
                      constructor() {
                        if (null != closure_12) {
                          tmp = closure_17;
                          tmp2 = closure_17();
                        }
                        return;
                      }
                    }
                    class Te {
                      constructor() {
                        if (null != roleId) {
                          tmp2 = channelId;
                          tmp3 = onUserPress;
                          obj = channelId(onUserPress[22]);
                          tmp4 = guildId;
                          if (!obj.isEveryoneRoleId(guildId, tmp)) {
                            tmp5 = closure_7;
                            tmp6 = null;
                            if (closure_0 !== closure_7) {
                              tmp6 = closure_0;
                            }
                            closure_0 = tmp6;
                            tmp7 = rows;
                            members = rows.getMembers(tmp4);
                            found = members.filter((roles) => {
                              roles = roles.roles;
                              let hasItem = roles.includes(roleId);
                              if (hasItem) {
                                hasItem = null != user.getUser(roles.userId);
                              }
                              return hasItem;
                            });
                            return found.sort((userId, userId2) => {
                              user = UserStore.getUser(userId.userId);
                              const user1 = UserStore.getUser(userId2.userId);
                              let str = NicknameUtilsDefault.getNickname(guildId, closure_0, user);
                              if (str == null) {
                                str = UserUtilsDefault.getGlobalName(user);
                                const tmp3Result = UserUtilsDefault;
                              }
                              let str2 = NicknameUtilsDefault.getNickname(guildId, closure_0, user1);
                              if (str2 == null) {
                                str2 = UserUtilsDefault.getGlobalName(user1);
                                const tmp3Result4 = UserUtilsDefault;
                              }
                              if (str == null) {
                                str = "";
                              }
                              if (str2 == null) {
                                str2 = "";
                              }
                              return str.localeCompare(str2);
                            });
                          }
                        }
                        return [];
                      }
                    }
                  } else {
                    class Se {
                      constructor(arg0) {
                        closure_15.current = guildId.nativeEvent.layout.height;
                        tmp = closure_17();
                        return;
                      }
                    }
                  }
                  class Ce {
                    constructor() {
                      if (null != closure_12) {
                        tmp = closure_17;
                        tmp2 = closure_17();
                      }
                      return;
                    }
                  }
                  class Te {
                    constructor() {
                      if (null != roleId) {
                        tmp2 = channelId;
                        tmp3 = onUserPress;
                        obj = channelId(onUserPress[22]);
                        tmp4 = guildId;
                        if (!obj.isEveryoneRoleId(guildId, tmp)) {
                          tmp5 = closure_7;
                          tmp6 = null;
                          if (closure_0 !== closure_7) {
                            tmp6 = closure_0;
                          }
                          closure_0 = tmp6;
                          tmp7 = rows;
                          members = rows.getMembers(tmp4);
                          found = members.filter((roles) => {
                            roles = roles.roles;
                            let hasItem = roles.includes(roleId);
                            if (hasItem) {
                              hasItem = null != user.getUser(roles.userId);
                            }
                            return hasItem;
                          });
                          return found.sort((userId, userId2) => {
                            user = UserStore.getUser(userId.userId);
                            const user1 = UserStore.getUser(userId2.userId);
                            let str = NicknameUtilsDefault.getNickname(guildId, closure_0, user);
                            if (str == null) {
                              str = UserUtilsDefault.getGlobalName(user);
                              const tmp3Result = UserUtilsDefault;
                            }
                            let str2 = NicknameUtilsDefault.getNickname(guildId, closure_0, user1);
                            if (str2 == null) {
                              str2 = UserUtilsDefault.getGlobalName(user1);
                              const tmp3Result4 = UserUtilsDefault;
                            }
                            if (str == null) {
                              str = "";
                            }
                            if (str2 == null) {
                              str2 = "";
                            }
                            return str.localeCompare(str2);
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
                    if (null != closure_12) {
                      tmp = closure_17;
                      tmp2 = closure_17();
                    }
                    return;
                  }
                }
                tmp41[0] = stateFromStores;
                tmp41[1] = memo;
                cResult[27] = stateFromStores;
                cResult[28] = memo;
                cResult[29] = Ce;
                cResult[30] = tmp41;
                const tmp38 = tmp5(onUserPress[21])(tmp37);
              }
              let obj3 = { channel: stateFromStores, disable: hasQuery };
              cResult[24] = stateFromStores;
              cResult[25] = hasQuery;
              cResult[26] = obj3;
              tmp37 = obj3;
            }
          }
        }
        let obj4 = { guildId, channelId, hasQuery, listRef: ref, scrollOffsetRef: isNameplatedList.useRef(0), heightRef: ref1, scaledRowHeight: tmp23 };
        cResult[15] = channelId;
        cResult[16] = guildId;
        cResult[17] = hasQuery;
        cResult[18] = tmp23;
        cResult[19] = obj4;
        tmp31 = obj4;
        const ref2 = isNameplatedList.useRef(0);
      }
      let fn = function $() {
        let tmp3 = null;
        if (channelId !== React5) {
          tmp3 = channelId;
        }
        return ChannelMemberStore.getProps(guildId, tmp3);
      };
      cResult[5] = channelId;
      cResult[6] = guildId;
      cResult[7] = fn;
      tmp13 = fn;
    }
  }
  let obj5 = { guildId, listRef: ref, searchable: undefined !== searchable && searchable, searchableEmptyState };
  cResult[0] = guildId;
  cResult[1] = undefined !== searchable && searchable;
  cResult[2] = searchableEmptyState;
  cResult[3] = obj5;
  tmp7 = obj5;
  let obj = channelId(onUserPress[12]);
}) : ((searchable) => {
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
  ({ canShowDisplayNameStylesFont, disableStickySections, inActionSheet, disableThemedGradient, listStyleOverride, disableBottomSafeZone, insetEnd } = searchable);
  if (canShowDisplayNameStylesFont === undefined) {
    canShowDisplayNameStylesFont = false;
  }
  let stateFromStoresArray;
  closure_20 = undefined;
  let memo2;
  const analyticsLocations = guildId(onUserPress[17])().analyticsLocations;
  const ref = flag2.useRef(null);
  let tmp4 = memo2({ guildId, listRef: ref, searchable: flag, searchableEmptyState });
  const hasQuery = tmp4.hasQuery;
  const queryResults = tmp4.queryResults;
  ({ onChangeText, searchBarRef, searchBarEmptyState } = tmp4);
  const items = [hasQuery];
  const stateFromStoresObject = channelId(onUserPress[18]).useStateFromStoresObject(items, () => {
    let tmp3 = null;
    if (channelId !== React5) {
      tmp3 = channelId;
    }
    return ChannelMemberStore.getProps(guildId, tmp3);
  });
  const groups = stateFromStoresObject.groups;
  const rows = stateFromStoresObject.rows;
  let obj2 = channelId(onUserPress[18]);
  let tmp = guildId;
  const items1 = [queryResults];
  const stateFromStores = channelId(onUserPress[18]).useStateFromStores(items1, () => {
    if (channelId !== React5) {
      return ChannelStore.getChannel(tmp);
    }
  });
  let obj3 = channelId(onUserPress[18]);
  const items2 = [stateFromStores];
  const stateFromStores1 = channelId(onUserPress[18]).useStateFromStores(items2, () => stateFromStores.getChannelId());
  const tmp9 = guildId(onUserPress[19])();
  const items3 = [guildId];
  const memo = flag2.useMemo(() => {
    guild = GuildStore.getGuild(guildId);
    let guildVisualOwnerId;
    if (null != guild) {
      guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
    }
    return guildVisualOwnerId;
  }, items3);
  const ref1 = flag2.useRef(0);
  const ref2 = flag2.useRef(0);
  closure_129_0 = guildId;
  closure_129_1 = channelId;
  closure_129_2 = hasQuery;
  closure_129_3 = ref;
  closure_129_4 = ref2;
  closure_129_5 = ref1;
  closure_129_6 = tmp9;
  const items4 = [channelId, guildId, hasQuery, tmp9, ref1, ref, ref2];
  const memo1 = flag2.useMemo(() => throttleDefault(() => {
    let tmp = null == ref.current || roleId;
    if (!tmp) {
      let tmp4 = channelId !== canShowDisplayNameStylesFont;
      if (tmp4) {
        tmp4 = null == queryResults.getChannel(tmp2);
      }
      tmp = tmp4;
    }
    if (!tmp) {
      const obj2 = { guildId, channelId, y: ref2.current, height: ref3.current, rowHeight };
      const result = channelId(onUserPress[16]).subscribeChannelDimensions(obj2);
      const obj = channelId(onUserPress[16]);
    }
  }, 50), items4);
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
  let obj5 = { channel: stateFromStores, disable: null };
  let tmp17 = hasQuery;
  let obj4 = channelId(onUserPress[18]);
  if (!hasQuery) {
    tmp17 = !headerShown;
  }
  obj5.disable = tmp17;
  const tmp16 = guildId(onUserPress[21]);
  const items7 = [stateFromStores, memo1];
  ({ listActionRenderer, listActionHeight } = guildId(onUserPress[21])(obj5));
  const effect = obj.useEffect(() => {
    if (null != stateFromStores) {
      memo1();
    }
  }, items7);
  const tmp16Result = guildId(onUserPress[21])(obj5);
  const items8 = [groups, stateFromStores1];
  stateFromStoresArray = channelId(onUserPress[18]).useStateFromStoresArray(items8, () => {
    if (null != roleId) {
      if (!obj.isEveryoneRoleId(guildId, tmp)) {
        let tmp6 = null;
        if (closure_0 !== canShowDisplayNameStylesFont) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
        const members = groups.getMembers(guildId);
        const found = members.filter((roles) => {
          roles = roles.roles;
          let hasItem = roles.includes(roleId);
          if (hasItem) {
            hasItem = null != stateFromStores1.getUser(roles.userId);
          }
          return hasItem;
        });
        return found.sort((userId, userId2) => {
          const user = UserStore.getUser(userId.userId);
          const user1 = UserStore.getUser(userId2.userId);
          let str = NicknameUtilsDefault.getNickname(guildId, closure_0, user);
          if (str == null) {
            str = UserUtilsDefault.getGlobalName(user);
            const tmp3Result = UserUtilsDefault;
          }
          let str2 = NicknameUtilsDefault.getNickname(guildId, closure_0, user1);
          if (str2 == null) {
            str2 = UserUtilsDefault.getGlobalName(user1);
            const tmp3Result4 = UserUtilsDefault;
          }
          if (str == null) {
            str = "";
          }
          if (str2 == null) {
            str2 = "";
          }
          return str.localeCompare(str2);
        });
      }
      obj = channelId(onUserPress[22]);
    }
    return [];
  });
  let tmp20 = null != roleId;
  if (tmp20) {
    tmp20 = !tmp5(tmp2[22]).isEveryoneRoleId(guildId, roleId);
    const tmp5Result2 = tmp5(tmp2[22]);
  }
  closure_20 = tmp20;
  const items9 = [guildId, roleId, tmp20, hasQuery, queryResults];
  memo2 = obj.useMemo(() => {
    if (closure_20) {
      if (hasQuery) {
        let found = queryResults.filter((record) => {
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
  const items11 = [tmp20, stateFromStoresArray, memo2, hasQuery, guildId, rows, groups, memo, onUserPress, flag2, channelId, stateFromStores1, onUserLongPress, analyticsLocations, isNameplatedList, canShowDisplayNameStylesFont];
  const callback2 = obj.useCallback((arg0) => {
    if (memo2.length > 0) {
      const element = { type: "section", props: null };
      const obj = { title: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["zkoeq/"]);
      element.props = obj;
      return element;
    } else if (!closure_20) {
      ({ title, count } = groups[arg0]);
      if (null != title) {
        if (0 !== count) {
          if (tmp3 === constants.UNKNOWN) {
            let element1 = { type: "placeholder" };
          } else {
            element1 = { type: "section", props: null };
            const obj2 = { title: null };
            const _HermesInternal = HermesInternal;
            obj2.title = "" + title + " \u2014 " + count;
            element1.props = obj2;
          }
          return element1;
        }
      }
    }
  }, items10);
  let tmp23Result = null;
  const callback3 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    guildId = arg1;
    if (closure_20) {
      if (!hasQuery) {
        if (arg1 < stateFromStoresArray.length) {
          const user1 = stateFromStores1.getUser(tmp4.userId);
          if (null != user1) {
            let obj = { user: user1, guildMember: tmp4, end: arg1 === stateFromStoresArray.length - 1 };
            let tmp3 = obj;
          }
        }
      }
      if (null != tmp3) {
        const user = tmp3.user;
        const memberListMember = tmp3.memberListMember;
        ({ guildMember, comparator } = tmp3);
        let obj2 = { type: memo.NONE, user, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: null, premiumSince: null, isOwner: null, guildId: null, canShowDisplayNameStylesFont: null, onPress: null, onLongPress: null, start: null, end: null };
        let nick;
        if (memberListMember != null) {
          nick = memberListMember.nick;
        }
        if (nick == null) {
          if (null != comparator) {
            nick = comparator;
          }
          let nick1;
          if (guildMember != null) {
            nick1 = guildMember.nick;
          }
          comparator = nick1;
        }
        obj2.nickname = nick;
        let colorString;
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
        obj2.usernameColor = colorString;
        let colorStrings;
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
        obj2.roleColors = colorStrings;
        obj2.isNameplatedRow = isNameplatedList;
        let premiumSince;
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
        obj2.premiumSince = premiumSince;
        if (null != memberListMember) {
          let isOwner = memberListMember.isOwner;
        } else {
          isOwner = memo === user.id;
        }
        obj2.isOwner = isOwner;
        obj2.guildId = guildId;
        obj2.canShowDisplayNameStylesFont = canShowDisplayNameStylesFont;
        obj2.onPress = function onPress(id) {
          if (null == onUserPress) {
            if (flag2) {
              const obj = { userId: id.id, channelId: channelId !== React5 ? channelId : stateFromStores1, roleId: null, sourceAnalyticsLocations: null };
              let colorRoleId;
              if (memberListMember != null) {
                colorRoleId = memberListMember.colorRoleId;
              }
              obj.roleId = colorRoleId;
              obj.sourceAnalyticsLocations = analyticsLocations;
              showUserProfileActionSheetDefault(obj);
            }
          } else {
            let obj2 = { user: id, index: null };
            if (!closure_20) {
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
                let sum = num5 + closure_1;
              }
              obj2.index = sum;
              obj2 = tmp(obj2);
            }
            sum = closure_1;
          }
        };
        let fn;
        if (null != onUserLongPress) {
          fn = () => {
            const obj = { user, index: null };
            if (!closure_20) {
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
                let sum = num5 + closure_1;
              }
              obj.index = sum;
              return tmp(obj);
            }
            sum = closure_1;
          };
        }
        const element = { type: "user", props: null };
        obj2.onLongPress = fn;
        obj2.start = tmp20;
        obj2.end = tmp3.end;
        element.props = obj2;
        return element;
      } else {
        const element1 = { type: "placeholder", props: null };
        const obj3 = { start: tmp20, end: arg1 === groups[arg0].count - 1 };
        element1.props = obj3;
        return element1;
      }
    }
    if (hasQuery) {
      let tmp14;
      const diff = memo2.length - 1;
      if (arg1 < memo2.length) {
        tmp14 = memo2[arg1];
      }
      if (null != tmp14) {
        const record = tmp14.record;
        const member = groups.getMember(guildId, record.id);
        if (null != member) {
          const obj4 = { user: record, guildMember: member, comparator: null, end: null };
          let comparator1;
          if (!closure_20) {
            comparator1 = tmp14.comparator;
          }
          obj4.comparator = comparator1;
          obj4.end = arg1 === diff;
          tmp3 = obj4;
        }
      }
    } else {
      const tmp10 = rows[groups[arg0].index + 1 + arg1];
      if (null != tmp10) {
        if (tmp10.type === analyticsLocations.MEMBER) {
          const obj5 = { user: tmp10.user, memberListMember: tmp10, end: arg1 === tmp9[arg0].count - 1 };
          tmp3 = obj5;
        }
      }
    }
  }, items11);
  if (flag) {
    const obj6 = { children: null };
    const obj7 = { style: null, children: null };
    const obj8 = { marginHorizontal: tmp(tmp2[27]).space.PX_16 };
    obj7.style = obj8;
    const obj9 = { size: "md", onChange: onChangeText, ref: searchBarRef };
    obj7.children = ref2(tmp5(tmp2[28]).SearchField, obj9);
    const items12 = [ref2(isNameplatedList, obj7), searchBarEmptyState];
    obj6.children = items12;
    tmp23Result = tmp23(tmp24, obj6);
  }
  const items13 = [tmp23Result, ];
  const obj10 = { ref, sections: null, getItemProps: null, getSectionProps: null, renderListHeader: null, listHeaderSize: null, onLayout: null, onScroll: null, disableStickySections: null, inActionSheet: null, disableThemedGradient: null, listStyleOverride: null, disableBottomSafeZone: null, insetEnd: null };
  if (tmp20) {
    if (!hasQuery) {
      const items14 = [stateFromStoresArray.length];
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
      const obj11 = { children: null };
      items13[1] = ref2(tmp29, obj10, str);
      obj11.children = items13;
      return tmp23(tmp24, obj11);
    }
  }
  if (hasQuery) {
    memo2 = [];
    memo2[0] = memo2.length;
    let mapped = memo2;
  } else {
    const groups1 = stateFromStoresObject.groups;
    mapped = groups1.map((count) => count.count);
  }
}));