// === Module 12522: forumKeyExtractor ===

// Module 12522 (forumKeyExtractor)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import Text from "Text" /* 4474 */;
import useGradientBottom from "useGradientBottom" /* 7626 */;
import registerAssetDefault from "registerAsset" /* 12531 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 4121 */;
import closure_6 from "handleThreadCreateOrUpdate" /* 5457 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "handleChanged" /* 4854 */;
import closure_9 from "recomputeGuild" /* 5365 */;
import { useForumChannelStore } from "set" /* 11796 */;
import ME from "ME" /* 673 */;
import { Fonts } from "sum" /* 502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5469 */;
import set from "set" /* 2 */;

require = arg1;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  const tmp = callback3();
  let obj = useGradientBottom;
  obj = { style: null, children: null };
  const items = [tmp.section, obj.useClientThemesOverride()];
  obj[0] = items;
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["3+LO1w"]);
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = callback3();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  if (0 === numPosts) {
    const intl2 = tmp4(1233).intl;
    let stringResult = intl2.string(tmp4(1233).t.DbgHxi);
  } else {
    const intl = tmp4(1233).intl;
    obj = { numPosts: null, query: null };
    obj[0] = numPosts;
    obj[1] = numPosts.searchQuery;
    stringResult = intl.formatToPlainString(tmp4(1233).t["tBz/8b"], obj);
  }
  obj[3] = stringResult;
  obj[1] = closure_14(Text.Text, obj);
  return closure_14(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = callback3();
  let obj = { style: tmp.missingPermissionContainer, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(getSystemLocale.t.TycmzM, { channelName: channelName.channelName });
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = callback3();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(getSystemLocale.t.OWZJdS, { channelName: channelName.channelName });
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
}
function GameInvitesChannelHeaderGameIcon(channel) {
  let _require;
  let shouldOpenGameProfile;
  let gameId;
  let obj = _require(gameId[21]);
  const application = obj.useGameInvitesChannelOfficialApplication(channel.channel.id).application;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj = { applicationId: id, source: tmp(tmp2[24]).GameProfileSources.GameInvitesChannel };
  const tmp4Result = shouldOpenGameProfile(gameId[23])(obj);
  _require = tmp4Result;
  shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  gameId = tmp4Result.gameId;
  let tmp8Result = null;
  if (null != application) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, children: null };
    obj[1] = application.name;
    let tmp9 = !shouldOpenGameProfile;
    if (shouldOpenGameProfile) {
      tmp9 = null == gameId;
    }
    obj[2] = tmp9;
    obj[3] = function onPress() {
      let tmp = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp = null != gameId;
      }
      if (tmp) {
        let obj = shouldOpenGameProfile(gameId[26]);
        obj = { gameId: null, gameProfileModalChecks: null, source: null };
        obj[0] = gameId;
        obj[1] = callback;
        obj[2] = callback(gameId[24]).GameProfileSources.GameInvitesChannel;
        obj.openGameProfileModal(obj);
      }
    };
    obj1 = { game: null, size: null };
    obj1[0] = application;
    obj1[1] = tmp(tmp2[27]).GameIconSizes.SMALL;
    obj[4] = closure_14(shouldOpenGameProfile(tmp2[27]), obj1);
    tmp8Result = tmp8(tmp(tmp2[25]).PressableOpacity, obj);
    const tmp3Result = shouldOpenGameProfile(tmp2[27]);
  }
  return tmp8Result;
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  let id;
  id = channel.id;
  const items = [id];
  const callback = React.useCallback(() => {
    combined = "ForumDisplaySettingsActionSheet-" + combined;
    let obj = closure_1_1(closure_1_2[28]);
    obj = {
      channelId: combined,
      onClose() {
        closure_1_1(closure_1_2[28]).hideActionSheet(combined);
      }
    };
    obj.openLazy(id(closure_1_2[30])(closure_1_2[29], closure_1_2.paths), combined, obj);
  }, items);
  const intl = id(1233).intl;
  const string = intl.string;
  const t = id(1233).t;
  if (isMediaChannelResult) {
    let stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  isMediaChannelResult = channel.isMediaChannel();
  const tmp4 = id;
  return closure_14(id(4928).Button, { variant: "secondary", text: stringResult, onPress: callback, size: "sm", icon: closure_14(id(11944).ArrowsUpDownIcon, { size: "xxs" }) });
}
function TagFilter(channel) {
  channel = channel.channel;
  let obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
  const intl = channel(1233).intl;
  obj[1] = intl.string(channel(1233).t["112vVE"]);
  obj[2] = function onPress() {
    let obj = closure_1_1(closure_1_2[28]);
    obj = { channel };
    obj.openLazy(channel(closure_1_2[30])(closure_1_2[33], closure_1_2.paths), "ForumTagFilterActionSheet", obj);
  };
  obj[4] = callback(channel(10641).TagIcon, { size: "xxs" });
  return callback(channel(4928).Button, obj);
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
        const obj = callback(table[35]);
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
  channel = channel.channel;
  const searchQuery = channel.searchQuery;
  let joined = searchQuery;
  let stateFromStores;
  let activeThreadIds;
  let archivedThreadIds;
  canLoadMore = undefined;
  loadMore = undefined;
  loading = undefined;
  stateFromStores = undefined;
  isSearchLoading = undefined;
  searchResults = undefined;
  closure_11 = undefined;
  let canViewArchivedPosts1;
  let canSearchForumPosts;
  let obj = activeThreadIds;
  const ref = activeThreadIds.useRef(null);
  stateFromStores = ref;
  let tmp = callback3();
  ({ sortOrder, tagFilter, tagSetting } = searchResults(channel.id));
  obj1 = joined(stateFromStores[36]);
  obj = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj1.useForumChannelSeenManager(obj);
  let items = [channel.id];
  const effect = activeThreadIds.useEffect(() => {
    const current = stateFromStores.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  joined = undefined;
  stateFromStores = undefined;
  activeThreadIds = undefined;
  archivedThreadIds = undefined;
  let obj3 = channel(stateFromStores[17]);
  const forumActiveThreadIds = obj3.useForumActiveThreadIds({ channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true });
  const substr = forumActiveThreadIds.slice(0, channel(stateFromStores[18]).BATCH_SIZE);
  joined = substr.join();
  let items1 = [channel, joined];
  const effect1 = activeThreadIds.useEffect(() => {
    if ("" !== joined) {
      channel(stateFromStores[18]).preloadForumThreads(channel);
      const obj = channel(stateFromStores[18]);
    }
  }, items1);
  let obj5 = channel(stateFromStores[19]);
  let items2 = [loadMore, canLoadMore];
  stateFromStores = obj5.useStateFromStores(items2, () => {
    const hasLoadedResult = loadMore.hasLoaded(channel.guild_id);
    let tmp2 = !hasLoadedResult;
    if (!hasLoadedResult) {
      tmp2 = !canLoadMore.isLurking(channel.guild_id);
    }
    return tmp2;
  });
  const tmp3 = searchResults(channel.id);
  obj = { channelId: channel.id };
  const forumSearchState = channel(stateFromStores[17]).useForumSearchState(obj);
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj7 = channel(stateFromStores[17]);
  const automaticForumSearch = channel(stateFromStores[17]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
  const obj9 = channel(stateFromStores[17]);
  const canViewArchivedPosts = channel(stateFromStores[17]).useCanViewArchivedPosts(channel);
  const obj10 = channel(stateFromStores[17]);
  const archivedThreads = channel(stateFromStores[20]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
  ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
  const obj11 = channel(stateFromStores[20]);
  const loadForumUnreadCounts = channel(stateFromStores[17]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
  const obj12 = channel(stateFromStores[17]);
  const gameInvitesActiveAndArchivedThreads = channel(stateFromStores[21]).useGameInvitesActiveAndArchivedThreads(channel, forumActiveThreadIds, threadIds);
  activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
  archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
  let tmp18 = null == searchResults && canViewArchivedPosts;
  if (tmp18) {
    let tmp19 = stateFromStores;
    if (!stateFromStores) {
      tmp19 = loading;
    }
    if (!tmp19) {
      tmp19 = isSearchLoading;
    }
    tmp18 = !tmp19;
  }
  if (tmp18) {
    tmp18 = 0 === activeThreadIds.length;
  }
  if (tmp18) {
    tmp18 = 0 === archivedThreadIds.length;
  }
  let items3 = [activeThreadIds.length, archivedThreadIds.length, stateFromStores];
  const effect2 = obj.useEffect(() => {
    joined(stateFromStores[22]).recordRender(activeThreadIds.length + archivedThreadIds.length, !stateFromStores);
  }, items3);
  const tmp21 = joined(stateFromStores[37])(channel);
  closure_11 = tmp21;
  let tmp8Result = tmp8(tmp5[17]);
  canViewArchivedPosts1 = tmp8Result.useCanViewArchivedPosts(channel);
  tmp8Result = tmp8(tmp5[17]);
  canSearchForumPosts = tmp8Result.useCanSearchForumPosts(channel);
  const obj13 = channel(stateFromStores[21]);
  const items4 = [loading, canLoadMore, canViewArchivedPosts1, loadMore, searchResults];
  const clientThemesOverride = channel(stateFromStores[14]).useClientThemesOverride();
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
  const items6 = [searchResults, canViewArchivedPosts1, canSearchForumPosts, activeThreadIds, stateFromStores, archivedThreadIds, loading, isSearchLoading];
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
      items.push(closure_1_18);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(tmp, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push3(closure_1_19);
      }
    } else if (!stateFromStores) {
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(activeThreadIds, 0);
      HermesBuiltin.apply(items2, items);
      if (canViewArchivedPosts1) {
        let arr2 = archivedThreadIds;
        if (tmp14) {
          items.push(closure_1_17);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(arr2, 0);
          HermesBuiltin.apply(items3, items);
        }
        tmp14 = null != archivedThreadIds && arr2.length > 0;
      } else {
        items.push(closure_1_17);
        arr2 = items.push(closure_1_20);
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
      let tmp38 = closure_1_21;
      let arr3 = items.push(closure_1_21);
      let num6 = 1;
      num5 = num5 + 1;
      let num7 = 20;
    } while (num5 < 20);
  }, items6);
  if (searchResults != null) {
    length = searchResults.length;
  }
  const items7 = [length, searchQuery, tmp21];
  if (tmp18) {
    let str = tmp21;
    if (tmp21 == null) {
      str = "";
    }
    obj1 = { topViewHeight: 92, channelName: null, tagFilter: null };
    obj1[1] = str;
    obj1[2] = tagFilter;
    return tmp30(tmp4(tmp5[40]), obj1);
  } else {
    const obj2 = { style: null, children: null };
    const items8 = [tmp.list, clientThemesOverride];
    obj2[0] = items8;
    obj3 = { ref: null, contentContainerStyle: null, getItemType: null, keyExtractor: null, renderItem: null, data: null, onScroll: null, onScrollBeginDrag: null, onEndReached: null, onViewableItemsChanged: null, viewabilityConfig: null };
    obj3[0] = ref;
    let num = 0;
    if (0 !== activeThreadIds.length) {
      num = tmp4(tmp5[12]).space.PX_8;
    }
    const obj4 = { paddingTop: null, paddingBottom: null };
    obj4[0] = num;
    obj4[1] = channel.insets.bottom + tmp4(tmp5[12]).space.PX_16;
    obj3[1] = obj4;
    obj3[2] = getForumItemType;
    obj3[3] = forumKeyExtractor;
    obj3[4] = tmp29;
    obj3[5] = memo;
    obj3[6] = callback1;
    obj3[7] = function onScrollBeginDrag() {
      let obj = channel(stateFromStores[42]);
      obj = { guildId: channel.guild_id, channelId: channel.id };
      return obj.trackForumScrolled(obj);
    };
    obj3[8] = callback;
    obj3[9] = onForumViewableItemsChanged;
    obj3[10] = closure_32;
    obj2[1] = tmp30(tmp8(tmp5[41]).FlashList, obj3);
    obj5 = { children: null };
    const items9 = [tmp30(tmp4(tmp5[43]), { absolute: true, mix: true }), tmp30(archivedThreadIds, obj2)];
    obj5[0] = items9;
    return callback2(closure_15, obj5);
  }
  const tmp8Result1 = channel(stateFromStores[14]);
}
function onCreatePostWithoutPermission() {
  let obj = dispatcherDefault;
  obj = { key: "FORUM_NO_POST_PERMISSION_HELP", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.iyzwnD);
  obj[2] = registerAssetDefault;
  obj.open(obj);
}
({ AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
let set = new Set(items);
createCacheKey = { background: null, headerRow: null, headerLeftContainer: null, headerDivider: null, container: null, noHeight: null, list: null, section: null, divider: null, missingPermissionContainer: null, missingPermissionText: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 8 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: 8 };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
createCacheKey[4] = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
createCacheKey[5] = { height: 0 };
createCacheKey[6] = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
createCacheKey[7] = { alignItems: "flex-start", justifyContent: "flex-end" };
let obj1 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
let obj2 = { marginTop: 12, paddingStart: 4 };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_BOLD, ThemesDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }));
createCacheKey[8] = obj2;
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: ThemesDefault.radii.xs };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: ThemesDefault.radii.xs };
let obj4 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_NORMAL, ThemesDefault.colors.TEXT_MUTED, 12));
createCacheKey[10] = obj4;
let closure_24 = createCacheKey.createStyles(createCacheKey);
let closure_32 = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
let result = set.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let analyticsLocations;
  let searchQuery;
  let showMemberVerificationGate;
  let stateFromStores1;
  let callback;
  const tmp = callback3();
  let obj = channel(analyticsLocations[19]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.canChatInGuild(channel.guild_id));
  obj1 = channel(analyticsLocations[46]);
  const canStartThread = obj1.useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  analyticsLocations = importDefault(analyticsLocations[47])(importDefault(tmp3[48]).FORUM_CHANNEL).analyticsLocations;
  let tmp2Result = tmp2(tmp3[17]);
  obj = { channelId: channel.id };
  searchQuery = tmp2Result.useForumSearchState(obj).searchQuery;
  tmp2Result = tmp2(tmp3[49]);
  showMemberVerificationGate = tmp2Result.useShowMemberVerificationGate(channel.guild_id);
  let tmp8 = importDefault(analyticsLocations[47]);
  const items1 = [closure_8];
  const items2 = [channel.id];
  stateFromStores1 = channel(analyticsLocations[19]).useStateFromStores(items1, () => closure_1_8.getThreadSettings(channel.id), items2);
  const items3 = [channel.id];
  const tmp2Result1 = channel(analyticsLocations[19]);
  const effect = searchQuery.useEffect(() => () => {
    if (null != id.id) {
      closure_1_1(closure_1_2[51]).clearForumSearch(tmp.id);
      const obj = closure_1_1(closure_1_2[51]);
    }
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((arg0) => {
    if (channel.isGameInvitesChannel()) {
      let obj = { parentChannelId: null, analyticsLocations: null };
      obj[0] = tmp.id;
      obj[1] = analyticsLocations;
      const result = channel(analyticsLocations[52]).openCreateGameInvitePostModal(obj);
      const obj6 = channel(analyticsLocations[52]);
    } else {
      obj = callback(analyticsLocations[53]);
      obj.changeThreadSettings(tmp.id, { isPrivate: false });
      let name;
      if (stateFromStores1 != null) {
        name = tmp5.name;
      }
      let tmp8 = null != name;
      if (tmp8) {
        let length;
        if (tmp5 != null) {
          if (tmp5.name != null) {
            const trimmed = str.trim();
            if (trimmed != null) {
              length = trimmed.length;
            }
          }
        }
        tmp8 = 0 !== length;
      }
      if (!tmp8) {
        let trimmed1;
        if (null != searchQuery) {
          if (str2.trim().length > 0) {
            trimmed1 = str2.trim();
          }
        }
        obj = { name: null };
        obj[0] = trimmed1;
        tmp2(analyticsLocations[53]).changeThreadSettings(tmp.id, obj);
        const tmp2Result = tmp2(analyticsLocations[53]);
      }
      obj1 = { guildId: null, parentChannelId: null, analyticsLocationObject: null, analyticsLocations: null };
      ({ guild_id: obj5[0], id: obj5[1] } = tmp);
      obj1[2] = arg0;
      obj1[3] = analyticsLocations;
      const result1 = channel(analyticsLocations[54]).openCreateForumPostModal(obj1);
      const obj4 = channel(analyticsLocations[54]);
      tmp2 = callback;
    }
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp6, callback];
  let tmp15 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (closure_1) {
        let obj = closure_1_1(closure_1_2[55]);
        if (!obj.hasSeen(id.id)) {
          obj = { channel: null, onPress: null };
          obj[0] = id;
          obj[1] = function onPress() {
            return callback({ page: closure_1_12.GUILD_CHANNEL, section: closure_1_13.FORUM_CHANNEL_GUIDELINES, object: closure_1_11.BUTTON_CTA });
          };
          const result = closure_1_0(closure_1_2[58]).openForumGuidelinesActionSheet(obj);
          const obj2 = closure_1_0(closure_1_2[58]);
        }
      }
      const result1 = closure_1_0(closure_1_2[56]).triggerHapticFeedback(closure_1_1(closure_1_2[57]).IMPACT_LIGHT);
      obj = { page: closure_1_12.GUILD_CHANNEL, section: closure_1_13.FORUM_CHANNEL_FOOTER, object: closure_1_11.BUTTON_CTA };
      callback(obj);
    }
    let obj = channel(analyticsLocations[42]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    let result = obj.trackForumCreateNewPostClick(obj);
    if (showMemberVerificationGate) {
      let result1 = channel(analyticsLocations[59]).openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
      const tmpResult = channel(analyticsLocations[59]);
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
  const insets = tmp7(tmp3[60])({ includeKeyboardHeight: true }).insets;
  const tmp11 = importDefault(analyticsLocations[50])(channel);
  obj = { style: tmp.background, children: null };
  let tmp20 = null;
  const clientThemesOverride = channel(analyticsLocations[14]).useClientThemesOverride(tmp.noHeight);
  if (tmp11) {
    obj1 = { channel: null, ctaProps: null, topBorder: true };
    obj1[0] = channel;
    obj1[1] = { variant: "secondary" };
    tmp20 = callback(tmp2(tmp3[61]).OptInChannelBanner, obj1);
  }
  const items6 = [tmp20, , , , , ];
  let obj2 = { style: tmp.headerRow, children: null };
  const obj3 = { style: tmp.headerLeftContainer, children: null };
  let isGameInvitesChannelResult = channel.isGameInvitesChannel();
  if (isGameInvitesChannelResult) {
    let obj4 = { channel: null };
    obj4[0] = channel;
    isGameInvitesChannelResult = callback(GameInvitesChannelHeaderGameIcon, obj4);
  }
  const items7 = [isGameInvitesChannelResult, callback(SortAndViewOptions, { channel })];
  obj3[1] = items7;
  const items8 = [closure_16(showMemberVerificationGate, obj3), ];
  let tmp25Result = channel.availableTags.length > 0;
  if (tmp25Result) {
    const obj5 = { channel: null };
    obj5[0] = channel;
    tmp25Result = tmp25(TagFilter, obj5);
  }
  items8[1] = tmp25Result;
  obj2[1] = items8;
  items6[1] = closure_16(showMemberVerificationGate, obj2);
  const items9 = [tmp.headerDivider, clientThemesOverride];
  items6[2] = callback(showMemberVerificationGate, { style: items9 });
  const tmp2Result2 = channel(analyticsLocations[14]);
  items6[3] = callback(showMemberVerificationGate, { style: tmp.container, children: callback(ForumChannelContent, { channel, insets, searchQuery }) });
  const obj7 = { accessibilityLabel: null, icon: null, disabled: null, positionBottom: null, onPress: null, onPressDisabled: null, accessibilityHint: null };
  const intl = tmp2(tmp3[16]).intl;
  obj7[0] = intl.string(channel(analyticsLocations[16]).t.TyAuoT);
  obj7[1] = importDefault(analyticsLocations[63]);
  obj7[2] = tmp15;
  obj7[3] = insets.bottom + importDefault(analyticsLocations[12]).space.PX_16;
  obj7[4] = callback1;
  obj7[5] = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp15) {
    const intl2 = tmp2(tmp3[16]).intl;
    stringResult = intl2.string(tmp2(tmp3[16]).t.iyzwnD);
  }
  obj7[6] = stringResult;
  items6[4] = callback(channel(analyticsLocations[62]).FloatingActionButton, obj7);
  tmp25Result = null;
  if (null != channel.guild_id) {
    const obj8 = { channel: null };
    obj8[0] = channel;
    tmp25Result = tmp25(tmp2(tmp3[64]).MemberActionChatInputBannerGuarded, obj8);
  }
  items6[5] = tmp25Result;
  obj[1] = items6;
  return closure_16(showMemberVerificationGate, obj);
};