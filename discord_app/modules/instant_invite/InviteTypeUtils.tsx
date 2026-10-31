// === Module 7878: InviteTypeUtils ===

// Module 7878 (InviteTypeUtils)
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import Constants from "Constants" /* 7879 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7880 */;
import GuildProfileUtils from "GuildProfileUtils" /* 7881 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import size from "module_2" /* 2 */;

const isEventUpcoming = GuildScheduledEventStore.isEventUpcoming;
({ isGuildVocalChannelType: c3, isMultiUserDM: closure_4 } = ChannelRecord);
const InviteTypes = Constants.InviteTypes;
const GuildInviteExtendedType = { EVENT: "event", APPLICATION: "application", PROFILE: "profile", DEFAULT: "default", VOICE_CHANNEL: "voice_channel" };
const result = size.fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export const InviteTypes = Constants.InviteTypes;
export function isGroupDMInvite(invite) {
  let tmp = invite.type === InviteTypes.GROUP_DM;
  if (!tmp) {
    let tmp3 = null != invite.channel;
    if (tmp3) {
      tmp3 = React4(invite.channel.type);
    }
    tmp = tmp3;
  }
  return tmp;
}
export function isGuildScheduledEventInviteEmbed(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  let tmp = null != guild_scheduled_event;
  if (tmp) {
    tmp = isEventUpcoming(guild_scheduled_event);
  }
  return tmp;
}
export function isRoleSubscriptionInvite(target_type) {
  return target_type.target_type === InviteTargetTypes.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE;
}
export function isStreamInvite(invite) {
  let tmp = invite.target_type === InviteTargetTypes.InviteTargetTypes.STREAM;
  if (tmp) {
    tmp = null != invite.target_user;
  }
  return tmp;
}
export function isFriendInvite(invite) {
  let tmp = invite.type === InviteTypes.FRIEND;
  if (!tmp) {
    tmp = null == invite.guild && null != invite.inviter;
    const tmp3 = null == invite.guild && null != invite.inviter;
  }
  return tmp;
}
export function isEmbeddedApplicationInvite(invite) {
  return invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION;
}
export function isVoiceChannelInvite(channel) {
  let tmp = null != channel.channel;
  if (tmp) {
    tmp = React3(channel.channel.type);
  }
  return tmp;
}
export function getInviteType(body) {
  if (typeof body.type === "number") {
    let GROUP_DM = body.type;
  } else {
    let tmp4 = body.type === InviteTypes.GROUP_DM;
    if (!tmp4) {
      let tmp2 = null != body.channel;
      if (tmp2) {
        tmp2 = React4(body.channel.type);
      }
      tmp4 = tmp2;
    }
    if (tmp4) {
      GROUP_DM = InviteTypes.GROUP_DM;
    } else {
      let tmp5 = body.type === InviteTypes.FRIEND;
      if (!tmp5) {
        tmp5 = null == body.guild && null != body.inviter;
        const tmp7 = null == body.guild && null != body.inviter;
      }
      GROUP_DM = tmp5 ? InviteTypes.FRIEND : InviteTypes.GUILD;
    }
  }
  return GROUP_DM;
}
export { GuildInviteExtendedType };
export function getGuildInviteExtendedType(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  let tmp = null != guild_scheduled_event;
  if (tmp) {
    tmp = isEventUpcoming(guild_scheduled_event);
  }
  if (tmp) {
    let PROFILE = obj.EVENT;
  } else if (invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
    PROFILE = obj.APPLICATION;
  } else {
    if (tmp3Result.guildInviteCanEmbedProfile(invite)) {
      PROFILE = obj.PROFILE;
    } else {
      let tmp5 = null != invite.channel;
      if (tmp5) {
        tmp5 = React3(invite.channel.type);
      }
      PROFILE = tmp5 ? obj.VOICE_CHANNEL : obj.DEFAULT;
    }
    tmp3Result = GuildProfileUtils;
  }
  return PROFILE;
}