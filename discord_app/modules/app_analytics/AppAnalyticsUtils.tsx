// === Module 5106: AppAnalyticsUtils ===

// Module 5106 (AppAnalyticsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import PermissionUtilsAll from "PermissionUtils" /* 4714 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4707 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4981 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const AnalyticsUtilsDefault = track(1265);
function collectGuildAnalyticsMetadata(guildId) {
  if (null == guildId) {
    return null;
  } else {
    guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      return null;
    } else {
      const numRoles = GuildRoleStore.getNumRoles(guild.id);
      const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
      const channels = GuildChannelStore.getChannels(guildId);
      const voiceStates = VoiceStateStore.getVoiceStates(guildId);
      const obj = { guild_id: guild.id, guild_size_total: GuildMemberCountStore.getMemberCount(guildId), guild_num_channels: channels[React5].length + channels[closure_1_8].length, guild_num_text_channels: channels[React5].length, guild_num_voice_channels: channels[closure_1_8].length, guild_num_roles: numRoles, guild_member_num_roles: null, guild_member_perms: null, guild_is_vip: null, is_member: null, num_voice_channels_active: null };
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
      const obj4 = { channel_id: null, channel_type: null, channel_size_total: null, channel_member_perms: null, channel_hidden: null };
      ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
      let num = 0;
      if (channel.isPrivate()) {
        num = channel.recipients.length;
      }
      obj4.channel_size_total = num;
      if (null != guildId) {
        let NONE2 = PermissionStore.getChannelPermissions(channel);
        if (NONE2 == null) {
          NONE2 = PermissionUtilsAll.NONE;
        }
        let NONE = NONE2;
      } else {
        NONE = PermissionUtilsAll.NONE;
      }
      obj4.channel_member_perms = String(NONE);
      obj4.channel_hidden = false;
      return obj4;
    } else {
      if (!THREAD_CHANNEL_TYPES.has(channel.type)) {
        let flag = false;
        if (null != guildId) {
          flag = false;
          if (null != channel) {
            let hasItem = null != tmp2;
            if (hasItem) {
              hasItem = BigFlagUtilsAll.has(tmp2.deny, constants3.VIEW_CHANNEL);
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
function trackWithMetadata(TEXT_AREA_CTA_CLICKED) {
  let obj = fileSizeLimitEventProperties;
  if (fileSizeLimitEventProperties === undefined) {
    obj = {};
  }
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  let track = importDefault;
  if (!obj2.isThrottled(TEXT_AREA_CTA_CLICKED)) {
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
    const obj3 = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(collectGuildAnalyticsMetadata(tmp11));
    if (null != guild_id) {
      if (null != channel_id) {
        const merged2 = Object.assign(tmp22);
        track = AnalyticsUtilsDefault.track;
        const obj4 = { flush: flag };
        track(TEXT_AREA_CTA_CLICKED, obj3, obj4);
        const trackResult = AnalyticsUtilsDefault;
      }
      const obj5 = { channel_static_route: channel_id, channel_hidden: false };
      tmp22 = obj5;
    }
    tmp22 = collectChannelAnalyticsMetadata(channel);
  }
  obj2 = AnalyticsUtilsDefault;
}
function getVoiceStateMetadata(guildId, channelId, videoEnabled) {
  closure_0 = channelId;
  const obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: videoEnabled };
  const tmp = obj(12);
  const found = obj(12)(VoiceStateStore.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
  const found1 = found.filter((userId) => userId.userId !== id.getId());
  const item = found1.forEach((selfVideo) => {
    obj3.voice_state_count = obj3.voice_state_count + 1;
    if (tmp2) {
      obj3.video_stream_count = obj3.video_stream_count + 1;
    }
    tmp2 = selfVideo.selfVideo || selfVideo.selfStream;
  });
  return obj;
}
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_7, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
({ GuildFeatures: closure_22, AnalyticsLocations: closure_23, Permissions: closure_24, ActivityTypes: closure_25 } = Constants);
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
      const obj = { channel_id: null, channel_type: null, guild_id: null, media_session_id: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const mediaSessionId = RTCConnectionStore.getMediaSessionId();
      obj.guild_id = channel.getGuildId();
      obj.media_session_id = mediaSessionId;
      id = channel.id;
      const obj3 = { voice_state_count: 0, video_stream_count: 0, video_enabled: MediaEngineStore.isVideoEnabled() };
      const guildId = channel.getGuildId();
      const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
      const tmp9 = obj3(12);
      const found = obj3(12)(VoiceStateStore.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
      const found1 = found.filter((userId) => userId.userId !== id.getId());
      const item = found1.forEach((selfVideo) => {
        obj3.voice_state_count = obj3.voice_state_count + 1;
        if (tmp2) {
          obj3.video_stream_count = obj3.video_stream_count + 1;
        }
        tmp2 = selfVideo.selfVideo || selfVideo.selfStream;
      });
      const merged = Object.assign(obj3);
      const tmp9Result = obj3(12)(VoiceStateStore.getVoiceStates(guildId));
      const merged1 = Object.assign(id(13983).getVoiceAnalyticsMetadataAdditional());
      return obj;
    }
  }
};
export { trackWithMetadata };
export const getRecipientFriendCounts = function getRecipientFriendCounts(recipients) {
  let num = 0;
  while (tmp !== undefined) {
    if (RelationshipStore.isFriend(tmp2)) {
      num = num + 1;
    }
    continue;
  }
  return { friendCount: num, nonFriendCount: recipients.length - num };
};
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