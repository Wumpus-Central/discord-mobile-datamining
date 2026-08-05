// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
import updateInvite from "updateInvite";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";

let c4;
let c5;
const require = arg1;
({ InviteStates: c4, AbortCodes: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, updateInvite) {
  let obj = invite;
  invite = invite.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      let id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return require(12504) /* createResolvingGuildInvite */.createResolvingGuildInvite(updateInvite);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = require(12504) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj15 = require(12504) /* createResolvingGuildInvite */;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = require(12504) /* createResolvingGuildInvite */.createDisabledGuildInvite(invite, updateInvite);
              const obj14 = require(12504) /* createResolvingGuildInvite */;
            } else {
              erroredGuildInvite = require(12504) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj13 = require(12504) /* createResolvingGuildInvite */;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = require(7115) /* InviteTypes */.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = tmp29(12506);
              return tmp29Result.createGroupDMInvite(invite, tmp28, updateInvite);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(12507);
              return tmp29Result.createFriendInvite(invite, tmp28, id, updateInvite);
            } else {
              const guildInviteExtendedType = tmp29(7115).getGuildInviteExtendedType(invite);
              if (tmp29(7115).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12508).createGuildScheduledEventInviteEmbed(invite, updateInvite);
              } else if (tmp29(7115).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = updateInvite;
                return tmp29(12510).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(7115).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12512).createGuildProfileInvite(invite, updateInvite);
              } else if (tmp29(7115).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10905).createVoiceChannelListInviteEmbed(invite, updateInvite);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(10905);
                  }
                  tmp29Result5 = tmp29(10904);
                }
                return tmp29(12504).createGuildInvite(invite, tmp28, updateInvite);
              } else {
                return tmp29(12504).createGuildInvite(invite, tmp28, updateInvite);
              }
              const tmp29Result1 = tmp29(7115);
            }
            const obj18 = require(7115) /* InviteTypes */;
          }
        }
      }
      return require(12504) /* createResolvingGuildInvite */.createExpiredGuildInvite(closure_0, id === tmp4, updateInvite);
    }
  }
};