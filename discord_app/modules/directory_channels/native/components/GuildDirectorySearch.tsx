// === Module 14067: GuildDirectorySearch ===

// Module 14067 (GuildDirectorySearch)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FastImageDefault from "FastImage" /* 5851 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 14065 */;
import _modDef14071 from "module_14071" /* 14071 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 14073 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 14081 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 14068 */;

const require = globalThis.__r;

require = fn;
function DefaultState() {
  const tmp = closure_12();
  _require = tmp;
  const obj = { style: tmp.emptyWrapper, children: null };
  const obj2 = { style: tmp.emptyStateImage, source: _modDef14071 };
  items = [closure_10(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.emptyStateText, variant: "body-sm/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj3.children = intl.format(require("util").t.aYLd8O, {
    protipHook(children) {
      return closure_2_10(native.LegacyText, { style: proTip.proTip, children }, "protip");
    }
  });
  items[1] = closure_10(require("Text/Text").Text, obj3);
  obj.children = items;
  return closure_11(View, obj);
}
function EmptyState(channel) {
  channel = channel.channel;
  const tmp = closure_12();
  items = [GuildStore];
  importDefault = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  const obj = channel(504);
  const canCreateOrAddGuildInDirectory = channel(14072).useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1113).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj3 = {
      addServerHook() {
          GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id });
        }
    };
    let formatResult = intl.format(tmp2(1113).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1113).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: null };
  const obj5 = { style: tmp.emptyStateImage, source: null };
  const obj2 = channel(14072);
  obj5.source = _modDef14071;
  const items1 = [closure_10(FastImageDefault, obj5), , ];
  const obj6 = { style: tmp.emptyStateTitle, variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1113).intl;
  obj6.children = intl2.string(channel(1113).t["6HXiuE"]);
  items1[1] = closure_10(channel(5761).Text, obj6);
  items1[2] = closure_10(channel(5761).Text, { style: tmp.emptyStateText, variant: "body-sm/medium", color: "text-default", children: formatResult });
  obj4.children = items1;
  return closure_11(View, obj4);
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateText: { textAlign: "center" }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, proTip: null };
let obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.proTip = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_12 = createStyles.createStyles(obj2);
let obj4 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_15 = Array(20).fill(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  channel = channel.channel;
  let searchFetching;
  let searchResults;
  const tmp = closure_12();
  const tmp2 = searchResults(noop.useState(false), 2);
  importDefault = tmp2[1];
  const tmp3 = searchResults(noop.useState(""), 2);
  closure_2 = tmp3[0];
  items = [GuildDirectorySearchStore];
  const stateFromStoresObject = channel(searchFetching[14]).useStateFromStoresObject(items, () => {
    const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
    return { searchFetching: searchState.fetching, searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery) };
  });
  searchFetching = stateFromStoresObject.searchFetching;
  searchResults = stateFromStoresObject.searchResults;
  const items1 = [searchResults, searchFetching];
  let memo = noop.useMemo(() => {
    let combined = searchResults;
    if (searchFetching) {
      combined = searchResults.concat(closure_15);
    }
    return combined;
  }, items1);
  let bottom = require("useSafeAreaInsets")().bottom;
  if (!tmp2[0]) {
    let obj2 = { style: tmp.flex, children: null };
    let obj3 = { style: tmp.fauxHeader, children: null };
    const obj4 = { placeholder: null, onChange: null, onClose: null, onSubmitEditing: null };
    const intl = tmp4(tmp5[12]).intl;
    obj4.placeholder = intl.string(tmp4(tmp5[12]).t.nL2wKD);
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
    obj3.children = closure_10(tmp7(tmp5[22]), obj4);
    const items2 = [closure_10(tmp4(tmp5[21]).FauxHeader, obj3), tmp9];
    obj2.children = items2;
    return closure_11(View, obj2);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        const obj5 = { channel };
        let tmp8Result = closure_10(EmptyState, obj5);
      }
    }
    const obj6 = {
      data: memo,
      renderItem(item) {
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            let tmp4 = closure_1_10(closure_1(searchFetching[18]), obj);
          } else {
            tmp4 = closure_1_10(closure_1(searchFetching[19]), {});
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
      getItemType(arg0) {
          let str = "guild";
          if (null == arg0) {
            str = "placeholder";
          }
          return str;
        },
      ListEmptyComponent() {
          return closure_2_10(EmptyState, { channel });
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: null
    };
    memo = { paddingBottom: null };
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj6.contentContainerStyle = memo;
    tmp8Result = closure_10(tmp4(tmp5[20]).FlashList, obj6);
  }
  let obj = channel(searchFetching[14]);
  tmp7 = importDefault;
};