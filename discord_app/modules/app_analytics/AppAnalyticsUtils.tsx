// === Module 5076: AppAnalyticsUtils ===

// Module 5076 (AppAnalyticsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import DurationsDefault from "Durations" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5080 */;
import hasPendingMemberAction from "hasPendingMemberAction" /* 5082 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4513 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let metroImportAll;
let metroImportDefault;
function collectGuildAnalyticsMetadata(guildId) {
  let NONE;
  let _String;
  let features;
  let num;
  let num4;
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
      const obj = { guild_id: guild.id, guild_size_total: GuildMemberCountStore.getMemberCount(guildId), guild_num_channels: channels[metroImportDefault].length + channels[metroImportAll].length, guild_num_text_channels: channels[metroImportDefault].length, guild_num_voice_channels: channels[metroImportAll].length, guild_num_roles: numRoles, guild_member_num_roles: num, guild_member_perms: _String(NONE), guild_is_vip: features.has(constants.VIP_REGIONS), is_member: null != member, num_voice_channels_active: num4 };
      num = 0;
      if (null != member) {
        num = member.roles.length;
      }
      _String = String;
      NONE = PermissionStore.getGuildPermissions(guild);
      if (NONE == null) {
        NONE = PermissionUtilsAll.NONE;
      }
      features = guild.features;
      let num3 = 0;
      num4 = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num4 = num3;
        while (keys[tmp] !== undefined) {
          num3 = num3 + 1;
          continue;
        }
      }
      return obj;
    }
  }
}
function collectChannelAnalyticsMetadata(channel) {
  let NONE;
  let _String;
  let num;
  if (null == channel) {
    return null;
  } else {
    const guildId = channel.getGuildId();
    let flag3 = false;
    if (null != guildId) {
      let flag;
      if (THREAD_CHANNEL_TYPES.has(channel.type)) {
        if (null != channel.parent_id) {
          channel = ChannelStore.getChannel(channel.parent_id);
          let flag2 = false;
          if (null != guildId) {
            flag2 = false;
            if (null != channel) {
              let hasItem = null != tmp9;
              if (hasItem) {
                const obj2 = BigFlagUtilsAll;
                hasItem = obj2.has(tmp9.deny, constants4.VIEW_CHANNEL);
              }
              flag2 = hasItem;
            }
          }
          flag = flag2;
        }
        flag3 = flag;
      }
      flag = false;
      if (null != guildId) {
        flag = false;
        if (null != channel) {
          let hasItem1 = null != tmp2;
          if (hasItem1) {
            const obj = BigFlagUtilsAll;
            hasItem1 = obj.has(tmp2.deny, constants4.VIEW_CHANNEL);
          }
          flag = hasItem1;
        }
      }
    }
    ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
    const obj4 = { channel_id: null, channel_type: null, channel_size_total: num, channel_member_perms: _String(NONE), channel_hidden: flag3 };
    num = 0;
    if (channel.isPrivate()) {
      num = channel.recipients.length;
    }
    _String = String;
    if (null != guildId) {
      let NONE2 = PermissionStore.getChannelPermissions(channel);
      if (NONE2 == null) {
        NONE2 = PermissionUtilsAll.NONE;
      }
      NONE = NONE2;
    } else {
      NONE = PermissionUtilsAll.NONE;
    }
    return obj4;
  }
}
function trackWithMetadata(TEXT_AREA_CTA_CLICKED) {
  let obj = fileSizeLimitEventProperties;
  if (fileSizeLimitEventProperties === undefined) {
    obj = {};
  }
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  const obj2 = AnalyticsUtilsDefault;
  if (!obj2.isThrottled(TEXT_AREA_CTA_CLICKED)) {
    let guild_id;
    let channel_id;
    let tmp12;
    if ("guild_id" in obj) {
      guild_id = obj.guild_id;
    } else {
      guild_id = null;
      if (!("location" in obj) || obj.location !== constants2.GUILD_CREATE_INVITE_SUGGESTION) {
        guild_id = SelectedGuildStore.getGuildId();
      }
    }
    if ("channel_id" in obj) {
      channel_id = obj.channel_id;
    } else {
      channel_id = null;
      if (!("location" in obj) || obj.location !== constants2.GUILD_CREATE_INVITE_SUGGESTION) {
        channel_id = SelectedChannelStore.getChannelId(guild_id);
      }
    }
    const channel = ChannelStore.getChannel(channel_id);
    if (null == channel) {
      let tmp14 = guild_id;
      if (guild_id == null) {
        tmp14 = null;
      }
      tmp12 = tmp14;
    } else {
      tmp12 = null;
      if (!channel.isPrivate()) {
        let guildId = channel.getGuildId();
        if (guildId == null) {
          guildId = guild_id;
        }
        if (guildId == null) {
          guildId = null;
        }
        tmp12 = guildId;
      }
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(tmp12));
    if (null != guild_id) {
      if (null != channel_id) {
        let tmp23;
        if (isStaticChannelRoute(channel_id)) {
          tmp23 = { channel_static_route: channel_id, channel_hidden: false };
          const obj4 = { channel_static_route: channel_id, channel_hidden: false };
        }
        const merged2 = Object.assign(tmp23);
        const obj5 = { flush: flag };
        const tmpResult = AnalyticsUtilsDefault;
        tmpResult.track(TEXT_AREA_CTA_CLICKED, obj3, obj5);
      }
    }
    tmp23 = collectChannelAnalyticsMetadata(channel);
  }
}
function getRecipientFriendCounts(recipients) {
  let num = 0;
  const tmp = recipients[Symbol.iterator]();
  while (tmp !== undefined) {
    if (RelationshipStore.isFriend(tmp2)) {
      num = num + 1;
    }
    continue;
  }
  return { friendCount: num, nonFriendCount: recipients.length - num };
}
function getVoiceStateMetadata(guildId, channelId, videoEnabled) {
  let closure_0 = channelId;
  const obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: videoEnabled };
  const tmp = obj(12);
  const tmpResult = tmp(VoiceStateStore.getVoiceStates(guildId));
  const found = tmpResult.filter((channelId) => channelId.channelId === id);
  const found1 = found.filter((userId) => userId.userId !== id.getId());
  const item = found1.forEach((selfVideo) => {
    obj3.voice_state_count = obj3.voice_state_count + 1;
    const tmp2 = selfVideo.selfVideo || selfVideo.selfStream;
    if (tmp2) {
      obj3.video_stream_count = obj3.video_stream_count + 1;
    }
  });
  return obj;
}
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroImportDefault, GUILD_VOCAL_CHANNELS_KEY: metroImportAll } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ GuildFeatures: closure_25, AnalyticsLocations: closure_26, ChannelTypes: closure_27, Permissions: closure_28, ActivityTypes: closure_29 } = Constants);
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
  let mediaSessionId;
  if (null == id) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(id);
    if (null == channel) {
      return null;
    } else {
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const obj = { channel_id: null, channel_type: null, guild_id: channel.getGuildId(), media_session_id: mediaSessionId };
      const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
      mediaSessionId = RTCConnectionStore.getMediaSessionId();
      id = channel.id;
      const obj3 = { voice_state_count: 0, video_stream_count: 0, video_enabled: isVideoEnabledResult };
      const guildId = channel.getGuildId();
      const tmp9 = obj3(12);
      const tmp9Result = tmp9(VoiceStateStore.getVoiceStates(guildId));
      const found = tmp9Result.filter((channelId) => channelId.channelId === id);
      const found1 = found.filter((userId) => userId.userId !== id.getId());
      const item = found1.forEach((selfVideo) => {
        obj3.voice_state_count = obj3.voice_state_count + 1;
        const tmp2 = selfVideo.selfVideo || selfVideo.selfStream;
        if (tmp2) {
          obj3.video_stream_count = obj3.video_stream_count + 1;
        }
      });
      const merged = Object.assign(obj3);
      const obj4 = id(5079);
      const merged1 = Object.assign(obj4.getVoiceAnalyticsMetadataAdditional());
      return obj;
    }
  }
};
export { trackWithMetadata };
export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  let guildUnreadSetting;
  let obj8;
  let presetFromSettings;
  let presetFromSettings2;
  let unreadSetting;
  if (isStaticChannelRoute(selectedChannelId)) {
    return { channel_static_route: selectedChannelId };
  } else {
    const channel = ChannelStore.getChannel(selectedChannelId);
    if (null == channel) {
      return { channel_id: selectedChannelId };
    } else {
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null == guild) {
        let tmp9;
        let flag = false;
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.recipients[0]);
          flag = false;
          if (null != user) {
            flag = user.bot;
          }
        }
        if (channel.isDM()) {
          tmp9 = getRecipientFriendCounts(channel.recipients);
        } else {
          tmp9 = null;
        }
        let tmp11 = null;
        const obj3 = { channel_id: selectedChannelId, is_app_dm: flag };
        if (null != tmp9) {
          const obj5 = { friend_recipient_count: null, non_friend_recipient_count: null };
          ({ friendCount: obj4.friend_recipient_count, nonFriendCount: obj4.non_friend_recipient_count } = tmp9);
          tmp11 = obj5;
        }
        const merged = Object.assign(tmp11);
        return obj3;
      } else {
        let tmp3;
        const snapshot = ReadStateStore.getSnapshot(selectedChannelId, 10 * DurationsDefault.Millis.SECOND);
        ({ unread: obj7.channel_was_unread, mentionCount: obj7.channel_mention_count } = snapshot);
        const obj6 = { channel_id: selectedChannelId, channel_was_unread: null, channel_mention_count: null, channel_is_muted: UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id), channel_is_nsfw: channel.isNSFW(), channel_is_spoiler: channel.isSpoilerChannel(), channel_resolved_unread_setting: UserGuildSettingsStore.resolveUnreadSetting(channel), channel_preset: presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)), guild_id: channel.guild_id, guild_was_unread: null, guild_mention_count: null, guild_is_muted: UserGuildSettingsStore.isMuted(channel.guild_id), guild_resolved_unread_setting: UserGuildSettingsStore.resolveGuildUnreadSetting(guild), guild_preset: presetFromSettings2(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id)), parent_id: null, parent_channel_type: null, has_pending_member_action: obj8.hasPendingMemberAction(channel.guild_id, selectedChannelId), can_send_message: PermissionStore.can(constants4.SEND_MESSAGES, channel), is_app_dm: false };
        presetFromSettings = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        ({ guildUnread: obj7.guild_was_unread, guildMentionCount: obj7.guild_mention_count } = snapshot);
        presetFromSettings2 = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        guildUnreadSetting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        ({ parent_id: obj7.parent_id, parentChannelThreadType: obj7.parent_channel_type } = channel);
        obj8 = hasPendingMemberAction;
        if (channel.type === constants3.GUILD_APP) {
          tmp3 = null;
          if (null != channel.application_id) {
            tmp3 = { application_id: channel.application_id };
            const obj14 = { application_id: channel.application_id };
          }
        } else {
          tmp3 = null;
        }
        const merged1 = Object.assign(tmp3);
        return obj6;
      }
    }
  }
};
export { getRecipientFriendCounts };
export { getVoiceStateMetadata };
export const getCustomStatusMetadata = function getCustomStatusMetadata(arg0, arg1) {
  let closure_0 = arg1;
  const obj = { custom_status_count: 0 };
  let tmp = obj(12);
  const tmpResult = tmp(VoiceStateStore.getVoiceStates(arg0));
  const item = tmpResult.forEach((channelId) => {
    const tmp = channelId.channelId === closure_0 && null != PresenceStore.findActivity(channelId.userId, (type) => type.type === constants.CUSTOM_STATUS);
    if (tmp) {
      obj.custom_status_count = obj.custom_status_count + 1;
    }
  });
  return obj;
};