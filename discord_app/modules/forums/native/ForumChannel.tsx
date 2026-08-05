// discord_app/modules/forums/native/ForumChannel.tsx
import useLoadForumUnreadCounts from "useLoadForumUnreadCounts";
import { View } from "Text";
import initialize from "initialize";
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleChanged from "handleChanged";
import recomputeGuild from "recomputeGuild";
import { useForumChannelStore } from "set";
import ME from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import { Fonts } from "sum";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import set from "set";
import set from "initialize";

let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
const require = arg1;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  const tmp = createCacheKey();
  let obj = require(8202) /* useGradientBottom */;
  obj = { style: null, children: null };
  const items = [tmp.section, obj.useClientThemesOverride()];
  obj[0] = items;
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["3+LO1w"]);
  obj[1] = callback(require(4281) /* Text */.Text, obj);
  return callback(View, obj);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = createCacheKey();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  if (0 === numPosts) {
    const intl2 = tmp4(1236).intl;
    let stringResult = intl2.string(tmp4(1236).t.DbgHxi);
  } else {
    const intl = tmp4(1236).intl;
    obj = { numPosts: null, query: null };
    obj[0] = numPosts;
    obj[1] = numPosts.searchQuery;
    stringResult = intl.formatToPlainString(tmp4(1236).t["tBz/8b"], obj);
  }
  obj[3] = stringResult;
  obj[1] = closure_15(require(4281) /* Text */.Text, obj);
  return closure_15(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = createCacheKey();
  let obj = { style: tmp.missingPermissionContainer, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.TycmzM, { channelName: channelName.channelName });
  obj[1] = callback(require(4281) /* Text */.Text, obj);
  return callback(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = createCacheKey();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.OWZJdS, { channelName: channelName.channelName });
  obj[1] = callback(require(4281) /* Text */.Text, obj);
  return callback(View, obj);
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  let id;
  const tmp = createCacheKey();
  id = channel.id;
  const items = [id];
  const callback = React.useCallback(() => {
    combined = "ForumDisplaySettingsActionSheet-" + combined;
    let obj = outer1_1(outer1_2[24]);
    obj = {
      channelId: combined,
      onClose() {
        outer1_1(outer1_2[24]).hideActionSheet(combined);
      }
    };
    obj.openLazy(id(outer1_2[26])(outer1_2[25], outer1_2.paths), combined, obj);
  }, items);
  const isMediaChannelResult = channel.isMediaChannel();
  let tmp5Result = dependencyMap;
  let ArrowsUpDownIcon = id;
  if (importDefault(1348)("SortAndViewOptions")) {
    const intl3 = ArrowsUpDownIcon(1236).intl;
    const string3 = intl3.string;
    let t = ArrowsUpDownIcon(1236).t;
    if (isMediaChannelResult) {
      let string3Result = string3(t.JxU0wr);
    } else {
      string3Result = string3(t.xyYt8A);
    }
    t = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
    t[1] = string3Result;
    t[2] = callback;
    ArrowsUpDownIcon = ArrowsUpDownIcon(11451).ArrowsUpDownIcon;
    tmp5Result = tmp5(ArrowsUpDownIcon, { size: "xxs" });
    t[4] = tmp5Result;
    tmp5Result = tmp5(ArrowsUpDownIcon(4695).Button, t);
  } else {
    const intl = ArrowsUpDownIcon(1236).intl;
    const string = intl.string;
    t = ArrowsUpDownIcon(1236).t;
    if (isMediaChannelResult) {
      let stringResult = string(t["kQN/bi"]);
    } else {
      stringResult = string(t.Iqetyr);
    }
    let obj = { accessibilityRole: "button", accessibilityLabel: null, androidRippleConfig: null, activeOpacity: 0.8, style: null, onPress: null, children: null };
    obj[1] = stringResult;
    obj[2] = ANDROID_FOREGROUND_RIPPLE;
    obj[4] = tmp.optionsContainer;
    obj[5] = callback;
    obj = { style: null, children: null };
    obj[0] = tmp.optionsPill;
    obj = { size: "xs", style: null };
    obj[1] = tmp.sortOptionsIcon;
    const items1 = [tmp5(ArrowsUpDownIcon(11451).ArrowsUpDownIcon, obj), , ];
    const obj1 = { variant: "text-sm/medium", color: "interactive-text-default", style: null, children: null };
    obj1[2] = tmp.sortOptionsText;
    const intl2 = ArrowsUpDownIcon(1236).intl;
    const string2 = intl2.string;
    const t2 = ArrowsUpDownIcon(1236).t;
    if (isMediaChannelResult) {
      let string2Result = string2(t2.JxU0wr);
    } else {
      string2Result = string2(t2.xyYt8A);
    }
    obj1[3] = string2Result;
    items1[1] = tmp5(ArrowsUpDownIcon(4281).Text, obj1);
    items1[2] = tmp5(ArrowsUpDownIcon(9396).ChevronSmallDownIcon, { size: "xs" });
    obj[1] = items1;
    obj[6] = closure_16(View, obj);
    return tmp5(ArrowsUpDownIcon(4812).PressableOpacity, obj);
  }
}
function TagFilter(channel) {
  channel = channel.channel;
  function handlePress() {
    let obj = outer1_1(outer1_2[24]);
    obj = { channel };
    obj.openLazy(channel(outer1_2[26])(outer1_2[32], outer1_2.paths), "ForumTagFilterActionSheet", obj);
  }
  const tmp = createCacheKey();
  const tagFilter = useForumChannelStore(channel.id).tagFilter;
  if (importDefault(1348)("TagFilter")) {
    let obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
    const intl3 = tmp4(1236).intl;
    obj[1] = intl3.string(tmp4(1236).t["112vVE"]);
    obj[2] = handlePress;
    obj[4] = tmp3(tmp4(7651).TagIcon, { size: "xxs" });
    let tmp3Result = tmp3(tmp4(4695).Button, obj);
  } else {
    obj = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.8, style: null, onPress: null, children: null };
    const intl = tmp4(1236).intl;
    obj[1] = intl.string(tmp4(1236).t.TdqRTh);
    obj[3] = tmp.optionsContainer;
    obj[4] = handlePress;
    obj = { style: null, children: null };
    obj[0] = tmp.optionsPill;
    tmp3Result = tagFilter.size > 0;
    if (tmp3Result) {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp.countContainer;
      const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", style: null, children: null };
      obj2[2] = tmp.countText;
      obj2[3] = tagFilter.size;
      obj1[1] = tmp3(tmp4(4281).Text, obj2);
      tmp3Result = tmp3(tmp6, obj1);
    }
    const items = [tmp3Result, , ];
    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", style: null, children: null };
    obj3[2] = tmp.sortOptionsText;
    const intl2 = tmp4(1236).intl;
    obj3[3] = intl2.string(tmp4(1236).t["112vVE"]);
    items[1] = tmp3(tmp4(4281).Text, obj3);
    items[2] = tmp3(tmp4(9396).ChevronSmallDownIcon, { size: "xs" });
    obj[1] = items;
    obj[5] = closure_16(View, obj);
    tmp3Result = tmp3(tmp4(4812).PressableOpacity, obj);
    const tmp5 = closure_16;
  }
  return tmp3Result;
}
function getForumItemType(arg0) {
  let str = "thread";
  if (set.has(arg0)) {
    str = arg0;
  }
  return str;
}
function onForumViewableItemsChanged(changed) {
  changed = changed.changed;
  let item = changed.forEach((item) => {
    item = item.item;
    if (!set.has(item)) {
      channel = channel.getChannel(item);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      if (null != parent_id) {
        const obj = callback(table[34]);
        if (item.isViewable) {
          const _Date2 = Date;
          const result = obj.markForumPostItemAsSeen(parent_id, item, Date.now());
        } else {
          const _Date = Date;
          const result1 = obj.markForumPostItemAsUnseen(parent_id, item, Date.now());
        }
      }
    }
  });
}
function ForumChannelContent(channel) {
  let canLoadMore;
  let isSearchLoading;
  let loadMore;
  let loading;
  let searchResults;
  let sortOrder;
  let tagFilter;
  let tagSetting;
  channel = channel.channel;
  const searchQuery = channel.searchQuery;
  let forumActiveThreadIds = searchQuery;
  let joined;
  forumActiveThreadIds = undefined;
  let threadIds;
  canLoadMore = undefined;
  loadMore = undefined;
  loading = undefined;
  let stateFromStores;
  isSearchLoading = undefined;
  searchResults = undefined;
  let c11;
  let canViewArchivedPosts1;
  let canSearchForumPosts;
  let obj = forumActiveThreadIds;
  const ref = forumActiveThreadIds.useRef(null);
  joined = ref;
  let tmp = createCacheKey();
  ({ sortOrder, tagFilter, tagSetting } = searchResults(channel.id));
  let obj1 = forumActiveThreadIds(joined[35]);
  obj = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj1.useForumChannelSeenManager(obj);
  let items = [channel.id];
  const effect = forumActiveThreadIds.useEffect(() => {
    const current = joined.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  forumActiveThreadIds = undefined;
  joined = undefined;
  forumActiveThreadIds = undefined;
  threadIds = undefined;
  let obj3 = channel(joined[19]);
  forumActiveThreadIds = obj3.useForumActiveThreadIds({ channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true });
  const substr = forumActiveThreadIds.slice(0, channel(joined[20]).BATCH_SIZE);
  joined = substr.join();
  let items1 = [channel, joined];
  const effect1 = forumActiveThreadIds.useEffect(() => {
    if ("" !== joined) {
      channel(joined[20]).preloadForumThreads(channel);
      const obj = channel(joined[20]);
    }
  }, items1);
  let obj5 = channel(joined[21]);
  let items2 = [loadMore, canLoadMore];
  stateFromStores = obj5.useStateFromStores(items2, () => {
    const hasLoadedResult = loadMore.hasLoaded(channel.guild_id);
    let tmp2 = !hasLoadedResult;
    if (!hasLoadedResult) {
      tmp2 = !canLoadMore.isLurking(channel.guild_id);
    }
    return tmp2;
  });
  forumActiveThreadIds = stateFromStores;
  const tmp3 = searchResults(channel.id);
  obj = { channelId: channel.id };
  const forumSearchState = channel(joined[19]).useForumSearchState(obj);
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj7 = channel(joined[19]);
  const automaticForumSearch = channel(joined[19]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
  const obj9 = channel(joined[19]);
  const canViewArchivedPosts = channel(joined[19]).useCanViewArchivedPosts(channel);
  const obj10 = channel(joined[19]);
  const archivedThreads = channel(joined[22]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
  threadIds = archivedThreads.threadIds;
  ({ canLoadMore, loadMore, loading } = archivedThreads);
  const obj11 = channel(joined[22]);
  const loadForumUnreadCounts = channel(joined[19]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
  let tmp17 = null == searchResults && canViewArchivedPosts;
  if (tmp17) {
    let tmp18 = stateFromStores;
    if (!stateFromStores) {
      tmp18 = loading;
    }
    if (!tmp18) {
      tmp18 = isSearchLoading;
    }
    tmp17 = !tmp18;
  }
  if (tmp17) {
    tmp17 = 0 === forumActiveThreadIds.length;
  }
  if (tmp17) {
    tmp17 = 0 === threadIds.length;
  }
  let items3 = [forumActiveThreadIds.length, threadIds.length, stateFromStores];
  const effect2 = obj.useEffect(() => {
    forumActiveThreadIds(joined[23]).recordRender(forumActiveThreadIds.length + threadIds.length, !forumActiveThreadIds);
  }, items3);
  const tmp20 = forumActiveThreadIds(joined[36])(channel);
  c11 = tmp20;
  let tmp8Result = tmp8(tmp5[19]);
  canViewArchivedPosts1 = tmp8Result.useCanViewArchivedPosts(channel);
  tmp8Result = tmp8(tmp5[19]);
  canSearchForumPosts = tmp8Result.useCanSearchForumPosts(channel);
  const obj12 = channel(joined[19]);
  const items4 = [loading, canLoadMore, canViewArchivedPosts1, loadMore, searchResults];
  const clientThemesOverride = channel(joined[16]).useClientThemesOverride();
  const items5 = [976, loading, canLoadMore, canViewArchivedPosts1, loadMore, searchResults];
  const callback = obj.useCallback(() => {
    let tmp = null == searchResults && canViewArchivedPosts1;
    if (tmp) {
      tmp = !loading;
    }
    if (tmp) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  }, items4);
  const items6 = [searchResults, canViewArchivedPosts1, canSearchForumPosts, forumActiveThreadIds, stateFromStores, threadIds, loading, isSearchLoading];
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    let tmp = null == searchResults;
    if (tmp) {
      tmp = canViewArchivedPosts1;
    }
    if (tmp) {
      tmp = !loading;
    }
    if (tmp) {
      tmp = canLoadMore;
    }
    if (tmp) {
      tmp = nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height > nativeEvent.contentSize.height - 976;
    }
    if (tmp) {
      loadMore();
    }
  }, items5);
  let length;
  const memo = obj.useMemo(() => {
    const items = [];
    if (null != searchResults) {
      items.push(outer1_19);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(tmp, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push3(outer1_20);
      }
    } else if (!stateFromStores) {
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(forumActiveThreadIds, 0);
      HermesBuiltin.apply(items2, items);
      if (canViewArchivedPosts1) {
        let arr2 = threadIds;
        if (tmp14) {
          items.push(outer1_18);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(arr2, 0);
          HermesBuiltin.apply(items3, items);
        }
        tmp14 = null != threadIds && arr2.length > 0;
      } else {
        items.push(outer1_18);
        arr2 = items.push(outer1_21);
      }
    }
    let num5 = 0;
    if (!stateFromStores) {
      num5 = 0;
      if (!loading) {
        num5 = 0;
      }
      return items;
    }
    do {
      let tmp38 = outer1_22;
      let arr3 = items.push(outer1_22);
      let num6 = 1;
      num5 = num5 + 1;
      let num7 = 20;
    } while (num5 < 20);
  }, items6);
  if (searchResults != null) {
    length = searchResults.length;
  }
  const items7 = [length, searchQuery, tmp20];
  if (tmp17) {
    let str = tmp20;
    if (tmp20 == null) {
      str = "";
    }
    obj1 = { topViewHeight: 92, channelName: null, tagFilter: null };
    obj1[1] = str;
    obj1[2] = tagFilter;
    return tmp29(tmp4(tmp5[39]), obj1);
  } else {
    const obj2 = { style: null, children: null };
    const items8 = [tmp.list, clientThemesOverride];
    obj2[0] = items8;
    obj3 = { ref: null, contentContainerStyle: null, getItemType: null, keyExtractor: null, renderItem: null, data: null, onScroll: null, onScrollBeginDrag: null, onEndReached: null, onViewableItemsChanged: null, viewabilityConfig: null };
    obj3[0] = ref;
    let num = 0;
    if (0 !== forumActiveThreadIds.length) {
      num = tmp4(tmp5[13]).space.PX_8;
    }
    const obj4 = { paddingTop: null, paddingBottom: null };
    obj4[0] = num;
    obj4[1] = channel.insets.bottom + tmp4(tmp5[13]).space.PX_16;
    obj3[1] = obj4;
    obj3[2] = getForumItemType;
    obj3[3] = forumKeyExtractor;
    obj3[4] = tmp28;
    obj3[5] = memo;
    obj3[6] = callback1;
    obj3[7] = function onScrollBeginDrag() {
      let obj = channel(joined[41]);
      obj = { guildId: channel.guild_id, channelId: channel.id };
      return obj.trackForumScrolled(obj);
    };
    obj3[8] = callback;
    obj3[9] = onForumViewableItemsChanged;
    obj3[10] = closure_32;
    obj2[1] = tmp29(tmp8(tmp5[40]).FlashList, obj3);
    obj5 = { children: null };
    const items9 = [tmp29(tmp4(tmp5[42]), { absolute: true, mix: true }), tmp29(threadIds, obj2)];
    obj5[0] = items9;
    return callback2(closure_17, obj5);
  }
  const tmp8Result1 = channel(joined[16]);
}
function onCreatePostWithoutPermission() {
  let obj = importDefault(3986);
  obj = { key: "FORUM_NO_POST_PERMISSION_HELP", content: null, icon: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.iyzwnD);
  obj[2] = importDefault(7556);
  obj.open(obj);
}
({ AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
let set = new Set(items);
createCacheKey = { background: null, headerRow: null, headerDivider: null, container: null, noHeight: null, list: null, section: null, divider: null, missingPermissionContainer: null, missingPermissionText: null, optionsContainer: null, optionsPill: null, sortOptionsIcon: null, sortOptionsText: null, countContainer: null, countText: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 8 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, width: "100%", height: 1 };
createCacheKey[3] = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
createCacheKey[4] = { height: 0 };
createCacheKey[5] = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
createCacheKey[6] = { alignItems: "flex-start", justifyContent: "flex-end" };
let obj1 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, width: "100%", height: 1 };
let obj2 = { marginTop: 12, paddingStart: 4 };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_BOLD, require("Themes").colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }));
createCacheKey[7] = obj2;
createCacheKey[8] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: require("Themes").radii.xs };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: require("Themes").radii.xs };
let obj4 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_NORMAL, require("Themes").colors.TEXT_MUTED, 12));
createCacheKey[9] = obj4;
createCacheKey[10] = { overflow: "hidden", borderRadius: require("Themes").radii.xl };
let obj5 = { overflow: "hidden", borderRadius: require("Themes").radii.xl };
createCacheKey[11] = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 32, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj6 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 32, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[12] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 4 };
createCacheKey[13] = { marginHorizontal: 4 };
let obj7 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 4 };
createCacheKey[14] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: 20, marginRight: 4, minWidth: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" };
let num;
if (set.isAndroid()) {
  num = 14;
}
createCacheKey[15] = { lineHeight: num };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_32 = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
let result = set.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  channel = channel.channel;
  let importDefault;
  let analyticsLocations;
  let searchQuery;
  let showMemberVerificationGate;
  let stateFromStores1;
  let callback;
  const tmp = createCacheKey();
  let obj = channel(analyticsLocations[21]);
  const items = [recomputeGuild];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.canChatInGuild(channel.guild_id));
  let obj1 = channel(analyticsLocations[45]);
  const canStartThread = obj1.useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  analyticsLocations = importDefault(analyticsLocations[46])(importDefault(tmp3[47]).FORUM_CHANNEL).analyticsLocations;
  let tmp2Result = tmp2(tmp3[19]);
  obj = { channelId: channel.id };
  searchQuery = tmp2Result.useForumSearchState(obj).searchQuery;
  tmp2Result = tmp2(tmp3[48]);
  showMemberVerificationGate = tmp2Result.useShowMemberVerificationGate(channel.guild_id);
  const tmp8 = importDefault(analyticsLocations[46]);
  const items1 = [handleChanged];
  const items2 = [channel.id];
  stateFromStores1 = channel(analyticsLocations[21]).useStateFromStores(items1, () => outer1_8.getThreadSettings(channel.id), items2);
  const items3 = [channel.id];
  const tmp2Result1 = channel(analyticsLocations[21]);
  const effect = searchQuery.useEffect(() => () => {
    if (null != id.id) {
      outer1_1(outer1_2[50]).clearForumSearch(tmp.id);
      const obj = outer1_1(outer1_2[50]);
    }
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((analyticsLocationObject) => {
    let obj = _undefined(analyticsLocations[51]);
    obj.changeThreadSettings(channel.id, { isPrivate: false });
    let name;
    if (stateFromStores1 != null) {
      name = tmp5.name;
    }
    let tmp7 = null != name;
    if (tmp7) {
      let length;
      if (tmp5 != null) {
        if (tmp5.name != null) {
          const trimmed = str.trim();
          if (trimmed != null) {
            length = trimmed.length;
          }
        }
      }
      tmp7 = 0 !== length;
    }
    if (!tmp7) {
      let trimmed1;
      if (null != searchQuery) {
        if (str2.trim().length > 0) {
          trimmed1 = str2.trim();
        }
      }
      obj = { name: null };
      obj[0] = trimmed1;
      _undefined(tmp2[51]).changeThreadSettings(tmp3.id, obj);
      const tmpResult = _undefined(tmp2[51]);
    }
    obj = { guildId: tmp3.guild_id, parentChannelId: tmp3.id, analyticsLocationObject, analyticsLocations };
    const result = channel(analyticsLocations[52]).openCreateForumPostModal(obj);
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp6, callback];
  let tmp15 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (closure_1) {
        let obj = outer1_1(outer1_2[53]);
        if (!obj.hasSeen(id.id)) {
          obj = { channel: null, onPress: null };
          obj[0] = id;
          obj[1] = function onPress() {
            return callback({ page: outer1_12.GUILD_CHANNEL, section: outer1_13.FORUM_CHANNEL_GUIDELINES, object: outer1_11.BUTTON_CTA });
          };
          const result = outer1_0(outer1_2[56]).openForumGuidelinesActionSheet(obj);
          const obj2 = outer1_0(outer1_2[56]);
        }
      }
      const result1 = outer1_0(outer1_2[54]).triggerHapticFeedback(outer1_1(outer1_2[55]).IMPACT_LIGHT);
      obj = { page: outer1_12.GUILD_CHANNEL, section: outer1_13.FORUM_CHANNEL_FOOTER, object: outer1_11.BUTTON_CTA };
      callback(obj);
    }
    let obj = channel(analyticsLocations[41]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    let result = obj.trackForumCreateNewPostClick(obj);
    if (showMemberVerificationGate) {
      let result1 = channel(analyticsLocations[57]).openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
      const tmpResult = channel(analyticsLocations[57]);
    } else {
      const result2 = startCreateForumPostFlow();
    }
  }, items5);
  if (stateFromStores) {
    let tmp16 = !canStartThread;
    if (!canStartThread) {
      tmp16 = !showMemberVerificationGate;
    }
    tmp15 = tmp16;
  }
  const insets = tmp7(tmp3[58])({ includeKeyboardHeight: true }).insets;
  const tmp11 = importDefault(analyticsLocations[49])(channel);
  obj = { style: tmp.background, children: null };
  let tmp20 = null;
  const clientThemesOverride = channel(analyticsLocations[16]).useClientThemesOverride(tmp.noHeight);
  if (tmp11) {
    obj1 = { channel: null, ctaProps: null, topBorder: true };
    obj1[0] = channel;
    obj1[1] = { variant: "secondary" };
    tmp20 = callback(tmp2(tmp3[59]).OptInChannelBanner, obj1);
  }
  const items6 = [tmp20, , , , , ];
  let obj2 = { style: tmp.headerRow, children: null };
  const items7 = [callback(SortAndViewOptions, { channel }), ];
  let tmp22Result = channel.availableTags.length > 0;
  if (tmp22Result) {
    const obj3 = { channel: null };
    obj3[0] = channel;
    tmp22Result = tmp22(TagFilter, obj3);
  }
  items7[1] = tmp22Result;
  obj2[1] = items7;
  items6[1] = closure_16(showMemberVerificationGate, obj2);
  const items8 = [tmp.headerDivider, clientThemesOverride];
  items6[2] = callback(showMemberVerificationGate, { style: items8 });
  const tmp2Result2 = channel(analyticsLocations[16]);
  items6[3] = callback(showMemberVerificationGate, { style: tmp.container, children: callback(ForumChannelContent, { channel, insets, searchQuery }) });
  const obj5 = { accessibilityLabel: null, icon: null, disabled: null, positionBottom: null, onPress: null, onPressDisabled: null, accessibilityHint: null };
  const intl = tmp2(tmp3[18]).intl;
  obj5[0] = intl.string(channel(analyticsLocations[18]).t.TyAuoT);
  obj5[1] = importDefault(analyticsLocations[61]);
  obj5[2] = tmp15;
  obj5[3] = insets.bottom + importDefault(analyticsLocations[13]).space.PX_16;
  obj5[4] = callback1;
  obj5[5] = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp15) {
    const intl2 = tmp2(tmp3[18]).intl;
    stringResult = intl2.string(tmp2(tmp3[18]).t.iyzwnD);
  }
  obj5[6] = stringResult;
  items6[4] = callback(channel(analyticsLocations[60]).FloatingActionButton, obj5);
  tmp22Result = null;
  if (null != channel.guild_id) {
    const obj6 = { channel: null };
    obj6[0] = channel;
    tmp22Result = tmp22(tmp2(tmp3[62]).MemberActionChatInputBannerGuarded, obj6);
  }
  items6[5] = tmp22Result;
  obj[1] = items6;
  return closure_16(showMemberVerificationGate, obj);
};