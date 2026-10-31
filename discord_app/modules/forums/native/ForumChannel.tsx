// === Module 14358: ForumChannel ===

// Module 14358 (ForumChannel)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6944 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 7475 */;
import Tracking from "Tracking" /* 8204 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8343 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9320 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9821 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10202 */;
import ForumPostDefault from "ForumPost" /* 13747 */;
import ForumPostPlaceholderDefault from "ForumPostPlaceholder" /* 13775 */;
import CreateGameInvitePostModalActionCreators from "CreateGameInvitePostModalActionCreators" /* 14367 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4947 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6861 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import DraftStore from "DraftStore" /* 7701 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6708 */;
import TextStyles_mod from "TextStyles" /* 6723 */;

const require = globalThis.__r;

require = fn;
function forumKeyExtractor(arg0, arg1) {
  let combined = arg0;
  if (arg0 === loading_section) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + "-" + arg1;
  }
  return combined;
}
function ArchivedSection() {
  const tmp = closure_25();
  const obj2 = { style: null, children: null };
  const items = [tmp.section, ClientThemesOverrides.useClientThemesOverride()];
  obj2.style = items;
  const obj3 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3+LO1w"]);
  obj2.children = __initData(Text_Text.Text, obj3);
  return __initData(View, obj2);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = closure_25();
  const obj = { style: tmp.section, children: null };
  const obj2 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  if (0 === numPosts) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.DbgHxi);
  } else {
    const intl = util.intl;
    const obj3 = { numPosts, query: numPosts.searchQuery };
    stringResult = intl.formatToPlainString(util.t["tBz/8b"], obj3);
  }
  obj2.children = stringResult;
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = closure_25();
  const obj = { style: tmp.missingPermissionContainer, children: null };
  const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.TycmzM, { channelName: channelName.channelName });
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = closure_25();
  const obj = { style: tmp.section, children: null };
  const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.OWZJdS, { channelName: channelName.channelName });
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(View, obj);
}
function GameInvitesChannelHeaderGameIcon(channel) {
  _require = undefined;
  let shouldOpenGameProfile;
  let gameId;
  const application = require("GameInvitesChannelUtils").useGameInvitesChannelOfficialApplication(channel.channel.id).application;
  let id;
  let obj = require("GameInvitesChannelUtils");
  const tmp3 = shouldOpenGameProfile;
  if (application != null) {
    id = application.id;
  }
  const tmp4 = shouldOpenGameProfile(gameId[24]);
  const tmp4Result = tmp4({ applicationId: id, source: require("GameProfileAnalyticUtils").GameProfileSources.GameInvitesChannel });
  _require = tmp4Result;
  shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  gameId = tmp4Result.gameId;
  let tmp8Result = null;
  if (null != application) {
    const obj3 = { accessibilityRole: "button", accessibilityLabel: application.name, disabled: null, onPress: null, children: null };
    let tmp9 = !shouldOpenGameProfile;
    if (shouldOpenGameProfile) {
      tmp9 = null == gameId;
    }
    obj3.disabled = tmp9;
    obj3.onPress = function onPress() {
      let tmp = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp = null != gameId;
      }
      if (tmp) {
        const obj2 = { gameId, gameProfileModalChecks, source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel };
        GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
      }
    };
    const obj4 = { game: application, size: tmp(tmp2[28]).GameIconSizes.SMALL };
    obj3.children = closure_15(tmp3(tmp2[28]), obj4);
    tmp8Result = closure_15(tmp(tmp2[26]).PressableOpacity, obj3);
    const tmp3Result = tmp3(tmp2[28]);
  }
  return tmp8Result;
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14361, dependencyMap.paths), combined, {
      channelId: id,
      onClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(combined);
      }
    });
  }, items);
  const intl = id(1113).intl;
  const string = intl.string;
  const t = id(1113).t;
  if (isMediaChannelResult) {
    let stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  isMediaChannelResult = channel.isMediaChannel();
  return closure_15(id(5634).Button, { variant: "secondary", text: stringResult, onPress: callback, size: "sm", icon: closure_15(id(12342).ArrowsUpDownIcon, { size: "xxs" }) });
}
function TagFilter(channel) {
  channel = channel.channel;
  const obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
  const intl = channel(1113).intl;
  obj.text = intl.string(channel(1113).t["112vVE"]);
  obj.onPress = function handlePress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14362, dependencyMap.paths), "ForumTagFilterActionSheet", { channel });
  };
  obj.icon = closure_15(channel(9566).TagIcon, { size: "xxs" });
  return closure_15(channel(5634).Button, obj);
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
        const obj = require("ForumChannelSeenManager");
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
  let activeThreadIds;
  canLoadMore = undefined;
  loadMore = undefined;
  loading = undefined;
  isSearchLoading = undefined;
  let channelName;
  let canViewArchivedPosts1;
  let canSearchForumPosts;
  const ref = activeThreadIds.useRef(null);
  let tmp = closure_25();
  ({ sortOrder, tagFilter, tagSetting } = undefined(channel.id));
  const tmp3 = undefined(channel.id);
  const forumChannelSeenManager = searchQuery(ref[37]).useForumChannelSeenManager({ guildId: channel.guild_id, channelId: channel.id });
  let items = [channel.id];
  const effect = activeThreadIds.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  closure_129_0 = channel;
  let obj2 = searchQuery(ref[37]);
  let obj3 = { guildId: channel.guild_id, channelId: channel.id };
  const forumActiveThreadIds = channel(ref[18]).useForumActiveThreadIds({ channel, sortOrder, tagFilter, tagSetting, shouldAutomaticallyAck: true });
  const substr = forumActiveThreadIds.slice(0, channel(ref[19]).BATCH_SIZE);
  const joined = substr.join();
  closure_129_1 = joined;
  let items1 = [channel, joined];
  const effect1 = activeThreadIds.useEffect(() => {
    if ("" !== searchQuery) {
      ForumPostDataLoader.preloadForumThreads(channel);
    }
  }, items1);
  let obj4 = channel(ref[18]);
  let items2 = [loadMore, canLoadMore];
  const stateFromStores = channel(ref[20]).useStateFromStores(items2, () => {
    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
    let tmp2 = !hasLoadedResult;
    if (!hasLoadedResult) {
      tmp2 = !LurkingStore.isLurking(channel.guild_id);
    }
    return tmp2;
  });
  closure_129_2 = stateFromStores;
  const obj6 = channel(ref[20]);
  const forumSearchState = channel(ref[18]).useForumSearchState({ channelId: channel.id });
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj5 = { channelId: channel.id };
  const obj7 = channel(ref[18]);
  const automaticForumSearch = channel(ref[18]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
  const obj9 = channel(ref[18]);
  const canViewArchivedPosts = channel(ref[18]).useCanViewArchivedPosts(channel);
  const obj10 = channel(ref[18]);
  const archivedThreads = channel(ref[21]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
  ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
  const obj11 = channel(ref[21]);
  const loadForumUnreadCounts = channel(ref[18]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
  const obj12 = channel(ref[18]);
  const gameInvitesActiveAndArchivedThreads = channel(ref[22]).useGameInvitesActiveAndArchivedThreads(channel, forumActiveThreadIds, threadIds);
  activeThreadIds = gameInvitesActiveAndArchivedThreads.activeThreadIds;
  closure_129_3 = activeThreadIds;
  const archivedThreadIds = gameInvitesActiveAndArchivedThreads.archivedThreadIds;
  closure_129_4 = archivedThreadIds;
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
    TTITrackerDefault.recordRender(activeThreadIds.length + archivedThreadIds.length, !ref);
  }, items3);
  const tmp21 = searchQuery(ref[38])(channel);
  channelName = tmp21;
  const obj13 = channel(ref[22]);
  canViewArchivedPosts1 = channel(ref[18]).useCanViewArchivedPosts(channel);
  const tmp8Result = channel(ref[18]);
  canSearchForumPosts = channel(ref[18]).useCanSearchForumPosts(channel);
  const tmp8Result3 = channel(ref[18]);
  const items4 = [loading, canLoadMore, canViewArchivedPosts1, loadMore, undefined];
  const clientThemesOverride = channel(ref[15]).useClientThemesOverride();
  const items5 = [976, loading, canLoadMore, canViewArchivedPosts1, loadMore, undefined];
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
  const items6 = [undefined, canViewArchivedPosts1, canSearchForumPosts, activeThreadIds, stateFromStores, archivedThreadIds, loading, isSearchLoading];
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
      items.push(search_section);
      const push3 = items.push;
      if (canSearchForumPosts) {
        const items1 = [];
        HermesBuiltin.arraySpread(searchResults, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push3(missing_permission_search);
      }
    } else if (!stateFromStores) {
      const push = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(activeThreadIds, 0);
      HermesBuiltin.apply(items2, items);
      if (canViewArchivedPosts1) {
        if (tmp14) {
          items.push(archived_section);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(archivedThreadIds, 0);
          HermesBuiltin.apply(items3, items);
        }
        tmp14 = null != archivedThreadIds && archivedThreadIds.length > 0;
      } else {
        items.push(archived_section);
        items.push(missing_permission_archived_threads);
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
      let arr10 = items.push(loading_section);
      num5 = num5 + 1;
    } while (num5 < 20);
  }, items6);
  if (undefined != null) {
    length = searchResults.length;
  }
  const items7 = [length, searchQuery, tmp21];
  if (tmp18) {
    let str = tmp21;
    if (tmp21 == null) {
      str = "";
    }
    const obj8 = { topViewHeight: 92, channelName: str, tagFilter };
    return closure_15(tmp4(tmp5[41]), obj8);
  } else {
    const obj14 = { style: null, children: null };
    const items8 = [tmp.list, clientThemesOverride];
    obj14.style = items8;
    const obj15 = { ref, contentContainerStyle: null, getItemType: null, keyExtractor: null, renderItem: null, data: null, onScroll: null, onScrollBeginDrag: null, onEndReached: null, onViewableItemsChanged: null, viewabilityConfig: null };
    let num = 0;
    if (0 !== activeThreadIds.length) {
      num = tmp4(tmp5[13]).space.PX_8;
    }
    const obj16 = { paddingTop: num, paddingBottom: channel.paddingBottom };
    obj15.contentContainerStyle = obj16;
    obj15.getItemType = getForumItemType;
    obj15.keyExtractor = forumKeyExtractor;
    obj15.renderItem = tmp29;
    obj15.data = memo;
    obj15.onScroll = callback1;
    obj15.onScrollBeginDrag = function onScrollBeginDrag() {
      return Tracking.trackForumScrolled({ guildId: channel.guild_id, channelId: channel.id });
    };
    obj15.onEndReached = callback;
    obj15.onViewableItemsChanged = onForumViewableItemsChanged;
    obj15.viewabilityConfig = viewabilityConfig;
    obj14.children = closure_15(tmp8(tmp5[42]).FlashList, obj15);
    const obj17 = { children: null };
    const items9 = [closure_15(tmp4(tmp5[44]), { absolute: true, mix: true }), closure_15(archivedThreadIds, obj14)];
    obj17.children = items9;
    return closure_17(closure_16, obj17);
  }
  const tmp8Result4 = channel(ref[15]);
}
function onCreatePostWithoutPermission() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.iyzwnD);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("FORUM_NO_POST_PERMISSION_HELP", obj2);
}
const View = fn(17).View;
const useForumChannelStore = fn(13748).useForumChannelStore;
const Constants = fn(1072);
({ AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
let closure_14 = fn(11241).getVoicePanelDockButtonsTop;
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = ["archived_section", "search_section", "missing_permission_search", "missing_permission_archived_threads", "loading_section"];
const set = new Set(items);
const createStyles = fn(5014);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, headerRow: { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 8 }, headerLeftContainer: { flexDirection: "row", alignItems: "center", gap: 8 }, headerDivider: null, container: null, noHeight: null, fabScrim: null, list: null, section: null, divider: null, missingPermissionContainer: null, missingPermissionText: null };
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
obj2.headerDivider = size;
obj2.container = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
obj2.noHeight = { height: 0 };
obj2.fabScrim = { position: "absolute", left: 0, right: 0, bottom: 0 };
obj2.list = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
obj2.section = { alignItems: "flex-start", justifyContent: "flex-end" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }));
obj2.divider = { marginTop: 12, paddingStart: 4 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj4 = { marginTop: 12, paddingStart: 4 };
obj2.missingPermissionContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center", height: 48, borderRadius: nativeDefault.radii.xs };
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
obj2.missingPermissionText = {};
let closure_25 = createStyles.createStyles(obj2);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 100 };
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumChannel.tsx");

