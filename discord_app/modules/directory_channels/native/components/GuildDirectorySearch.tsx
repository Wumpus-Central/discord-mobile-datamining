// === Module 12302: GuildDirectorySearch ===

// Module 12302 (GuildDirectorySearch)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12300 */;
import _modDef12306 from "module_12306" /* 12306 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12308 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 12316 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 12303 */;

require = fn;
function DefaultState() {
  const tmp = closure_14();
  _require = tmp;
  let obj = { style: tmp.emptyWrapper, children: null };
  obj = { style: tmp.emptyStateImage, source: _modDef12306 };
  const items = [closure_12(closure_7, obj), ];
  obj = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t.aYLd8O, {
    protipHook(children) {
      return closure_2_12(native.LegacyText, { style: proTip.proTip, children }, "protip");
    }
  });
  items[1] = closure_12(require("Text/Text").Text, obj);
  obj.children = items;
  return closure_13(closure_6, obj);
}
function EmptyState(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GuildStore];
  importDefault = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  let obj1 = channel(12307);
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1114).intl;
  if (canCreateOrAddGuildInDirectory) {
    obj = {
      addServerHook() {
          const obj = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
          obj.open(obj);
        }
    };
    let formatResult = intl.format(tmp2(1114).t.ZxNVMy, obj);
  } else {
    formatResult = intl.string(tmp2(1114).t.vYyEnv);
  }
  obj = { style: tmp.emptyWrapper, children: null };
  obj1 = { style: tmp.emptyStateImage, source: _modDef12306 };
  const items1 = [closure_12(closure_7, obj1), , ];
  const obj2 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1114).intl;
  obj2.children = intl2.string(channel(1114).t["6HXiuE"]);
  items1[1] = closure_12(channel(4556).Text, obj2);
  items1[2] = closure_12(channel(4556).Text, { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult });
  obj.children = items1;
  return closure_13(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: null, emptyWrapper: null, emptyStateImage: null, emptyStateText: null, emptyStateTitle: null, proTip: null };
createStyles = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.scrollContainer = createStyles;
createStyles.emptyWrapper = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createStyles.emptyStateImage = { marginBottom: 24 };
createStyles.emptyStateText = { textAlign: "center" };
createStyles.emptyStateTitle = { marginBottom: 4, textAlign: "center" };
createStyles.proTip = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_14 = createStyles.createStyles(createStyles);
let obj1 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_17 = Array(20).fill(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  channel = channel.channel;
  let searchFetching;
  let searchResults;
  const tmp = closure_14();
  const tmp2 = searchResults(noop.useState(false), 2);
  importDefault = tmp2[1];
  const tmp3 = searchResults(noop.useState(""), 2);
  closure_2 = tmp3[0];
  let obj = channel(searchFetching[13]);
  const items = [GuildDirectorySearchStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
    obj = { style: tmp.flex, children: null };
    obj = { style: tmp.fauxHeader, children: null };
    const obj1 = { placeholder: null, onChange: null, onClose: null, onSubmitEditing: null };
    const intl = tmp4(tmp5[11]).intl;
    obj1.placeholder = intl.string(tmp4(tmp5[11]).t.nL2wKD);
    obj1.onChange = tmp3[1];
    obj1.onClose = function onClose() {
      GuildDirectoryActionCreatorsAll.clearDirectorySearch(channel.id);
      GuildDirectorySearchModalActionCreatorsDefault.close();
    };
    obj1.onSubmitEditing = function onSubmitEditing() {
      if (0 !== closure_2.trim().length) {
        let obj = GuildDirectoryActionCreatorsAll;
        const result = obj.searchDirectoryEntries(channel.id, closure_2);
        obj = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
        AnalyticsUtilsDefault.track(constants.GUILD_DIRECTORY_SEARCH, obj);
        if (null != result) {
          result.then(() => closure_1_1(true));
        } else {
          closure_1(true);
        }
      }
    };
    obj.children = tmp8(require("SearchBarNav"), obj1);
    const items2 = [tmp8(tmp4(tmp5[19]).FauxHeader, obj), tmp9];
    obj.children = items2;
    return closure_13(closure_6, obj);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        let obj2 = { channel };
        let tmp8Result = tmp8(EmptyState, obj2);
      }
    }
    const obj3 = {
      data: memo,
      renderItem(item) {
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            let tmp4 = closure_1_12(closure_1(searchFetching[17]), obj);
          } else {
            tmp4 = closure_1_12(closure_1(searchFetching[18]), {});
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
          return closure_2_12(EmptyState, { channel });
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: null
    };
    memo = { paddingBottom: null };
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj3.contentContainerStyle = memo;
    tmp8Result = tmp8(closure_8, obj3);
  }
};