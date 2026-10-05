// discord_app/modules/threads/ThreadBrowserHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ThreadActionCreatorsDefault from "ThreadActionCreators.tsx";
import ForumActionCreatorsDefault from "../forums/ForumActionCreators.tsx";
import ReportToModChannelStore from "../report_to_mod/ReportToModChannelStore.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import ActiveThreadsStore from "ActiveThreadsStore.tsx";
import ArchivedThreadsStore from "ArchivedThreadsStore.tsx";
import JoinedThreadsStore from "JoinedThreadsStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let current, dependencyMap, importDefault, obj1;

let react = react_mod;
let closure_5 = ReportToModChannelStore.useShouldShowResolvedFlagsForChannel;
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function a() {
          const obj = require("ThreadUtils");
          const result = obj.trackThreadBrowserTab();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = react.useEffect(() => {
        const obj = require("ThreadUtils");
        const result = obj.trackThreadBrowserTab();
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id) => {
      let first;
      const _require = guild_id;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild_id.guild_id) {
        let tmp8;
        let tmp9;
        let tmp11;
        if (cResult[2] === guild_id.id) {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        let tmpResult = tmp(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
        if (cResult[5] !== stateFromStoresArray) {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor(arg0, arg1) {
                const compare = SnowflakeUtilsDefault.compare;
                SnowflakeUtilsDefault;
                const lastMessageIdResult = current.lastMessageId(arg0);
                return compare(lastMessageIdResult, current.lastMessageId(arg1));
              }
            }
            cResult[7] = S;
          } else {
            class S {
              constructor(arg0, arg1) {
                const compare = SnowflakeUtilsDefault.compare;
                SnowflakeUtilsDefault;
                const lastMessageIdResult = current.lastMessageId(arg0);
                return compare(lastMessageIdResult, current.lastMessageId(arg1));
              }
            }
          }
          const obj3 = _modDef12(stateFromStoresArray);
          const sorted = obj3.sort(S);
          let iter = sorted.reverse();
          const valueResult = iter.value();
          cResult[5] = stateFromStoresArray;
          cResult[6] = valueResult;
          tmp11 = valueResult;
        } else {
          class S {
            constructor(arg0, arg1) {
              const compare = SnowflakeUtilsDefault.compare;
              SnowflakeUtilsDefault;
              const lastMessageIdResult = current.lastMessageId(arg0);
              return compare(lastMessageIdResult, current.lastMessageId(arg1));
            }
          }
        }
        return tmp11;
      }
      const fn = function s() {
        let channel;
        const tmp = _modDef12;
        const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(guild_id.guild_id, guild_id.id));
        const values = tmpResult.values();
        const mapped = values.map((id) => channel.getChannel(id.id));
        const found = mapped.filter(GlobalUtils.isNotNullish);
        const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
        const iter = found1.map((id) => id.id);
        return iter.value();
      };
      const items1 = [,];
      ({ guild_id: arr2[0], id: arr2[1] } = guild_id);
      cResult[1] = guild_id.guild_id;
      cResult[2] = guild_id.id;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = fn;
    }
  : (arg0) => {
      let closure_0;
      const _require = arg0;
      let obj = require("get initialized");
      const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
      const items1 = [,];
      ({ guild_id: arr2[0], id: arr2[1] } = arg0);
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let channel;
          const tmp = _modDef12;
          const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(closure_0.guild_id, closure_0.id));
          const values = tmpResult.values();
          const mapped = values.map((id) => channel.getChannel(id.id));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
          const iter = found1.map((id) => id.id);
          return iter.value();
        },
        items1,
      );
      const items2 = [stateFromStoresArray];
      return react.useMemo(() => {
        const obj = _modDef12(stateFromStoresArray);
        const sorted = obj.sort((arg0, arg1) => {
          const compare = stateFromStoresArray(closure_1_2[16]).compare;
          stateFromStoresArray(closure_1_2[16]);
          const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
          return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
        });
        const iter = sorted.reverse();
        return iter.value();
      }, items2);
    };
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _require;
      let closure_0;
      let first;
      let tmp10;
      let tmp11;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(7);
      const tmp4 = closure_13(arg0);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [JoinedThreadsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function o() {
          const obj = _modDef12;
          return obj.partition(closure_0, (id) => closure_1_11.hasJoined(id));
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = require("get initialized");
      [tmp10, tmp11] = tmpResult.useStateFromStores(
        first,
        tmp7,
        tmp8,
        require("get initialized").statesWillNeverBeEqual,
      );
      _slicedToArray(
        tmpResult.useStateFromStores(first, tmp7, tmp8, require("get initialized").statesWillNeverBeEqual),
        2,
      );
      if (cResult[4] === tmp10) {
        let tmp12;
        if (cResult[5] === tmp11) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj2 = { joinedThreadIds: tmp10, unjoinedThreadIds: tmp11 };
      cResult[4] = tmp10;
      cResult[5] = tmp11;
      cResult[6] = obj2;
      tmp12 = obj2;
    }
  : (arg0) => {
      let closure_0;
      const tmp = closure_13(arg0);
      const _require = tmp;
      let obj = require("get initialized");
      const items = [JoinedThreadsStore];
      const items1 = [tmp];
      const tmp2 = _slicedToArray(
        obj.useStateFromStores(
          items,
          () => {
            const obj = _modDef12;
            return obj.partition(closure_0, (id) => closure_1_11.hasJoined(id));
          },
          items1,
          require("get initialized").statesWillNeverBeEqual,
        ),
        2,
      );
      return { joinedThreadIds: tmp2[0], unjoinedThreadIds: tmp2[1] };
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp11;
      let tmp8;
      let tmp9;
      const _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let channel;
          const tmp = _modDef12;
          const tmpResult = tmp(ActiveThreadsStore.getThreadsForGuild(closure_0));
          const values = tmpResult.values();
          const mapped = values.map((item) => {
            const obj = closure_1_1(closure_1_2[13]);
            return obj.values(item);
          });
          const flattenResult = mapped.flatten();
          const mapped1 = flattenResult.map((id) => channel.getChannel(id.id));
          const found = mapped1.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
          const iter = found1.map((id) => id.id);
          return iter.value();
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
      if (cResult[4] !== stateFromStoresArray) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor(arg0, arg1) {
              const compare = SnowflakeUtilsDefault.compare;
              SnowflakeUtilsDefault;
              const lastMessageIdResult = current.lastMessageId(arg0);
              return compare(lastMessageIdResult, current.lastMessageId(arg1));
            }
          }
          cResult[6] = S;
        } else {
          class S {
            constructor(arg0, arg1) {
              const compare = SnowflakeUtilsDefault.compare;
              SnowflakeUtilsDefault;
              const lastMessageIdResult = current.lastMessageId(arg0);
              return compare(lastMessageIdResult, current.lastMessageId(arg1));
            }
          }
        }
        const obj3 = _modDef12(stateFromStoresArray);
        const sorted = obj3.sort(S);
        let iter = sorted.reverse();
        const valueResult = iter.value();
        cResult[4] = stateFromStoresArray;
        cResult[5] = valueResult;
        tmp11 = valueResult;
      } else {
        class S {
          constructor(arg0, arg1) {
            const compare = SnowflakeUtilsDefault.compare;
            SnowflakeUtilsDefault;
            const lastMessageIdResult = current.lastMessageId(arg0);
            return compare(lastMessageIdResult, current.lastMessageId(arg1));
          }
        }
      }
      return tmp11;
    }
  : (arg0) => {
      let closure_0;
      const _require = arg0;
      let obj = require("get initialized");
      const items = [PermissionStore, ActiveThreadsStore, ChannelStore];
      const items1 = [arg0];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let channel;
          const tmp = _modDef12;
          const tmpResult = tmp(ActiveThreadsStore.getThreadsForGuild(closure_0));
          const values = tmpResult.values();
          const mapped = values.map((item) => {
            const obj = stateFromStoresArray(closure_1_2[13]);
            return obj.values(item);
          });
          const flattenResult = mapped.flatten();
          const mapped1 = flattenResult.map((id) => channel.getChannel(id.id));
          const found = mapped1.filter(GlobalUtils.isNotNullish);
          const found1 = found.filter((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
          const iter = found1.map((id) => id.id);
          return iter.value();
        },
        items1,
      );
      const items2 = [stateFromStoresArray];
      return react.useMemo(() => {
        const obj = _modDef12(stateFromStoresArray);
        const sorted = obj.sort((arg0, arg1) => {
          const compare = stateFromStoresArray(closure_1_2[16]).compare;
          stateFromStoresArray(closure_1_2[16]);
          const lastMessageIdResult = closure_1_8.lastMessageId(arg0);
          return compare(lastMessageIdResult, closure_1_8.lastMessageId(arg1));
        });
        const iter = sorted.reverse();
        return iter.value();
      }, items2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isModeratorReportChannel, sortOrder, tagFilter, tagSetting) => {
      let canLoadMore;
      let closure_4;
      let loading;
      let nextOffset;
      let showResolvedFlags;
      let tmp4;
      let tmp6;
      const _require = isModeratorReportChannel;
      importDefault = sortOrder;
      dependencyMap = tagFilter;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(49);
      if (cResult[0] !== isModeratorReportChannel) {
        const result = isModeratorReportChannel.isModeratorReportChannel();
        cResult[0] = isModeratorReportChannel;
        cResult[1] = result;
        tmp4 = result;
      } else {
        tmp4 = cResult[1];
      }
      react = tmp4;
      showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ArchivedThreadsStore];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === isModeratorReportChannel.id) {
        if (cResult[4] === sortOrder) {
          if (cResult[5] === tagFilter) {
            let tmp8;
            if (cResult[6] === tagSetting) {
              tmp8 = cResult[7];
            }
            let tmpResult = tmp(504);
            const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp8);
            ({ canLoadMore, loading, nextOffset } = stateFromStoresObject);
            const isInitialLoad = stateFromStoresObject.isInitialLoad;
            if (cResult[8] === isModeratorReportChannel) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === nextOffset) {
                  if (cResult[11] === showResolvedFlags) {
                    if (cResult[12] === sortOrder) {
                      if (cResult[13] === tagFilter) {
                        let tmp10;
                        if (cResult[14] === tagSetting) {
                          tmp10 = cResult[15];
                        }
                        current = tmp10;
                        let obj3 = react;
                        const ref = react.useRef(tmp10);
                        if (cResult[16] !== tmp10) {
                          class F {
                            constructor() {
                              closure_9.current = closure_8;
                              return;
                            }
                          }
                          cResult[16] = tmp10;
                          cResult[17] = F;
                        } else {
                          class F {
                            constructor() {
                              closure_9.current = closure_8;
                              return;
                            }
                          }
                        }
                        const effect = obj3.useEffect(F);
                        if (cResult[18] !== isInitialLoad) {
                          class F {
                            constructor() {
                              closure_9.current = closure_8;
                              return;
                            }
                          }
                          cResult[18] = isInitialLoad;
                          cResult[19] = tmp14;
                        } else {
                          class F {
                            constructor() {
                              closure_9.current = closure_8;
                              return;
                            }
                          }
                        }
                        if (cResult[20] === isModeratorReportChannel.id) {
                          class F {
                            constructor() {
                              closure_9.current = closure_8;
                              return;
                            }
                          }
                        }
                        const items1 = [isModeratorReportChannel.id, , , ,];
                        class M {
                          constructor() {
                            tmp = closure_0;
                            canResult = closure_7.can(Permissions.READ_MESSAGE_HISTORY, closure_0);
                            tmp3 = !canResult;
                            if (canResult) {
                              tmp4 = closure_4;
                              if (tmp4) {
                                tmp5 = showResolvedFlags;
                                tmp4 = !showResolvedFlags;
                              }
                              tmp3 = tmp4;
                            }
                            if (!tmp3) {
                              tmp6 = closure_1;
                              tmp7 = closure_2;
                              obj = closure_1(closure_2[17]);
                              obj1 = {
                                guildId: null,
                                channelId: null,
                                sortOrder: null,
                                tagFilter: null,
                                tagSetting: null,
                                offset: null,
                              };
                              ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
                              tmp8 = closure_1;
                              obj1.sortOrder = closure_1;
                              tmp9 = closure_2;
                              obj1.tagFilter = closure_2;
                              tmp10 = closure_3;
                              obj1.tagSetting = closure_3;
                              tmp11 = nextOffset;
                              obj1.offset = nextOffset;
                              archivedThreads = obj.loadArchivedThreads(obj1);
                            }
                            return;
                          }
                        }
                        items1[2] = tagFilter;
                        items1[3] = isInitialLoad;
                        items1[4] = showResolvedFlags;
                        cResult[20] = isModeratorReportChannel.id;
                        cResult[21] = isInitialLoad;
                        cResult[22] = showResolvedFlags;
                        cResult[23] = sortOrder;
                        cResult[24] = tagFilter;
                        class E {
                          constructor() {
                            obj = {
                              loading: closure_10.isLoading(closure_0.id, closure_1, closure_2, closure_3),
                              isInitialLoad: closure_10.getIsInitialLoad(closure_0.id, closure_1, closure_2, closure_3),
                              canLoadMore: closure_10.getCanLoadMore(closure_0.id, closure_1, closure_2, closure_3),
                              nextOffset: closure_10.getNextOffset(closure_0.id, closure_1, closure_2, closure_3),
                            };
                            return obj;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class M {
              constructor() {
                tmp = closure_0;
                canResult = closure_7.can(Permissions.READ_MESSAGE_HISTORY, closure_0);
                tmp3 = !canResult;
                if (canResult) {
                  tmp4 = closure_4;
                  if (tmp4) {
                    tmp5 = showResolvedFlags;
                    tmp4 = !showResolvedFlags;
                  }
                  tmp3 = tmp4;
                }
                if (!tmp3) {
                  tmp6 = closure_1;
                  tmp7 = closure_2;
                  obj = closure_1(closure_2[17]);
                  obj1 = {
                    guildId: null,
                    channelId: null,
                    sortOrder: null,
                    tagFilter: null,
                    tagSetting: null,
                    offset: null,
                  };
                  ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp);
                  tmp8 = closure_1;
                  obj1.sortOrder = closure_1;
                  tmp9 = closure_2;
                  obj1.tagFilter = closure_2;
                  tmp10 = closure_3;
                  obj1.tagSetting = closure_3;
                  tmp11 = nextOffset;
                  obj1.offset = nextOffset;
                  archivedThreads = obj.loadArchivedThreads(obj1);
                }
                return;
              }
            }
            cResult[8] = isModeratorReportChannel;
            cResult[9] = tmp4;
            cResult[10] = nextOffset;
            cResult[11] = showResolvedFlags;
            cResult[12] = sortOrder;
            cResult[13] = tagFilter;
            cResult[14] = tagSetting;
            class E {
              constructor() {
                obj = {
                  loading: closure_10.isLoading(closure_0.id, closure_1, closure_2, closure_3),
                  isInitialLoad: closure_10.getIsInitialLoad(closure_0.id, closure_1, closure_2, closure_3),
                  canLoadMore: closure_10.getCanLoadMore(closure_0.id, closure_1, closure_2, closure_3),
                  nextOffset: closure_10.getNextOffset(closure_0.id, closure_1, closure_2, closure_3),
                };
                return obj;
              }
            }
            cResult[15] = M;
            tmp10 = M;
          }
        }
      }
      class E {
        constructor() {
          obj = {
            loading: closure_10.isLoading(closure_0.id, closure_1, closure_2, closure_3),
            isInitialLoad: closure_10.getIsInitialLoad(closure_0.id, closure_1, closure_2, closure_3),
            canLoadMore: closure_10.getCanLoadMore(closure_0.id, closure_1, closure_2, closure_3),
            nextOffset: closure_10.getNextOffset(closure_0.id, closure_1, closure_2, closure_3),
          };
          return obj;
        }
      }
      cResult[3] = isModeratorReportChannel.id;
      cResult[4] = sortOrder;
      cResult[5] = tagFilter;
      cResult[6] = tagSetting;
      cResult[7] = E;
      tmp8 = E;
    }
  : (isModeratorReportChannel, sortOrder, tagFilter, tagSetting) => {
      let callback;
      let items4;
      let loading;
      let nextOffset;
      let obj3;
      let showResolvedFlags;
      const _require = isModeratorReportChannel;
      dependencyMap = tagFilter;
      const result = isModeratorReportChannel.isModeratorReportChannel();
      react = result;
      showResolvedFlags = showResolvedFlags(isModeratorReportChannel.id).showResolvedFlags;
      let obj = require("get initialized");
      const items = [ArchivedThreadsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          loading: ArchivedThreadsStore.isLoading(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting),
          isInitialLoad: ArchivedThreadsStore.getIsInitialLoad(
            isModeratorReportChannel.id,
            sortOrder,
            tagFilter,
            tagSetting,
          ),
          canLoadMore: ArchivedThreadsStore.getCanLoadMore(
            isModeratorReportChannel.id,
            sortOrder,
            tagFilter,
            tagSetting,
          ),
          nextOffset: ArchivedThreadsStore.getNextOffset(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting),
        };
        return obj;
      });
      ({ loading, nextOffset } = stateFromStoresObject);
      const isInitialLoad = stateFromStoresObject.isInitialLoad;
      const items1 = [
        isModeratorReportChannel,
        sortOrder,
        tagFilter,
        tagSetting,
        nextOffset,
        showResolvedFlags,
        result,
      ];
      const canLoadMore = stateFromStoresObject.canLoadMore;
      const loadMore = react.useCallback(() => {
        const canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
        let tmp3 = !canResult;
        if (canResult) {
          tmp3 = react && !showResolvedFlags;
          const tmp4 = react && !showResolvedFlags;
        }
        if (!tmp3) {
          const obj3 = { guildId: null, channelId: null, sortOrder, tagFilter, tagSetting, offset: nextOffset };
          ({ guild_id: obj2.guildId, id: obj2.channelId } = isModeratorReportChannel);
          const obj = ThreadActionCreatorsDefault;
          const archivedThreads = obj.loadArchivedThreads(obj3);
        }
      }, items1);
      const ref = react.useRef(loadMore);
      const effect = react.useEffect(() => {
        ref.current = current;
      });
      const items2 = [isModeratorReportChannel.id, sortOrder, tagFilter, isInitialLoad, showResolvedFlags];
      const effect1 = react.useEffect(() => {
        if (isInitialLoad) {
          ref.current();
        }
      }, items2);
      const items3 = [isModeratorReportChannel.id, showResolvedFlags];
      const effect2 = react.useEffect(() => {
        const obj = ForumActionCreatorsDefault;
        obj.resort(isModeratorReportChannel.id);
      }, items3);
      const obj2 = {
        threadIds: obj3.useStateFromStoresArray(items4, () => {
          const tmp = _modDef12;
          const tmpResult = tmp(
            ArchivedThreadsStore.getThreads(isModeratorReportChannel.id, sortOrder, tagFilter, tagSetting),
          );
          const iter = tmpResult.filter((item) => {
            if (closure_1_4) {
              if (!showResolvedFlags) {
                return false;
              }
            }
            const channel = nextOffset.getChannel(item);
            const canResult =
              null != channel && isInitialLoad.can(constants.VIEW_CHANNEL, channel) && !channel.isMediaThread();
            return canResult;
          });
          return iter.value();
        }),
        canLoadMore,
        loading,
        loadMore,
      };
      obj3 = require("get initialized");
      items4 = [ArchivedThreadsStore, nextOffset, isInitialLoad];
      const obj4 = isInitialLoad;
      if (!loading) {
        loading = isInitialLoad;
      }
      if (loading) {
        loading = showResolvedFlags;
      }
      if (loading) {
        loading = obj4.can(Permissions.READ_MESSAGE_HISTORY, isModeratorReportChannel);
      }
      return obj2;
    };
let result = size.fileFinishedImporting("modules/threads/ThreadBrowserHooks.tsx");

export const useTrackThreadBrowserTab = tmp2;
export const useActiveThreadIds = tmp3;
export const useActiveThreads = tmp4;
export const useActiveGuildThreads = tmp5;
export const useArchivedThreads = tmp6;
