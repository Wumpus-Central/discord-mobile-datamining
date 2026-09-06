// discord_app/modules/directory_channels/native/components/GuildDirectory.tsx
import TTITrackerDefault from "../../../tti_analytics/TTITracker.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import TTIAnalyticsUtils from "../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import TTIFirstContentfulPaint from "../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators.tsx";
import useCanManageGuildDirectoryEntry from "../../useCanManageGuildDirectoryEntry.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import GuildDirectoryRowDefault from "GuildDirectoryRow.tsx";
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow.tsx";
import GuildDirectoryRowGenerator from "../GuildDirectoryRowGenerator.tsx";
import _mod12671 from "../../../../../_runtime/metro/12671__.js";
import HubProgressHeaderDefault from "../../../hub/native/components/progress_bar/HubProgressHeader.tsx";
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";

require = fn;
function keyExtractor(type, arg1) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === GuildDirectoryRowGenerator.RowType.ENTRY) {
    let guildId = type.entry.guildId;
  } else {
    let type1;
    if (type != null) {
      type1 = type.type;
    }
    const _HermesInternal = HermesInternal;
    guildId = "" + type1 + arg1.toString();
  }
  return guildId;
}
function renderItem(item) {
  item = item.item;
  let type;
  if (item != null) {
    type = item.type;
  }
  if (GuildDirectoryRowGenerator.RowType.HEADER === type) {
    let obj = { children: item.header };
    return closure_1_19(GuildDirectoryHeaderRowItem, obj);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    obj = { entry: item.entry };
    return closure_1_19(GuildDirectoryRowDefault, obj);
  } else {
    return closure_1_19(GuildDirectoryPlaceholderRowDefault, {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  const tmp = closure_23();
  return closure_1_19(Text_Text.Text, {
    style: closure_23().categorySectionText,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: children.children,
  });
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = closure_23();
  const features = guild.features;
  let obj = { style: tmp.headerWrapper, children: null };
  obj = { source: null, style: null };
  const hasItem = features.has(constants3.HUB);
  obj.source = _mod12671;
  obj.style = tmp.backgroundImage;
  const items = [closure_1_19(timestampProducer, obj)];
  obj = { style: tmp.textWrapper, children: null };
  const obj1 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.IT7qoC);
  const items1 = [closure_1_19(Text_Text.Text, obj1), , ,];
  const obj2 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items2 = [tmp.headerDescription];
  obj2.style = items2;
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t["5PoYts"]);
  items1[1] = closure_1_19(Text_Text.Text, obj2);
  const obj3 = {
    variant: "primary-overlay",
    icon: closure_1_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }),
    text: null,
    onPress: null,
  };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.nL2wKD);
  obj3.onPress = guild.onPressSearch;
  items1[2] = closure_1_19(components_Button_Button.Button, obj3);
  items1[3] = closure_1_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj.children = items1;
  items[1] = closure_1_20(hasOwnProperty, obj);
  obj.children = items;
  const children = [closure_1_20(hasOwnProperty, obj)];
  let tmp5Result = null;
  if (hasItem) {
    const obj4 = { guild, onDirectoryPage: true };
    tmp5Result = closure_1_19(HubProgressHeaderDefault, obj4);
  }
  children[1] = tmp5Result;
  return closure_1_20(__initData, { children });
}
function GuildDirectoryFooter(hideFooter) {
  ({ guild: require, channel } = hideFooter);
  const tmp = closure_23();
  let obj = useCanManageGuildDirectoryEntry;
  let tmp4 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!hideFooter.hideFooter) {
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = tmp2(1114).intl;
      obj.accessibilityLabel = intl.string(tmp2(1114).t.H9jxS1);
      obj.onPress = function onPress() {
        const obj = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
        return obj.open(obj);
      };
      obj = { style: tmp.footer, children: null };
      const obj1 = { style: tmp.addIcon, children: closure_19(tmp2(12753).PlusMediumIcon, {}) };
      const items = [closure_19(closure_5, obj1)];
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = tmp2(1114).intl;
      obj2.children = intl2.string(tmp2(1114).t.H9jxS1);
      items[1] = closure_19(tmp2(4556).Text, obj2);
      obj.children = items;
      obj.children = closure_20(closure_5, obj);
      tmp4 = closure_19(tmp2(5123).PressableOpacity, obj);
    }
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, SectionList: closure_7, StyleSheet } = get_ActivityIndicator);
const DirectoryEntryCategories = fn(12305).DirectoryEntryCategories;
const GuildDirectoryConstants = fn(12310);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryConstants);
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_15,
  AnalyticsObjects: closure_16,
  AnalyticEvents: closure_17,
  GuildFeatures: closure_18,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let closure_22 = Array(20).fill(null);
