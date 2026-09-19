// discord_app/modules/forums/tracking/Tracking.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import TrackingUtils from "TrackingUtils.tsx";
import ThreadAnalyticsUtils from "../../app_analytics/ThreadAnalyticsUtils.tsx";
import trackChannelOpenedClickstreamDefault from "../../app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import ForumPostMessagesStore from "../ForumPostMessagesStore.tsx";
import ForumSearchStore from "../ForumSearchStore.tsx";

const AppAnalyticsUtilsDefault = AppAnalyticsUtils;

require = fn;
const DraftType = fn(5105).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId, sessionId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.post_ids = postIds;
  obj2.additional_seen_time_millis = additionalTimes;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEEN_BATCH, obj2);
};
export const trackForumSearched = function trackForumSearched(channelId) {
  channelId = channelId.channelId;
  ({ guildId, numSearchResults } = channelId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.num_search_results = numSearchResults;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCHED, obj2);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = channelId.guildId;
  obj2.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCH_CLEARED, obj2);
};
export const trackForumTagFilterClicked = function trackForumTagFilterClicked(channelId) {
  channelId = channelId.channelId;
  ({ guildId, tagId, filterTagIds, added, location: _location } = channelId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.tag_id = tagId;
  obj2.filter_tag_ids = filterTagIds;
  obj2.added = added;
  obj2.location = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_TAG_FILTER_CLICKED, obj2);
};
export const trackForumCreateNewPostClick = function trackForumCreateNewPostClick(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = channelId.guildId;
  obj2.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj2);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = channelId.guildId;
  obj2.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, obj2);
};
export const maybeTrackForumNewPostDraftCreated = function maybeTrackForumNewPostDraftCreated(channelId) {
  channelId = channelId.channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    const threadSettings = DraftStore.getThreadSettings(channelId);
    if (channel.template != null) {
      const trimmed = str2.trim();
    }
    const draft = DraftStore.getDraft(channelId, DraftType.FirstThreadMessage);
    let tmp4 = null == draft;
    if (!tmp4) {
      tmp4 = 0 === draft.length;
    }
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
      let size;
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
      const obj2 = {};
      const obj = AppAnalyticsUtilsDefault;
      const obj4 = { channelId };
      const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata(obj4));
      obj2.guild_id = channelId.guildId;
      obj2.channel_id = channelId;
      obj2.applied_tag_ids = TrackingUtils.getForumPostDraftAppliedTagIds(channelId);
      obj2.num_attachments = TrackingUtils.getForumPostDraftNumAttachments(channelId);
      obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj2);
    }
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = channelId.guildId;
  obj2.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, obj2);
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
        const obj2 = {};
        const obj = AppAnalyticsUtilsDefault;
        const obj4 = { channelId: postId };
        const merged = Object.assign(TrackingUtils.collectForumPostAnalyticsMetadata(obj4));
        obj2.guild_id = guildId;
        obj2.channel_id = channelId;
        obj2.application_id = applicationId;
        obj2.voice_chat_enabled = voiceChatEnabled;
        obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CREATED, obj2);
        flag = false;
      }
      return flag;
    });
  } else {
    let obj3 = {};
    let obj2 = channelId(postId[5]);
    const obj5 = { channelId: postId };
    let merged = Object.assign(guildId(postId[6]).collectForumPostAnalyticsMetadata(obj5));
    obj3.guild_id = guildId;
    obj3.channel_id = channelId;
    obj3.application_id = applicationId;
    obj3.voice_chat_enabled = voiceChatEnabled;
    obj2.trackWithMetadata(constants.FORUM_CHANNEL_POST_CREATED, obj3);
    let obj4 = guildId(postId[6]);
  }
};
export const trackForumScrolled = function trackForumScrolled(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = channelId.guildId;
  obj2.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SCROLLED, obj2);
};
export const trackForumMorePostsLoaded = function trackForumMorePostsLoaded(arg0) {
  ({ guildId, channelId } = arg0);
  ({ numArchivedThreads, hasMoreThreads, filterTagIds, sortOrder } = arg0);
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)));
  const merged2 = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.num_archived_threads = numArchivedThreads;
  obj2.num_active_threads = TrackingUtils.getNumActiveThreads(guildId, channelId);
  obj2.has_more_threads = hasMoreThreads;
  obj2.filter_tag_ids = filterTagIds;
  obj2.sort_order = sortOrder;
  obj.track(constants.FORUM_CHANNEL_MORE_POSTS_LOADED, obj2);
};
export const trackForumPostClicked = function trackForumPostClicked(channelId) {
  channelId = channelId.channelId;
  ({ guildId, postId, location: _location } = channelId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumPostAnalyticsMetadata({ channelId: postId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.is_search_result = null != ForumSearchStore.getSearchResults(channelId);
  obj2.location = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CLICKED, obj2);
};
export const trackForumSortOrderUpdated = function trackForumSortOrderUpdated(guildId) {
  ({ channelId, sortOrder } = guildId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = guildId.guildId;
  obj2.channel_id = channelId;
  obj2.sort_type = TrackingUtils.convertSortOrderToReadableString(sortOrder);
  obj2.sort_order = sortOrder;
  obj2.forum_channel_sort_order = sortOrder;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POSTS_SORTED, obj2);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj2.guild_id = guildId;
  obj2.channel_id = channelId;
  obj2.forum_channel_layout = forumLayout;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_LAYOUT_UPDATED, obj2);
};
export const trackForumPostLinkCopied = function trackForumPostLinkCopied(arg0) {
  ({ postId, location: _location } = arg0);
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_POST_LINK_COPIED, {
    forum_post_id: postId,
    location: _location,
  });
};
export const trackForumOnboardingClicked = function trackForumOnboardingClicked(onboarding_cta_type) {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_CHANNEL_ONBOARDING_CLICKED, {
    onboarding_cta_type: onboarding_cta_type.onboardingCTA,
  });
};
export const trackForumUpsellModalClicked = function trackForumUpsellModalClicked(forum_demo_id) {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_UPSELL_MODAL_CLICKED, {
    forum_demo_id: forum_demo_id.forumDemoId,
  });
};
export const trackForumAddMediaToOriginalPostClicked = function trackForumAddMediaToOriginalPostClicked(added) {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
    added: added.added,
  });
};
export const trackForumChannelMediaUploaderClicked = function trackForumChannelMediaUploaderClicked(is_mobile) {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
    is_mobile: is_mobile.isMobile,
  });
};
export const trackForumEnableAutomodClicked = function trackForumEnableAutomodClicked() {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
};
export const trackForumPreviewPostClicked = function trackForumPreviewPostClicked() {
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
};
export const trackForumPostSidebarViewed = function trackForumPostSidebarViewed(channelId) {
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channelId.guild_id));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channelId));
  const merged2 = Object.assign(ThreadAnalyticsUtils.collectThreadMetadata(channelId, true));
  const merged3 = Object.assign(AppAnalyticsUtils.getChannelOpenedMetadata(channelId.id));
  obj2.channel_view = "Split View";
  obj2.platform = PlatformUtils.getPlatform();
  obj.trackWithMetadata(constants.CHANNEL_OPENED, obj2);
  trackChannelOpenedClickstreamDefault({ channelId: channelId.id });
};
export const trackMobileForumComposerOpened = function trackMobileForumComposerOpened(arg0) {
  ({ guildId, channelId, location: _location } = arg0);
  AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
    type: "Create Forum Post",
    guild_id: guildId,
    channel_id: channelId,
    location: _location,
  });
};
export const trackMobileForumComposerDismissed = function trackMobileForumComposerDismissed() {
  AnalyticsUtilsDefault.track(constants.MODAL_DISMISSED, { type: "Create Forum Post" });
};
export const trackForumUpsellModalViewed = function trackForumUpsellModalViewed() {
  const obj2 = { type: "Forum Channel Upsell Modal", location: { section: constants2.CHANNEL_WELCOME_CTA } };
  AppAnalyticsUtilsDefault.trackWithMetadata(constants.OPEN_MODAL, obj2);
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  const obj2 = {};
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign(ThreadAnalyticsUtils.collectThreadMetadata(ChannelStore.getChannel(channelId)));
  obj2.channel_id = channelId;
  obj2.guild_id = channelId.guildId;
  obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj2);
};
