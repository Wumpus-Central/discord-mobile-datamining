// === Module 11869: DefaultState ===

// Module 11869 (DefaultState)
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 11873 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "getSearchState" /* 11870 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import ArrayResult from "module_20" /* 20 */;

const require = arg1;
function DefaultState() {
  const tmp = callback3();
  const _require = tmp;
  let obj = { style: tmp.emptyWrapper, children: null };
  obj = { style: tmp.emptyStateImage, source: registerAssetDefault };
  const items = [callback(closure_7, obj), ];
  obj = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = _require(1236).intl;
  obj[3] = intl.format(_require(1236).t.aYLd8O, {
    protipHook(children) {
      return closure_1_12(lib(closure_1_3[12]).LegacyText, { style: lib.proTip, children }, "protip");
    }
  });
  items[1] = callback(_require(4376).Text, obj);
  obj[1] = items;
  return callback2(closure_6, obj);
}
function EmptyState(channel) {
  channel = channel.channel;
  importDefault = undefined;
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_9];
  importDefault = obj.useStateFromStores(items, () => closure_1_9.getGuild(channel.getGuildId()));
  obj1 = channel(11874);
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1236).intl;
  if (canCreateOrAddGuildInDirectory) {
    obj = { addServerHook: null };
    obj[0] = function addServerHook() {
      let obj = lib(closure_1_3[15]);
      obj = { directoryGuildName: lib.name, directoryGuildId: lib.id, directoryChannelId: channel.id };
      obj.open(obj);
    };
    let formatResult = intl.format(tmp2(1236).t.ZxNVMy, obj);
  } else {
    formatResult = intl.string(tmp2(1236).t.vYyEnv);
  }
  obj = { style: tmp.emptyWrapper, children: null };
  obj1 = { style: tmp.emptyStateImage, source: registerAssetDefault };
  const items1 = [callback(closure_7, obj1), , ];
  const obj2 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp2(1236).intl;
  obj2[3] = intl2.string(channel(1236).t["6HXiuE"]);
  items1[1] = callback(channel(4376).Text, obj2);
  items1[2] = callback(channel(4376).Text, { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult });
  obj[1] = items1;
  return callback2(closure_6, obj);
}
({ View: closure_6, Image: error, FlatList: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, Fonts } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: null, emptyWrapper: null, emptyStateImage: null, emptyStateText: null, emptyStateTitle: null, proTip: null };
createCacheKey = { flex: 1, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createCacheKey[4] = { marginBottom: 24 };
createCacheKey[5] = { textAlign: "center" };
createCacheKey[6] = { marginBottom: 4, textAlign: "center" };
createCacheKey[7] = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj1 = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_17 = require("module_20").fill(null);
let result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  channel = channel.channel;
  importDefault = undefined;
  closure_2 = undefined;
  let searchFetching;
  let searchResults;
  const tmp = callback3();
  const tmp2 = searchResults(React.useState(false), 2);
  importDefault = tmp2[1];
  const tmp3 = searchResults(React.useState(""), 2);
  closure_2 = tmp3[0];
  let obj = channel(searchFetching[13]);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchState = closure_1_10.getSearchState(channel.id);
    return { searchFetching: searchState.fetching, searchResults: closure_1_10.getSearchResults(channel.id, searchState.mostRecentQuery) };
  });
  searchFetching = stateFromStoresObject.searchFetching;
  searchResults = stateFromStoresObject.searchResults;
  const items1 = [searchResults, searchFetching];
  let memo = React.useMemo(() => {
    let combined = searchResults;
    if (searchFetching) {
      combined = searchResults.concat(closure_1_17);
    }
    return combined;
  }, items1);
  let bottom = importDefault(searchFetching[16])().bottom;
  if (!tmp2[0]) {
    obj = { style: null, children: null };
    obj[0] = tmp.flex;
    obj = { style: null, children: null };
    obj[0] = tmp.fauxHeader;
    obj1 = { placeholder: null, onChange: null, onClose: null, onSubmitEditing: null };
    const intl = tmp4(tmp5[11]).intl;
    obj1[0] = intl.string(tmp4(tmp5[11]).t.nL2wKD);
    obj1[1] = tmp3[1];
    obj1[2] = function onClose() {
      lib(searchFetching[21]).clearDirectorySearch(channel.id);
      const obj = lib(searchFetching[21]);
      callback(searchFetching[22]).close();
    };
    obj1[3] = function onSubmitEditing() {
      if (0 !== lib.trim().length) {
        let obj = lib(searchFetching[21]);
        const result = obj.searchDirectoryEntries(channel.id, lib);
        obj = { directory_channel_id: null, directory_guild_id: null };
        obj[0] = channel.id;
        obj[1] = channel.getGuildId();
        callback(searchFetching[23]).track(closure_1_11.GUILD_DIRECTORY_SEARCH, obj);
        if (null != result) {
          result.then(() => callback(true));
        } else {
          callback(true);
        }
        const obj2 = callback(searchFetching[23]);
      }
    };
    obj[1] = tmp8(importDefault(tmp5[20]), obj1);
    const items2 = [tmp8(tmp4(tmp5[19]).FauxHeader, obj), tmp9];
    obj[1] = items2;
    return callback2(closure_6, obj);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        let obj2 = { channel: null };
        obj2[0] = channel;
        let tmp8Result = tmp8(EmptyState, obj2);
      }
    }
    const obj3 = { data: null, renderItem: null, keyExtractor: null, ListEmptyComponent: null, scrollIndicatorInsets: null, style: null, contentContainerStyle: null };
    obj3[0] = memo;
    obj3[1] = function renderItem(item) {
      item = item.item;
      if (null != item) {
        const obj = { entry: null };
        obj[0] = item;
        let tmp4 = callback2(callback(searchFetching[17]), obj);
      } else {
        tmp4 = callback2(callback(searchFetching[18]), {});
      }
      return tmp4;
    };
    obj3[2] = function keyExtractor(guildId) {
      if (null != guildId) {
        guildId = guildId.guildId;
      } else {
        guildId = arg1.toString();
      }
      return guildId;
    };
    obj3[3] = function ListEmptyComponent() {
      return closure_1_12(closure_1_16, { channel });
    };
    obj3[4] = { right: 0 };
    obj3[5] = tmp.scrollContainer;
    memo = { paddingBottom: null };
    bottom = bottom + 16;
    memo[0] = bottom;
    obj3[6] = memo;
    tmp8Result = tmp8(closure_8, obj3);
  }
};