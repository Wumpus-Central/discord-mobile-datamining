// discord_app/modules/directory_channels/native/components/GuildDirectorySearch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators.tsx";
import _modDef12449 from "../../../../../_runtime/metro/12449__.js";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildDirectorySearchStore from "../../GuildDirectorySearchStore.tsx";

const require = globalThis.__r;

require = fn;
function DefaultState() {
  const tmp = closure_14();
  _require = tmp;
  importDefault = require("useTypeConsolidationTextTransform").useTypeConsolidationTextTransform(
    "GuildDirectorySearch",
  );
  const obj2 = { style: tmp.emptyWrapper, children: null };
  let obj = require("useTypeConsolidationTextTransform");
  let items = [closure_12(closure_7, { style: tmp.emptyStateImage, source: _modDef12449 })];
  const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj4.children = intl.format(require("util").t.aYLd8O, {
    protipHook(children) {
      const obj = { style: null, children };
      const items = [proTip.proTip, closure_1];
      obj.style = items;
      return closure_2_12(native.LegacyText, obj, "protip");
    },
  });
  items[1] = closure_12(require("Text/Text").Text, obj4);
  obj2.children = items;
  return closure_13(closure_6, obj2);
}
function EmptyState(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [GuildStore];
  importDefault = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  const obj = channel(504);
  const canCreateOrAddGuildInDirectory = channel(12450).useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1115).intl;
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
    let formatResult = intl.format(tmp2(1115).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1115).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: null };
  const obj2 = channel(12450);
  const items1 = [closure_12(closure_7, { style: tmp.emptyStateImage, source: _modDef12449 }), ,];
  const obj6 = {
    style: tmp.emptyStateTitle,
    variant: "text-sm/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = tmp2(1115).intl;
  obj6.children = intl2.string(channel(1115).t["6HXiuE"]);
  items1[1] = closure_12(channel(4634).Text, obj6);
  items1[2] = closure_12(channel(4634).Text, {
    style: tmp.emptyStateText,
    variant: "text-sm/medium",
    color: "text-default",
    children: formatResult,
  });
  obj4.children = items1;
  return closure_13(closure_6, obj4);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4638);
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
let closure_14 = createStyles.createStyles(obj2);
let obj4 = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.unsafe_rawColors.GREEN_360,
  textTransform: "uppercase",
};
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
  const items = [GuildDirectorySearchStore];
  const stateFromStoresObject = channel(searchFetching[14]).useStateFromStoresObject(items, () => {
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
      combined = searchResults.concat(closure_17);
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
    obj3.children = closure_12(tmp7(tmp5[21]), obj4);
    const items2 = [closure_12(tmp4(tmp5[20]).FauxHeader, obj3), tmp9];
    obj2.children = items2;
    return closure_13(closure_6, obj2);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        const obj5 = { channel };
        let tmp8Result = closure_12(EmptyState, obj5);
      }
    }
    const obj6 = {
      data: memo,
      renderItem(item) {
        item = item.item;
        if (null != item) {
          const obj = { entry: item };
          let tmp4 = closure_1_12(closure_1(searchFetching[18]), obj);
        } else {
          tmp4 = closure_1_12(closure_1(searchFetching[19]), {});
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
      contentContainerStyle: null,
    };
    memo = { paddingBottom: null };
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj6.contentContainerStyle = memo;
    tmp8Result = closure_12(closure_8, obj6);
  }
  let obj = channel(searchFetching[14]);
  tmp7 = importDefault;
}