export default function ForumChannel(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let analyticsLocations;
  let searchQuery;
  let showMemberVerificationGate;
  let stateFromStores1;
  let callback;
  const tmp = closure_25();
  const items = [GuildVerificationStore];
  const stateFromStores = channel(analyticsLocations[20]).useStateFromStores(items, () => GuildVerificationStore.canChatInGuild(channel.guild_id));
  let obj = channel(analyticsLocations[20]);
  const canStartThread = channel(analyticsLocations[47]).useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  let obj2 = channel(analyticsLocations[47]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
  let tmp8 = require("useAnalyticsLocations");
  searchQuery = channel(analyticsLocations[18]).useForumSearchState({ channelId: channel.id }).searchQuery;
  let obj3 = { channelId: channel.id };
  let tmp2Result = channel(analyticsLocations[18]);
  showMemberVerificationGate = channel(analyticsLocations[50]).useShowMemberVerificationGate(channel.guild_id);
  const tmp2Result6 = channel(analyticsLocations[50]);
  const items1 = [DraftStore];
  const items2 = [channel.id];
  stateFromStores1 = channel(analyticsLocations[20]).useStateFromStores(items1, () => DraftStore.getThreadSettings(channel.id), items2);
  const tmp2Result7 = channel(analyticsLocations[20]);
  const tmp11 = require("useShowChannelOptInNotice")(channel);
  const pinotMemberNotice = channel(analyticsLocations[52]).usePinotMemberNotice(channel, "mobile_forum_channel");
  const tmp2Result8 = channel(analyticsLocations[52]);
  const items3 = [channel.id];
  const isForumChannelSearchActive = channel(analyticsLocations[53]).useIsForumChannelSearchActive(channel.id);
  const effect = searchQuery.useEffect(() => () => {
    if (null != id.id) {
      closure_1(analyticsLocations[54]).clearForumSearch(tmp.id);
      const obj = closure_1(analyticsLocations[54]);
    }
  }, items3);
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((analyticsLocationObject) => {
    if (channel.isGameInvitesChannel()) {
      const obj2 = { parentChannelId: channel.id, analyticsLocations };
      const result = CreateGameInvitePostModalActionCreators.openCreateGameInvitePostModal(obj2);
    } else {
      DraftActionCreatorsDefault.changeThreadSettings(channel.id, { isPrivate: false });
      let name;
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      let tmp8 = null != name;
      if (tmp8) {
        let length;
        if (stateFromStores1 != null) {
          if (stateFromStores1.name != null) {
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
          if (searchQuery.trim().length > 0) {
            trimmed1 = searchQuery.trim();
          }
        }
        const obj3 = { name: trimmed1 };
        DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj3);
        const tmp2Result = DraftActionCreatorsDefault;
      }
      const obj7 = { guildId: null, parentChannelId: null, analyticsLocationObject: null, analyticsLocations: null };
      ({ guild_id: obj5.guildId, id: obj5.parentChannelId } = channel);
      obj7.analyticsLocationObject = analyticsLocationObject;
      obj7.analyticsLocations = analyticsLocations;
      const result1 = ForumComposerModalActionCreators.openCreateForumPostModal(obj7);
    }
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp6, callback];
  let tmp17 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (closure_1_1) {
        if (!obj.hasSeen(id.id)) {
          const obj3 = {
            channel: id,
            onPress() {
                  return closure_1_6({ page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_GUIDELINES, object: constants.BUTTON_CTA });
                }
          };
          const result = channel(analyticsLocations[61]).openForumGuidelinesActionSheet(obj3);
          const obj2 = channel(analyticsLocations[61]);
        }
        obj = closure_1(analyticsLocations[58]);
      }
      const result1 = channel(analyticsLocations[59]).triggerHapticFeedback(closure_1(analyticsLocations[60]).IMPACT_LIGHT);
      callback({ page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_FOOTER, object: constants.BUTTON_CTA });
      const obj4 = channel(analyticsLocations[59]);
      const obj5 = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_FOOTER, object: constants.BUTTON_CTA };
    }
    let result = Tracking.trackForumCreateNewPostClick({ guildId: channel.guild_id, channelId: channel.id });
    if (showMemberVerificationGate) {
      let result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(channel.guild_id, startCreateForumPostFlow);
      const tmpResult = MemberVerificationModalActionCreators;
    } else {
      const result2 = startCreateForumPostFlow();
    }
    let obj2 = { guildId: channel.guild_id, channelId: channel.id };
  }, items5);
  if (stateFromStores) {
    let tmp18 = !canStartThread;
    if (!canStartThread) {
      tmp18 = !showMemberVerificationGate;
    }
    tmp17 = tmp18;
  }
  const insets = tmp7(tmp3[63])({ includeKeyboardHeight: true }).insets;
  const tmp2Result9 = channel(analyticsLocations[53]);
  const clientThemesOverride = channel(analyticsLocations[15]).useClientThemesOverride(tmp.noHeight);
  const tmp20 = require("useVoicePanelDockHeight")();
  const tmp22 = closure_14(tmp20);
  if (tmp20 > 0) {
    const _Math = Math;
    let bottom = Math.max(tmp22, insets.bottom);
  } else {
    bottom = insets.bottom;
  }
  const sum = bottom + tmp7(tmp3[13]).space.PX_16;
  let obj4 = { style: tmp.background, children: null };
  let tmp27 = pinotMemberNotice.visible && !isForumChannelSearchActive;
  if (tmp27) {
    let obj5 = { channel, onDismiss: pinotMemberNotice.dismiss };
    tmp27 = closure_15(tmp2(tmp3[52]).PinotMemberNoticeBar, obj5);
  }
  const items6 = [tmp27, , , , , , , ];
  const visible = pinotMemberNotice.visible;
  let tmp29 = !visible;
  if (!visible) {
    tmp29 = tmp11;
  }
  if (tmp29) {
    let obj6 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
    tmp29 = closure_15(tmp2(tmp3[65]).OptInChannelBanner, obj6);
  }
  items6[1] = tmp29;
  let obj7 = { style: tmp.headerRow, children: null };
  const obj8 = { style: tmp.headerLeftContainer, children: null };
  let isGameInvitesChannelResult = channel.isGameInvitesChannel();
  if (isGameInvitesChannelResult) {
    const obj9 = { channel };
    isGameInvitesChannelResult = closure_15(GameInvitesChannelHeaderGameIcon, obj9);
  }
  const items7 = [isGameInvitesChannelResult, closure_15(SortAndViewOptions, { channel })];
  obj8.children = items7;
  const items8 = [closure_17(showMemberVerificationGate, obj8), ];
  let tmp34Result = channel.availableTags.length > 0;
  if (tmp34Result) {
    const obj10 = { channel };
    tmp34Result = closure_15(TagFilter, obj10);
  }
  items8[1] = tmp34Result;
  obj7.children = items8;
  items6[2] = closure_17(showMemberVerificationGate, obj7);
  const obj11 = { style: null };
  const items9 = [tmp.headerDivider, clientThemesOverride];
  obj11.style = items9;
  items6[3] = closure_15(showMemberVerificationGate, obj11);
  const obj12 = { style: tmp.container, children: null };
  const obj13 = { channel, paddingBottom: null, searchQuery: null };
  if (tmp20 > 0) {
    let bottom2 = sum + tmp2(tmp3[66]).FAB_BUTTON_SIZE;
  } else {
    bottom2 = insets.bottom;
  }
  obj13.paddingBottom = bottom2 + require("native").space.PX_16;
  obj13.searchQuery = searchQuery;
  obj12.children = closure_15(ForumChannelContent, obj13);
  items6[4] = closure_15(showMemberVerificationGate, obj12);
  let tmp34Result3 = null;
  if (tmp20 > 0) {
    const obj14 = { style: null, pointerEvents: "none", children: null };
    const items10 = [tmp.fabScrim, ];
    const obj15 = { height: tmp22 };
    items10[1] = obj15;
    obj14.style = items10;
    const obj16 = { inline: true, gradientHeight: tmp7(tmp3[13]).space.PX_64 };
    obj14.children = closure_15(tmp2(tmp3[67]).ChatInputScrimGradient, obj16);
    tmp34Result3 = closure_15(tmp26, obj14);
  }
  items6[5] = tmp34Result3;
  const obj17 = { accessibilityLabel: null, icon: null, disabled: null, positionBottom: null, onPress: null, onPressDisabled: null, accessibilityHint: null };
  const intl = tmp2(tmp3[17]).intl;
  obj17.accessibilityLabel = intl.string(channel(analyticsLocations[17]).t.TyAuoT);
  obj17.icon = require("module_14371");
  obj17.disabled = tmp17;
  obj17.positionBottom = sum;
  obj17.onPress = callback1;
  obj17.onPressDisabled = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp17) {
    const intl2 = tmp2(tmp3[17]).intl;
    stringResult = intl2.string(tmp2(tmp3[17]).t.iyzwnD);
  }
  obj17.accessibilityHint = stringResult;
  items6[6] = closure_15(channel(analyticsLocations[68]).FloatingActionButton, obj17);
  let tmp34Result4 = null;
  if (null != channel.guild_id) {
    const obj18 = { channel };
    tmp34Result4 = closure_15(tmp2(tmp3[70]).MemberActionChatInputBannerGuarded, obj18);
  }
  items6[7] = tmp34Result4;
  obj4.children = items6;
  return closure_17(showMemberVerificationGate, obj4);
};