// === Module 4740: AppAnalyticsUtils ===

// Module 4740 (AppAnalyticsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4744 */;
import hasPendingMemberAction from "hasPendingMemberAction" /* 4746 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function collectGuildAnalyticsMetadata(guildId) {
  if (null == guildId) {
    return null;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      return null;
    } else {
      const numRoles = GuildRoleStore.getNumRoles(guild.id);
      const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
      const channels = GuildChannelStore.getChannels(guildId);
      const voiceStates = VoiceStateStore.getVoiceStates(guildId);
      const obj = { guild_id: guild.id, guild_size_total: GuildMemberCountStore.getMemberCount(guildId), guild_num_channels: channels[React5].length + channels[React6].length, guild_num_text_channels: channels[React5].length, guild_num_voice_channels: channels[React6].length, guild_num_roles: numRoles, guild_member_num_roles: null, guild_member_perms: null, guild_is_vip: null, is_member: null, num_voice_channels_active: null };
      let num = 0;
      if (null != member) {
        num = member.roles.length;
      }
      obj.guild_member_num_roles = num;
      let NONE = PermissionStore.getGuildPermissions(guild);
      if (NONE == null) {
        NONE = PermissionUtilsAll.NONE;
      }
      obj.guild_member_perms = String(NONE);
      const features = guild.features;
      obj.guild_is_vip = features.has(constants.VIP_REGIONS);
      obj.is_member = null != member;
      let num3 = 0;
      let num4 = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num4 = num3;
        while (keys[tmp] !== undefined) {
          num3 = num3 + 1;
          continue;
        }
      }
      obj.num_voice_channels_active = num4;
      return obj;
    }
  }
}
function collectChannelAnalyticsMetadata(channel) {
  if (null == channel) {
    return null;
  } else {
    const guildId = channel.getGuildId();
    if (null == guildId) {
      let obj = { channel_id: null, channel_type: null, channel_size_total: null, channel_member_perms: null, channel_hidden: null };
      ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
      let num = 0;
      if (channel.isPrivate()) {
        num = channel.recipients.length;
      }
      obj.channel_size_total = num;
      if (null != guildId) {
        let NONE2 = PermissionStore.getChannelPermissions(channel);
        if (NONE2 == null) {
          NONE2 = PermissionUtilsAll.NONE;
        }
        let NONE = NONE2;
      } else {
        NONE = PermissionUtilsAll.NONE;
      }
      obj.channel_member_perms = String(NONE);
      obj.channel_hidden = false;
      return obj;
    } else {
      if (!THREAD_CHANNEL_TYPES.has(channel.type)) {
        let flag = false;
        if (null != guildId) {
          flag = false;
          if (null != channel) {
            let hasItem = null != tmp2;
            if (hasItem) {
              obj = BigFlagUtilsAll;
              hasItem = obj.has(tmp2.deny, constants3.VIEW_CHANNEL);
            }
            flag = hasItem;
          }
        }
      }
      channel = ChannelStore.getChannel(channel.parent_id);
      let flag2 = false;
      if (null != guildId) {
        flag2 = false;
        if (null != channel) {
          let hasItem1 = null != tmp9;
          if (hasItem1) {
            hasItem1 = BigFlagUtilsAll.has(tmp9.deny, constants3.VIEW_CHANNEL);
          }
          flag2 = hasItem1;
        }
      }
      flag = flag2;
    }
  }
}
function trackWithMetadata(IAR_MODAL_OPEN, fileSizeLimitEventProperties, hasItem) {
  let obj = fileSizeLimitEventProperties;
  if (fileSizeLimitEventProperties === undefined) {
    obj = {};
  }
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  let track = importDefault;
  let obj1 = AnalyticsUtilsDefault;
  if (!obj1.isThrottled(IAR_MODAL_OPEN)) {
    let tmp2 = !("location" in obj);
    if (!tmp2) {
      tmp2 = obj.location !== constants2.GUILD_CREATE_INVITE_SUGGESTION;
    }
    if ("guild_id" in obj) {
      let guild_id = obj.guild_id;
    } else {
      guild_id = null;
      if (tmp2) {
        guild_id = SelectedGuildStore.getGuildId();
      }
    }
    if ("channel_id" in obj) {
      let channel_id = obj.channel_id;
    } else {
      channel_id = null;
      if (tmp2) {
        channel_id = SelectedChannelStore.getChannelId(guild_id);
      }
    }
    const channel = ChannelStore.getChannel(channel_id);
    if (null == channel) {
      let tmp13 = guild_id;
      if (guild_id == null) {
        tmp13 = null;
      }
      let tmp11 = tmp13;
    } else {
      tmp11 = null;
      if (!channel.isPrivate()) {
        let guildId = channel.getGuildId();
        if (guildId == null) {
          guildId = guild_id;
        }
        if (guildId == null) {
          guildId = null;
        }
        tmp11 = guildId;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(tmp11));
    if (null != guild_id) {
      if (null != channel_id) {
        const merged2 = Object.assign(tmp22);
        track = AnalyticsUtilsDefault.track;
        obj = { flush: flag };
        track(IAR_MODAL_OPEN, obj, obj);
        const trackResult = AnalyticsUtilsDefault;
      }
      obj1 = { channel_static_route: channel_id, channel_hidden: false };
      tmp22 = obj1;
    }
    tmp22 = collectChannelAnalyticsMetadata(channel);
  }
}
function getRecipientFriendCounts(recipients) {
  let num = 0;
  while (tmp !== undefined) {
    if (RelationshipStore.isFriend(tmp2)) {
      num = num + 1;
    }
    continue;
  }
  return { friendCount: num, nonFriendCount: recipients.length - num };
}
function getVoiceStateMetadata(guildId, channelId, videoEnabled) {
  closure_0 = channelId;
  const obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: videoEnabled };
  const tmp = obj(12);
  const found = obj(12)(VoiceStateStore.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
  const found1 = found.filter((userId) => userId.userId !== id.getId());
  const item = found1.forEach((selfVideo) => {
    obj.voice_state_count = obj.voice_state_count + 1;
    if (tmp2) {
      tmp.video_stream_count = tmp.video_stream_count + 1;
    }
  });
  return obj;
}
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_7, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = GuildChannelStore);
({ GuildFeatures: closure_25, AnalyticsLocations: closure_26, Permissions: closure_27, ActivityTypes: closure_28 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const result = size.fileFinishedImporting("modules/app_analytics/AppAnalyticsUtils.tsx");

export default { trackWithMetadata, getVoiceStateMetadata };
export { collectGuildAnalyticsMetadata };
export function collectStaticChannelRouteAnalyticsMetadata(arg0, channel_static_route) {
  return { channel_static_route, channel_hidden: false };
}
export const collectChannelAnalyticsMetadataFromId = function collectChannelAnalyticsMetadataFromId(channelId) {
  if (null == channelId) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(channelId);
    let tmp3 = null;
    if (null != channel) {
      tmp3 = collectChannelAnalyticsMetadata(channel);
    }
    return tmp3;
  }
};
export { collectChannelAnalyticsMetadata };
export const collectVoiceAnalyticsMetadata = function collectVoiceAnalyticsMetadata(id) {
  if (null == id) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(id);
    if (null == channel) {
      return null;
    } else {
      let obj = { channel_id: null, channel_type: null, guild_id: null, media_session_id: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      obj.guild_id = channel.getGuildId();
      obj.media_session_id = mediaSessionId;
      id = channel.id;
      obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: MediaEngineStore.isVideoEnabled() };
      const guildId = channel.getGuildId();
      const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
      const tmp9 = obj(12);
      const found = obj(12)(VoiceStateStore.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
      const found1 = found.filter((userId) => userId.userId !== id.getId());
      const item = found1.forEach((selfVideo) => {
        obj.voice_state_count = obj.voice_state_count + 1;
        if (tmp2) {
          tmp.video_stream_count = tmp.video_stream_count + 1;
        }
      });
      const merged = Object.assign(obj);
      const tmp9Result = obj(12)(VoiceStateStore.getVoiceStates(guildId));
      const merged1 = Object.assign(id(4743).getVoiceAnalyticsMetadataAdditional());
      return obj;
    }
  }
};
export { trackWithMetadata };
export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  if (isStaticChannelRoute(selectedChannelId)) {
    let obj = { channel_static_route: selectedChannelId };
    return obj;
  } else {
    const channel = ChannelStore.getChannel(selectedChannelId);
    if (null == channel) {
      obj = { channel_id: selectedChannelId };
      return obj;
    } else {
      const guild = GuildStore.getGuild(channel.guild_id);
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
          let tmp5 = getRecipientFriendCounts(channel.recipients);
        } else {
          tmp5 = null;
        }
        const obj1 = { channel_id: selectedChannelId, is_app_dm: flag };
        let tmp7 = null;
        if (null != tmp5) {
          ({ friendCount: obj3.friend_recipient_count, nonFriendCount: obj3.non_friend_recipient_count } = tmp5);
          tmp7 = { friend_recipient_count: null, non_friend_recipient_count: null };
          const obj2 = { friend_recipient_count: null, non_friend_recipient_count: null };
        }
        const merged = Object.assign(tmp7);
        return obj1;
      } else {
        const snapshot = ReadStateStore.getSnapshot(selectedChannelId, 10 * DurationsDefault.Millis.SECOND);
        const obj3 = { channel_id: selectedChannelId, channel_was_unread: null, channel_mention_count: null, channel_is_muted: null, channel_is_nsfw: null, channel_is_spoiler: null, channel_resolved_unread_setting: null, channel_preset: null, guild_id: null, guild_was_unread: null, guild_mention_count: null, guild_is_muted: null, guild_resolved_unread_setting: null, guild_preset: null, parent_id: null, parent_channel_type: null, has_pending_member_action: null, can_send_message: null, is_app_dm: false };
        ({ unread: obj6.channel_was_unread, mentionCount: obj6.channel_mention_count } = snapshot);
        obj3.channel_is_muted = UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id);
        obj3.channel_is_nsfw = channel.isNSFW();
        obj3.channel_is_spoiler = channel.isSpoilerChannel();
        obj3.channel_resolved_unread_setting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        obj3.channel_preset = notificationSettingsPresetUtils.presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel));
        obj3.guild_id = channel.guild_id;
        ({ guildUnread: obj6.guild_was_unread, guildMentionCount: obj6.guild_mention_count } = snapshot);
        obj3.guild_is_muted = UserGuildSettingsStore.isMuted(channel.guild_id);
        obj3.guild_resolved_unread_setting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        const guildUnreadSetting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        obj3.guild_preset = notificationSettingsPresetUtils.presetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id));
        ({ parent_id: obj6.parent_id, parentChannelThreadType: obj6.parent_channel_type } = channel);
        obj3.has_pending_member_action = hasPendingMemberAction.hasPendingMemberAction(channel.guild_id, selectedChannelId);
        obj3.can_send_message = PermissionStore.can(constants3.SEND_MESSAGES, channel);
        return obj3;
      }
    }
  }
};
export { getRecipientFriendCounts };
export { getVoiceStateMetadata };
export const getCustomStatusMetadata = function getCustomStatusMetadata(arg0, arg1) {
  closure_0 = arg1;
  const obj = { custom_status_count: 0 };
  let tmp = obj(12);
  const item = obj(12)(VoiceStateStore.getVoiceStates(arg0)).forEach((channelId) => {
    let tmp = channelId.channelId === closure_0;
    if (tmp) {
      tmp = null != PresenceStore.findActivity(channelId.userId, (type) => type.type === constants.CUSTOM_STATUS);
    }
    if (tmp) {
      obj.custom_status_count = obj.custom_status_count + 1;
    }
  });
  return obj;
};