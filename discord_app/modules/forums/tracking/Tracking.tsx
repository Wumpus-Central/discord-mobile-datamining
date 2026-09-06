// discord_app/modules/forums/tracking/Tracking.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
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
const DraftType = fn(4901).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId, sessionId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.post_ids = postIds;
  obj.additional_seen_time_millis = additionalTimes;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEEN_BATCH, obj);
};
export const trackForumSearched = function trackForumSearched(channelId) {
  channelId = channelId.channelId;
  ({ guildId, numSearchResults } = channelId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.num_search_results = numSearchResults;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCHED, obj);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCH_CLEARED, obj);
};
export const trackForumTagFilterClicked = function trackForumTagFilterClicked(channelId) {
  channelId = channelId.channelId;
  ({ guildId, tagId, filterTagIds, added, location: _location } = channelId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.tag_id = tagId;
  obj.filter_tag_ids = filterTagIds;
  obj.added = added;
  obj.location = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_TAG_FILTER_CLICKED, obj);
};
export const trackForumCreateNewPostClick = function trackForumCreateNewPostClick(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, obj);
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
    let appliedTags;
    if (threadSettings != null) {
      appliedTags = threadSettings.appliedTags;
    }
    let tmp7 = null == appliedTags;
    if (!tmp7) {
      let size;
      if (threadSettings != null) {
        appliedTags = threadSettings.appliedTags;
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
      let obj = {};
      obj = { channelId };
      const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata(obj));
      obj.guild_id = channelId.guildId;
      obj.channel_id = channelId;
      obj.applied_tag_ids = TrackingUtils.getForumPostDraftAppliedTagIds(channelId);
      obj.num_attachments = TrackingUtils.getForumPostDraftNumAttachments(channelId);
      obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj);
    }
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, obj);
};
export const trackForumPostCreated = function trackForumPostCreated(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const postId = guildId.postId;
  const applicationId = guildId.applicationId;
  const voiceChatEnabled = guildId.voiceChatEnabled;
  let obj = ForumPostMessagesStore;
  if (ForumPostMessagesStore.isLoading(postId)) {
    const result = obj.addConditionalChangeListener(() => {
      let flag = ForumPostMessagesStore.isLoading(postId);
      if (!flag) {
        let obj = {};
        obj = { channelId: postId };
        const merged = Object.assign(TrackingUtils.collectForumPostAnalyticsMetadata(obj));
        obj.guild_id = guildId;
        obj.channel_id = channelId;
        obj.application_id = applicationId;
        obj.voice_chat_enabled = voiceChatEnabled;
        obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CREATED, obj);
        flag = false;
      }
      return flag;
    });
  } else {
    obj = {};
    const obj2 = channelId(postId[5]);
    obj = { channelId: postId };
    let merged = Object.assign(guildId(postId[6]).collectForumPostAnalyticsMetadata(obj));
    obj.guild_id = guildId;
    obj.channel_id = channelId;
    obj.application_id = applicationId;
    obj.voice_chat_enabled = voiceChatEnabled;
    obj2.trackWithMetadata(constants.FORUM_CHANNEL_POST_CREATED, obj);
    const obj4 = guildId(postId[6]);
  }
};
export const trackForumScrolled = function trackForumScrolled(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SCROLLED, obj);
};
export const trackForumMorePostsLoaded = function trackForumMorePostsLoaded(arg0) {
  ({ guildId, channelId } = arg0);
  ({ numArchivedThreads, hasMoreThreads, filterTagIds, sortOrder } = arg0);
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)));
  const merged2 = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.num_archived_threads = numArchivedThreads;
  obj.num_active_threads = TrackingUtils.getNumActiveThreads(guildId, channelId);
  obj.has_more_threads = hasMoreThreads;
  obj.filter_tag_ids = filterTagIds;
  obj.sort_order = sortOrder;
  obj.track(constants.FORUM_CHANNEL_MORE_POSTS_LOADED, obj);
};
export const trackForumPostClicked = function trackForumPostClicked(channelId) {
  channelId = channelId.channelId;
  ({ guildId, postId, location: _location } = channelId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumPostAnalyticsMetadata({ channelId: postId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.is_search_result = null != ForumSearchStore.getSearchResults(channelId);
  obj.location = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CLICKED, obj);
};
export const trackForumSortOrderUpdated = function trackForumSortOrderUpdated(guildId) {
  ({ channelId, sortOrder } = guildId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId.guildId;
  obj.channel_id = channelId;
  obj.sort_type = TrackingUtils.convertSortOrderToReadableString(sortOrder);
  obj.sort_order = sortOrder;
  obj.forum_channel_sort_order = sortOrder;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POSTS_SORTED, obj);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  const obj = {};
  const merged = Object.assign(TrackingUtils.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.forum_channel_layout = forumLayout;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_LAYOUT_UPDATED, obj);
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
  let obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(channelId.guild_id));
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channelId));
  const merged2 = Object.assign(ThreadAnalyticsUtils.collectThreadMetadata(channelId, true));
  const merged3 = Object.assign(AppAnalyticsUtils.getChannelOpenedMetadata(channelId.id));
  obj.channel_view = "Split View";
  obj.platform = PlatformUtils.getPlatform();
  obj.trackWithMetadata(constants.CHANNEL_OPENED, obj);
  obj = { channelId: channelId.id };
  trackChannelOpenedClickstreamDefault(obj);
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
  let obj = { type: "Forum Channel Upsell Modal", location: null };
  obj = { section: constants2.CHANNEL_WELCOME_CTA };
  obj.location = obj;
  obj.trackWithMetadata(constants.OPEN_MODAL, obj);
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  const obj = {};
  const merged = Object.assign(ThreadAnalyticsUtils.collectThreadMetadata(ChannelStore.getChannel(channelId)));
  obj.channel_id = channelId;
  obj.guild_id = channelId.guildId;
  obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
};
