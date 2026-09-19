// discord_app/modules/forums/native/ForumChannel.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
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
import _modDef13020 from "../../../../_runtime/metro/13020__.js";
import CreateGameInvitePostModalActionCreators from "../../game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../lurker_mode/LurkingStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";

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
  const tmp = closure_24();
  const obj2 = { style: null, children: null };
  const items = [tmp.section, ClientThemesOverrides.useClientThemesOverride()];
  obj2.style = items;
  const obj3 = { style: tmp.divider, variant: "text-xs/bold", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3+LO1w"]);
  obj2.children = closure_1_14(Text_Text.Text, obj3);
  return closure_1_14(View, obj2);
}
function SearchSection(numPosts) {
  numPosts = numPosts.numPosts;
  const tmp = closure_24();
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
  obj.children = closure_1_14(Text_Text.Text, obj2);
  return closure_1_14(View, obj);
}
function ArchivedMissingReadHistoryPermission(channelName) {
  const tmp = closure_24();
  const obj = { style: tmp.missingPermissionContainer, children: null };
  const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.TycmzM, { channelName: channelName.channelName });
  obj.children = closure_1_14(Text_Text.Text, obj2);
  return closure_1_14(View, obj);
}
function SearchMissingReadHistoryPermission(channelName) {
  const tmp = closure_24();
  const obj = { style: tmp.section, children: null };
  const obj2 = { style: tmp.missingPermissionText, variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.OWZJdS, { channelName: channelName.channelName });
  obj.children = closure_1_14(Text_Text.Text, obj2);
  return closure_1_14(View, obj);
}
function GameInvitesChannelHeaderGameIcon(channel) {
  _require = undefined;
  let shouldOpenGameProfile;
  let gameId;
  const application = require("GameInvitesChannelUtils").useGameInvitesChannelOfficialApplication(
    channel.channel.id,
  ).application;
  let id;
  let obj = require("GameInvitesChannelUtils");
  const tmp3 = shouldOpenGameProfile;
  if (application != null) {
    id = application.id;
  }
  const tmp4 = shouldOpenGameProfile(gameId[23]);
  const tmp4Result = tmp4({
    applicationId: id,
    source: require("GameProfileAnalyticUtils").GameProfileSources.GameInvitesChannel,
  });
  _require = tmp4Result;
  shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  gameId = tmp4Result.gameId;
  let tmp8Result = null;
  if (null != application) {
    const obj3 = {
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
    obj3.disabled = tmp9;
    obj3.onPress = function onPress() {
      let tmp = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp = null != gameId;
      }
      if (tmp) {
        const obj2 = {
          gameId,
          gameProfileModalChecks,
          source: GameProfileAnalyticUtils.GameProfileSources.GameInvitesChannel,
        };
        GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
      }
    };
    const obj4 = { game: application, size: tmp(tmp2[27]).GameIconSizes.SMALL };
    obj3.children = closure_14(tmp3(tmp2[27]), obj4);
    tmp8Result = closure_14(tmp(tmp2[25]).PressableOpacity, obj3);
    const tmp3Result = tmp3(tmp2[27]);
  }
  return tmp8Result;
}
function SortAndViewOptions(channel) {
  channel = channel.channel;
  const id = channel.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    const combined = "ForumDisplaySettingsActionSheet-" + id;
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13014, dependencyMap.paths), combined, {
      channelId: id,
      onClose() {
        ActionSheetActionCreatorsDefault.hideActionSheet(combined);
      },
    });
  }, items);
  const intl = id(1115).intl;
  const string = intl.string;
  const t = id(1115).t;
  if (isMediaChannelResult) {
    let stringResult = string(t.JxU0wr);
  } else {
    stringResult = string(t.xyYt8A);
  }
  isMediaChannelResult = channel.isMediaChannel();
  return closure_14(id(5186).Button, {
    variant: "secondary",
    text: stringResult,
    onPress: callback,
    size: "sm",
    icon: closure_14(id(12402).ArrowsUpDownIcon, { size: "xxs" }),
  });
}
function TagFilter(channel) {
  channel = channel.channel;
  const obj = { variant: "secondary", text: null, onPress: null, size: "sm", icon: null };
  const intl = channel(1115).intl;
  obj.text = intl.string(channel(1115).t["112vVE"]);
  obj.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(13015, dependencyMap.paths),
      "ForumTagFilterActionSheet",
      { channel },
    );
  };
  obj.icon = closure_14(channel(9140).TagIcon, { size: "xxs" });
  return closure_14(channel(5186).Button, obj);
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
  const tmp3 = undefined(channel.id);
  const forumChannelSeenManager = searchQuery(ref[36]).useForumChannelSeenManager({
    guildId: channel.guild_id,
    channelId: channel.id,
  });
  let items = [channel.id];
  const effect = activeThreadIds.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  closure_129_0 = channel;
  let obj2 = searchQuery(ref[36]);
  let obj3 = { guildId: channel.guild_id, channelId: channel.id };
  const forumActiveThreadIds = channel(ref[17]).useForumActiveThreadIds({
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
  let obj4 = channel(ref[17]);
  let items2 = [loadMore, canLoadMore];
  const stateFromStores = channel(ref[19]).useStateFromStores(items2, () => {
    const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
    let tmp2 = !hasLoadedResult;
    if (!hasLoadedResult) {
      tmp2 = !LurkingStore.isLurking(channel.guild_id);
    }
    return tmp2;
  });
  closure_129_2 = stateFromStores;
  const obj6 = channel(ref[19]);
  const forumSearchState = channel(ref[17]).useForumSearchState({ channelId: channel.id });
  ({ searchResults, isSearchLoading } = forumSearchState);
  const obj5 = { channelId: channel.id };
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
  const obj13 = channel(ref[21]);
  canViewArchivedPosts1 = channel(ref[17]).useCanViewArchivedPosts(channel);
  const tmp8Result = channel(ref[17]);
  canSearchForumPosts = channel(ref[17]).useCanSearchForumPosts(channel);
  const tmp8Result3 = channel(ref[17]);
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
    return closure_14(tmp4(tmp5[40]), obj8);
  } else {
    const obj14 = { style: null, children: null };
    const items8 = [tmp.list, clientThemesOverride];
    obj14.style = items8;
    const obj15 = {
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
    const obj16 = { paddingTop: num, paddingBottom: channel.insets.bottom + tmp4(tmp5[12]).space.PX_16 };
    obj15.contentContainerStyle = obj16;
    obj15.getItemType = getForumItemType;
    obj15.keyExtractor = forumKeyExtractor;
    obj15.renderItem = tmp29;
    obj15.data = memo;
    obj15.onScroll = callback1;
    obj15.onScrollBeginDrag = function onScrollBeginDrag() {
      return tracking_Tracking.trackForumScrolled({ guildId: channel.guild_id, channelId: channel.id });
    };
    obj15.onEndReached = callback;
    obj15.onViewableItemsChanged = onForumViewableItemsChanged;
    obj15.viewabilityConfig = viewabilityConfig;
    obj14.children = closure_14(tmp8(tmp5[41]).FlashList, obj15);
    const obj17 = { children: null };
    const items9 = [closure_14(tmp4(tmp5[43]), { absolute: true, mix: true }), closure_14(archivedThreadIds, obj14)];
    obj17.children = items9;
    return closure_16(closure_15, obj17);
  }
  const tmp8Result4 = channel(ref[14]);
}
function onCreatePostWithoutPermission() {
  const obj2 = { key: "FORUM_NO_POST_PERMISSION_HELP", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.iyzwnD);
  obj2.icon = _modDef13020;
  ToastActionCreatorsDefault.open(obj2);
}
const View = fn(17).View;
const useForumChannelStore = fn(12252).useForumChannelStore;
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
const createStyles = fn(4756);
let obj2 = {
  background: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerLeftContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  headerDivider: null,
  container: null,
  noHeight: null,
  list: null,
  section: null,
  divider: null,
  missingPermissionContainer: null,
  missingPermissionText: null,
};
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, width: "100%", height: 1 };
obj2.headerDivider = size;
obj2.container = { flex: 1, alignSelf: "stretch", alignItems: "center", position: "relative" };
obj2.noHeight = { height: 0 };
obj2.list = { flex: 1, paddingTop: 8, paddingHorizontal: 12, alignSelf: "stretch", marginBottom: 0 };
obj2.section = { alignItems: "flex-start", justifyContent: "flex-end" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(
  TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.TEXT_MUTED, 12, { marginBottom: 12, uppercase: true }),
);
obj2.divider = { marginTop: 12, paddingStart: 4 };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj4 = { marginTop: 12, paddingStart: 4 };
obj2.missingPermissionContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  borderRadius: nativeDefault.radii.xs,
};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_MUTED, 12));
obj2.missingPermissionText = {};
let closure_24 = createStyles.createStyles(obj2);
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
  const items = [GuildVerificationStore];
  const stateFromStores = channel(analyticsLocations[19]).useStateFromStores(items, () =>
    GuildVerificationStore.canChatInGuild(channel.guild_id),
  );
  let obj = channel(analyticsLocations[19]);
  const canStartThread = channel(analyticsLocations[46]).useCanStartThread(channel);
  let tmp6 = null != channel.topic;
  if (tmp6) {
    tmp6 = 0 !== channel.topic.length;
  }
  importDefault = tmp6;
  let obj2 = channel(analyticsLocations[46]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").FORUM_CHANNEL).analyticsLocations;
  let tmp8 = require("useAnalyticsLocations");
  searchQuery = channel(analyticsLocations[17]).useForumSearchState({ channelId: channel.id }).searchQuery;
  let obj3 = { channelId: channel.id };
  let tmp2Result = channel(analyticsLocations[17]);
  showMemberVerificationGate = channel(analyticsLocations[49]).useShowMemberVerificationGate(channel.guild_id);
  const tmp2Result4 = channel(analyticsLocations[49]);
  const items1 = [DraftStore];
  const items2 = [channel.id];
  stateFromStores1 = channel(analyticsLocations[19]).useStateFromStores(
    items1,
    () => DraftStore.getThreadSettings(channel.id),
    items2,
  );
  const items3 = [channel.id];
  const tmp2Result5 = channel(analyticsLocations[19]);
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
  let tmp15 = !stateFromStores;
  const callback1 = searchQuery.useCallback(() => {
    function startCreateForumPostFlow() {
      if (closure_1_1) {
        if (!obj.hasSeen(id.id)) {
          const obj3 = {
            channel: id,
            onPress() {
              return closure_1_6({
                page: constants2.GUILD_CHANNEL,
                section: constants3.FORUM_CHANNEL_GUIDELINES,
                object: constants.BUTTON_CTA,
              });
            },
          };
          const result = channel(analyticsLocations[58]).openForumGuidelinesActionSheet(obj3);
          const obj2 = channel(analyticsLocations[58]);
        }
        obj = closure_1(analyticsLocations[55]);
      }
      const result1 = channel(analyticsLocations[56]).triggerHapticFeedback(
        closure_1(analyticsLocations[57]).IMPACT_LIGHT,
      );
      callback({
        page: constants2.GUILD_CHANNEL,
        section: constants3.FORUM_CHANNEL_FOOTER,
        object: constants.BUTTON_CTA,
      });
      const obj4 = channel(analyticsLocations[56]);
      const obj5 = {
        page: constants2.GUILD_CHANNEL,
        section: constants3.FORUM_CHANNEL_FOOTER,
        object: constants.BUTTON_CTA,
      };
    }
    let result = tracking_Tracking.trackForumCreateNewPostClick({ guildId: channel.guild_id, channelId: channel.id });
    if (showMemberVerificationGate) {
      let result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(
        channel.guild_id,
        startCreateForumPostFlow,
      );
      const tmpResult = MemberVerificationModalActionCreators;
    } else {
      const result2 = startCreateForumPostFlow();
    }
    let obj2 = { guildId: channel.guild_id, channelId: channel.id };
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
  let obj4 = { style: tmp.background, children: null };
  let tmp20 = null;
  const clientThemesOverride = channel(analyticsLocations[14]).useClientThemesOverride(tmp.noHeight);
  if (tmp11) {
    let obj5 = { channel, ctaProps: { variant: "secondary" }, topBorder: true };
    tmp20 = closure_14(tmp2(tmp3[61]).OptInChannelBanner, obj5);
  }
  const items6 = [tmp20, , , , ,];
  let obj6 = { style: tmp.headerRow, children: null };
  let obj7 = { style: tmp.headerLeftContainer, children: null };
  let isGameInvitesChannelResult = channel.isGameInvitesChannel();
  if (isGameInvitesChannelResult) {
    const obj8 = { channel };
    isGameInvitesChannelResult = closure_14(GameInvitesChannelHeaderGameIcon, obj8);
  }
  const items7 = [isGameInvitesChannelResult, closure_14(SortAndViewOptions, { channel })];
  obj7.children = items7;
  const items8 = [closure_16(showMemberVerificationGate, obj7)];
  let tmp25Result = channel.availableTags.length > 0;
  if (tmp25Result) {
    const obj9 = { channel };
    tmp25Result = closure_14(TagFilter, obj9);
  }
  items8[1] = tmp25Result;
  obj6.children = items8;
  items6[1] = closure_16(showMemberVerificationGate, obj6);
  const obj10 = { style: null };
  const items9 = [tmp.headerDivider, clientThemesOverride];
  obj10.style = items9;
  items6[2] = closure_14(showMemberVerificationGate, obj10);
  const tmp2Result6 = channel(analyticsLocations[14]);
  items6[3] = closure_14(showMemberVerificationGate, {
    style: tmp.container,
    children: closure_14(ForumChannelContent, { channel, insets, searchQuery }),
  });
  const obj12 = {
    accessibilityLabel: null,
    icon: null,
    disabled: null,
    positionBottom: null,
    onPress: null,
    onPressDisabled: null,
    accessibilityHint: null,
  };
  const intl = tmp2(tmp3[16]).intl;
  obj12.accessibilityLabel = intl.string(channel(analyticsLocations[16]).t.TyAuoT);
  obj12.icon = require("../../../../_runtime/metro/13024__.js");
  obj12.disabled = tmp15;
  obj12.positionBottom = insets.bottom + require("native").space.PX_16;
  obj12.onPress = callback1;
  obj12.onPressDisabled = onCreatePostWithoutPermission;
  let stringResult;
  if (tmp15) {
    const intl2 = tmp2(tmp3[16]).intl;
    stringResult = intl2.string(tmp2(tmp3[16]).t.iyzwnD);
  }
  obj12.accessibilityHint = stringResult;
  items6[4] = closure_14(channel(analyticsLocations[62]).FloatingActionButton, obj12);
  let tmp25Result2 = null;
  if (null != channel.guild_id) {
    const obj13 = { channel };
    tmp25Result2 = closure_14(tmp2(tmp3[64]).MemberActionChatInputBannerGuarded, obj13);
  }
  items6[5] = tmp25Result2;
  obj4.children = items6;
  return closure_16(showMemberVerificationGate, obj4);
}
