// === Module 12120: keyExtractor ===

// Module 12120 (keyExtractor)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import Button from "Button" /* 4880 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6187 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11382 */;
import useCanManageGuildDirectoryEntry from "useCanManageGuildDirectoryEntry" /* 11791 */;
import _modDef11819 from "module_11819" /* 11819 */;
import _modDef11820 from "module_11820" /* 11820 */;
import RowType from "RowType" /* 12122 */;
import registerAsset from "registerAsset" /* 12123 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 12124 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import closure_9 from "generateOldThreadCutoff" /* 4460 */;
import closure_10 from "isFetching" /* 11796 */;
import { DirectoryEntryCategories } from "DirectoryEntryTypes" /* 11789 */;
import GuildDirectoryCreate from "GuildDirectoryCreate" /* 11794 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import ArrayResult from "module_20" /* 20 */;

require = arg1;
function keyExtractor(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === RowType.RowType.ENTRY) {
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
  if (RowType.RowType.HEADER === type) {
    let obj = { children: null };
    obj[0] = item.header;
    return callback(GuildDirectoryHeaderRowItem, obj);
  } else if (RowType.RowType.ENTRY === type) {
    obj = { entry: null };
    obj[0] = item.entry;
    return callback(_modDef11819, obj);
  } else {
    return callback(_modDef11820, {});
  }
  const tmp2 = require;
}
function GuildDirectoryHeaderRowItem(children) {
  const tmp = callback3();
  return callback(Text.Text, { style: callback3().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children });
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const features = guild.features;
  let obj = { style: tmp.headerWrapper, children: null };
  obj = { source: null, style: null };
  const hasItem = features.has(constants.HUB);
  obj[0] = registerAsset;
  obj[1] = tmp.backgroundImage;
  const items = [callback(closure_6, obj), ];
  obj = { style: tmp.textWrapper, children: null };
  obj1 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.IT7qoC);
  const items1 = [callback(Text.Text, obj1), , , ];
  const obj2 = { style: items2, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  items2 = [tmp.headerDescription];
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.string(getSystemLocale.t["5PoYts"]);
  items1[1] = callback(Text.Text, obj2);
  const obj3 = { variant: "primary-overlay", icon: callback(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj3[2] = intl3.string(getSystemLocale.t.nL2wKD);
  obj3[3] = guild.onPressSearch;
  items1[2] = callback(Button.Button, obj3);
  items1[3] = callback(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj[1] = items1;
  items[1] = callback2(closure_5, obj);
  obj[1] = items;
  const children = [callback2(closure_5, obj), ];
  let tmp5Result = null;
  if (hasItem) {
    const obj4 = { guild: null, onDirectoryPage: true };
    obj4[0] = guild;
    tmp5Result = callback(HubProgressHeaderDefault, obj4);
  }
  children[1] = tmp5Result;
  return callback2(closure_21, { children });
}
function GuildDirectoryFooter(hideFooter) {
  ({ guild: require, channel } = hideFooter);
  const tmp = callback3();
  let obj = useCanManageGuildDirectoryEntry;
  let tmp4 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!hideFooter.hideFooter) {
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl = tmp2(1236).intl;
      obj[1] = intl.string(tmp2(1236).t.H9jxS1);
      obj[2] = function onPress() {
        let obj = channel(closure_1_3[24]);
        obj = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
        return obj.open(obj);
      };
      obj = { style: null, children: null };
      obj[0] = tmp.footer;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.addIcon;
      obj1[1] = callback(tmp2(12205).PlusMediumIcon, {});
      const items = [callback(closure_5, obj1), ];
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = tmp2(1236).intl;
      obj2[2] = intl2.string(tmp2(1236).t.H9jxS1);
      items[1] = callback(tmp2(4441).Text, obj2);
      obj[1] = items;
      obj[3] = callback2(closure_5, obj);
      tmp4 = callback(tmp2(5020).PressableOpacity, obj);
    }
  }
  return tmp4;
}
({ View: c5, Image: closure_6, SectionList: error, StyleSheet } = get_ActivityIndicator);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryCreate.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryCreate);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let closure_22 = require("module_20").fill(null);
let obj = { border: null, list: null, headerWrapper: null, backgroundImage: null, textWrapper: null, headerTitle: null, headerDescription: null, footer: null, addIcon: null, categorySectionText: null };
obj = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[1] = createCacheKey;
obj[2] = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj[3] = { resizeMode: "cover", width: "100%" };
obj[4] = { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" };
obj[5] = { textAlign: "center", marginBottom: 8 };
obj[6] = { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 };
obj[7] = { flexDirection: "row", padding: 16, alignItems: "center" };
obj[8] = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[9] = { padding: 16, paddingBottom: 4 };
let closure_23 = createCacheKey.createStyles(obj);
let obj2 = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default function GuildDirectory(channel) {
  channel = channel.channel;
  const guildId = channel.guildId;
  let onPressSearch;
  dependencyMap = undefined;
  let React;
  let currentCategoryId;
  let directoryEntries;
  let directoryIsFetching;
  let allEntriesCount;
  let categoryCounts;
  let ref;
  closure_11 = undefined;
  let _location;
  let history;
  function handleTapCategory() {
    if (ref2.current >= c4) {
      closure_3.current = true;
    }
  }
  let tmp = callback3();
  let obj = channel(589);
  const items = [allEntriesCount];
  onPressSearch = obj.useStateFromStores(items, () => allEntriesCount.getGuild(guildId));
  obj1 = React;
  dependencyMap = React.useRef(null);
  let bottom = guildId(1629)().bottom;
  let obj2 = channel(12121);
  const hubProgressBarCompletedSteps = obj2.useHubProgressBarCompletedSteps(onPressSearch);
  let obj3 = channel(12121);
  if (null == obj3.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = _location;
  } else {
    sum = history + _location;
  }
  React = sum;
  let tmp2Result = tmp2(589);
  const items1 = [ref];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    let obj = ref;
    currentCategoryId = ref.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    if (currentCategoryId !== ref2.ALL) {
      tmp3 = currentCategoryId;
    }
    directoryEntries = ref.getDirectoryEntries(channel.id, tmp3);
    const directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
    obj = { currentCategoryId, directoryEntries, directoryIsFetching: null, allEntriesCount: null, categoryCounts: null };
    const directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
    let isFetchingResult = obj.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
      const tmp8 = null === currentCategoryId && null == directoryEntries;
    }
    obj[2] = isFetchingResult;
    obj[3] = directoryAllEntriesCount;
    obj[4] = directoryCategoryCounts;
    return obj;
  });
  currentCategoryId = stateFromStoresObject.currentCategoryId;
  directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj1.useEffect(() => {
    let obj = channel(ref[28]);
    obj.trackAppUIViewed();
    obj = directoryEntries;
    if (directoryEntries == null) {
      obj = {};
    }
    guildId(ref[29]).recordRender(Object.keys(obj).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj1.useEffect(() => () => {
    const lastMessageIdResult = closure_1_9.lastMessageId(id.id);
    if (null != lastMessageIdResult) {
      let obj = closure_1_0(closure_1_3[30]);
      obj = { object: null, objectType: null };
      obj[0] = closure_1_16.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED;
      obj[1] = closure_1_15.ACK_AUTOMATIC;
      obj.ack(id.id, obj, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let memo = obj1.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_1_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = channel(ref[12]).generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
      const obj = channel(ref[12]);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = obj1.useRef(null);
  closure_11 = obj1.useRef(0);
  tmp2Result = tmp2(4278);
  _location = tmp2Result.useLocation();
  history = channel(4278).useHistory();
  const items5 = [_location, history];
  const effect2 = obj1.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === handleTapCategory.GUILD_LIST_TOP) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      const obj = { state: null };
      obj[0] = {};
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = obj1.useEffect(() => {
    directoryEntries = onPressSearch(ref[32]).fetchDirectoryEntries(channel.id);
    const obj = onPressSearch(ref[32]);
    const directoryCounts = onPressSearch(ref[32]).fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (onPressSearch != null) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj1.useEffect(() => {
    let obj = guildId(ref[33]);
    obj = { directory_channel_id: channel.id, directory_guild_id: null, primary_category_id: null };
    let id;
    if (onPressSearch != null) {
      id = onPressSearch.id;
    }
    obj[1] = id;
    obj[2] = currentCategoryId;
    obj.track(closure_1_17.GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
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
        obj = { paddingBottom: null };
        obj[0] = bottom;
        obj[0] = obj;
        obj1 = { style: null };
        obj1[0] = tmp.border;
        const items9 = [callback(currentCategoryId, obj1), , ];
        obj2 = { guild: null, channel: null };
        obj2[0] = onPressSearch;
        obj2[1] = channel;
        items9[1] = callback(guildId(12206), obj2);
        items9[2] = callback(tmp2(11382).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        obj[1] = items9;
        let tmp23 = callback2(currentCategoryId, obj);
      }
    }
    obj3 = { children: null };
    const obj4 = { ref: null, onScroll: null, scrollEventThrottle: 16, contentContainerStyle: null, windowSize: 10, ListHeaderComponent: null, sections: null, stickySectionHeadersEnabled: true, style: null, scrollIndicatorInsets: null, keyExtractor: null, renderItem: null, renderSectionHeader: null, ListFooterComponent: null };
    obj4[0] = ref;
    obj4[1] = function onScroll(nativeEvent) {
      closure_11.current = nativeEvent.nativeEvent.contentOffset.y;
    };
    const obj5 = { paddingBottom: null };
    obj5[0] = bottom;
    obj4[3] = obj5;
    bottom = GuildDirectoryHeader;
    const obj6 = { guild: null, onPressSearch: null };
    obj6[0] = onPressSearch;
    onPressSearch = function onPressSearch(arg0) {
      let obj = guildId(ref[35]);
      obj = { channel };
      obj.open(obj);
    };
    obj6[1] = onPressSearch;
    obj4[5] = callback(GuildDirectoryHeader, obj6);
    ref = { data: null };
    ref[0] = memo;
    memo = [ref];
    obj4[6] = memo;
    obj4[8] = tmp.list;
    obj4[9] = { right: 1 };
    tmp = keyExtractor;
    obj4[10] = keyExtractor;
    obj4[11] = renderItem;
    obj4[12] = function renderSectionHeader() {
      return closure_1_19(guildId(ref[36]), { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj4[13] = function ListFooterComponent() {
      return closure_1_19(closure_1_28, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj3[0] = callback(directoryIsFetching, obj4);
    tmp23 = callback(currentCategoryId, obj3);
  }
};