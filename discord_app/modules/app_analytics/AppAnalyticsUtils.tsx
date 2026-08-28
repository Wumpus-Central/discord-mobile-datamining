// discord_app/modules/app_analytics/AppAnalyticsUtils.tsx
import set from "../../../_runtime/00002_set.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import setDefault from "../../utils/Durations.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import Presets from "../notifications/settings/utils/notificationSettingsPresetUtils.tsx";
import hasPendingMemberAction from "../guild_onboarding_home/hasPendingMemberAction.tsx";
import closure_5 from "../../stores/AuthenticationStore.tsx";
import closure_6 from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import closure_9 from "../../stores/GuildChannelStore.tsx";
import closure_10 from "../../stores/GuildMemberCountStore.tsx";
import closure_11 from "../../stores/GuildMemberStore.tsx";
import closure_12 from "../../stores/GuildRoleStore.tsx";
import closure_13 from "../../stores/GuildStore.tsx";
import closure_14 from "../../stores/MediaEngineStore.tsx";
import closure_15 from "../../stores/PermissionStore.tsx";
import closure_16 from "../../stores/PresenceStore.tsx";
import closure_17 from "../../stores/RTCConnectionStore.tsx";
import closure_18 from "../../stores/ReadStateStore.tsx";
import closure_19 from "../../stores/RelationshipStore.tsx";
import closure_20 from "../../stores/SelectedChannelStore.tsx";
import closure_21 from "../../stores/SelectedGuildStore.tsx";
import closure_22 from "../../stores/UserGuildSettingsStore.tsx";
import closure_23 from "../../stores/UserStore.tsx";
import closure_24 from "../../stores/VoiceStateStore.tsx";
import ME from "../../Constants.tsx";

