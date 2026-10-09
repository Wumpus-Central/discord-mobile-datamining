// discord_app/modules/directory_channels/native/components/GuildDirectorySearch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators.tsx";
import _modDef11958 from "../../../../../_runtime/metro/11958__.js";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildDirectorySearchStore from "../../GuildDirectorySearchStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  flex: { flex: 1, height: "100%" },
  fauxHeader: { paddingHorizontal: 0 },
  scrollContainer: { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 },
  emptyStateImage: { marginBottom: 24 },
  emptyStateText: { textAlign: "center" },
  emptyStateTitle: { marginBottom: 4, textAlign: "center" },
  proTip: null,
};
let obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.proTip = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.unsafe_rawColors.GREEN_360,
  textTransform: "uppercase",
};
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DefaultState() {
      const cResult = require("c").c(12);
      const tmp4 = closure_13();
      _require = tmp4;
      let obj = require("c");
      const typeConsolidationTextTransform =
        require("useTypeConsolidationTextTransform").useTypeConsolidationTextTransform("GuildDirectorySearch");
      if (cResult[0] !== tmp4.emptyStateImage) {
        const obj3 = { style: tmp4.emptyStateImage, source: typeConsolidationTextTransform(11958) };
        const tmp10 = closure_11(typeConsolidationTextTransform(6163), obj3);
        cResult[0] = tmp4.emptyStateImage;
        cResult[1] = tmp10;
        let tmp6 = tmp10;
        const tmp9 = typeConsolidationTextTransform(6163);
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
          const tmp20 = closure_12(closure_6, obj4);
          cResult[8] = tmp4.emptyWrapper;
          cResult[9] = tmp6;
          cResult[10] = tmp14;
          cResult[11] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { style: tmp11, variant: "text-sm/medium", color: "text-default", children: tmp12 };
        const tmp16 = closure_11(tmp(5087).Text, obj5);
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
          return closure_2_11(native.LegacyText, obj, "protip");
        },
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
          return closure_2_11(native.LegacyText, obj, "protip");
        },
      };
    }
  : function DefaultState() {
      const tmp = closure_13();
      _require = tmp;
      importDefault = require("useTypeConsolidationTextTransform").useTypeConsolidationTextTransform(
        "GuildDirectorySearch",
      );
      const obj2 = { style: tmp.emptyWrapper, children: null };
      const obj3 = { style: tmp.emptyStateImage, source: null };
      let obj = require("useTypeConsolidationTextTransform");
      obj3.source = _modDef11958;
      let items = [closure_11(FastImageDefault, obj3)];
      const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl = require("util").intl;
      obj4.children = intl.format(require("util").t.aYLd8O, {
        protipHook(children) {
          const obj = { style: null, children };
          const items = [proTip.proTip, closure_1];
          obj.style = items;
          return closure_2_11(native.LegacyText, obj, "protip");
        },
      });
      items[1] = closure_11(require("Text/Text").Text, obj4);
      obj2.children = items;
      return closure_12(closure_6, obj2);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyState(channel) {
      const cResult = id(576).c(20);
      id = channel.channel;
      const tmp4 = closure_13();
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
      const canCreateOrAddGuildInDirectory = id(11959).useCanCreateOrAddGuildInDirectory(id);
      if (cResult[3] === canCreateOrAddGuildInDirectory) {
        if (cResult[4] === id.id) {
          if (cResult[5] === stateFromStores) {
            if (cResult[7] !== tmp4.emptyStateImage) {
              const obj2 = { style: tmp4.emptyStateImage, source: stateFromStores(11958) };
              const tmp16 = closure_11(stateFromStores(6163), obj2);
              cResult[7] = tmp4.emptyStateImage;
              cResult[8] = tmp16;
              let tmp12 = tmp16;
              const tmp15 = stateFromStores(6163);
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
              const obj3 = {
                style: tmp4.emptyStateTitle,
                variant: "text-sm/semibold",
                color: "mobile-text-heading-primary",
                children: tmp17,
              };
              const tmp21 = closure_11(tmp(5087).Text, obj3);
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
              const tmp28 = closure_12(closure_6, obj4);
              cResult[15] = tmp4.emptyWrapper;
              cResult[16] = tmp12;
              cResult[17] = tmp19;
              cResult[18] = tmp22;
              cResult[19] = tmp28;
              tmp25 = tmp28;
            }
            const obj5 = {
              style: tmp4.emptyStateText,
              variant: "text-sm/medium",
              color: "text-default",
              children: cResult[6],
            };
            const tmp24 = closure_11(tmp(5087).Text, obj5);
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
            GuildDirectoryAddModalActionCreatorsDefault.open({
              directoryGuildName: stateFromStores.name,
              directoryGuildId: stateFromStores.id,
              directoryChannelId: id.id,
            });
          },
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
      const tmpResult2 = id(11959);
    }
  : function EmptyState(channel) {
      channel = channel.channel;
      const tmp = closure_13();
      const items = [GuildStore];
      importDefault = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
      const obj = channel(504);
      const canCreateOrAddGuildInDirectory = channel(11959).useCanCreateOrAddGuildInDirectory(channel);
      const intl = channel(1126).intl;
      if (canCreateOrAddGuildInDirectory) {
        const obj3 = {
          addServerHook() {
            GuildDirectoryAddModalActionCreatorsDefault.open({
              directoryGuildName: user.name,
              directoryGuildId: user.id,
              directoryChannelId: channel.id,
            });
          },
        };
        let formatResult = intl.format(tmp2(1126).t.ZxNVMy, obj3);
      } else {
        formatResult = intl.string(tmp2(1126).t.vYyEnv);
      }
      const obj4 = { style: tmp.emptyWrapper, children: null };
      const obj5 = { style: tmp.emptyStateImage, source: null };
      const obj2 = channel(11959);
      obj5.source = _modDef11958;
      const items1 = [closure_11(FastImageDefault, obj5), ,];
      const obj6 = {
        style: tmp.emptyStateTitle,
        variant: "text-sm/semibold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl2 = tmp2(1126).intl;
      obj6.children = intl2.string(channel(1126).t["6HXiuE"]);
      items1[1] = closure_11(channel(5087).Text, obj6);
      items1[2] = closure_11(channel(5087).Text, {
        style: tmp.emptyStateText,
        variant: "text-sm/medium",
        color: "text-default",
        children: formatResult,
      });
      obj4.children = items1;
      return closure_12(closure_6, obj4);
    };
let obj4 = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.unsafe_rawColors.GREEN_360,
  textTransform: "uppercase",
};
let closure_16 = Array(20).fill(null);
ReactCompilerGating = fn(558);
const ArrayResult = Array(20);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildDirectorySearch(channel) {
      const cResult = channel(576).c(36);
      channel = channel.channel;
      let tmp4 = closure_13();
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
        const fn = function u() {
          const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
          return {
            searchFetching: searchState.fetching,
            searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery),
          };
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
            let tmp14 = cResult[7];
          }
          const sum = useSafeAreaInsetsDefault().bottom + 16;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            function keyExtractor(guildId, arg1) {
              if (null != guildId) {
                guildId = guildId.guildId;
              } else {
                guildId = arg1.toString();
              }
              return guildId;
            }
            cResult[8] = keyExtractor;
            let tmp17 = keyExtractor;
          } else {
            tmp17 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            function renderItem(item) {
              item = item.item;
              if (null != item) {
                const obj = { entry: item };
                let tmp4 = closure_1_11(closure_1(11987), obj);
              } else {
                tmp4 = closure_1_11(closure_1(11988), {});
              }
              return tmp4;
            }
            cResult[9] = renderItem;
            let tmp18 = renderItem;
          } else {
            tmp18 = cResult[9];
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp22 = closure_11(closure_14, {});
            cResult[10] = tmp22;
            let tmp19 = tmp22;
          } else {
            tmp19 = cResult[10];
          }
          if (!tmp5[0]) {
            const _Symbol5 = Symbol;
            ({ flex, fauxHeader } = tmp4);
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.nL2wKD);
              cResult[23] = stringResult;
              let tmp36 = stringResult;
            } else {
              tmp36 = cResult[23];
            }
            if (cResult[24] !== channel.id) {
              function ee() {
                GuildDirectoryActionCreatorsAll.clearDirectorySearch(channel.id);
                GuildDirectorySearchModalActionCreatorsDefault.close();
              }
              cResult[24] = channel.id;
              cResult[25] = ee;
              let tmp38 = ee;
            } else {
              tmp38 = cResult[25];
            }
            if (cResult[26] === tmp14) {
              if (cResult[27] === tmp38) {
                let tmp39 = cResult[28];
              }
              if (cResult[29] === tmp4.fauxHeader) {
                if (cResult[30] === tmp39) {
                  let tmp42 = cResult[31];
                }
                if (cResult[32] === tmp19) {
                  if (cResult[33] === tmp4.flex) {
                    if (cResult[34] === tmp42) {
                      let tmp45 = cResult[35];
                    }
                    return tmp45;
                  }
                }
                let obj2 = { style: flex, children: null };
                const items1 = [tmp42, tmp19];
                obj2.children = items1;
                const tmp48 = closure_12(closure_6, obj2);
                cResult[32] = tmp19;
                cResult[33] = tmp4.flex;
                cResult[34] = tmp42;
                cResult[35] = tmp48;
                tmp45 = tmp48;
              }
              let obj3 = { style: fauxHeader, children: tmp39 };
              const tmp44 = closure_11(tmp(6205).FauxHeader, obj3);
              cResult[29] = tmp4.fauxHeader;
              cResult[30] = tmp39;
              cResult[31] = tmp44;
              tmp42 = tmp44;
            }
            const obj4 = { placeholder: tmp36, onChange: tmp6[1], onClose: tmp38, onSubmitEditing: tmp14 };
            const tmp41 = closure_11(tmp15(7081), obj4);
            cResult[26] = tmp14;
            cResult[27] = tmp38;
            cResult[28] = tmp41;
            tmp39 = tmp41;
          } else {
            if (0 === searchResults.length) {
              if (!searchFetching) {
                if (cResult[11] !== channel) {
                  const obj5 = { channel };
                  const tmp26 = closure_11(closure_15, obj5);
                  cResult[11] = channel;
                  cResult[12] = tmp26;
                }
              }
            }
            if (cResult[13] !== channel) {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
              cResult[13] = channel;
              cResult[14] = P;
            } else {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
              cResult[15] = tmp28;
              let scrollContainer2 = tmp28;
            } else {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
            }
            if (cResult[16] !== sum) {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
              tmp30[0] = sum;
              cResult[16] = sum;
              cResult[17] = tmp30;
            } else {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
            }
            if (cResult[18] === scrollContainer) {
              class P {
                constructor() {
                  obj = { channel };
                  return jsx(EmptyState, obj);
                }
              }
            }
            const obj6 = {
              data: scrollContainer,
              renderItem: tmp18,
              keyExtractor: tmp17,
              ListEmptyComponent: P,
              scrollIndicatorInsets: scrollContainer2,
              style: null,
              contentContainerStyle: null,
            };
            scrollContainer2 = tmp4.scrollContainer;
            obj6.style = scrollContainer2;
            obj6.contentContainerStyle = tmp30;
            const tmp34 = closure_11(closure_7, obj6);
            cResult[18] = scrollContainer;
            scrollContainer = tmp4.scrollContainer;
            cResult[19] = scrollContainer;
            cResult[20] = P;
            cResult[21] = tmp30;
            cResult[22] = tmp34;
          }
          tmp15 = importDefault;
        }
        function handleSearch() {
          if (0 !== first.trim().length) {
            const result = GuildDirectoryActionCreatorsAll.searchDirectoryEntries(channel.id, first);
            const obj3 = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
            AnalyticsUtilsDefault.track(constants.GUILD_DIRECTORY_SEARCH, obj3);
            if (null != result) {
              result.then(() => closure_1_1(true));
            } else {
              closure_1(true);
            }
          }
        }
        cResult[5] = channel;
        cResult[6] = first;
        cResult[7] = handleSearch;
        tmp14 = handleSearch;
      } else {
        class P {
          constructor() {
            obj = { channel };
            return jsx(EmptyState, obj);
          }
        }
      }
      const tmpResult = channel(504);
    }
  : function GuildDirectorySearch(channel) {
      channel = channel.channel;
      let searchFetching;
      let searchResults;
      const tmp = closure_13();
      const tmp2 = searchResults(noop.useState(false), 2);
      importDefault = tmp2[1];
      const tmp3 = searchResults(noop.useState(""), 2);
      closure_2 = tmp3[0];
      const items = [GuildDirectorySearchStore];
      const stateFromStoresObject = channel(searchFetching[17]).useStateFromStoresObject(items, () => {
        const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
        return {
          searchFetching: searchState.fetching,
          searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery),
        };
      });
      searchFetching = stateFromStoresObject.searchFetching;
      searchResults = stateFromStoresObject.searchResults;
      const items1 = [searchResults, searchFetching];
      let memo = noop.useMemo(() => {
        let combined = searchResults;
        if (searchFetching) {
          combined = searchResults.concat(closure_16);
        }
        return combined;
      }, items1);
      let bottom = require("useSafeAreaInsets")().bottom;
      if (!tmp2[0]) {
        let obj2 = { style: tmp.flex, children: null };
        let obj3 = { style: tmp.fauxHeader, children: null };
        const obj4 = { placeholder: null, onChange: null, onClose: null, onSubmitEditing: null };
        const intl = tmp4(tmp5[14]).intl;
        obj4.placeholder = intl.string(tmp4(tmp5[14]).t.nL2wKD);
        obj4.onChange = tmp3[1];
        obj4.onClose = function onClose() {
          GuildDirectoryActionCreatorsAll.clearDirectorySearch(channel.id);
          GuildDirectorySearchModalActionCreatorsDefault.close();
        };
        obj4.onSubmitEditing = function handleSearch() {
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
        obj3.children = closure_11(tmp7(tmp5[26]), obj4);
        const items2 = [closure_11(tmp4(tmp5[27]).FauxHeader, obj3), tmp9];
        obj2.children = items2;
        return closure_12(closure_6, obj2);
      } else {
        if (0 === searchResults.length) {
          if (!searchFetching) {
            const obj5 = { channel };
            let tmp8Result = closure_11(closure_15, obj5);
          }
        }
        const obj6 = {
          data: memo,
          renderItem(item) {
            item = item.item;
            if (null != item) {
              const obj = { entry: item };
              let tmp4 = closure_1_11(closure_1(searchFetching[23]), obj);
            } else {
              tmp4 = closure_1_11(closure_1(searchFetching[24]), {});
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
            return closure_2_11(closure_15, { channel });
          },
          scrollIndicatorInsets: { right: 0 },
          style: tmp.scrollContainer,
          contentContainerStyle: null,
        };
        memo = { paddingBottom: null };
        bottom = bottom + 16;
        memo.paddingBottom = bottom;
        obj6.contentContainerStyle = memo;
        tmp8Result = closure_11(closure_7, obj6);
      }
      let obj = channel(searchFetching[17]);
      tmp7 = importDefault;
    };
