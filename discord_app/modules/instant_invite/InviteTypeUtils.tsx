// discord_app/modules/instant_invite/InviteTypeUtils.tsx
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import GuildProfileUtils from "../guild_profile/GuildProfileUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
const isEventUpcoming = GuildScheduledEventStore.isEventUpcoming;
({ isGuildVocalChannelType: c3, isMultiUserDM: closure_4 } = ChannelRecord);
({ InviteTargetTypes: hasOwnProperty, InviteTypes: metroRequire } = Constants);
const GuildInviteExtendedType = {
  EVENT: "event",
  APPLICATION: "application",
  PROFILE: "profile",
  DEFAULT: "default",
  VOICE_CHANNEL: "voice_channel",
};
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export { InviteTypes };
export const isGroupDMInvite = function isGroupDMInvite(invite) {
  let tmp = invite.type === metroRequire.GROUP_DM;
  if (!tmp) {
    tmp = null != invite.channel && React3(invite.channel.type);
    const tmp3 = null != invite.channel && React3(invite.channel.type);
  }
  return tmp;
};
export const isGuildScheduledEventInviteEmbed = function isGuildScheduledEventInviteEmbed(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  const tmp = null != guild_scheduled_event && isEventUpcoming(guild_scheduled_event);
  return tmp;
};
export const isRoleSubscriptionInvite = function isRoleSubscriptionInvite(target_type) {
  return target_type.target_type === hasOwnProperty.ROLE_SUBSCRIPTIONS_PURCHASE;
};
export const isStreamInvite = function isStreamInvite(invite) {
  return invite.target_type === hasOwnProperty.STREAM && null != invite.target_user;
};
export const isFriendInvite = function isFriendInvite(invite) {
  let tmp = invite.type === metroRequire.FRIEND;
  if (!tmp) {
    tmp = null == invite.guild && null != invite.inviter;
  }
  return tmp;
};
export const isEmbeddedApplicationInvite = function isEmbeddedApplicationInvite(invite) {
  return invite.target_type === hasOwnProperty.EMBEDDED_APPLICATION;
};
export const isVoiceChannelInvite = function isVoiceChannelInvite(channel) {
  const tmp = null != channel.channel && _false(channel.channel.type);
  return tmp;
};
export const getInviteType = function getInviteType(body) {
  let GROUP_DM;
  if (typeof body.type === "number") {
    GROUP_DM = body.type;
  } else {
    let tmp4 = body.type === metroRequire.GROUP_DM;
    if (!tmp4) {
      tmp4 = null != body.channel && React3(body.channel.type);
      const tmp2 = null != body.channel && React3(body.channel.type);
    }
    if (tmp4) {
      GROUP_DM = metroRequire.GROUP_DM;
    } else {
      let tmp5 = body.type === metroRequire.FRIEND;
      if (!tmp5) {
        tmp5 = null == body.guild && null != body.inviter;
      }
      GROUP_DM = tmp5 ? metroRequire.FRIEND : metroRequire.GUILD;
    }
  }
  return GROUP_DM;
};
export { GuildInviteExtendedType };
export const getGuildInviteExtendedType = function getGuildInviteExtendedType(invite) {
  let PROFILE;
  let obj;
  const guild_scheduled_event = invite.guild_scheduled_event;
  const tmp = null != guild_scheduled_event && isEventUpcoming(guild_scheduled_event);
  if (tmp) {
    PROFILE = obj.EVENT;
  } else if (invite.target_type === hasOwnProperty.EMBEDDED_APPLICATION) {
    PROFILE = obj.APPLICATION;
  } else {
    obj = GuildProfileUtils;
    if (obj.guildInviteCanEmbedProfile(invite)) {
      PROFILE = obj.PROFILE;
    } else {
      PROFILE = null != invite.channel && _false(invite.channel.type) ? tmp8.VOICE_CHANNEL : tmp8.DEFAULT;
      const tmp6 = null != invite.channel && _false(invite.channel.type);
    }
  }
  return PROFILE;
};
