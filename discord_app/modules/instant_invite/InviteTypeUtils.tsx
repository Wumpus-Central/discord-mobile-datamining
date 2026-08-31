// === Module 7448: InviteTypes ===

// Module 7448 (InviteTypes)
import set from "set" /* 2 */;
import scheduledEventSort from "scheduledEventSort" /* 7239 */;
import getEstablishedDate from "getEstablishedDate" /* 7450 */;
import createChannelRecord from "createChannelRecord" /* 1391 */;
import InviteSendStates from "InviteSendStates" /* 7449 */;

const isEventUpcoming = scheduledEventSort.isEventUpcoming;
({ isGuildVocalChannelType: c3, isMultiUserDM: c4 } = createChannelRecord);
({ InviteTargetTypes: c5, InviteTypes: closure_6 } = InviteSendStates);
let obj = { EVENT: "event", APPLICATION: "application", PROFILE: "profile", DEFAULT: "default", VOICE_CHANNEL: "voice_channel" };
const result = set.fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export const InviteTypes = InviteSendStates.InviteTypes;
export const isGroupDMInvite = function isGroupDMInvite(invite) {
  let tmp = invite.type === constants2.GROUP_DM;
  if (!tmp) {
    let tmp3 = null != invite.channel;
    if (tmp3) {
      tmp3 = callback2(invite.channel.type);
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isGuildScheduledEventInviteEmbed = function isGuildScheduledEventInviteEmbed(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  let tmp = null != guild_scheduled_event;
  if (tmp) {
    tmp = isEventUpcoming(guild_scheduled_event);
  }
  return tmp;
};
export const isRoleSubscriptionInvite = function isRoleSubscriptionInvite(target_type) {
  return target_type.target_type === constants.ROLE_SUBSCRIPTIONS_PURCHASE;
};
export const isStreamInvite = function isStreamInvite(invite) {
  let tmp = invite.target_type === constants.STREAM;
  if (tmp) {
    tmp = null != invite.target_user;
  }
  return tmp;
};
export const isFriendInvite = function isFriendInvite(invite) {
  let tmp = invite.type === constants2.FRIEND;
  if (!tmp) {
    tmp = null == invite.guild && null != invite.inviter;
    const tmp3 = null == invite.guild && null != invite.inviter;
  }
  return tmp;
};
export const isEmbeddedApplicationInvite = function isEmbeddedApplicationInvite(invite) {
  return invite.target_type === constants.EMBEDDED_APPLICATION;
};
export const isVoiceChannelInvite = function isVoiceChannelInvite(addResult) {
  let tmp = null != addResult.channel;
  if (tmp) {
    tmp = callback(addResult.channel.type);
  }
  return tmp;
};
export const getInviteType = function getInviteType(body) {
  if (typeof body.type === "number") {
    let GROUP_DM = body.type;
  } else {
    let tmp4 = body.type === constants2.GROUP_DM;
    if (!tmp4) {
      let tmp2 = null != body.channel;
      if (tmp2) {
        tmp2 = callback2(body.channel.type);
      }
      tmp4 = tmp2;
    }
    if (tmp4) {
      GROUP_DM = tmp8.GROUP_DM;
    } else {
      let tmp5 = body.type === tmp8.FRIEND;
      if (!tmp5) {
        tmp5 = null == body.guild && null != body.inviter;
        const tmp7 = null == body.guild && null != body.inviter;
      }
      GROUP_DM = tmp5 ? tmp8.FRIEND : tmp8.GUILD;
    }
  }
  return GROUP_DM;
};
export const GuildInviteExtendedType = obj;
export const getGuildInviteExtendedType = function getGuildInviteExtendedType(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  let tmp = null != guild_scheduled_event;
  if (tmp) {
    tmp = isEventUpcoming(guild_scheduled_event);
  }
  if (tmp) {
    let PROFILE = obj.EVENT;
  } else if (invite.target_type === constants.EMBEDDED_APPLICATION) {
    PROFILE = obj.APPLICATION;
  } else {
    obj = getEstablishedDate;
    if (obj.guildInviteCanEmbedProfile(invite)) {
      PROFILE = obj.PROFILE;
    } else {
      let tmp6 = null != invite.channel;
      if (tmp6) {
        tmp6 = callback(invite.channel.type);
      }
      PROFILE = tmp6 ? tmp8.VOICE_CHANNEL : tmp8.DEFAULT;
    }
  }
  return PROFILE;
};