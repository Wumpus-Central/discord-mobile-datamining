// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
import InviteTypes2 from "InviteTypes" /* 4369 */;
import createResolvingGuildInvite from "createResolvingGuildInvite" /* 12760 */;
import closure_2 from "updateInvite" /* 4359 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { InviteTypes } from "InviteSendStates" /* 4371 */;

require = arg1;
({ InviteStates: c4, AbortCodes: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, closure_2) {
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
      return createResolvingGuildInvite.createResolvingGuildInvite(closure_2);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, closure_2);
              const obj15 = createResolvingGuildInvite;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = createResolvingGuildInvite.createDisabledGuildInvite(invite, closure_2);
              const obj14 = createResolvingGuildInvite;
            } else {
              erroredGuildInvite = createResolvingGuildInvite.createErroredGuildInvite(code, tmp28, closure_2);
              const obj13 = createResolvingGuildInvite;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypes2.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = tmp29(12762);
              return tmp29Result.createGroupDMInvite(invite, tmp28, closure_2);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(12763);
              return tmp29Result.createFriendInvite(invite, tmp28, id, closure_2);
            } else {
              const guildInviteExtendedType = tmp29(4369).getGuildInviteExtendedType(invite);
              if (tmp29(4369).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12764).createGuildScheduledEventInviteEmbed(invite, closure_2);
              } else if (tmp29(4369).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = closure_2;
                return tmp29(12766).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(4369).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12768).createGuildProfileInvite(invite, closure_2);
              } else if (tmp29(4369).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10508).createVoiceChannelListInviteEmbed(invite, closure_2);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(10508);
                  }
                  tmp29Result5 = tmp29(10507);
                }
                return tmp29(12760).createGuildInvite(invite, tmp28, closure_2);
              } else {
                return tmp29(12760).createGuildInvite(invite, tmp28, closure_2);
              }
              const tmp29Result1 = tmp29(4369);
            }
            const obj18 = InviteTypes2;
          }
        }
      }
      return createResolvingGuildInvite.createExpiredGuildInvite(closure_0, id === tmp4, closure_2);
    }
  }
};