fn(4560);
let obj = {
  border: null,
  list: null,
  headerWrapper: null,
  backgroundImage: null,
  textWrapper: null,
  headerTitle: null,
  headerDescription: null,
  footer: null,
  addIcon: null,
  categorySectionText: null,
};
obj = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.border = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.list = createStyles;
obj.headerWrapper = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj.backgroundImage = { resizeMode: "cover", width: "100%" };
obj.textWrapper = { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" };
obj.headerTitle = { textAlign: "center", marginBottom: 8 };
obj.headerDescription = { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 };
obj.footer = { flexDirection: "row", padding: 16, alignItems: "center" };
let size = {
  marginRight: 16,
  height: 40,
  width: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.addIcon = size;
obj.categorySectionText = { padding: 16, paddingBottom: 4 };
let closure_23 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default function GuildDirectory(channel) {
  channel = channel.channel;
  const guildId = channel.guildId;
  noop = undefined;
  let currentCategoryId;
  let directoryEntries;
  let directoryIsFetching;
  let allEntriesCount;
  let categoryCounts;
  let ref;
  let _location;
  let history;
  function handleTapCategory() {
    if (ref2.current >= c4) {
      closure_3.current = true;
    }
  }
  let tmp = closure_23();
  let obj = channel(504);
  const items = [allEntriesCount];
  let onPressSearch = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = noop;
  dependencyMap = noop.useRef(null);
  let bottom = guildId(1611)().bottom;
  let obj2 = channel(12669);
  const hubProgressBarCompletedSteps = obj2.useHubProgressBarCompletedSteps(onPressSearch);
  let obj3 = channel(12669);
  if (null == obj3.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = _location;
  } else {
    sum = history + _location;
  }
  noop = sum;
  let tmp2Result = tmp2(504);
  const items1 = [ref];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    let obj = GuildDirectoryStore;
    currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    if (currentCategoryId !== DirectoryEntryCategories.ALL) {
      tmp3 = currentCategoryId;
    }
    directoryEntries = GuildDirectoryStore.getDirectoryEntries(channel.id, tmp3);
    const directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
    obj = {
      currentCategoryId,
      directoryEntries,
      directoryIsFetching: null,
      allEntriesCount: null,
      categoryCounts: null,
    };
    const directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
    let isFetchingResult = obj.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
      const tmp8 = null === currentCategoryId && null == directoryEntries;
    }
    obj.directoryIsFetching = isFetchingResult;
    obj.allEntriesCount = directoryAllEntriesCount;
    obj.categoryCounts = directoryCategoryCounts;
    return obj;
  });
  currentCategoryId = stateFromStoresObject.currentCategoryId;
  directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj1.useEffect(() => {
    let obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    obj = directoryEntries;
    if (directoryEntries == null) {
      obj = {};
    }
    TTITrackerDefault.recordRender(Object.keys(obj).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj1.useEffect(
    () => () => {
      const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
      if (null != lastMessageIdResult) {
        channel(closure_3[30]);
        const obj = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
        obj.ack(id.id, obj, true, true, lastMessageIdResult);
      }
    },
    items3,
  );
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = obj1.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = GuildDirectoryRowGenerator.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = obj1.useRef(null);
  obj1.useRef(0);
  tmp2Result = tmp2(4392);
  _location = tmp2Result.useLocation();
  history = channel(4392).useHistory();
  const items5 = [_location, history];
  const effect2 = obj1.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === constants.GUILD_LIST_TOP) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      const obj = { state: {} };
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = obj1.useEffect(() => {
    directoryEntries = GuildDirectoryActionCreatorsAll.fetchDirectoryEntries(channel.id);
    const directoryCounts = GuildDirectoryActionCreatorsAll.fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (onPressSearch != null) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj1.useEffect(() => {
    const obj = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (onPressSearch != null) {
      id = onPressSearch.id;
    }
    obj.directory_guild_id = id;
    obj.primary_category_id = currentCategoryId;
    obj.track(constants2.GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
  }, items7);
  const items8 = [memo];
  const effect5 = obj1.useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      tmp.current = null;
    }
  }, items8);
  if (null == onPressSearch) {
    return null;
  } else {
    if (!directoryIsFetching) {
      if (0 === allEntriesCount) {
        obj = { style: null, children: null };
        obj = { paddingBottom: bottom };
        obj.style = obj;
        obj1 = { style: tmp.border };
        const items9 = [closure_19(currentCategoryId, obj1), ,];
        obj2 = { guild: onPressSearch, channel };
        items9[1] = closure_19(guildId(12754), obj2);
        items9[2] = closure_19(tmp2(11896).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj.children = items9;
        let tmp23 = closure_20(currentCategoryId, obj);
      }
    }
    obj3 = { children: null };
    const obj4 = {
      ref,
      onScroll(nativeEvent) {
        closure_11.current = nativeEvent.nativeEvent.contentOffset.y;
      },
      scrollEventThrottle: 16,
      contentContainerStyle: null,
      windowSize: 10,
      ListHeaderComponent: null,
      sections: null,
      stickySectionHeadersEnabled: true,
      style: null,
      scrollIndicatorInsets: null,
      keyExtractor: null,
      renderItem: null,
      renderSectionHeader: null,
      ListFooterComponent: null,
    };
    const obj5 = { paddingBottom: bottom };
    obj4.contentContainerStyle = obj5;
    bottom = GuildDirectoryHeader;
    const obj6 = { guild: onPressSearch, onPressSearch: null };
    onPressSearch = function onPressSearch() {
      const obj = { channel };
      obj.open(obj);
    };
    obj6.onPressSearch = onPressSearch;
    obj4.ListHeaderComponent = closure_19(GuildDirectoryHeader, obj6);
    ref = { data: memo };
    memo = [ref];
    obj4.sections = memo;
    obj4.style = tmp.list;
    obj4.scrollIndicatorInsets = { right: 1 };
    tmp = keyExtractor;
    obj4.keyExtractor = keyExtractor;
    obj4.renderItem = renderItem;
    obj4.renderSectionHeader = function renderSectionHeader() {
      return closure_2_19(GuildDirectoryCategorySelectorDefault, {
        onCategorySelected: handleTapCategory,
        channel,
        categoryCounts,
        allEntriesCount,
      });
    };
    obj4.ListFooterComponent = function ListFooterComponent() {
      return closure_2_19(GuildDirectoryFooter, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj3.children = closure_19(directoryIsFetching, obj4);
    tmp23 = closure_19(currentCategoryId, obj3);
  }
}
