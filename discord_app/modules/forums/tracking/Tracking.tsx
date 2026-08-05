// discord_app/modules/forums/tracking/Tracking.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import handleLoadThreadsSuccess from "handleLoadThreadsSuccess";
import initialize from "initialize";
import ME from "ME";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../../app_analytics/AppAnalyticsUtils.tsx";
import { collectThreadMetadata } from "../../app_analytics/ThreadAnalyticsUtils.tsx";
import { trackChannelOpenedClickstream } from "../../app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx";
import { collectForumAnalyticsMetadata } from "TrackingUtils.tsx";

let c9;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = ME);
let result = require("handleLoadThreadsSuccess").fileFinishedImporting("modules/forums/tracking/Tracking.tsx");

export const trackForumChannelSeenBatch = function trackForumChannelSeenBatch(channelId) {
  let additionalTimes;
  let guildId;
  let postIds;
  let sessionId;
  channelId = channelId.channelId;
  ({ guildId, sessionId, postIds, additionalTimes } = channelId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId, sessionId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.post_ids = postIds;
  obj.additional_seen_time_millis = additionalTimes;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEEN_BATCH, obj);
};
export const trackForumSearched = function trackForumSearched(channelId) {
  let guildId;
  let numSearchResults;
  channelId = channelId.channelId;
  ({ guildId, numSearchResults } = channelId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.num_search_results = numSearchResults;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCHED, obj);
};
export const trackForumSearchCleared = function trackForumSearchCleared(channelId) {
  channelId = channelId.channelId;
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SEARCH_CLEARED, obj);
};
export const trackForumTagFilterClicked = function trackForumTagFilterClicked(channelId) {
  let _location;
  let added;
  let filterTagIds;
  let guildId;
  let tagId;
  channelId = channelId.channelId;
  ({ guildId, tagId, filterTagIds, added, location: _location } = channelId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
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
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, obj);
};
export const trackForumCreateNewPostKeybindUsed = function trackForumCreateNewPostKeybindUsed(channelId) {
  channelId = channelId.channelId;
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, obj);
};
export const maybeTrackForumNewPostDraftCreated = function maybeTrackForumNewPostDraftCreated(channelId) {
  channelId = channelId.channelId;
  const channel = store.getChannel(channelId);
  if (null != channel) {
    threadSettings = threadSettings.getThreadSettings(channelId);
    if (channel.template != null) {
      const trimmed = str2.trim();
    }
    const draft = threadSettings.getDraft(channelId, DraftType.FirstThreadMessage);
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
      let obj = collectGuildAnalyticsMetadata;
      obj = {};
      obj = { channelId: null };
      obj[0] = channelId;
      const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata(obj));
      obj.guild_id = channelId.guildId;
      obj.channel_id = channelId;
      const obj3 = collectForumAnalyticsMetadata;
      obj.applied_tag_ids = collectForumAnalyticsMetadata.getForumPostDraftAppliedTagIds(channelId);
      const obj5 = collectForumAnalyticsMetadata;
      obj.num_attachments = collectForumAnalyticsMetadata.getForumPostDraftNumAttachments(channelId);
      obj.trackWithMetadata(constants.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, obj);
      const obj6 = collectForumAnalyticsMetadata;
    }
    const obj7 = threadSettings;
  }
};
export const trackForumNewPostCleared = function trackForumNewPostCleared(channelId) {
  channelId = channelId.channelId;
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
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
  let obj = loading;
  if (loading.isLoading(postId)) {
    const result = obj.addConditionalChangeListener(() => {
      let flag = outer1_6.isLoading(postId);
      if (!flag) {
        let obj = channelId(postId[5]);
        obj = {};
        obj = { channelId: null };
        obj[0] = postId;
        const merged = Object.assign(guildId(postId[6]).collectForumPostAnalyticsMetadata(obj));
        obj.guild_id = guildId;
        obj.channel_id = channelId;
        obj.application_id = applicationId;
        obj.voice_chat_enabled = voiceChatEnabled;
        obj.trackWithMetadata(outer1_8.FORUM_CHANNEL_POST_CREATED, obj);
        flag = false;
        const obj3 = guildId(postId[6]);
      }
      return flag;
    });
  } else {
    obj = {};
    const obj2 = channelId(postId[5]);
    obj = { channelId: null };
    obj[0] = postId;
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
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = channelId.guildId;
  obj.channel_id = channelId;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_SCROLLED, obj);
};
export const trackForumMorePostsLoaded = function trackForumMorePostsLoaded(arg0) {
  let channelId;
  let filterTagIds;
  let guildId;
  let hasMoreThreads;
  let numArchivedThreads;
  let sortOrder;
  ({ guildId, channelId } = arg0);
  ({ numArchivedThreads, hasMoreThreads, filterTagIds, sortOrder } = arg0);
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  const obj3 = collectGuildAnalyticsMetadata;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(store.getChannel(channelId)));
  const obj4 = collectGuildAnalyticsMetadata;
  const merged2 = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.num_archived_threads = numArchivedThreads;
  const obj5 = collectForumAnalyticsMetadata;
  obj.num_active_threads = collectForumAnalyticsMetadata.getNumActiveThreads(guildId, channelId);
  obj.has_more_threads = hasMoreThreads;
  obj.filter_tag_ids = filterTagIds;
  obj.sort_order = sortOrder;
  obj.track(constants.FORUM_CHANNEL_MORE_POSTS_LOADED, obj);
};
export const trackForumPostClicked = function trackForumPostClicked(channelId) {
  let _location;
  let guildId;
  let postId;
  channelId = channelId.channelId;
  ({ guildId, postId, location: _location } = channelId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumPostAnalyticsMetadata({ channelId: postId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.is_search_result = null != searchResults.getSearchResults(channelId);
  obj.location = _location;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POST_CLICKED, obj);
};
export const trackForumSortOrderUpdated = function trackForumSortOrderUpdated(guildId) {
  let channelId;
  let sortOrder;
  ({ channelId, sortOrder } = guildId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId.guildId;
  obj.channel_id = channelId;
  const obj3 = collectForumAnalyticsMetadata;
  obj.sort_type = collectForumAnalyticsMetadata.convertSortOrderToReadableString(sortOrder);
  obj.sort_order = sortOrder;
  obj.forum_channel_sort_order = sortOrder;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_POSTS_SORTED, obj);
};
export const trackForumLayoutUpdated = function trackForumLayoutUpdated(channelId) {
  let forumLayout;
  let guildId;
  channelId = channelId.channelId;
  ({ guildId, forumLayout } = channelId);
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectForumAnalyticsMetadata.collectForumAnalyticsMetadata({ channelId }));
  obj.guild_id = guildId;
  obj.channel_id = channelId;
  obj.forum_channel_layout = forumLayout;
  obj.trackWithMetadata(constants.FORUM_CHANNEL_LAYOUT_UPDATED, obj);
};
export const trackForumPostLinkCopied = function trackForumPostLinkCopied(arg0) {
  let _location;
  let postId;
  ({ postId, location: _location } = arg0);
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_POST_LINK_COPIED, { forum_post_id: postId, location: _location });
};
export const trackForumOnboardingClicked = function trackForumOnboardingClicked(onboarding_cta_type) {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: onboarding_cta_type.onboardingCTA });
};
export const trackForumUpsellModalClicked = function trackForumUpsellModalClicked(forum_demo_id) {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: forum_demo_id.forumDemoId });
};
export const trackForumAddMediaToOriginalPostClicked = function trackForumAddMediaToOriginalPostClicked(added) {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: added.added });
};
export const trackForumChannelMediaUploaderClicked = function trackForumChannelMediaUploaderClicked(is_mobile) {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: is_mobile.isMobile });
};
export const trackForumEnableAutomodClicked = function trackForumEnableAutomodClicked() {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
};
export const trackForumPreviewPostClicked = function trackForumPreviewPostClicked() {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
};
export const trackForumPostSidebarViewed = function trackForumPostSidebarViewed(channelId) {
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(channelId.guild_id));
  const obj3 = collectGuildAnalyticsMetadata;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(channelId));
  const obj4 = collectGuildAnalyticsMetadata;
  const merged2 = Object.assign(collectThreadMetadata.collectThreadMetadata(channelId, true));
  const obj5 = collectThreadMetadata;
  const merged3 = Object.assign(collectGuildAnalyticsMetadata.getChannelOpenedMetadata(channelId.id));
  obj.channel_view = "Split View";
  const obj6 = collectGuildAnalyticsMetadata;
  obj.platform = set.getPlatform();
  obj.trackWithMetadata(constants.CHANNEL_OPENED, obj);
  obj = { channelId: channelId.id };
  trackChannelOpenedClickstream(obj);
};
export const trackMobileForumComposerOpened = function trackMobileForumComposerOpened(arg0) {
  let _location;
  let channelId;
  let guildId;
  ({ guildId, channelId, location: _location } = arg0);
  expandEventProperties.track(constants.OPEN_MODAL, { type: "Create Forum Post", guild_id: guildId, channel_id: channelId, location: _location });
};
export const trackMobileForumComposerDismissed = function trackMobileForumComposerDismissed() {
  expandEventProperties.track(constants.MODAL_DISMISSED, { type: "Create Forum Post" });
};
export const trackForumUpsellModalViewed = function trackForumUpsellModalViewed() {
  let obj = collectGuildAnalyticsMetadata;
  obj = { section: constants2.CHANNEL_WELCOME_CTA };
  obj.trackWithMetadata(constants.OPEN_MODAL, { type: "Forum Channel Upsell Modal", location: obj });
};
export const trackForumCreateNewPostStarted = function trackForumCreateNewPostStarted(channelId) {
  channelId = channelId.channelId;
  let obj = collectGuildAnalyticsMetadata;
  obj = {};
  const merged = Object.assign(collectThreadMetadata.collectThreadMetadata(store.getChannel(channelId)));
  obj.channel_id = channelId;
  obj.guild_id = channelId.guildId;
  obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
};