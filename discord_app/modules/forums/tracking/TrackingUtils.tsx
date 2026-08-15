// discord_app/modules/forums/tracking/TrackingUtils.tsx
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import storeThread from "storeThread";
import updateFromGuild from "updateFromGuild";
import updateState from "updateState";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import map from "map";
import handleLoadThreadsSuccess from "handleLoadThreadsSuccess";
import { Permissions } from "ME";
import { ChannelFlags } from "set";
import { ThreadSortOrderReadableForAnalytics as closure_15 } from "AbortCodes";
import { set } from "../../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";
import { setFilterTagIds } from "ForumChannelAnalyticsManager.tsx";
import { getForumChannelSessionId } from "ForumSessionAnalyticsManager.tsx";

const require = arg1;
function collectForumAnalyticsMetadata(sessionId) {
  sessionId = sessionId.sessionId;
  const channel = store.getChannel(sessionId.channelId);
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (channel.isForumLikeChannel()) {
      let tmp2 = null != channel.topic;
      if (tmp2) {
        tmp2 = channel.topic.trim().length > 0;
        const str = channel.topic;
      }
      const obj = { forum_channel_has_guidelines: null, forum_channel_default_emoji_reaction_id: null, forum_channel_default_emoji_reaction_name: null, forum_channel_available_tag_ids: null, forum_channel_tag_required: null, forum_channel_can_create_post: null, forum_channel_filter_tag_ids: null, forum_channel_sort_order: null, forum_channel_session_id: null, forum_channel_layout: null, forum_channel_default_sort_order: null, forum_channel_tag_setting: null, forum_channel_default_layout: null, forum_channel_is_moderator_report_channel: null };
      obj[0] = tmp2;
      const defaultReactionEmoji = channel.defaultReactionEmoji;
      let emojiId;
      if (defaultReactionEmoji != null) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      obj[1] = emojiId;
      const defaultReactionEmoji2 = channel.defaultReactionEmoji;
      let emojiName;
      if (defaultReactionEmoji2 != null) {
        emojiName = defaultReactionEmoji2.emojiName;
      }
      obj[2] = emojiName;
      const availableTags = channel.availableTags;
      let mapped;
      if (availableTags != null) {
        mapped = availableTags.map((id) => id.id);
      }
      if (mapped == null) {
        mapped = [];
      }
      obj[3] = mapped;
      obj[4] = channel.hasFlag(ChannelFlags.REQUIRE_TAG);
      obj[5] = getUncachedChannelPermissions.can(Permissions.SEND_MESSAGES, channel);
      obj[6] = setFilterTagIds.getFilterTagIdsAnalytics();
      const obj3 = setFilterTagIds;
      obj[7] = setFilterTagIds.getSortOrderAnalytics(channel.id);
      if (sessionId == null) {
        let tmp8Result = tmp8(7518);
        sessionId = tmp8Result.getForumChannelSessionId(channel.id);
      }
      obj[8] = sessionId;
      tmp8Result = tmp8(7519);
      obj[9] = tmp8Result.getLayoutAnalytics(channel.id);
      obj[10] = channel.defaultSortOrder;
      const obj4 = setFilterTagIds;
      obj[11] = setFilterTagIds.getTagSettingAnalytics(channel.id);
      obj[12] = channel.defaultForumLayout;
      obj[13] = channel.isModeratorReportChannel();
      tmp = obj;
      const tmp8Result1 = setFilterTagIds;
    }
  }
  return tmp;
}
const result = require("updateFromGuild").fileFinishedImporting("modules/forums/tracking/TrackingUtils.tsx");

