// === Module 7894: getChannelOpenedMetadata ===

// Module 7894 (getChannelOpenedMetadata)
import DurationsDefault from "Durations" /* 1102 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 7895 */;
import hasPendingMemberAction from "hasPendingMemberAction" /* 7896 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const Constants = fn(1085);
({ ChannelTypes: closure_9, Permissions: c10 } = Constants);
const isStaticChannelRoute = fn(2071).isStaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedMetadata.tsx");

export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  if (isStaticChannelRoute(selectedChannelId)) {
    const obj = { channel_static_route: selectedChannelId };
    return obj;
  } else {
    const channel = ChannelStore.getChannel(selectedChannelId);
    if (null == channel) {
      const obj2 = { channel_id: selectedChannelId };
      return obj2;
    } else {
      guild = GuildStore.getGuild(channel.guild_id);
      if (null == guild) {
        let flag = false;
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.recipients[0]);
          flag = false;
          if (null != user) {
            flag = user.bot;
          }
        }
        if (channel.isDM()) {
          let recipientFriendCounts = AppAnalyticsUtils.getRecipientFriendCounts(channel.recipients);
        } else {
          recipientFriendCounts = null;
        }
        const obj4 = { channel_id: selectedChannelId, is_app_dm: flag };
        let tmp12 = null;
        if (null != recipientFriendCounts) {
          ({ friendCount: obj5.friend_recipient_count, nonFriendCount: obj5.non_friend_recipient_count } = recipientFriendCounts);
          tmp12 = { friend_recipient_count: null, non_friend_recipient_count: null };
          const obj6 = { friend_recipient_count: null, non_friend_recipient_count: null };
        }
        const merged = Object.assign(tmp12);
        return obj4;
      } else {
        const snapshot = ReadStateStore.getSnapshot(selectedChannelId, 10 * DurationsDefault.Millis.SECOND);
        const obj7 = { channel_id: selectedChannelId, channel_was_unread: null, channel_mention_count: null, channel_is_muted: null, channel_is_nsfw: null, channel_is_spoiler: null, channel_resolved_unread_setting: null, channel_preset: null, guild_id: null, guild_was_unread: null, guild_mention_count: null, guild_is_muted: null, guild_resolved_unread_setting: null, guild_preset: null, parent_id: null, parent_channel_type: null, has_pending_member_action: null, can_send_message: null, is_app_dm: false };
        ({ unread: obj8.channel_was_unread, mentionCount: obj8.channel_mention_count } = snapshot);
        obj7.channel_is_muted = UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id);
        obj7.channel_is_nsfw = channel.isNSFW();
        obj7.channel_is_spoiler = channel.isSpoilerChannel();
        obj7.channel_resolved_unread_setting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        obj7.channel_preset = notificationSettingsPresetUtils.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel));
        obj7.guild_id = channel.guild_id;
        ({ guildUnread: obj8.guild_was_unread, guildMentionCount: obj8.guild_mention_count } = snapshot);
        obj7.guild_is_muted = UserGuildSettingsStore.isMuted(channel.guild_id);
        obj7.guild_resolved_unread_setting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        const guildUnreadSetting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        obj7.guild_preset = notificationSettingsPresetUtils.presetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id));
        ({ parent_id: obj8.parent_id, parentChannelThreadType: obj8.parent_channel_type } = channel);
        obj7.has_pending_member_action = hasPendingMemberAction.hasPendingMemberAction(channel.guild_id, selectedChannelId);
        obj7.can_send_message = PermissionStore.can(constants2.SEND_MESSAGES, channel);
        if (channel.type === constants.GUILD_APP) {
          let tmp3 = null;
          if (null != channel.application_id) {
            const obj17 = { application_id: channel.application_id };
            tmp3 = obj17;
          }
        } else {
          tmp3 = null;
        }
        const merged1 = Object.assign(tmp3);
        return obj7;
      }
    }
  }
};