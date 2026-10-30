// === Module 14186: GuildDirectory ===

// Module 14186 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Pressables from "Pressables" /* 6974 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7213 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7647 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11449 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13285 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13798 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13806 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 13814 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 13833 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 13834 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 14188 */;
import _mod14189 from "module_14189" /* 14189 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 14190 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 14318 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 13810 */;

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
    return collapsedCategories(GuildDirectoryHeaderRowItem, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return collapsedCategories(GuildDirectoryRowDefault, obj);
  } else {
    return collapsedCategories(GuildDirectoryPlaceholderRowDefault, {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  const tmp = closure_22();
  return collapsedCategories(Text_Text.Text, { style: closure_22().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children });
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = closure_22();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: null };
  const hasItem = features.has(constants3.HUB);
  const obj2 = { source: _mod14189, style: tmp.backgroundImage };
  const items = [collapsedCategories(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: null };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.IT7qoC);
  const items1 = [collapsedCategories(Text_Text.Text, obj4), , , ];
  const obj5 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["5PoYts"]);
  items1[1] = collapsedCategories(Text_Text.Text, obj5);
  const obj6 = { variant: "primary-overlay", icon: collapsedCategories(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.nL2wKD);
  obj6.onPress = guild.onPressSearch;
  items1[2] = collapsedCategories(components_Button_Button.Button, obj6);
  items1[3] = collapsedCategories(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj3.children = items1;
  items[1] = closure_1_19(hasOwnProperty, obj3);
  obj.children = items;
  const children = [closure_1_19(hasOwnProperty, obj), ];
  let tmp5Result = null;
  if (hasItem) {
    const obj7 = { guild, onDirectoryPage: true };
    tmp5Result = collapsedCategories(HubProgressHeaderDefault, obj7);
  }
  children[1] = tmp5Result;
  return closure_1_19(dependencyMap, { children });
}
function GuildDirectoryFooter(hideFooter) {
  ({ guild: require, channel } = hideFooter);
  const tmp = closure_22();
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
      const obj4 = { style: tmp.addIcon, children: closure_18(PlusMediumIcon.PlusMediumIcon, {}) };
      const items = [closure_18(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.H9jxS1);
      items[1] = closure_18(Text_Text.Text, obj5);
      obj3.children = items;
      obj2.children = closure_19(closure_5, obj3);
      tmp4 = closure_18(Pressables.PressableOpacity, obj2);
    }
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, SectionList: metroRequire, StyleSheet } = get_ActivityIndicator);
const DirectoryEntryCategories = fn(13803).DirectoryEntryCategories;
const GuildDirectoryConstants = fn(13808);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: closure_12, DirectoryChannelScrollBehavior: map1 } = GuildDirectoryConstants);
const Constants = fn(1072);
({ AnalyticsObjectTypes: closure_14, AnalyticsObjects: closure_15, AnalyticEvents: closure_16, GuildFeatures: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let closure_21 = Array(20).fill(null);
const createStyles = fn(5009);
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
let closure_22 = createStyles.createStyles(obj);
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
  let ref2;
  let _location;
  let history;
  function handleTapCategory() {
    if (ref2.current >= c4) {
      closure_3.current = true;
    }
  }
  let tmp = closure_22();
  const items = [directoryIsFetching];
  let handleTapSearch = channel(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = noop.useRef(null);
  let bottom = guildId(1626)().bottom;
  let obj = channel(504);
  const tmp4 = guildId;
  const hubProgressBarCompletedSteps = channel(14187).useHubProgressBarCompletedSteps(handleTapSearch);
  let obj3 = channel(14187);
  if (null == obj4.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = ref2;
  } else {
    sum = _location + ref2;
  }
  noop = sum;
  obj4 = channel(14187);
  const items1 = [categoryCounts];
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
    const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
    if (null != lastMessageIdResult) {
      const obj = channel(closure_3[31]);
      const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: handleTapCategory.ACK_AUTOMATIC };
      obj.ack(id.id, obj2, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = obj2.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_21;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = GuildDirectoryRowGenerator.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(0);
  const tmp2Result = channel(504);
  _location = channel(5051).useLocation();
  const tmp2Result3 = channel(5051);
  history = channel(5051).useHistory();
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
  if (handleTapSearch != null) {
    id = handleTapSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj2.useEffect(() => {
    const obj2 = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (handleTapSearch != null) {
      id = handleTapSearch.id;
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
  if (null == handleTapSearch) {
    return null;
  } else {
    if (!directoryIsFetching) {
      if (0 === allEntriesCount) {
        const obj5 = { style: null, children: null };
        const obj6 = { paddingBottom: bottom };
        obj5.style = obj6;
        const obj7 = { style: tmp.border };
        const items9 = [closure_18(currentCategoryId, obj7), , ];
        const obj8 = { guild: handleTapSearch, channel };
        items9[1] = closure_18(tmp4(14314), obj8);
        items9[2] = closure_18(tmp2(13285).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj5.children = items9;
        let tmp23 = closure_19(currentCategoryId, obj5);
      }
    }
    const obj9 = { children: null };
    const obj10 = {
      ref,
      onScroll: function handleScroll(nativeEvent) {
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
    const obj12 = { guild: handleTapSearch, onPressSearch: null };
    handleTapSearch = function handleTapSearch() {
      GuildDirectorySearchModalActionCreatorsDefault.open({ channel });
    };
    obj12.onPressSearch = handleTapSearch;
    obj10.ListHeaderComponent = closure_18(GuildDirectoryHeader, obj12);
    ref = { data: memo };
    memo = [ref];
    obj10.sections = memo;
    obj10.style = tmp.list;
    obj10.scrollIndicatorInsets = { right: 1 };
    tmp = keyExtractor;
    obj10.keyExtractor = keyExtractor;
    obj10.renderItem = renderItem;
    obj10.renderSectionHeader = function renderSectionHeader() {
      return collapsedCategories(GuildDirectoryCategorySelectorDefault, { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj10.ListFooterComponent = function ListFooterComponent() {
      return collapsedCategories(GuildDirectoryFooter, { guild: handleTapSearch, channel, hideFooter: false });
    };
    obj9.children = closure_18(directoryEntries, obj10);
    tmp23 = closure_18(currentCategoryId, obj9);
  }
  const tmp2Result4 = channel(5051);
};