function collectGuildAnalyticsMetadata(guildId) {
  if (null == guildId) {
    return null;
  } else {
    const guild = store2.getGuild(guildId);
    if (null == guild) {
      return null;
    } else {
      numRoles = numRoles.getNumRoles(guild.id);
      member = member.getMember(guildId, id.getId());
      channels = channels.getChannels(guildId);
      const voiceStates = store4.getVoiceStates(guildId);
      const obj = { guild_id: null, guild_size_total: null, guild_num_channels: null, guild_num_text_channels: null, guild_num_voice_channels: null, guild_num_roles: null, guild_member_num_roles: null, guild_member_perms: null, guild_is_vip: null, is_member: null, num_voice_channels_active: null };
      obj[0] = guild.id;
      obj[1] = memberCount.getMemberCount(guildId);
      obj[2] = channels[closure_7].length + channels[closure_8].length;
      obj[3] = channels[closure_7].length;
      obj[4] = channels[closure_8].length;
      obj[5] = numRoles;
      let num = 0;
      if (null != member) {
        num = member.roles.length;
      }
      obj[6] = num;
      let NONE = store3.getGuildPermissions(guild);
      if (NONE == null) {
        NONE = applyOverwritesAll.NONE;
      }
      obj[7] = String(NONE);
      const features = guild.features;
      obj[8] = features.has(constants.VIP_REGIONS);
      obj[9] = null != member;
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
      obj[10] = num4;
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
      ({ id: obj3[0], type: obj3[1] } = channel);
      let num = 0;
      if (channel.isPrivate()) {
        num = channel.recipients.length;
      }
      obj[2] = num;
      if (null != guildId) {
        let NONE2 = store3.getChannelPermissions(channel);
        if (NONE2 == null) {
          NONE2 = applyOverwritesAll.NONE;
        }
        let NONE = NONE2;
      } else {
        NONE = applyOverwritesAll.NONE;
      }
      obj[3] = String(NONE);
      obj[4] = false;
      return obj;
    } else {
      if (!THREAD_CHANNEL_TYPES.has(channel.type)) {
        let flag = false;
        if (null != guildId) {
          flag = false;
          if (null != channel) {
            let hasItem = null != tmp2;
            if (hasItem) {
              obj = fromStringAll;
              hasItem = obj.has(tmp2.deny, constants3.VIEW_CHANNEL);
            }
            flag = hasItem;
          }
        }
      }
      channel = store.getChannel(channel.parent_id);
      let flag2 = false;
      if (null != guildId) {
        flag2 = false;
        if (null != channel) {
          let hasItem1 = null != tmp9;
          if (hasItem1) {
            hasItem1 = fromStringAll.has(tmp9.deny, constants3.VIEW_CHANNEL);
            const obj2 = fromStringAll;
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
  obj1 = expandEventPropertiesDefault;
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
        guild_id = guildId.getGuildId();
      }
    }
    if ("channel_id" in obj) {
      let channel_id = obj.channel_id;
    } else {
      channel_id = null;
      if (tmp2) {
        channel_id = channelId.getChannelId(guild_id);
      }
    }
    const channel = store.getChannel(channel_id);
    if (null == channel) {
      let tmp13 = guild_id;
      if (guild_id == null) {
        tmp13 = null;
      }
      let tmp11 = tmp13;
    } else {
      tmp11 = null;
      if (!channel.isPrivate()) {
        guildId = channel.getGuildId();
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
        track = expandEventPropertiesDefault.track;
        obj = { flush: null };
        obj[0] = flag;
        track(IAR_MODAL_OPEN, obj, obj);
        const trackResult = expandEventPropertiesDefault;
      }
      obj1 = { channel_static_route: null, channel_hidden: false };
      obj1[0] = channel_id;
      tmp22 = obj1;
    }
    tmp22 = collectChannelAnalyticsMetadata(channel);
  }
}
function getRecipientFriendCounts(recipients) {
  let num = 0;
  while (tmp !== undefined) {
    let tmp3 = friend;
    if (friend.isFriend(tmp2)) {
      let tmp4 = num;
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
  const found = obj(12)(store4.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
  const found1 = found.filter((userId) => userId.userId !== id.getId());
  const item = found1.forEach((selfVideo) => {
    obj.voice_state_count = obj.voice_state_count + 1;
    if (tmp2) {
      tmp.video_stream_count = tmp.video_stream_count + 1;
    }
  });
  return obj;
}
const THREAD_CHANNEL_TYPES = createChannelRecord.THREAD_CHANNEL_TYPES;
({ GUILD_SELECTABLE_CHANNELS_KEY: error, GUILD_VOCAL_CHANNELS_KEY: closure_8 } = comparator);
({ GuildFeatures: closure_25, AnalyticsLocations: closure_26, Permissions: closure_27, ActivityTypes: closure_28 } = ME);
const isStaticChannelRoute = set2.isStaticChannelRoute;
const result = set.fileFinishedImporting("modules/app_analytics/AppAnalyticsUtils.tsx");

export default { trackWithMetadata, getVoiceStateMetadata };
export { collectGuildAnalyticsMetadata };
export function collectStaticChannelRouteAnalyticsMetadata(arg0, channel_static_route) {
  return { channel_static_route, channel_hidden: false };
}
export const collectChannelAnalyticsMetadataFromId = function collectChannelAnalyticsMetadataFromId(channelId) {
  if (null == channelId) {
    return null;
  } else {
    const channel = store.getChannel(channelId);
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
    const channel = store.getChannel(id);
    if (null == channel) {
      return null;
    } else {
      let obj = { channel_id: null, channel_type: null, guild_id: null, media_session_id: null };
      ({ id: obj2[0], type: obj2[1] } = channel);
      mediaSessionId = mediaSessionId.getMediaSessionId();
      obj[2] = channel.getGuildId();
      obj[3] = mediaSessionId;
      id = channel.id;
      obj = { voice_state_count: 0, video_stream_count: 0, video_enabled: null };
      obj[2] = videoEnabled.isVideoEnabled();
      const guildId = channel.getGuildId();
      const isVideoEnabledResult = videoEnabled.isVideoEnabled();
      const tmp9 = obj(12);
      const found = obj(12)(store4.getVoiceStates(guildId)).filter((channelId) => channelId.channelId === id);
      const found1 = found.filter((userId) => userId.userId !== id.getId());
      const item = found1.forEach((selfVideo) => {
        obj.voice_state_count = obj.voice_state_count + 1;
        if (tmp2) {
          tmp.video_stream_count = tmp.video_stream_count + 1;
        }
      });
      const merged = Object.assign(obj);
      const tmp9Result = obj(12)(store4.getVoiceStates(guildId));
      const merged1 = Object.assign(id(4669).getVoiceAnalyticsMetadataAdditional());
      return obj;
    }
  }
};
export { trackWithMetadata };
export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  if (isStaticChannelRoute(selectedChannelId)) {
    let obj = { channel_static_route: null };
    obj[0] = selectedChannelId;
    return obj;
  } else {
    const channel = store.getChannel(selectedChannelId);
    if (null == channel) {
      obj = { channel_id: null };
      obj[0] = selectedChannelId;
      return obj;
    } else {
      const guild = store2.getGuild(channel.guild_id);
      if (null == guild) {
        let flag = false;
        if (channel.isDM()) {
          user = user.getUser(channel.recipients[0]);
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
        obj1 = { channel_id: null, is_app_dm: null };
        obj1[0] = selectedChannelId;
        obj1[1] = flag;
        let tmp7 = null;
        if (null != tmp5) {
          ({ friendCount: obj3[0], nonFriendCount: obj3[1] } = tmp5);
          tmp7 = { friend_recipient_count: null, non_friend_recipient_count: null };
          const obj2 = { friend_recipient_count: null, non_friend_recipient_count: null };
        }
        const merged = Object.assign(tmp7);
        return obj1;
      } else {
        snapshot = snapshot.getSnapshot(selectedChannelId, 10 * setDefault.Millis.SECOND);
        const obj3 = { channel_id: null, channel_was_unread: null, channel_mention_count: null, channel_is_muted: null, channel_is_nsfw: null, channel_is_spoiler: null, channel_resolved_unread_setting: null, channel_preset: null, guild_id: null, guild_was_unread: null, guild_mention_count: null, guild_is_muted: null, guild_resolved_unread_setting: null, guild_preset: null, parent_id: null, parent_channel_type: null, has_pending_member_action: null, can_send_message: null, is_app_dm: false };
        obj3[0] = selectedChannelId;
        ({ unread: obj6[1], mentionCount: obj6[2] } = snapshot);
        obj3[3] = closure_22.isChannelMuted(channel.guild_id, channel.id);
        obj3[4] = channel.isNSFW();
        obj3[5] = channel.isSpoilerChannel();
        obj3[6] = closure_22.resolveUnreadSetting(channel);
        const unreadSetting = closure_22.resolveUnreadSetting(channel);
        obj3[7] = Presets.presetFromSettings(unreadSetting, closure_22.resolvedMessageNotifications(channel));
        obj3[8] = channel.guild_id;
        ({ guildUnread: obj6[9], guildMentionCount: obj6[10] } = snapshot);
        obj3[11] = closure_22.isMuted(channel.guild_id);
        obj3[12] = closure_22.resolveGuildUnreadSetting(guild);
        const obj7 = Presets;
        const guildUnreadSetting = closure_22.resolveGuildUnreadSetting(guild);
        obj3[13] = Presets.presetFromSettings(guildUnreadSetting, closure_22.getMessageNotifications(channel.guild_id));
        ({ parent_id: obj6[14], parentChannelThreadType: obj6[15] } = channel);
        const obj8 = Presets;
        obj3[16] = hasPendingMemberAction.hasPendingMemberAction(channel.guild_id, selectedChannelId);
        obj3[17] = store3.can(constants3.SEND_MESSAGES, channel);
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
  const item = obj(12)(store4.getVoiceStates(arg0)).forEach((channelId) => {
    let tmp = channelId.channelId === closure_0;
    if (tmp) {
      tmp = null != closure_1_16.findActivity(channelId.userId, (type) => type.type === constants.CUSTOM_STATUS);
    }
    if (tmp) {
      obj.custom_status_count = obj.custom_status_count + 1;
    }
  });
  return obj;
};