export const getForumChannelSessionId = function getForumChannelSessionId(arg0) {
  return getForumChannelSessionId.getForumChannelSessionId(arg0);
};
export const convertSortOrderToReadableString = function convertSortOrderToReadableString(sortOrder) {
  if (set.ThreadSortOrder.CREATION_DATE === sortOrder) {
    return constants.CREATION_DATE;
  } else if (tmp(1400).ThreadSortOrder.LATEST_ACTIVITY === sortOrder) {
    return constants.LATEST_ACTIVITY;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected sort order " + sortOrder);
    throw error;
  }
  tmp = require;
};
export const getForumPostDraftNumAttachments = function getForumPostDraftNumAttachments(channelId) {
  return uploads.getUploads(channelId, DraftType.FirstThreadMessage).length;
};
export const getForumPostDraftAppliedTagIds = function getForumPostDraftAppliedTagIds(channelId) {
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const channel1 = obj.getChannel(channel.parent_id);
    if (channel1 != null) {
      const availableTags = channel1.availableTags;
    }
    if (null != channel1) {
      if (null != availableTags) {
        threadSettings = threadSettings.getThreadSettings(channelId);
        let appliedTags;
        if (threadSettings != null) {
          appliedTags = threadSettings.appliedTags;
        }
        if (appliedTags == null) {
          const _Set = Set;
          appliedTags = new Set();
        }
        const _Set2 = Set;
        const set = new Set(availableTags.map((id) => id.id));
        const _Array = Array;
        return Array.from(appliedTags).filter((arg0) => set.has(arg0));
      }
    }
    return [];
  }
  obj = store;
};
export const getNumActiveThreads = function getNumActiveThreads(guildId, channelId) {
  return Object.keys(threadsForParent.getThreadsForParent(guildId, channelId)).length;
};
export const getForumPostAttachmentMimetypes = function getForumPostAttachmentMimetypes(arg0) {
  const message = store2.getMessage(arg0);
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
  let obj = store;
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isForumPost()) {
      const channel1 = obj.getChannel(channel.parent_id);
      let tmp = null;
      if (null != channel1) {
        tmp = null;
        if (channel1.isForumLikeChannel()) {
          obj = {};
          obj = { channelId: null, sessionId: null };
          obj[0] = channel1.id;
          obj[1] = channelId.sessionId;
          const merged = Object.assign(collectForumAnalyticsMetadata(obj));
          obj.thread_approximate_member_count = memberCount.getMemberCount(channelId);
          obj.thread_approximate_message_count = count.getCount(channelId);
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
          obj.thread_approximate_creation_date = DISCORD_EPOCH.extractTimestamp(channelId);
          obj.forum_post_id = channel.id;
          const obj6 = DISCORD_EPOCH;
          obj.forum_post_first_message_id = DISCORD_EPOCH.castChannelIdAsMessageId(channel.id);
          const message = store2.getMessage(channel.id);
          let firstMessage = null;
          if (message.loaded) {
            firstMessage = message.firstMessage;
          }
          let num3 = 0;
          if (null != firstMessage) {
            const reactions = firstMessage.reactions;
            num3 = reactions.reduce((arg0, count) => arg0 + count.count, 0);
          }
          obj.forum_post_num_reactions = num3;
          const message1 = obj8.getMessage(channel.id);
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
                  items = appliedTags.filter((arg0) => set.has(arg0));
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
          let tmp8Result = tmp8(7520);
          const readStateSnapshotAnalytics = tmp8Result.getReadStateSnapshotAnalytics(channel.id);
          let isNew;
          if (readStateSnapshotAnalytics != null) {
            isNew = readStateSnapshotAnalytics.isNew;
          }
          obj.forum_post_is_new = isNew;
          tmp8Result = tmp8(7520);
          const readStateSnapshotAnalytics1 = tmp8Result.getReadStateSnapshotAnalytics(channel.id);
          let hasUnreads;
          if (readStateSnapshotAnalytics1 != null) {
            hasUnreads = readStateSnapshotAnalytics1.hasUnreads;
          }
          obj.forum_post_is_unread = hasUnreads;
          obj.forum_post_is_following = storeThread.hasJoined(channel.id);
          const message2 = obj8.getMessage(channel.id);
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
          const obj7 = DISCORD_EPOCH;
        }
      }
      return tmp;
    }
  }
  return null;
};