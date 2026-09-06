// discord_app/modules/forums/native/ForumChannel.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MemberVerificationModalActionCreators from "../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ForumPostDataLoader from "../ForumPostDataLoader.tsx";
import tracking_Tracking from "../tracking/Tracking.tsx";
import DraftActionCreatorsDefault from "../../../actions/DraftActionCreators.tsx";
import ClientThemesOverrides from "../../client_themes/native/ClientThemesOverrides.tsx";
import GameProfileActionCreatorsDefault from "../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import ForumComposerModalActionCreators from "composer/ForumComposerModalActionCreators.tsx";
import ForumPostDefault from "ForumPost.tsx";
import ForumPostPlaceholderDefault from "ForumPostPlaceholder.tsx";
import _modDef12769 from "../../../../_runtime/metro/12769__.js";
import CreateGameInvitePostModalActionCreators from "../../game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";

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
  const tmp = closure_24();
  let obj = { style: null, children: null };
  const items = [tmp.section, obj.useClientThemesOverride()];
  obj.style = items;
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["3+LO1w"]);
  obj.children = closure_1_14(Text_Text.Text, obj);
  return closure_1_14(View, obj);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = closure_24();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  if (0 === numPosts) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.DbgHxi);
  } else {
    const intl = util.intl;
    obj = { numPosts, query: numPosts.searchQuery };
    stringResult = intl.formatToPlainString(util.t["tBz/8b"], obj);
  }
  obj.children = stringResult;
  obj.children = closure_1_14(Text_Text.Text, obj);
  return closure_1_14(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = closure_24();
  let obj = { style: tmp.missingPermissionContainer, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.TycmzM, { channelName: channelName.channelName });
  obj.children = closure_1_14(Text_Text.Text, obj);
  return closure_1_14(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = closure_24();
  let obj = { style: tmp.section, children: null };
  obj = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.OWZJdS, { channelName: channelName.channelName });
  obj.children = closure_1_14(Text_Text.Text, obj);
  return closure_1_14(View, obj);
}
function GameInvitesChannelHeaderGameIcon(channel) {
  _require = undefined;
  let shouldOpenGameProfile;
  let gameId;
  let obj = require("GameInvitesChannelUtils");
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
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: application.name,
      disabled: null,
      onPress: null,
      children: null,
    };
    let tmp9 = !shouldOpenGameProfile;
    if (shouldOpenGameProfile) {
      tmp9 = null == gameId;
    }
    obj.disabled = tmp9;
    obj.onPress = function onPress() {
      let tmp = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp = null != gameId;
      }
      if (tmp) {
        const obj = {
          gameId,
          gameProfileModalChecks,
          source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
        };
        obj.openGameProfileModal(obj);
      }
    };
    const obj1 = { game: application, size: tmp(tmp2[27]).GameIconSizes.SMALL };
    obj.children = closure_14(shouldOpenGameProfile(tmp2[27]), obj1);
    tmp8Result = closure_14(tmp(tmp2[25]).PressableOpacity, obj);
    const tmp3Result = shouldOpenGameProfile(tmp2[27]);
  }
  return tmp8Result;
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    const obj = {
      channelId: id,
      onClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(combined);
      },
    };
    obj.openLazy(asyncRequireImpl(12763, dependencyMap.paths), combined, obj);
  }, items);
  const intl = id(1114).intl;
  const string = intl.string;
  const t = id(1114).t;
  if (isMediaChannelResult) {
    let stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  isMediaChannelResult = channel.isMediaChannel();
  return closure_14(id(4975).Button, {
    variant: "secondary",
    text: stringResult,
    onPress: callback,
    size: "sm",
    icon: closure_14(id(12151).ArrowsUpDownIcon, { size: "xxs" }),
  });
}
function TagFilter(channel) {
  channel = channel.channel;
  let obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
  const intl = channel(1114).intl;
  obj.text = intl.string(channel(1114).t["112vVE"]);
  obj.onPress = function onPress() {
    const obj = { channel };
    obj.openLazy(asyncRequireImpl(12764, dependencyMap.paths), "ForumTagFilterActionSheet", obj);
  };
  obj.icon = closure_14(channel(8862).TagIcon, { size: "xxs" });
  return closure_14(channel(4975).Button, obj);
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
  let tmp = closure_24();
  ({ sortOrder, tagFilter, tagSetting } = undefined(channel.id));
  let obj1 = searchQuery(ref[36]);
  let obj = { guildId: channel.guild_id, channelId: channel.id };
  const forumChannelSeenManager = obj1.useForumChannelSeenManager(obj);
  let items = [channel.id];
  const effect = activeThreadIds.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  closure_129_0 = channel;
  let obj3 = channel(ref[17]);
  const forumActiveThreadIds = obj3.useForumActiveThreadIds({
    channel,
    sortOrder,
    tagFilter,
    tagSetting,
    shouldAutomaticallyAck: true,
  });
  const substr = forumActiveThreadIds.slice(0, channel(ref[18]).BATCH_SIZE);
  const joined = substr.join();
  closure_129_1 = joined;
  let items1 = [channel, joined];
  const effect1 = activeThreadIds.useEffect(() => {
    if ("" !== searchQuery) {
      ForumPostDataLoader.preloadForumThreads(channel);
    }
  }, items1);
  let obj5 = channel(ref[19]);
  let items2 = [loadMore, canLoadMore];
  const stateFromStores = obj5.useStateFromStores(items2, () => {
    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
    let tmp2 = !hasLoadedResult;
    if (!hasLoadedResult) {
      tmp2 = !LurkingStore.isLurking(channel.guild_id);
    }
    return tmp2;
  });
  closure_129_2 = stateFromStores;
  const tmp3 = undefined(channel.id);
  obj = { channelId: channel.id };
  const forumSearchState = channel(ref[17]).useForumSearchState(obj);
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj7 = channel(ref[17]);
  const automaticForumSearch = channel(ref[17]).useAutomaticForumSearch(channel, tagFilter, tagSetting);
  const obj9 = channel(ref[17]);
  const canViewArchivedPosts = channel(ref[17]).useCanViewArchivedPosts(channel);
  const obj10 = channel(ref[17]);
  const archivedThreads = channel(ref[20]).useArchivedThreads(channel, sortOrder, tagFilter, tagSetting);
  ({ canLoadMore, loadMore, loading, threadIds } = archivedThreads);
  const obj11 = channel(ref[20]);
  const loadForumUnreadCounts = channel(ref[17]).useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting);
  const obj12 = channel(ref[17]);
  const gameInvitesActiveAndArchivedThreads = channel(ref[21]).useGameInvitesActiveAndArchivedThreads(
    channel,
    forumActiveThreadIds,
    threadIds,
  );
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
  const tmp21 = searchQuery(ref[37])(channel);
  channelName = tmp21;
  let tmp8Result = tmp8(tmp5[17]);
  canViewArchivedPosts1 = tmp8Result.useCanViewArchivedPosts(channel);
  tmp8Result = tmp8(tmp5[17]);
  canSearchForumPosts = tmp8Result.useCanSearchForumPosts(channel);
  const obj13 = channel(ref[21]);
  const items4 = [loading, canLoadMore, canViewArchivedPosts1, loadMore, undefined];
  const clientThemesOverride = channel(ref[14]).useClientThemesOverride();
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
  const items6 = [
    undefined,
    canViewArchivedPosts1,
    canSearchForumPosts,
    activeThreadIds,
    stateFromStores,
    archivedThreadIds,
    loading,
    isSearchLoading,
  ];
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
        let arr2 = archivedThreadIds;
        if (tmp14) {
          items.push(archived_section);
          const push2 = items.push;
          const items3 = [];
          HermesBuiltin.arraySpread(arr2, 0);
          HermesBuiltin.apply(items3, items);
        }
        tmp14 = null != archivedThreadIds && arr2.length > 0;
      } else {
        items.push(archived_section);
        arr2 = items.push(missing_permission_archived_threads);
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
      let arr3 = items.push(loading_section);
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
    obj1 = { topViewHeight: 92, channelName: str, tagFilter };
    return closure_14(tmp4(tmp5[40]), obj1);
  } else {
    const obj2 = { style: null, children: null };
    const items8 = [tmp.list, clientThemesOverride];
    obj2.style = items8;
    obj3 = {
      ref,
      contentContainerStyle: null,
      getItemType: null,
      keyExtractor: null,
      renderItem: null,
      data: null,
      onScroll: null,
      onScrollBeginDrag: null,
      onEndReached: null,
      onViewableItemsChanged: null,
      viewabilityConfig: null,
    };
    let num = 0;
    if (0 !== activeThreadIds.length) {
      num = tmp4(tmp5[12]).space.PX_8;
    }
    const obj4 = { paddingTop: num, paddingBottom: channel.insets.bottom + tmp4(tmp5[12]).space.PX_16 };
    obj3.contentContainerStyle = obj4;
    obj3.getItemType = getForumItemType;
    obj3.keyExtractor = forumKeyExtractor;
    obj3.renderItem = tmp29;
    obj3.data = memo;
    obj3.onScroll = callback1;
    obj3.onScrollBeginDrag = function onScrollBeginDrag() {
      const obj = { guildId: channel.guild_id, channelId: channel.id };
      return obj.trackForumScrolled(obj);
    };
    obj3.onEndReached = callback;
    obj3.onViewableItemsChanged = onForumViewableItemsChanged;
    obj3.viewabilityConfig = viewabilityConfig;
    obj2.children = closure_14(tmp8(tmp5[41]).FlashList, obj3);
    obj5 = { children: null };
    const items9 = [closure_14(tmp4(tmp5[43]), { absolute: true, mix: true }), closure_14(archivedThreadIds, obj2)];
    obj5.children = items9;
    return closure_16(closure_15, obj5);
  }
  const tmp8Result1 = channel(ref[14]);
}
function onCreatePostWithoutPermission() {
  const obj = { key: "FORUM_NO_POST_PERMISSION_HELP", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.iyzwnD);
  obj.icon = _modDef12769;
  obj.open(obj);
}
const View = fn(17).View;
const useForumChannelStore = fn(12001).useForumChannelStore;
const Constants = fn(1074);
({ AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1 } = Constants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const archived_section = "archived_section";
const search_section = "search_section";
const missing_permission_search = "missing_permission_search";
const missing_permission_archived_threads = "missing_permission_archived_threads";
const loading_section = "loading_section";
let items = [
  "archived_section",
  "search_section",
  "missing_permission_search",
  "missing_permission_archived_threads",
  "loading_section",
];
const set = new Set(items);
fn(4560);
let createStyles = {
  background: null,
  headerRow: null,
  headerLeftContainer: null,
  headerDivider: null,
  container: null,
  noHeight: null,
  list: null,
  section: null,
  divider: null,
  missingPermissionContainer: null,
  missingPermissionText: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.background = createStyles;
createStyles.headerRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 12,
  paddingVertical: 8,
};
createStyles.headerLeftContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
createStyles.headerDivider = size;
createStyles.container = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
createStyles.noHeight = { height: 0 };
createStyles.list = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
createStyles.section = { alignItems: "flex-start", justifyContent: "flex-end" };
const merged = Object.assign(
  TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }),
);
createStyles.divider = { marginTop: 12, paddingStart: 4 };
createStyles.missingPermissionContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  borderRadius: nativeDefault.radii.xs,
};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
createStyles.missingPermissionText = {};
let closure_24 = createStyles.createStyles(createStyles);
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
  const tmp = closure_24();
  let obj = channel(analyticsLocations[19]);
  const items = [GuildVerificationStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildVerificationStore.canChatInGuild(channel.guild_id));
  let obj1 = channel(analyticsLocations[46]);
  const canStartThread = obj1.useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
  let tmp2Result = tmp2(tmp3[17]);
  obj = { channelId: channel.id };
  searchQuery = tmp2Result.useForumSearchState(obj).searchQuery;
  tmp2Result = tmp2(tmp3[49]);
  showMemberVerificationGate = tmp2Result.useShowMemberVerificationGate(channel.guild_id);
  let tmp8 = require("useAnalyticsLocations");
  const items1 = [DraftStore];
  const items2 = [channel.id];
  stateFromStores1 = channel(analyticsLocations[19]).useStateFromStores(
    items1,
    () => DraftStore.getThreadSettings(channel.id),
    items2,
  );
  const items3 = [channel.id];
  const tmp2Result1 = channel(analyticsLocations[19]);
  const effect = searchQuery.useEffect(
    () => () => {
      if (null != id.id) {
        closure_1(analyticsLocations[51]).clearForumSearch(tmp.id);
        const obj = closure_1(analyticsLocations[51]);
      }
    },
    items3,
  );
  const items4 = [channel, analyticsLocations, searchQuery, stateFromStores1];
  callback = searchQuery.useCallback((analyticsLocationObject) => {
    if (channel.isGameInvitesChannel()) {
      let obj = { parentChannelId: channel.id, analyticsLocations };
      const result = CreateGameInvitePostModalActionCreators.openCreateGameInvitePostModal(obj);
    } else {
      obj = DraftActionCreatorsDefault;
      obj.changeThreadSettings(channel.id, { isPrivate: false });
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
        obj = { name: trimmed1 };
        DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj);
        const tmp2Result = DraftActionCreatorsDefault;
      }
      const obj1 = { guildId: null, parentChannelId: null, analyticsLocationObject: null, analyticsLocations: null };
      ({ guild_id: obj5.guildId, id: obj5.parentChannelId } = channel);
      obj1.analyticsLocationObject = analyticsLocationObject;
      obj1.analyticsLocations = analyticsLocations;
      const result1 = ForumComposerModalActionCreators.openCreateForumPostModal(obj1);
    }
  }, items4);
  const items5 = [channel, showMemberVerificationGate, tmp6, callback];
  let tmp15 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (closure_1_1) {
        let obj = closure_1(analyticsLocations[55]);
        if (!obj.hasSeen(id.id)) {
          obj = {
            channel: id,
            onPress() {
              return closure_1_6({
                page: constants2.GUILD_CHANNEL,
                section: constants3.FORUM_CHANNEL_GUIDELINES,
                object: constants.BUTTON_CTA,
              });
            },
          };
          const result = channel(analyticsLocations[58]).openForumGuidelinesActionSheet(obj);
          const obj2 = channel(analyticsLocations[58]);
        }
      }
      const result1 = channel(analyticsLocations[56]).triggerHapticFeedback(
        closure_1(analyticsLocations[57]).IMPACT_LIGHT,
      );
      obj = { page: constants2.GUILD_CHANNEL, section: constants3.FORUM_CHANNEL_FOOTER, object: constants.BUTTON_CTA };
      callback(obj);
      const obj4 = channel(analyticsLocations[56]);
    }
    let obj = { guildId: channel.guild_id, channelId: channel.id };
    let result = obj.trackForumCreateNewPostClick(obj);
    if (showMemberVerificationGate) {
      let result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(
        channel.guild_id,
        startCreateForumPostFlow,
      );
      const tmpResult = MemberVerificationModalActionCreators;
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
  const tmp11 = require("useShowChannelOptInNotice")(channel);
  obj = { style: tmp.background, children: null };
  let tmp20 = null;
  const clientThemesOverride = channel(analyticsLocations[14]).useClientThemesOverride(tmp.noHeight);
  if (tmp11) {
    obj1 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
    tmp20 = closure_14(tmp2(tmp3[61]).OptInChannelBanner, obj1);
  }
  const items6 = [tmp20, , , , ,];
  let obj2 = { style: tmp.headerRow, children: null };
  const obj3 = { style: tmp.headerLeftContainer, children: null };
  let isGameInvitesChannelResult = channel.isGameInvitesChannel();
  if (isGameInvitesChannelResult) {
    let obj4 = { channel };
    isGameInvitesChannelResult = closure_14(GameInvitesChannelHeaderGameIcon, obj4);
  }
  const items7 = [isGameInvitesChannelResult, closure_14(SortAndViewOptions, { channel })];
  obj3.children = items7;
  const items8 = [closure_16(showMemberVerificationGate, obj3)];
  let tmp25Result = channel.availableTags.length > 0;
  if (tmp25Result) {
    const obj5 = { channel };
    tmp25Result = closure_14(TagFilter, obj5);
  }
  items8[1] = tmp25Result;
  obj2.children = items8;
  items6[1] = closure_16(showMemberVerificationGate, obj2);
  let obj6 = { style: null };
  const items9 = [tmp.headerDivider, clientThemesOverride];
  obj6.style = items9;
  items6[2] = closure_14(showMemberVerificationGate, obj6);
  const tmp2Result2 = channel(analyticsLocations[14]);
  items6[3] = closure_14(showMemberVerificationGate, {
    style: tmp.container,
    children: closure_14(ForumChannelContent, { channel, insets, searchQuery }),
  });
  const obj8 = {
    accessibilityLabel: null,
    icon: null,
    disabled: null,
    positionBottom: null,
    onPress: null,
    onPressDisabled: null,
    accessibilityHint: null,
  };
  const intl = tmp2(tmp3[16]).intl;
  obj8.accessibilityLabel = intl.string(channel(analyticsLocations[16]).t.TyAuoT);
  obj8.icon = require("../../../../_runtime/metro/12773__.js");
  obj8.disabled = tmp15;
  obj8.positionBottom = insets.bottom + require("native").space.PX_16;
  obj8.onPress = callback1;
  obj8.onPressDisabled = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp15) {
    const intl2 = tmp2(tmp3[16]).intl;
    stringResult = intl2.string(tmp2(tmp3[16]).t.iyzwnD);
  }
  obj8.accessibilityHint = stringResult;
  items6[4] = closure_14(channel(analyticsLocations[62]).FloatingActionButton, obj8);
  tmp25Result = null;
  if (null != channel.guild_id) {
    const obj9 = { channel };
    tmp25Result = closure_14(tmp2(tmp3[64]).MemberActionChatInputBannerGuarded, obj9);
  }
  items6[5] = tmp25Result;
  obj.children = items6;
  return closure_16(showMemberVerificationGate, obj);
}
