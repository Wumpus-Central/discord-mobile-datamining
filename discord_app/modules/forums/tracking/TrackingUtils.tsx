// === Module 7769: TrackingUtils ===

// Module 7769 (TrackingUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ForumSessionAnalyticsManagerDefault from "ForumSessionAnalyticsManager" /* 7771 */;
import ForumChannelAnalyticsManagerDefault from "ForumChannelAnalyticsManager" /* 7772 */;
import ForumPostAnalyticsManagerDefault from "ForumPostAnalyticsManager" /* 7773 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ThreadMembersStore from "ThreadMembersStore" /* 7770 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7306 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import DraftStore from "DraftStore" /* 4901 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7277 */;

require = fn;
function collectForumAnalyticsMetadata(sessionId) {
  sessionId = sessionId.sessionId;
  const channel = ChannelStore.getChannel(sessionId.channelId);
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (channel.isForumLikeChannel()) {
      let tmp2 = null != channel.topic;
      if (tmp2) {
        tmp2 = channel.topic.trim().length > 0;
      }
      const obj = { forum_channel_has_guidelines: tmp2, forum_channel_default_emoji_reaction_id: null, forum_channel_default_emoji_reaction_name: null, forum_channel_available_tag_ids: null, forum_channel_tag_required: null, forum_channel_can_create_post: null, forum_channel_filter_tag_ids: null, forum_channel_sort_order: null, forum_channel_session_id: null, forum_channel_layout: null, forum_channel_default_sort_order: null, forum_channel_tag_setting: null, forum_channel_default_layout: null, forum_channel_is_moderator_report_channel: null };
      const defaultReactionEmoji = channel.defaultReactionEmoji;
      let emojiId;
      if (defaultReactionEmoji != null) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      obj.forum_channel_default_emoji_reaction_id = emojiId;
      const defaultReactionEmoji2 = channel.defaultReactionEmoji;
      let emojiName;
      if (defaultReactionEmoji2 != null) {
        emojiName = defaultReactionEmoji2.emojiName;
      }
      obj.forum_channel_default_emoji_reaction_name = emojiName;
      const availableTags = channel.availableTags;
      let mapped;
      if (availableTags != null) {
        mapped = availableTags.map((id) => id.id);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj.forum_channel_available_tag_ids = mapped;
      obj.forum_channel_tag_required = channel.hasFlag(ChannelFlags.REQUIRE_TAG);
      obj.forum_channel_can_create_post = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
      obj.forum_channel_filter_tag_ids = ForumChannelAnalyticsManagerDefault.getFilterTagIdsAnalytics();
      obj.forum_channel_sort_order = ForumChannelAnalyticsManagerDefault.getSortOrderAnalytics(channel.id);
      if (sessionId == null) {
        let tmp8Result = ForumSessionAnalyticsManagerDefault;
        sessionId = tmp8Result.getForumChannelSessionId(channel.id);
      }
      obj.forum_channel_session_id = sessionId;
      tmp8Result = ForumChannelAnalyticsManagerDefault;
      obj.forum_channel_layout = tmp8Result.getLayoutAnalytics(channel.id);
      obj.forum_channel_default_sort_order = channel.defaultSortOrder;
      obj.forum_channel_tag_setting = ForumChannelAnalyticsManagerDefault.getTagSettingAnalytics(channel.id);
      obj.forum_channel_default_layout = channel.defaultForumLayout;
      obj.forum_channel_is_moderator_report_channel = channel.isModeratorReportChannel();
      tmp = obj;
      const tmp8Result1 = ForumChannelAnalyticsManagerDefault;
    }
  }
  return tmp;
}
const DraftType = fn(4901).DraftType;
const Permissions = fn(1074).Permissions;
const ChannelFlags = fn(1964).ChannelFlags;
const constants = fn(1113).ThreadSortOrderReadableForAnalytics;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/tracking/TrackingUtils.tsx");

