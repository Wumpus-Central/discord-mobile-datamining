// === Module 11944: GuildDirectorySearch ===

// Module 11944 (GuildDirectorySearch)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11942 */;
import _modDef11948 from "module_11948" /* 11948 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11950 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11958 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 11945 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_11, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateText: { textAlign: "center" }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, proTip: null };
let obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.proTip = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(12);
  const tmp4 = closure_14();
  _require = tmp4;
  let obj = require("c");
  const typeConsolidationTextTransform = require("useTypeConsolidationTextTransform").useTypeConsolidationTextTransform("GuildDirectorySearch");
  if (cResult[0] !== tmp4.emptyStateImage) {
    const obj3 = { style: tmp4.emptyStateImage, source: typeConsolidationTextTransform(11948) };
    const tmp10 = closure_12(closure_7, obj3);
    cResult[0] = tmp4.emptyStateImage;
    cResult[1] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.proTip) {
    if (cResult[3] === typeConsolidationTextTransform) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] === tmp4.emptyStateText) {
      if (cResult[6] === tmp12) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4.emptyWrapper) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp14) {
            let tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
      const obj4 = { style: tmp4.emptyWrapper, children: null };
      let items = [tmp6, tmp14];
      obj4.children = items;
      const tmp20 = closure_13(closure_6, obj4);
      cResult[8] = tmp4.emptyWrapper;
      cResult[9] = tmp6;
      cResult[10] = tmp14;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { style: tmp11, variant: "text-sm/medium", color: "text-default", children: tmp12 };
    const tmp16 = closure_12(tmp(4892).Text, obj5);
    cResult[5] = tmp4.emptyStateText;
    cResult[6] = tmp12;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  const intl = tmp(1126).intl;
  const formatResult = intl.format(require("util").t.aYLd8O, {
    protipHook(children) {
      const obj = { style: null, children };
      const items = [proTip.proTip, typeConsolidationTextTransform];
      obj.style = items;
      return __initData(native.LegacyText, obj, "protip");
    }
  });
  cResult[2] = tmp4.proTip;
  cResult[3] = typeConsolidationTextTransform;
  cResult[4] = formatResult;
  tmp12 = formatResult;
  const obj2 = require("useTypeConsolidationTextTransform");
  const obj6 = {
    protipHook(children) {
      const obj = { style: null, children };
      const items = [proTip.proTip, typeConsolidationTextTransform];
      obj.style = items;
      return __initData(native.LegacyText, obj, "protip");
    }
  };
}) : (() => {
  const tmp = closure_14();
  _require = tmp;
  importDefault = require("useTypeConsolidationTextTransform").useTypeConsolidationTextTransform("GuildDirectorySearch");
  const obj2 = { style: tmp.emptyWrapper, children: null };
  let obj = require("useTypeConsolidationTextTransform");
  let items = [closure_12(closure_7, { style: tmp.emptyStateImage, source: _modDef11948 }), ];
  const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj4.children = intl.format(require("util").t.aYLd8O, {
    protipHook(children) {
      const obj = { style: null, children };
      const items = [proTip.proTip, closure_1];
      obj.style = items;
      return __initData(native.LegacyText, obj, "protip");
    }
  });
  items[1] = closure_12(require("Text/Text").Text, obj4);
  obj2.children = items;
  return closure_13(closure_6, obj2);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = id(576).c(20);
  id = channel.channel;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
      return GuildStore.getGuild(id.getGuildId());
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(first, tmp7);
  const tmpResult = id(504);
  const canCreateOrAddGuildInDirectory = id(11949).useCanCreateOrAddGuildInDirectory(id);
  if (cResult[3] === canCreateOrAddGuildInDirectory) {
    if (cResult[4] === id.id) {
      if (cResult[5] === stateFromStores) {
        if (cResult[7] !== tmp4.emptyStateImage) {
          const obj2 = { style: tmp4.emptyStateImage, source: stateFromStores(11948) };
          const tmp16 = closure_12(closure_7, obj2);
          cResult[7] = tmp4.emptyStateImage;
          cResult[8] = tmp16;
          let tmp12 = tmp16;
        } else {
          tmp12 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(tmp(1126).t["6HXiuE"]);
          cResult[9] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] !== tmp4.emptyStateTitle) {
          const obj3 = { style: tmp4.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: tmp17 };
          const tmp21 = closure_12(tmp(4892).Text, obj3);
          cResult[10] = tmp4.emptyStateTitle;
          cResult[11] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.emptyStateText) {
          if (cResult[13] === tmp10) {
            let tmp22 = cResult[14];
          }
          if (cResult[15] === tmp4.emptyWrapper) {
            if (cResult[16] === tmp12) {
              if (cResult[17] === tmp19) {
                if (cResult[18] === tmp22) {
                  let tmp25 = cResult[19];
                }
                return tmp25;
              }
            }
          }
          const obj4 = { style: tmp4.emptyWrapper, children: null };
          const items1 = [tmp12, tmp19, tmp22];
          obj4.children = items1;
          const tmp28 = closure_13(closure_6, obj4);
          cResult[15] = tmp4.emptyWrapper;
          cResult[16] = tmp12;
          cResult[17] = tmp19;
          cResult[18] = tmp22;
          cResult[19] = tmp28;
          tmp25 = tmp28;
        }
        const obj5 = { style: tmp4.emptyStateText, variant: "text-sm/medium", color: "text-default", children: cResult[6] };
        const tmp24 = closure_12(tmp(4892).Text, obj5);
        cResult[12] = tmp4.emptyStateText;
        cResult[13] = cResult[6];
        cResult[14] = tmp24;
        tmp22 = tmp24;
      }
    }
  }
  const intl = tmp(1126).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj6 = {
      addServerHook() {
          GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: stateFromStores.name, directoryGuildId: stateFromStores.id, directoryChannelId: id.id });
        }
    };
    let formatResult = intl.format(tmp(1126).t.ZxNVMy, obj6);
  } else {
    formatResult = intl.string(tmp(1126).t.vYyEnv);
  }
  cResult[3] = canCreateOrAddGuildInDirectory;
  id = id.id;
  cResult[4] = id;
  cResult[5] = stateFromStores;
  cResult[6] = formatResult;
  const tmpResult2 = id(11949);
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [GuildStore];
  importDefault = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  const obj = channel(504);
  const canCreateOrAddGuildInDirectory = channel(11949).useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1126).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj3 = {
      addServerHook() {
          GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id });
        }
    };
    let formatResult = intl.format(tmp2(1126).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1126).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: null };
  const obj2 = channel(11949);
  const items1 = [closure_12(closure_7, { style: tmp.emptyStateImage, source: _modDef11948 }), , ];
  const obj6 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1126).intl;
  obj6.children = intl2.string(channel(1126).t["6HXiuE"]);
  items1[1] = closure_12(channel(4892).Text, obj6);
  items1[2] = closure_12(channel(4892).Text, { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult });
  obj4.children = items1;
  return closure_13(closure_6, obj4);
});
let obj4 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_17 = Array(20).fill(null);
ReactCompilerGating = fn(558);
const ArrayResult = Array(20);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(36);
  channel = channel.channel;
  let tmp4 = closure_14();
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  const first = tmp6[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildDirectorySearchStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function y() {
      const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
      return { searchFetching: searchState.fetching, searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery) };
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let obj = channel(576);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(first1, tmp10);
  ({ searchFetching, searchResults } = stateFromStoresObject);
  let scrollContainer = searchResults;
  if (!searchFetching) {
    if (cResult[5] === channel) {
      if (cResult[6] === first) {
        let tmp12 = cResult[7];
      }
      class Y {
        constructor() {
          tmp = closure_2;
          if (0 !== closure_2.trim().length) {
            tmp5 = closure_2;
            tmp6 = closure_3;
            obj = closure_2(closure_3[19]);
            tmp7 = channel;
            result = obj.searchDirectoryEntries(channel.id, tmp);
            tmp8 = closure_1;
            obj2 = closure_1(closure_3[20]);
            tmp9 = AnalyticEvents;
            obj1 = { directory_channel_id: null, directory_guild_id: null };
            obj1.directory_channel_id = channel.id;
            obj1.directory_guild_id = channel.getGuildId();
            trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
            tmp11 = null;
            if (null != result) {
              nextPromise = result.then(() => closure_1_1(true));
            } else {
              tmp2 = closure_1;
              flag = true;
              tmp3 = closure_1(true);
            }
          }
          return;
        }
      }
      const sum = useSafeAreaInsetsDefault().bottom + 16;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(arg0, arg1) {
            if (null != channel) {
              guildId = channel.guildId;
            } else {
              tmp = arg1;
              guildId = arg1.toString();
            }
            return guildId;
          }
        }
        class Y {
          constructor() {
            tmp = closure_2;
            if (0 !== closure_2.trim().length) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              obj = closure_2(closure_3[19]);
              tmp7 = channel;
              result = obj.searchDirectoryEntries(channel.id, tmp);
              tmp8 = closure_1;
              obj2 = closure_1(closure_3[20]);
              tmp9 = AnalyticEvents;
              obj1 = { directory_channel_id: null, directory_guild_id: null };
              obj1.directory_channel_id = channel.id;
              obj1.directory_guild_id = channel.getGuildId();
              trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
              tmp11 = null;
              if (null != result) {
                nextPromise = result.then(() => closure_1_1(true));
              } else {
                tmp2 = closure_1;
                flag = true;
                tmp3 = closure_1(true);
              }
            }
            return;
          }
        }
        cResult[8] = N;
      } else {
        class N {
          constructor(arg0, arg1) {
            if (null != channel) {
              guildId = channel.guildId;
            } else {
              tmp = arg1;
              guildId = arg1.toString();
            }
            return guildId;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
        class Y {
          constructor() {
            tmp = closure_2;
            if (0 !== closure_2.trim().length) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              obj = closure_2(closure_3[19]);
              tmp7 = channel;
              result = obj.searchDirectoryEntries(channel.id, tmp);
              tmp8 = closure_1;
              obj2 = closure_1(closure_3[20]);
              tmp9 = AnalyticEvents;
              obj1 = { directory_channel_id: null, directory_guild_id: null };
              obj1.directory_channel_id = channel.id;
              obj1.directory_guild_id = channel.getGuildId();
              trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
              tmp11 = null;
              if (null != result) {
                nextPromise = result.then(() => closure_1_1(true));
              } else {
                tmp2 = closure_1;
                flag = true;
                tmp3 = closure_1(true);
              }
            }
            return;
          }
        }
        cResult[9] = K;
      } else {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
        class Y {
          constructor() {
            tmp = closure_2;
            if (0 !== closure_2.trim().length) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              obj = closure_2(closure_3[19]);
              tmp7 = channel;
              result = obj.searchDirectoryEntries(channel.id, tmp);
              tmp8 = closure_1;
              obj2 = closure_1(closure_3[20]);
              tmp9 = AnalyticEvents;
              obj1 = { directory_channel_id: null, directory_guild_id: null };
              obj1.directory_channel_id = channel.id;
              obj1.directory_guild_id = channel.getGuildId();
              trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
              tmp11 = null;
              if (null != result) {
                nextPromise = result.then(() => closure_1_1(true));
              } else {
                tmp2 = closure_1;
                flag = true;
                tmp3 = closure_1(true);
              }
            }
            return;
          }
        }
        const tmp18 = closure_12(closure_15, {});
        cResult[10] = tmp18;
      } else {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
      }
      if (!tmp5[0]) {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
        class Y {
          constructor() {
            tmp = closure_2;
            if (0 !== closure_2.trim().length) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              obj = closure_2(closure_3[19]);
              tmp7 = channel;
              result = obj.searchDirectoryEntries(channel.id, tmp);
              tmp8 = closure_1;
              obj2 = closure_1(closure_3[20]);
              tmp9 = AnalyticEvents;
              obj1 = { directory_channel_id: null, directory_guild_id: null };
              obj1.directory_channel_id = channel.id;
              obj1.directory_guild_id = channel.getGuildId();
              trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
              tmp11 = null;
              if (null != result) {
                nextPromise = result.then(() => closure_1_1(true));
              } else {
                tmp2 = closure_1;
                flag = true;
                tmp3 = closure_1(true);
              }
            }
            return;
          }
        }
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class K {
            constructor(arg0) {
              item = channel.item;
              if (null != item) {
                tmp5 = closure_1_12;
                tmp6 = closure_1;
                tmp7 = closure_1_3;
                obj = { entry: null };
                obj.entry = item;
                tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
              } else {
                tmp = closure_1_12;
                tmp2 = closure_1;
                tmp3 = closure_1_3;
                tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
              }
              return tmp4;
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          const tmp29Result = tmp29(tmp(1126).t.nL2wKD);
          cResult[23] = tmp29Result;
          const tmp27 = tmp29Result;
        } else {
          class K {
            constructor(arg0) {
              item = channel.item;
              if (null != item) {
                tmp5 = closure_1_12;
                tmp6 = closure_1;
                tmp7 = closure_1_3;
                obj = { entry: null };
                obj.entry = item;
                tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
              } else {
                tmp = closure_1_12;
                tmp2 = closure_1;
                tmp3 = closure_1_3;
                tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
              }
              return tmp4;
            }
          }
        }
        if (cResult[24] !== channel.id) {
          class K {
            constructor(arg0) {
              item = channel.item;
              if (null != item) {
                tmp5 = closure_1_12;
                tmp6 = closure_1;
                tmp7 = closure_1_3;
                obj = { entry: null };
                obj.entry = item;
                tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
              } else {
                tmp = closure_1_12;
                tmp2 = closure_1;
                tmp3 = closure_1_3;
                tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
              }
              return tmp4;
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          cResult[24] = channel.id;
          cResult[25] = tmp32;
        } else {
          class K {
            constructor(arg0) {
              item = channel.item;
              if (null != item) {
                tmp5 = closure_1_12;
                tmp6 = closure_1;
                tmp7 = closure_1_3;
                obj = { entry: null };
                obj.entry = item;
                tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
              } else {
                tmp = closure_1_12;
                tmp2 = closure_1;
                tmp3 = closure_1_3;
                tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
              }
              return tmp4;
            }
          }
        }
        if (cResult[26] === tmp12) {
          class K {
            constructor(arg0) {
              item = channel.item;
              if (null != item) {
                tmp5 = closure_1_12;
                tmp6 = closure_1;
                tmp7 = closure_1_3;
                obj = { entry: null };
                obj.entry = item;
                tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
              } else {
                tmp = closure_1_12;
                tmp2 = closure_1;
                tmp3 = closure_1_3;
                tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
              }
              return tmp4;
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          let obj2 = { style: tmp4.fauxHeader, children: tmp33 };
          const tmp38 = closure_12(tmp(6017).FauxHeader, obj2);
          cResult[29] = tmp4.fauxHeader;
          cResult[30] = tmp33;
          cResult[31] = tmp38;
        }
        let obj3 = { placeholder: tmp27, onChange: tmp6[1], onClose: tmp32, onSubmitEditing: tmp12 };
        const tmp35 = closure_12(tmp13(6889), obj3);
        cResult[26] = tmp12;
        cResult[27] = tmp32;
        cResult[28] = tmp35;
      } else {
        class K {
          constructor(arg0) {
            item = channel.item;
            if (null != item) {
              tmp5 = closure_1_12;
              tmp6 = closure_1;
              tmp7 = closure_1_3;
              obj = { entry: null };
              obj.entry = item;
              tmp4 = closure_1_12(closure_1(closure_1_3[22]), obj);
            } else {
              tmp = closure_1_12;
              tmp2 = closure_1;
              tmp3 = closure_1_3;
              tmp4 = closure_1_12(closure_1(closure_1_3[23]), {});
            }
            return tmp4;
          }
        }
        class Y {
          constructor() {
            tmp = closure_2;
            if (0 !== closure_2.trim().length) {
              tmp5 = closure_2;
              tmp6 = closure_3;
              obj = closure_2(closure_3[19]);
              tmp7 = channel;
              result = obj.searchDirectoryEntries(channel.id, tmp);
              tmp8 = closure_1;
              obj2 = closure_1(closure_3[20]);
              tmp9 = AnalyticEvents;
              obj1 = { directory_channel_id: null, directory_guild_id: null };
              obj1.directory_channel_id = channel.id;
              obj1.directory_guild_id = channel.getGuildId();
              trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
              tmp11 = null;
              if (null != result) {
                nextPromise = result.then(() => closure_1_1(true));
              } else {
                tmp2 = closure_1;
                flag = true;
                tmp3 = closure_1(true);
              }
            }
            return;
          }
        }
        if (cResult[13] !== channel) {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          cResult[13] = channel;
          cResult[14] = P;
        } else {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          cResult[15] = tmp20;
          let scrollContainer2 = tmp20;
        } else {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
        }
        if (cResult[16] !== sum) {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
          class Y {
            constructor() {
              tmp = closure_2;
              if (0 !== closure_2.trim().length) {
                tmp5 = closure_2;
                tmp6 = closure_3;
                obj = closure_2(closure_3[19]);
                tmp7 = channel;
                result = obj.searchDirectoryEntries(channel.id, tmp);
                tmp8 = closure_1;
                obj2 = closure_1(closure_3[20]);
                tmp9 = AnalyticEvents;
                obj1 = { directory_channel_id: null, directory_guild_id: null };
                obj1.directory_channel_id = channel.id;
                obj1.directory_guild_id = channel.getGuildId();
                trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
                tmp11 = null;
                if (null != result) {
                  nextPromise = result.then(() => closure_1_1(true));
                } else {
                  tmp2 = closure_1;
                  flag = true;
                  tmp3 = closure_1(true);
                }
              }
              return;
            }
          }
          cResult[16] = sum;
          cResult[17] = tmp22;
        } else {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
        }
        if (cResult[18] === scrollContainer) {
          class P {
            constructor() {
              obj = { channel };
              return jsx(f59499, obj);
            }
          }
        }
        const obj4 = { data: scrollContainer, renderItem: K, keyExtractor: N, ListEmptyComponent: P, scrollIndicatorInsets: scrollContainer2, style: null, contentContainerStyle: null };
        scrollContainer2 = tmp4.scrollContainer;
        obj4.style = scrollContainer2;
        obj4.contentContainerStyle = tmp22;
        const tmp26 = closure_12(closure_8, obj4);
        cResult[18] = scrollContainer;
        scrollContainer = tmp4.scrollContainer;
        cResult[19] = scrollContainer;
        cResult[20] = P;
        cResult[21] = tmp22;
        cResult[22] = tmp26;
      }
    }
    class Y {
      constructor() {
        tmp = closure_2;
        if (0 !== closure_2.trim().length) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          obj = closure_2(closure_3[19]);
          tmp7 = channel;
          result = obj.searchDirectoryEntries(channel.id, tmp);
          tmp8 = closure_1;
          obj2 = closure_1(closure_3[20]);
          tmp9 = AnalyticEvents;
          obj1 = { directory_channel_id: null, directory_guild_id: null };
          obj1.directory_channel_id = channel.id;
          obj1.directory_guild_id = channel.getGuildId();
          trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
          tmp11 = null;
          if (null != result) {
            nextPromise = result.then(() => closure_1_1(true));
          } else {
            tmp2 = closure_1;
            flag = true;
            tmp3 = closure_1(true);
          }
        }
        return;
      }
    }
    cResult[5] = channel;
    cResult[6] = first;
    cResult[7] = Y;
    tmp12 = Y;
  } else {
    class P {
      constructor() {
        obj = { channel };
        return jsx(f59499, obj);
      }
    }
    class Y {
      constructor() {
        tmp = closure_2;
        if (0 !== closure_2.trim().length) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          obj = closure_2(closure_3[19]);
          tmp7 = channel;
          result = obj.searchDirectoryEntries(channel.id, tmp);
          tmp8 = closure_1;
          obj2 = closure_1(closure_3[20]);
          tmp9 = AnalyticEvents;
          obj1 = { directory_channel_id: null, directory_guild_id: null };
          obj1.directory_channel_id = channel.id;
          obj1.directory_guild_id = channel.getGuildId();
          trackResult = obj2.track(AnalyticEvents.GUILD_DIRECTORY_SEARCH, obj1);
          tmp11 = null;
          if (null != result) {
            nextPromise = result.then(() => closure_1_1(true));
          } else {
            tmp2 = closure_1;
            flag = true;
            tmp3 = closure_1(true);
          }
        }
        return;
      }
    }
  }
  const tmpResult = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  let searchFetching;
  let searchResults;
  const tmp = closure_14();
  const tmp2 = searchResults(noop.useState(false), 2);
  importDefault = tmp2[1];
  const tmp3 = searchResults(noop.useState(""), 2);
  closure_2 = tmp3[0];
  const items = [GuildDirectorySearchStore];
  const stateFromStoresObject = channel(searchFetching[16]).useStateFromStoresObject(items, () => {
    const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
    return { searchFetching: searchState.fetching, searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery) };
  });
  searchFetching = stateFromStoresObject.searchFetching;
  searchResults = stateFromStoresObject.searchResults;
  const items1 = [searchResults, searchFetching];
  let memo = noop.useMemo(() => {
    let combined = searchResults;
    if (searchFetching) {
      combined = searchResults.concat(closure_17);
    }
    return combined;
  }, items1);
  let bottom = require("useSafeAreaInsets")().bottom;
  if (!tmp2[0]) {
    let obj2 = { style: tmp.flex, children: null };
    let obj3 = { style: tmp.fauxHeader, children: null };
    const obj4 = { placeholder: null, onChange: null, onClose: null, onSubmitEditing: null };
    const intl = tmp4(tmp5[13]).intl;
    obj4.placeholder = intl.string(tmp4(tmp5[13]).t.nL2wKD);
    obj4.onChange = tmp3[1];
    obj4.onClose = function onClose() {
      GuildDirectoryActionCreatorsAll.clearDirectorySearch(channel.id);
      GuildDirectorySearchModalActionCreatorsDefault.close();
    };
    obj4.onSubmitEditing = function onSubmitEditing() {
      if (0 !== closure_2.trim().length) {
        const result = GuildDirectoryActionCreatorsAll.searchDirectoryEntries(channel.id, closure_2);
        const obj3 = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
        AnalyticsUtilsDefault.track(constants.GUILD_DIRECTORY_SEARCH, obj3);
        if (null != result) {
          result.then(() => closure_1_1(true));
        } else {
          closure_1(true);
        }
      }
    };
    obj3.children = closure_12(tmp7(tmp5[25]), obj4);
    const items2 = [closure_12(tmp4(tmp5[26]).FauxHeader, obj3), tmp9];
    obj2.children = items2;
    return closure_13(closure_6, obj2);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        const obj5 = { channel };
        let tmp8Result = closure_12(closure_16, obj5);
      }
    }
    const obj6 = {
      data: memo,
      renderItem(item) {
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            let tmp4 = closure_1_12(closure_1(searchFetching[22]), obj);
          } else {
            tmp4 = closure_1_12(closure_1(searchFetching[23]), {});
          }
          return tmp4;
        },
      keyExtractor(guildId, arg1) {
          if (null != guildId) {
            guildId = guildId.guildId;
          } else {
            guildId = arg1.toString();
          }
          return guildId;
        },
      ListEmptyComponent() {
          return __initData(closure_16, { channel });
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: null
    };
    memo = { paddingBottom: null };
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj6.contentContainerStyle = memo;
    tmp8Result = closure_12(closure_8, obj6);
  }
  let obj = channel(searchFetching[16]);
  tmp7 = importDefault;
});