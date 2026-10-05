// discord_app/modules/forums/tracking/Tracking.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import DraftStore2 from "../../../stores/DraftStore.tsx";
import TrackingUtils from "TrackingUtils.tsx";
import ThreadAnalyticsUtils from "../../app_analytics/ThreadAnalyticsUtils.tsx";
import trackChannelOpenedClickstreamDefault from "../../app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ForumPostMessagesStore from "../ForumPostMessagesStore.tsx";
import ForumSearchStore from "../ForumSearchStore.tsx";
import Constants from "../../../Constants.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const AppAnalyticsUtilsDefault = AppAnalyticsUtils;
const DraftStore = DraftStore2;

let c9;
let metroImportAll;
const DraftType = DraftStore2.DraftType;
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = Constants);
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  let additionalTimes;
  let guildId;
  let postIds;
  let sessionId;
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    post_ids: postIds,
    additional_seen_time_millis: additionalTimes,
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_SEEN_BATCH = metroImportAll.FORUM_CHANNEL_SEEN_BATCH;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId, sessionId }));
  trackWithMetadata(FORUM_CHANNEL_SEEN_BATCH, obj);
};
export const trackForumSearched = function trackForumSearched(channelId) {
  let guildId;
  let numSearchResults;
  channelId = channelId.channelId;
  ({ guildId, numSearchResults } = channelId);
  const obj = { guild_id: guildId, channel_id: channelId, num_search_results: numSearchResults };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_SEARCHED = metroImportAll.FORUM_CHANNEL_SEARCHED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_SEARCHED, obj);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { guild_id: guildId, channel_id: channelId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_SEARCH_CLEARED = metroImportAll.FORUM_CHANNEL_SEARCH_CLEARED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_SEARCH_CLEARED, obj);
};
export const trackForumTagFilterClicked = function trackForumTagFilterClicked(channelId) {
  let _location;
  let added;
  let filterTagIds;
  let guildId;
  let tagId;
  channelId = channelId.channelId;
  ({ guildId, tagId, filterTagIds, added, location: _location } = channelId);
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    tag_id: tagId,
    filter_tag_ids: filterTagIds,
    added,
    location: _location,
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_TAG_FILTER_CLICKED = metroImportAll.FORUM_CHANNEL_TAG_FILTER_CLICKED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_TAG_FILTER_CLICKED, obj);
};
export const trackForumCreateNewPostClick = function trackForumCreateNewPostClick(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { guild_id: guildId, channel_id: channelId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_CREATE_NEW_POST_CLICKED = metroImportAll.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { guild_id: guildId, channel_id: channelId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED = metroImportAll.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, obj);
};
export const maybeTrackForumNewPostDraftCreated = function maybeTrackForumNewPostDraftCreated(channelId) {
  let obj4;
  let obj5;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    let trimmed;
    const threadSettings = DraftStore.getThreadSettings(channelId);
    if (channel.template != null) {
      trimmed = str2.trim();
    }
    const draft = DraftStore.getDraft(channelId, DraftType.FirstThreadMessage);
    let tmp4 = null == draft || 0 === draft.length;
    if (!tmp4) {
      let trimmed1;
      if (draft != null) {
        trimmed1 = draft.trim();
      }
      tmp4 = trimmed1 === trimmed;
    }
    let appliedTags1;
    if (threadSettings != null) {
      appliedTags1 = threadSettings.appliedTags;
    }
    let tmp7 = null == appliedTags1;
    if (!tmp7) {
      size = undefined;
      if (threadSettings != null) {
        const appliedTags = threadSettings.appliedTags;
        if (appliedTags != null) {
          size = appliedTags.size;
        }
      }
      tmp7 = 0 === size;
    }
    let name;
    if (threadSettings != null) {
      name = threadSettings.name;
    }
    let tmp10 = null == name;
    if (!tmp10) {
      let length;
      if (threadSettings != null) {
        if (threadSettings.name != null) {
          const trimmed2 = str.trim();
          if (trimmed2 != null) {
            length = trimmed2.length;
          }
        }
      }
      tmp10 = 0 === length;
    }
    if (tmp4) {
      tmp4 = tmp7;
    }
    if (tmp4) {
      tmp4 = tmp10;
    }
    if (!tmp4) {
      const obj = {
        guild_id: guildId,
        channel_id: channelId,
        applied_tag_ids: obj4.getForumPostDraftAppliedTagIds(channelId),
        num_attachments: obj5.getForumPostDraftNumAttachments(channelId),
      };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const FORUM_CHANNEL_NEW_POST_DRAFT_CREATED = metroImportAll.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED;
      AppAnalyticsUtilsDefault;
      const obj3 = { channelId };
      const obj2 = TrackingUtils;
      const merged = Object.assign(obj2.collectForumAnalyticsMetadata(obj3));
      obj4 = TrackingUtils;
      obj5 = TrackingUtils;
      trackWithMetadata(FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj);
    }
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { guild_id: guildId, channel_id: channelId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED = metroImportAll.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, obj);
};
export const trackForumPostCreated = function trackForumPostCreated(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const postId = guildId.postId;
  const applicationId = guildId.applicationId;
  const voiceChatEnabled = guildId.voiceChatEnabled;
  if (ForumPostMessagesStore.isLoading(postId)) {
    const result = ForumPostMessagesStore.addConditionalChangeListener(() => {
      let flag = ForumPostMessagesStore.isLoading(postId);
      if (!flag) {
        const obj = {
          guild_id: guildId,
          channel_id: channelId,
          application_id: applicationId,
          voice_chat_enabled: voiceChatEnabled,
        };
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const FORUM_CHANNEL_POST_CREATED = metroImportAll.FORUM_CHANNEL_POST_CREATED;
        AppAnalyticsUtilsDefault;
        const obj3 = { channelId: postId };
        const obj2 = TrackingUtils;
        const merged = Object.assign(obj2.collectForumPostAnalyticsMetadata(obj3));
        trackWithMetadata(FORUM_CHANNEL_POST_CREATED, obj);
        flag = false;
      }
      return flag;
    });
  } else {
    let obj2 = {
      guild_id: guildId,
      channel_id: channelId,
      application_id: applicationId,
      voice_chat_enabled: voiceChatEnabled,
    };
    let trackWithMetadata = channelId(postId[5]).trackWithMetadata;
    let FORUM_CHANNEL_POST_CREATED = constants.FORUM_CHANNEL_POST_CREATED;
    channelId(postId[5]);
    let obj3 = guildId(postId[6]);
    const obj4 = { channelId: postId };
    let merged = Object.assign(obj3.collectForumPostAnalyticsMetadata(obj4));
    trackWithMetadata(FORUM_CHANNEL_POST_CREATED, obj2);
  }
};
export const trackForumScrolled = function trackForumScrolled(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { guild_id: guildId, channel_id: channelId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_SCROLLED = metroImportAll.FORUM_CHANNEL_SCROLLED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_SCROLLED, obj);
};
export const trackForumMorePostsLoaded = function trackForumMorePostsLoaded(arg0) {
  let channelId;
  let filterTagIds;
  let guildId;
  let hasMoreThreads;
  let numArchivedThreads;
  let obj5;
  let sortOrder;
  ({ guildId, channelId } = arg0);
  ({ numArchivedThreads, hasMoreThreads, filterTagIds, sortOrder } = arg0);
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    num_archived_threads: numArchivedThreads,
    num_active_threads: obj5.getNumActiveThreads(guildId, channelId),
    has_more_threads: hasMoreThreads,
    filter_tag_ids: filterTagIds,
    sort_order: sortOrder,
  };
  const track = AnalyticsUtilsDefault.track;
  const FORUM_CHANNEL_MORE_POSTS_LOADED = metroImportAll.FORUM_CHANNEL_MORE_POSTS_LOADED;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)));
  const obj4 = TrackingUtils;
  const merged2 = Object.assign(obj4.collectForumAnalyticsMetadata({ channelId }));
  obj5 = TrackingUtils;
  track(FORUM_CHANNEL_MORE_POSTS_LOADED, obj);
};
export const trackForumPostClicked = function trackForumPostClicked(channelId) {
  let _location;
  let guildId;
  let postId;
  channelId = channelId.channelId;
  ({ guildId, postId, location: _location } = channelId);
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    is_search_result: null != ForumSearchStore.getSearchResults(channelId),
    location: _location,
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_POST_CLICKED = metroImportAll.FORUM_CHANNEL_POST_CLICKED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumPostAnalyticsMetadata({ channelId: postId }));
  trackWithMetadata(FORUM_CHANNEL_POST_CLICKED, obj);
};
export const trackForumSortOrderUpdated = function trackForumSortOrderUpdated(guildId) {
  let channelId;
  let obj3;
  let sortOrder;
  ({ channelId, sortOrder } = guildId);
  guildId = guildId.guildId;
  const obj = {
    guild_id: guildId,
    channel_id: channelId,
    sort_type: obj3.convertSortOrderToReadableString(sortOrder),
    sort_order: sortOrder,
    forum_channel_sort_order: sortOrder,
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_POSTS_SORTED = metroImportAll.FORUM_CHANNEL_POSTS_SORTED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  obj3 = TrackingUtils;
  trackWithMetadata(FORUM_CHANNEL_POSTS_SORTED, obj);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  let forumLayout;
  let guildId;
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  const obj = { guild_id: guildId, channel_id: channelId, forum_channel_layout: forumLayout };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const FORUM_CHANNEL_LAYOUT_UPDATED = metroImportAll.FORUM_CHANNEL_LAYOUT_UPDATED;
  AppAnalyticsUtilsDefault;
  const obj2 = TrackingUtils;
  const merged = Object.assign(obj2.collectForumAnalyticsMetadata({ channelId }));
  trackWithMetadata(FORUM_CHANNEL_LAYOUT_UPDATED, obj);
};
export const trackForumPostLinkCopied = function trackForumPostLinkCopied(arg0) {
  let _location;
  let postId;
  ({ postId, location: _location } = arg0);
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_POST_LINK_COPIED, { forum_post_id: postId, location: _location });
};
export const trackForumOnboardingClicked = function trackForumOnboardingClicked(onboardingCTA) {
  onboardingCTA = onboardingCTA.onboardingCTA;
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: onboardingCTA });
};
export const trackForumUpsellModalClicked = function trackForumUpsellModalClicked(forumDemoId) {
  forumDemoId = forumDemoId.forumDemoId;
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: forumDemoId });
};
export const trackForumAddMediaToOriginalPostClicked = function trackForumAddMediaToOriginalPostClicked(added) {
  added = added.added;
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added });
};
export const trackForumChannelMediaUploaderClicked = function trackForumChannelMediaUploaderClicked(isMobile) {
  isMobile = isMobile.isMobile;
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: isMobile });
};
export const trackForumEnableAutomodClicked = function trackForumEnableAutomodClicked() {
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
};
export const trackForumPreviewPostClicked = function trackForumPreviewPostClicked() {
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
};
export const trackForumPostSidebarViewed = function trackForumPostSidebarViewed(channelId) {
  let obj6;
  const obj = { channel_view: "Split View", platform: obj6.getPlatform() };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_OPENED = metroImportAll.CHANNEL_OPENED;
  AppAnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(channelId.guild_id));
  const obj3 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj3.collectChannelAnalyticsMetadata(channelId));
  const obj4 = ThreadAnalyticsUtils;
  const merged2 = Object.assign(obj4.collectThreadMetadata(channelId, true));
  const obj5 = AppAnalyticsUtils;
  const merged3 = Object.assign(obj5.getChannelOpenedMetadata(channelId.id));
  obj6 = PlatformUtils;
  trackWithMetadata(CHANNEL_OPENED, obj);
  const obj7 = { channelId: channelId.id };
  trackChannelOpenedClickstreamDefault(obj7);
};
export const trackMobileForumComposerOpened = function trackMobileForumComposerOpened(arg0) {
  let _location;
  let channelId;
  let guildId;
  ({ guildId, channelId, location: _location } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(metroImportAll.OPEN_MODAL, {
    type: "Create Forum Post",
    guild_id: guildId,
    channel_id: channelId,
    location: _location,
  });
};
export const trackMobileForumComposerDismissed = function trackMobileForumComposerDismissed() {
  const obj = AnalyticsUtilsDefault;
  obj.track(metroImportAll.MODAL_DISMISSED, { type: "Create Forum Post" });
};
export const trackForumUpsellModalViewed = function trackForumUpsellModalViewed() {
  let obj3;
  const obj2 = { type: "Forum Channel Upsell Modal", location: obj3 };
  obj3 = { section: constants2.CHANNEL_WELCOME_CTA };
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(metroImportAll.OPEN_MODAL, obj2);
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const obj = { channel_id: channelId, guild_id: guildId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const THREAD_CREATION_STARTED = metroImportAll.THREAD_CREATION_STARTED;
  AppAnalyticsUtilsDefault;
  const obj2 = ThreadAnalyticsUtils;
  const merged = Object.assign(obj2.collectThreadMetadata(ChannelStore.getChannel(channelId)));
  trackWithMetadata(THREAD_CREATION_STARTED, obj);
};
