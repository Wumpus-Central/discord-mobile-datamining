// === Module 7278: TrackingUtils ===

// Module 7278 (TrackingUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import DraftStore2 from "DraftStore" /* 7044 */;
import ForumSessionAnalyticsManagerDefault from "ForumSessionAnalyticsManager" /* 7410 */;
import ForumChannelAnalyticsManagerDefault from "ForumChannelAnalyticsManager" /* 7411 */;
import ForumPostAnalyticsManagerDefault from "ForumPostAnalyticsManager" /* 7412 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5699 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ThreadMembersStore from "ThreadMembersStore" /* 7279 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6790 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let set;

const f94743 = (content_type) => {
  let str = content_type.content_type;
  if (str == null) {
    str = "unknown";
  }
  return str;
};
function collectForumAnalyticsMetadata(sessionId) {
  let emojiId;
  let emojiName;
  let mapped;
  let obj3;
  let obj4;
  let tmp8Result3;
  let tmp8Result4;
  sessionId = sessionId.sessionId;
  const channel = ChannelStore.getChannel(sessionId.channelId);
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (channel.isForumLikeChannel()) {
      let tmp2 = null != channel.topic;
      if (tmp2) {
        const str = channel.topic;
        tmp2 = str.trim().length > 0;
      }
      const defaultReactionEmoji = channel.defaultReactionEmoji;
      const obj = { forum_channel_has_guidelines: tmp2, forum_channel_default_emoji_reaction_id: emojiId, forum_channel_default_emoji_reaction_name: emojiName, forum_channel_available_tag_ids: mapped, forum_channel_tag_required: channel.hasFlag(ChannelFlags.REQUIRE_TAG), forum_channel_can_create_post: PermissionStore.can(Permissions.SEND_MESSAGES, channel), forum_channel_filter_tag_ids: obj3.getFilterTagIdsAnalytics(), forum_channel_sort_order: obj4.getSortOrderAnalytics(channel.id), forum_channel_session_id: sessionId, forum_channel_layout: tmp8Result3.getLayoutAnalytics(channel.id), forum_channel_default_sort_order: channel.defaultSortOrder, forum_channel_tag_setting: tmp8Result4.getTagSettingAnalytics(channel.id), forum_channel_default_layout: channel.defaultForumLayout, forum_channel_is_moderator_report_channel: channel.isModeratorReportChannel() };
      emojiId = undefined;
      if (defaultReactionEmoji != null) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      const defaultReactionEmoji2 = channel.defaultReactionEmoji;
      emojiName = undefined;
      if (defaultReactionEmoji2 != null) {
        emojiName = defaultReactionEmoji2.emojiName;
      }
      const availableTags = channel.availableTags;
      mapped = undefined;
      if (availableTags != null) {
        mapped = availableTags.map((id) => id.id);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj3 = ForumChannelAnalyticsManagerDefault;
      obj4 = ForumChannelAnalyticsManagerDefault;
      if (sessionId == null) {
        const id = channel.id;
        const tmp8Result = ForumSessionAnalyticsManagerDefault;
        sessionId = tmp8Result.getForumChannelSessionId(id);
      }
      tmp8Result3 = ForumChannelAnalyticsManagerDefault;
      tmp = obj;
      tmp8Result4 = ForumChannelAnalyticsManagerDefault;
    }
  }
  return tmp;
}
const DraftType = DraftStore2.DraftType;
const Permissions = Constants.Permissions;
const ChannelFlags = ChannelConstants.ChannelFlags;
const constants = ThreadConstants.ThreadSortOrderReadableForAnalytics;
const result = size.fileFinishedImporting("modules/forums/tracking/TrackingUtils.tsx");

export const getForumChannelSessionId = function getForumChannelSessionId(channelId) {
  const obj = ForumSessionAnalyticsManagerDefault;
  return obj.getForumChannelSessionId(channelId);
};
export const convertSortOrderToReadableString = function convertSortOrderToReadableString(sortOrder) {
  if (ThreadSortOrder.ThreadSortOrder.CREATION_DATE === sortOrder) {
    return constants.CREATION_DATE;
  } else if (ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY === sortOrder) {
    return constants.LATEST_ACTIVITY;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
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
    let availableTags;
    const channel1 = ChannelStore.getChannel(channel.parent_id);
    if (channel1 != null) {
      availableTags = channel1.availableTags;
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
          const self = this;
          const self2 = this;
          appliedTags = new Set();
        }
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        set = new Set(availableTags.map((id) => id.id));
        const _Array = Array;
        const arr = Array.from(appliedTags);
        return arr.filter((item) => set.has(item));
      }
    }
    return [];
  }
};
export const getNumActiveThreads = function getNumActiveThreads(guildId, channelId) {
  return Object.keys(ActiveThreadsStore.getThreadsForParent(guildId, channelId)).length;
};
export const getForumPostAttachmentMimetypes = function getForumPostAttachmentMimetypes(arg0) {
  let items;
  const message = ForumPostMessagesStore.getMessage(arg0);
  let firstMessage = null;
  if (message.loaded) {
    firstMessage = message.firstMessage;
  }
  if (null == firstMessage) {
    items = [];
  } else {
    const attachments = firstMessage.attachments;
    items = attachments.map(f94743);
  }
  return items;
};
export { collectForumAnalyticsMetadata };
export const collectForumPostAnalyticsMetadata = function collectForumPostAnalyticsMetadata(channelId) {
  let archived;
  let flag2;
  let hasUnreads;
  let isNew;
  let items;
  let items1;
  let num;
  let num3;
  let num4;
  let obj6;
  let obj7;
  channelId = channelId.channelId;
  const sessionId = channelId.sessionId;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (channel.isForumPost()) {
      const channel1 = ChannelStore.getChannel(channel.parent_id);
      let tmp = null;
      if (null != channel1) {
        tmp = null;
        if (channel1.isForumLikeChannel()) {
          const obj2 = { thread_approximate_member_count: ThreadMembersStore.getMemberCount(channelId), thread_approximate_message_count: ThreadMessageStore.getCount(channelId), thread_archived: true === archived, thread_locked: flag2, thread_auto_archive_duration_minutes: num, thread_approximate_creation_date: obj6.extractTimestamp(channelId), forum_post_id: channel.id, forum_post_first_message_id: obj7.castChannelIdAsMessageId(channel.id), forum_post_num_reactions: num3, forum_post_num_unique_reactions: num4, forum_post_applied_tag_ids: items, forum_post_is_pinned: channel.hasFlag(ChannelFlags.PINNED), forum_post_is_new: isNew, forum_post_is_unread: hasUnreads, forum_post_is_following: JoinedThreadsStore.hasJoined(channel.id), forum_post_attachment_mimetypes: items1 };
          const obj3 = { channelId: channel1.id, sessionId };
          const merged = Object.assign(collectForumAnalyticsMetadata(obj3));
          const threadMetadata = channel.threadMetadata;
          archived = undefined;
          if (threadMetadata != null) {
            archived = threadMetadata.archived;
          }
          const threadMetadata2 = channel.threadMetadata;
          flag2 = undefined;
          if (threadMetadata2 != null) {
            flag2 = threadMetadata2.locked;
          }
          if (flag2 == null) {
            flag2 = false;
          }
          const threadMetadata3 = channel.threadMetadata;
          num = undefined;
          if (threadMetadata3 != null) {
            num = threadMetadata3.autoArchiveDuration;
          }
          if (num == null) {
            num = 0;
          }
          obj6 = SnowflakeUtilsDefault;
          obj7 = SnowflakeUtilsDefault;
          const message = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage = null;
          if (message.loaded) {
            firstMessage = message.firstMessage;
          }
          num3 = 0;
          if (null != firstMessage) {
            const reactions = firstMessage.reactions;
            num3 = reactions.reduce((acc, count) => acc + count.count, 0);
          }
          const message1 = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage1 = null;
          if (message1.loaded) {
            firstMessage1 = message1.firstMessage;
          }
          num4 = 0;
          if (null != firstMessage1) {
            num4 = firstMessage1.reactions.length;
          }
          set = undefined;
          const channel2 = ChannelStore.getChannel(channel.id);
          if (null == channel2) {
            items = [];
          } else {
            let availableTags;
            const channel3 = ChannelStore.getChannel(channel2.parent_id);
            if (channel3 != null) {
              availableTags = channel3.availableTags;
            }
            if (null != channel3) {
              if (null != availableTags) {
                const _Set = Set;
                const self = this;
                const self2 = this;
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
          const tmp8Result = ForumPostAnalyticsManagerDefault;
          const readStateSnapshotAnalytics = tmp8Result.getReadStateSnapshotAnalytics(channel.id);
          isNew = undefined;
          if (readStateSnapshotAnalytics != null) {
            isNew = readStateSnapshotAnalytics.isNew;
          }
          const tmp8Result2 = ForumPostAnalyticsManagerDefault;
          const readStateSnapshotAnalytics1 = tmp8Result2.getReadStateSnapshotAnalytics(channel.id);
          hasUnreads = undefined;
          if (readStateSnapshotAnalytics1 != null) {
            hasUnreads = readStateSnapshotAnalytics1.hasUnreads;
          }
          const message2 = ForumPostMessagesStore.getMessage(channel.id);
          let firstMessage2 = null;
          if (message2.loaded) {
            firstMessage2 = message2.firstMessage;
          }
          if (null == firstMessage2) {
            items1 = [];
          } else {
            const attachments = firstMessage2.attachments;
            items1 = attachments.map(f94743);
          }
          tmp = obj2;
        }
      }
      return tmp;
    }
  }
  return null;
};