// === Module 12803: GuildDirectory ===

// Module 12803 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4635 */;
import components_Button_Button from "components/Button/Button" /* 5059 */;
import Pressables from "Pressables" /* 5207 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7158 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7582 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12031 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12435 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12443 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 12451 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 12470 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 12471 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 12805 */;
import _mod12806 from "module_12806" /* 12806 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 12807 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12888 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 12893 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import ReadStateStore from "ReadStateStore" /* 4654 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 12447 */;

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
    const obj2 = { children: item.header };
    return closure_1_19(GuildDirectoryHeaderRowItem, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return closure_1_19(GuildDirectoryRowDefault, obj);
  } else {
    return closure_1_19(GuildDirectoryPlaceholderRowDefault, {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  const tmp = closure_23();
  return closure_1_19(Text_Text.Text, { style: closure_23().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children });
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = closure_23();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: null };
  const obj2 = { source: null, style: null };
  const hasItem = features.has(constants3.HUB);
  obj2.source = _mod12806;
  obj2.style = tmp.backgroundImage;
  const items = [closure_1_19(timestampProducer, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: null };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.IT7qoC);
  const items1 = [closure_1_19(Text_Text.Text, obj4), , , ];
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items2 = [tmp.headerDescription];
  obj5.style = items2;
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["5PoYts"]);
  items1[1] = closure_1_19(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", icon: closure_1_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.nL2wKD);
  obj6.onPress = guild.onPressSearch;
  items1[2] = closure_1_19(components_Button_Button.Button, obj6);
  items1[3] = closure_1_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj3.children = items1;
  items[1] = closure_1_20(hasOwnProperty, obj3);
  obj.children = items;
  const children = [closure_1_20(hasOwnProperty, obj), ];
  let tmp5Result = null;
  if (hasItem) {
    const obj7 = { guild, onDirectoryPage: true };
    tmp5Result = closure_1_19(HubProgressHeaderDefault, obj7);
  }
  children[1] = tmp5Result;
  return closure_1_20(__initData, { children });
}
function GuildDirectoryFooter(hideFooter) {
  ({ guild: require, channel } = hideFooter);
  const tmp = closure_23();
  let tmp4 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!hideFooter.hideFooter) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.H9jxS1);
      obj2.onPress = function onPress() {
        return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id });
      };
      const obj3 = { style: tmp.footer, children: null };
      const obj4 = { style: tmp.addIcon, children: closure_19(PlusMediumIcon.PlusMediumIcon, {}) };
      const items = [closure_19(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.H9jxS1);
      items[1] = closure_19(Text_Text.Text, obj5);
      obj3.children = items;
      obj2.children = closure_20(closure_5, obj3);
      tmp4 = closure_19(Pressables.PressableOpacity, obj2);
    }
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, SectionList: closure_7, StyleSheet } = get_ActivityIndicator);
const DirectoryEntryCategories = fn(12440).DirectoryEntryCategories;
const GuildDirectoryConstants = fn(12445);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryConstants);
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let closure_22 = Array(20).fill(null);
const createStyles = fn(4639);
let obj = { border: null, list: null, headerWrapper: null, backgroundImage: null, textWrapper: null, headerTitle: null, headerDescription: null, footer: null, addIcon: null, categorySectionText: null };
const ArrayResult = Array(20);
obj.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.list = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerWrapper = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj.backgroundImage = { resizeMode: "cover", width: "100%" };
obj.textWrapper = { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" };
obj.headerTitle = { textAlign: "center", marginBottom: 8 };
obj.headerDescription = { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 };
obj.footer = { flexDirection: "row", padding: 16, alignItems: "center" };
let size = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
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
  const items = [allEntriesCount];
  let onPressSearch = channel(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = noop.useRef(null);
  let bottom = guildId(1612)().bottom;
  let obj = channel(504);
  const tmp4 = guildId;
  const hubProgressBarCompletedSteps = channel(12804).useHubProgressBarCompletedSteps(onPressSearch);
  let obj3 = channel(12804);
  if (null == obj4.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = _location;
  } else {
    sum = history + _location;
  }
  noop = sum;
  obj4 = channel(12804);
  const items1 = [ref];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items1, () => {
    currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    if (currentCategoryId !== DirectoryEntryCategories.ALL) {
      tmp3 = currentCategoryId;
    }
    directoryEntries = GuildDirectoryStore.getDirectoryEntries(channel.id, tmp3);
    const directoryAllEntriesCount = GuildDirectoryStore.getDirectoryAllEntriesCount(channel.id);
    const obj2 = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
    const directoryCategoryCounts = GuildDirectoryStore.getDirectoryCategoryCounts(channel.id);
    let isFetchingResult = GuildDirectoryStore.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
      const tmp8 = null === currentCategoryId && null == directoryEntries;
    }
    obj2.directoryIsFetching = isFetchingResult;
    obj2.allEntriesCount = directoryAllEntriesCount;
    obj2.categoryCounts = directoryCategoryCounts;
    return obj2;
  });
  currentCategoryId = stateFromStoresObject.currentCategoryId;
  directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj2.useEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    let obj3 = directoryEntries;
    if (directoryEntries == null) {
      obj3 = {};
    }
    TTITrackerDefault.recordRender(Object.keys(obj3).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj2.useEffect(() => () => {
    const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
    if (null != lastMessageIdResult) {
      const obj = channel(closure_3[30]);
      const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
      obj.ack(id.id, obj2, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = obj2.useMemo(() => {
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
  ref = obj2.useRef(null);
  noop.useRef(0);
  const tmp2Result = channel(504);
  _location = channel(4472).useLocation();
  const tmp2Result3 = channel(4472);
  history = channel(4472).useHistory();
  const items5 = [_location, history];
  const effect2 = obj2.useEffect(() => {
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
  const effect3 = obj2.useEffect(() => {
    directoryEntries = GuildDirectoryActionCreatorsAll.fetchDirectoryEntries(channel.id);
    const directoryCounts = GuildDirectoryActionCreatorsAll.fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (onPressSearch != null) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj2.useEffect(() => {
    const obj2 = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (onPressSearch != null) {
      id = onPressSearch.id;
    }
    obj2.directory_guild_id = id;
    obj2.primary_category_id = currentCategoryId;
    AnalyticsUtilsDefault.track(constants2.GUILD_DIRECTORY_CHANNEL_VIEWED, obj2);
  }, items7);
  const items8 = [memo];
  const effect5 = obj2.useEffect(() => {
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
        const obj5 = { style: null, children: null };
        const obj6 = { paddingBottom: bottom };
        obj5.style = obj6;
        const obj7 = { style: tmp.border };
        const items9 = [closure_19(currentCategoryId, obj7), , ];
        const obj8 = { guild: onPressSearch, channel };
        items9[1] = closure_19(tmp4(12889), obj8);
        items9[2] = closure_19(tmp2(12031).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj5.children = items9;
        let tmp23 = closure_20(currentCategoryId, obj5);
      }
    }
    const obj9 = { children: null };
    const obj10 = {
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
      ListFooterComponent: null
    };
    const obj11 = { paddingBottom: bottom };
    obj10.contentContainerStyle = obj11;
    bottom = GuildDirectoryHeader;
    const obj12 = { guild: onPressSearch, onPressSearch: null };
    onPressSearch = function onPressSearch() {
      GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
    };
    obj12.onPressSearch = onPressSearch;
    obj10.ListHeaderComponent = closure_19(GuildDirectoryHeader, obj12);
    ref = { data: memo };
    memo = [ref];
    obj10.sections = memo;
    obj10.style = tmp.list;
    obj10.scrollIndicatorInsets = { right: 1 };
    tmp = keyExtractor;
    obj10.keyExtractor = keyExtractor;
    obj10.renderItem = renderItem;
    obj10.renderSectionHeader = function renderSectionHeader() {
      return closure_2_19(GuildDirectoryCategorySelectorDefault, { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj10.ListFooterComponent = function ListFooterComponent() {
      return closure_2_19(GuildDirectoryFooter, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj9.children = closure_19(directoryIsFetching, obj10);
    tmp23 = closure_19(currentCategoryId, obj9);
  }
  const tmp2Result4 = channel(4472);
};