export const getForumChannelSessionId = function getForumChannelSessionId(channelId) {
  return ForumSessionAnalyticsManagerDefault.getForumChannelSessionId(channelId);
};
export const convertSortOrderToReadableString = function convertSortOrderToReadableString(sortOrder) {
  if (ThreadSortOrder.ThreadSortOrder.CREATION_DATE === sortOrder) {
    return constants.CREATION_DATE;
  } else if (ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY === sortOrder) {
    return constants.LATEST_ACTIVITY;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected sort order " + sortOrder);
    throw error;
  }
};
export const getForumPostDraftNumAttachments = function getForumPostDraftNumAttachments(channelId) {
  return UploadAttachmentStore.getUploads(channelId, DraftType.FirstThreadMessage).length;
};
export const getForumPostDraftAppliedTagIds = function getForumPostDraftAppliedTagIds(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    if (channel1 != null) {
      const availableTags = channel1.availableTags;
    }
    if (null != channel1) {
      if (null != availableTags) {
        const threadSettings = DraftStore.getThreadSettings(channelId);
        let appliedTags;
        if (threadSettings != null) {
          appliedTags = threadSettings.appliedTags;
        }
        if (appliedTags == null) {
          const _Set = Set;
          appliedTags = new Set();
        }
        const _Set2 = Set;
        const _Array = Array;
        const set = new Set(availableTags.map((id) => id.id));
        return Array.from(appliedTags).filter((item) => set.has(item));
      }
    }
    return [];
  }
};
export const getNumActiveThreads = function getNumActiveThreads(guildId, channelId) {
  return Object.keys(ActiveThreadsStore.getThreadsForParent(guildId, channelId)).length;
};
export const getForumPostAttachmentMimetypes = function getForumPostAttachmentMimetypes(arg0) {
  const message = ForumPostMessagesStore.getMessage(arg0);
  let firstMessage = null;
  if (message.loaded) {
    firstMessage = message.firstMessage;
  }
  if (null == firstMessage) {
    let items = [];
  } else {
    const attachments = firstMessage.attachments;
    items = attachments.map((content_type) => {
      let str = content_type.content_type;
      if (str == null) {
        str = "unknown";
      }
      return str;
    });
  }
  return items;
};
export { collectForumAnalyticsMetadata };
export const collectForumPostAnalyticsMetadata = function collectForumPostAnalyticsMetadata(channelId) {
  channelId = channelId.channelId;
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (channel.isForumPost()) {
      const channel1 = obj.getChannel(channel.parent_id);
      let tmp = null;
      if (null != channel1) {
        tmp = null;
        if (channel1.isForumLikeChannel()) {
          obj = {};
          obj = { channelId: channel1.id, sessionId: channelId.sessionId };
          const merged = Object.assign(collectForumAnalyticsMetadata(obj));
          obj.thread_approximate_member_count = ThreadMembersStore.getMemberCount(channelId);
          obj.thread_approximate_message_count = ThreadMessageStore.getCount(channelId);
          const threadMetadata = channel.threadMetadata;
          let archived;
          if (threadMetadata != null) {
            archived = threadMetadata.archived;
          }
          obj.thread_archived = true === archived;
          const threadMetadata2 = channel.threadMetadata;
          let flag2;
          if (threadMetadata2 != null) {
            flag2 = threadMetadata2.locked;
          }
          if (flag2 == null) {
            flag2 = false;
          }
          obj.thread_locked = flag2;
          const threadMetadata3 = channel.threadMetadata;
          let num;
          if (threadMetadata3 != null) {
            num = threadMetadata3.autoArchiveDuration;
          }
          if (num == null) {
            num = 0;
          }
          obj.thread_auto_archive_duration_minutes = num;
          obj.thread_approximate_creation_date = SnowflakeUtilsDefault.extractTimestamp(channelId);
          obj.forum_post_id = channel.id;
          obj.forum_post_first_message_id = SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id);
          const message = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage = null;
          if (message.loaded) {
            firstMessage = message.firstMessage;
          }
          let num3 = 0;
          if (null != firstMessage) {
            const reactions = firstMessage.reactions;
            num3 = reactions.reduce((acc, count) => acc + count.count, 0);
          }
          obj.forum_post_num_reactions = num3;
          const message1 = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage1 = null;
          if (message1.loaded) {
            firstMessage1 = message1.firstMessage;
          }
          let num4 = 0;
          if (null != firstMessage1) {
            num4 = firstMessage1.reactions.length;
          }
          obj.forum_post_num_unique_reactions = num4;
          let set;
          const channel2 = obj.getChannel(channel.id);
          if (null == channel2) {
            let items = [];
          } else {
            const channel3 = obj.getChannel(channel2.parent_id);
            if (channel3 != null) {
              const availableTags = channel3.availableTags;
            }
            if (null != channel3) {
              if (null != availableTags) {
                const _Set = Set;
                set = new Set(availableTags.map((id) => id.id));
                const appliedTags = channel2.appliedTags;
                items = undefined;
                if (appliedTags != null) {
                  items = appliedTags.filter((item) => set.has(item));
                }
                if (items == null) {
                  items = [];
                }
              }
            }
            items = [];
          }
          obj.forum_post_applied_tag_ids = items;
          obj.forum_post_is_pinned = channel.hasFlag(ChannelFlags.PINNED);
          let tmp8Result = ForumPostAnalyticsManagerDefault;
          const readStateSnapshotAnalytics = tmp8Result.getReadStateSnapshotAnalytics(channel.id);
          let isNew;
          if (readStateSnapshotAnalytics != null) {
            isNew = readStateSnapshotAnalytics.isNew;
          }
          obj.forum_post_is_new = isNew;
          tmp8Result = ForumPostAnalyticsManagerDefault;
          const readStateSnapshotAnalytics1 = tmp8Result.getReadStateSnapshotAnalytics(channel.id);
          let hasUnreads;
          if (readStateSnapshotAnalytics1 != null) {
            hasUnreads = readStateSnapshotAnalytics1.hasUnreads;
          }
          obj.forum_post_is_unread = hasUnreads;
          obj.forum_post_is_following = JoinedThreadsStore.hasJoined(channel.id);
          const message2 = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage2 = null;
          if (message2.loaded) {
            firstMessage2 = message2.firstMessage;
          }
          if (null == firstMessage2) {
            let items1 = [];
          } else {
            const attachments = firstMessage2.attachments;
            items1 = attachments.map((content_type) => {
              let str = content_type.content_type;
              if (str == null) {
                str = "unknown";
              }
              return str;
            });
          }
          obj.forum_post_attachment_mimetypes = items1;
        }
      }
      return tmp;
    }
  }
  return null;
};